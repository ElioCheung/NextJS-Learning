# NextJS with using msw（Mock Service Worker）

> 使用msw，提供模拟API接口，方便学习NextJS的功能

*特别注意*：

  1. Demo为Next APP模式
  2. 模拟服务端api时，请使用绝对路径
  3. 模拟客户端api时，使用相对路径，同时需要安装启用web worker

## MSW

### 安装

  ```
  npm install msw --save-dev
  # or
  yarn add msw --dev
  ```

### 浏览器

  Mock Service Worker 通过注册一个负责请求拦截的 Service Worker 来操作客户端

  使用命令安装Service Worker

  ```
  npx msw init public/ --save
  ```

### 相关资料

  [MSW](https://mswjs.io/docs/)