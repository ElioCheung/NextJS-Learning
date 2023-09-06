import { NextResponse, NextRequest, NextMiddleware } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (pathname.startsWith('/hello')) {
    // 直接相应
    return NextResponse.json({
      data: 'Hello Nextjs',
      error: 'ok',
    })
  }

  if (pathname.startsWith('/auth')) {
    // 重定向
    return NextResponse.redirect(new URL('/redirect', req.url))
  }
  

  if (pathname.startsWith('/anthor')) {
    // 重写
    return NextResponse.rewrite(new URL('/rewrite', req.url))
  }

  if (pathname.startsWith('/headers')) {
    // 设置headers
    const reqHeaders = new Headers(req.headers)
    reqHeaders.set('x-hello-from-middleware1', 'hello from 1')

    const res = NextResponse.next({
      request: {
        headers: reqHeaders,
      },
    })

     // Set a new response header `x-hello-from-middleware2`
     res.headers.set('x-hello-from-middleware2', 'hello from 2')
     return res
  }

  if (pathname.startsWith('/cookies')) {
    // 设置cookies
    const res = NextResponse.next()
    res.cookies.set({
      name: 'nextjs',
      value: 'enable',
      path: '/',
      expires: new Date(Date.now() + 60 * 1000)
    })

    return res
  }

  return NextResponse.next()
}

// 在成功匹配的路由上，运行中间件
export const config = {
  matcher: [ '/:path*' ],
} 