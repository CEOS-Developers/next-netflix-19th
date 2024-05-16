# 6주차 미션: Next-Netflix

# 구현기능

1. detail 페이지 구현
2. search 페이지 구현
   - 무한스크롤 구현
   - 검색기능 구현

# 느낀점 및 시간투자 부분

### Recoil

1. 기본적인 `page`컴포넌트는 서버 컴포넌트로 만들고, 상호작용이 필요한 `SearchInput`,`MovieSection`컴포넌트만 클라이언트 컴포넌트로 구현하고 싶음.
2. 각각의 컴포넌트안에서 해결하여 최대한 드릴링 없이 컴포넌트를 만들고 싶음
   두 가지 이슈를 해결하기 위해 `recoil`을 사용했다. `recoil`는 CSR에서 사용할 수 있어서 클라이언트 컴포넌트를 선언해줘야 했다. `app/layout.tsx`에서 `Recoil`을 도입하고 싶었는데 리액트처럼 그냥 컴포넌트 전체를 감싸버리면 오류가 발생했다.

```ts
// app/layout.tsx
// error
'use client';
...
export const metadata: Metadata = {
  title: 'Graphy',
  description: 'Project Share platform',
};
...
```

`Metadata`데이터가 정의되어있는 최상위컴포넌트는 서버 컴포넌트로 만들 수 없었다.

```ts
//RecoilRootProvider.tsx
'use client';

import { RecoilRoot } from 'recoil';
export default function RecoilRootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

//app/layout.tsx
...
{
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon/netflix.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <RecoilRootProvider>{children}</RecoilRootProvider>
      </body>
    </html>
  );
}
```

이를 해결하기 위해 `RecoilRootProvider`컴포넌트를 만들어 그 안에서 `recoil`을 선언하고 묶어주었다.

### 성능 최적화

```ts
// app/search/page.tsx
import MovieSection from '@components/search/MovieSection';
import SearchInput from '@components/search/SearchInput';

export default async function SearchPage() {
  return (
    <section className="w-full h-full flex flex-col gap-5">
      <SearchInput />
      <h1 className="text-[26px] leading-[20px] tracking-[-0.07px] p-[10px] font-bold">
        Top Searches
      </h1>
      <MovieSection />
    </section>
  );
}
```

`Search`페이지에서 유저와의 상호작용이 필요한 것은 `input`박스와 `input`에 들어오는 인풋값에 따른 검색창이였다(무한스크롤을 위해서도). 성능 최적화를 위해 나머지부분은 서버단에서 처리하고 싶어서 `page`컴포넌트자체는 서버컴포넌트로 구현하고 `SearchInput`,`MovieSection`은 클라이언트 컴포넌트로 만들어줘 유저와의 상호작용이 가능하게 만들었다.

### 무한스크롤 구현

다른 라이브러리를 사용하지 않고 무한스크롤을 구현해보고 싶었다. Web API인 `IntersectionObserver`를 사용해 무한스크롤을 구현했다.

```ts
...
export default function MovieSection() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [number, setNumber] = useState(2);
  ...

  const loadMore = useCallback(async () => { // 데이터를 받아오는 함수
    setIsLoading(true);
    try { // 데이터 받아와서 추가하기
      const res = await getMovieTopRatedByPageNumber(number);
      const newMovies = res.map((movie: any) => ({
        poster_path: movie.poster_path,
        title: movie.title,
        id: movie.id,
      }));
      setShowingMovies((prev) => [...prev, ...newMovies]);
      setNumber((prev) => prev + 1);
    } catch (error) {
      console.error('Failed to load more movies', error);
    } finally {
      setIsLoading(false);
    }
  }, [number, setShowingMovies]);

  useEffect(() => {
    const observer = new IntersectionObserver( // API호출
      (entries: IntersectionObserverEntry[]) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting && !isLoading) { // ref된 div태그가 화면에 렌더링되면 함수 실행
          loadMore();
        }
      }
    );
    ...
  }, [isLoading, loadMore]);

  return (
    <div className="flex flex-col w-full overflow-scroll gap-1 mb-[86px]">
      {showingMovies.map((movie, idx) => (
        ...
      ))}
      <div ref={loaderRef}></div> //ref를 사용해 화면에 렌더링되는지 확인한다.
    </div>
  );
}
```

`MovieSection`내부에서 영화리스트들 태그아래 `ref`를 단 태그를 만들고, 유저가 스크롤하여 모든 영화리스트들을 확인하고 `ref`단 태그가 보이면 `useEffect`에서 `firstEntry.isIntersecting`속성을 통해 감지하고 `loadMore()`를 호출해 다음 페이지의 영화리스트들을 가져오는 형식으로 구현했다.

### 클라이언트 컴포넌트에서의 api key 노출 문제

`use client` directive를 쓰지 않는 서버 컴포넌트는 브라우저 단에서 data를 fetching 하는 로직이 실행되지 않고 배포 서버에서 진행되기에 api key가 노출되지 않는다. <br>
하지만 클라이언트 컴포넌트는 javascript가 브라우저 단에서 실행되기 때문에 api key를 브라우저 개발자 도구의 네트워크 탭을 보면 나타난다는 문제가 발생하고 있었다. 이를 해결하기 위해 생각한 방법은 다음과 같다.<br>
`next.config.js` 설정 파일의 `rewrites()` 함수를 이용하여 외부 url로의 api 호출을 **"마스킹"**하는 것이다.

