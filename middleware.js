import { NextResponse } from 'next/server';

export function middleware(request) {
  // 获取响应对象
  const response = NextResponse.next();
  
  // 设置X-Robots-Tag头
  response.headers.set('X-Robots-Tag', 'index, follow');
  
  return response;
}

export const config = {
  matcher: [
    // 匹配所有页面，但排除API路由，_next目录下文件和结果页面
    '/((?!api|_next/static|_next/image|results|favicon).*)',
  ],
}; 