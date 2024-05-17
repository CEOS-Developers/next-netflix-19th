import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/api')) {
    if (!request.headers.get('X-Client-Request')) {
      // 클라이언트에서 설정한 헤더가 없을 경우
      const url = request.nextUrl.clone();
      url.pathname = '/error'; // 주소창에 직접 api 입력한 경우 오류 페이지 경로 설정
      return NextResponse.rewrite(url);
    }
  }
  return NextResponse.next();
}