```js
async rewrites() {
    return [
      {
        source: '/api/nowPlayingmovies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_THEMOVIE_API_KEY}`,
      },
      {
        source: '/api/popularMovies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_THEMOVIE_API_KEY}`,
      },
      {
        source: `/api/topRatedMovies`,
        destination: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_THEMOVIE_API_KEY}`,
      },
      {
        source: `/api/topRatedMoviesByPage`,
        has: [
          {
            type: 'query',
            key: 'pageNumber',
            value: '(?<pageNumber>.*)',
          },
        ],
        destination: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_THEMOVIE_API_KEY}&page=:pageNumber`,
      },
      {
        source: '/api/upComingMovies',
        destination: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_THEMOVIE_API_KEY}`,
      },
      {
        source: '/api/movieInfo/:path*',
        destination: `https://api.themoviedb.org/3/movie/:path*?language=en-US&api_key=${process.env.NEXT_PUBLIC_THEMOVIE_API_KEY}`,
      },
    ];
  },

```

<br>

위의 코드를 보면 여러 외부 url 엔드포인트로의 요청을 다른 url path로 숨겨주고 있다. 이렇게 작성한 로직은 `fetch()` 함수에서 사용되고 더 이상 api key가 노출되지 않는다는 것을 알 수 있다.

# Key Question

## 정적 라우팅(Static Routing)/동적 라우팅(Dynamic Routing)이란?

nextJS를 이용해 웹 애플리케이션을 만들 때, 고정된(정적인) url path를 가진 페이지가 있을 수도 있지만, 상황에 따라 달라지는 동적인 페이지가 있을 수도 있다.<br>
전자는 정적 라우팅, 후자는 동적 라우팅이라고 불린다.<br>
정적 라우팅의 경우에는 고정된 url path에 layout.tsx나 page.tsx 컴포넌트를 생성하기에 프로그래머가 이에 대응하는 값을 이용하여 웹 페이지를 렌더링할 수 있다. 하지만 동적 라우팅은 매번 세부 url path가 다르므로 이를 얻는 과정이 필요한데, 해당 컴포넌트가 클라이언트 컴포넌트 / 서버 컴포넌트인지에 따라 다르다.

- 클라이언트 컴포넌트 : `usePathname()` 훅과 객체 구조 분해 방식을 통해 이용할 수 있다.
- 서버 컴포넌트 : 자동으로 page.tsx 컴포넌트의 인자로 `params` 객체 속성이 전달된다. 동적으로 변화할 디렉터리 이름을 `[]`으로 감싸주고 해당하는 파일 이름을 변수명처럼 사용하면 된다. 디렉터리명을 `[...slug]`로 지어주면 /shop/a의 경우에는 ['a'], /shop/a/b 의 경우에는 ['a', 'b']처럼 사용할 수 있다.
  <br><br>

주목해서 볼만한 점은, 동적으로 변화하는 url path를 가지는 페이지의 경우에도 `getStaticParams()` 함수를 이용하여 미리 SSG(Static Site Generation) 방식으로 렌더링하여 사용자에게 로드되는 속도를 개선할 수 있다는 것이다.

## 성능 최적화를 위해 사용한 방법

1. `next/image`에서 제공되는 <Image/>를 사용했다.
   <Image />를 써서 얻을 수 있는 이점
   - lazy loading: 이미지 로드를 필요한 시점까지 지연시켜 불필요한 대역폭을 줄이고 필요한 이미지만 빠르게 로딩할 수 있게 해준다.
   - 이미지 사이즈 최적화: 디바이스 크기 별로 srcSet을 미리 지정해두고, 사용자의 디바이스에 맞는 이미지를 다운로드할 수 있게 지원한다. 또한 이미지를 webp와 같은 용량이 작은 포맷으로 이미지를 변환해서 제공한다. 개발자도구 네트워크에서 API `GET`요청에 따른 결과값을 확인해보면 `jpg`이지만 화면에 렌더링되어있는 이미지를 확인해보면 `webp`인걸 확인할 수 있다.
   - placeholder 제공: 이미지없이 `paint`가 되었다가 이미지가 로드되면 `repaint`되면 화면이 밀리는 현상을 방지하기 위해 `placeholder`속성을 넣어줄 수 있다. 하지만 이는 `src`의 경로가 `jpg,png`등 정적일 때만 가능하다. 따라서 이 기능을 대체하기 위해 `sharp`라이브러리를 통해 해결했다.
2. 유저와 상호작용 필요한 컴포넌트가 아니면 서버컴포넌트를 사용하여 만들었다. 시간투자부분에서 설명한 것 처럼 상호작용이 필요한 컴포넌트에서도 상호작용이 필요하지 않은 부분은 서버단에서 실행되어 받을 수 있도록 구현했다.
3. 무한 스크롤을 구현할 때 영화리스트 가장 밑에부분에 도달하면 API호출을 했다. 무한스크롤에서 버벅이는 부분이 최대한 보이지 않도록 해당 API 호출을 SSG방식으로 만들어 미리 20페이지까지 빌드타임에 호출했다. 이후 스크롤을 내리며 다음 페이지 API호출이 필요할 때 미리 받아온 API를 사용할 수 있게 구현했다.
