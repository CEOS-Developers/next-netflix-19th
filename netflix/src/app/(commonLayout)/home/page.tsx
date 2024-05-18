import FooterNav from '@/components/common/FooterNav';
import Wrapper from '@/components/home/Wrapper';
import Header from '@/components/home/Header';
import Today from '@/components/home/Today';
import Preview from '@/components/home/Preview';

export default function page() {
  const wrapperItems = [
    { title: "Now Playing", fetchType: "nowPlaying" },
    { title: "Popular on Netflix", fetchType: "popular" },
    { title: "Top Rated", fetchType: "topRated" },
    { title: "Coming", fetchType: "coming" },
    { title: "Trending Now", fetchType: "trending" },
    { title: "Horror Movies", fetchType: "horrorMovies" },
  ];

  return (
    <div className="pb-8">
      <Header />
      <Today />
      <Preview />
      {wrapperItems.map((item, index) => (
        <Wrapper
          key={index}
          title={item.title}
          fetchType={item.fetchType}
        />
      ))}
      <FooterNav />
    </div>
  );
}
