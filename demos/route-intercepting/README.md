# 路由拦截

  在当前路由，加载并显示其他页面内容。同时，无需切换上下文。常见使用场景：当前页弹窗显示图片；弹窗登录。

## default.tsx

  当 Next.js 无法获取当前slot状态时，将其作为后备渲染。
  重新加载时，Next.js 将首先尝试渲染不匹配插槽的 default.js 文件。如果不可用，则会呈现 404。例如：在该demo中，若去除app/@modal/default.tsx文件时，重新编译，页面会展示404。

## Image

  为确保图片加载的安全，请在next.config.js文件中添加图片白名单。
  

  ```
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    images: {
      remotePatterns: [{
        protocol: 'https',
        hostname: 'pbs.twimg.com',
      }],
    }
  }

  module.exports = nextConfig
  ```