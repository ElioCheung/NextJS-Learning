# Next App with Using Auth0

## 使用步骤

  1. install Auth0 NextJs SDK 

      ```
      npm install @auth0/nextjs-auth0
      ```
  
  2. 配置Callback URLs

      在 Application Settings中， Allowed Callback URLs设置为：http://localhost:3000/api/auth/callback

  3. 配置Logout URLs

      在 Application Settings中， Allowed Logout URLs设置为：http://localhost:3000

  4. 配置Auth0环境参数

      AUTH0_SECRET: 使用‘openssl rand -hex 32’创建

  5. 创建动态路由处理函数

      路径： app/auth/[auth0]/route.ts

      ```
      import { handleAuth } from '@auth0/nextjs-auth0';

      export const GET = handleAuth()
      ```

      为/api/auth/login、/api/auth/logout、/api/auth/callback、/api/auth/me创建路由处理函数

  6. 添加UserProvider

      在根布局组件中添加UserProvider，管理用户身份状态

  7. 添加登录入口

      ```
       <Link href='/api/auth/login'>Login</Link>
      ```

## 注意事项

  1. Image：
      
      - 来自nextjs/image，src、alt、width、height为必填参数
      - 为安全性，图片的src需在next.config.js中配置images.remotePatterns，否则无法加载

  2. git clone此demo，无法运行，缺失.env配置文件，需用户自行补充一下参数：

      ```
      AUTH0_SECRET='[命令：openssl rand -hex 32]'
      AUTH0_BASE_URL=''
      AUTH0_ISSUER_BASE_URL=''
      AUTH0_CLIENT_ID=''
      AUTH0_CLIENT_SECRET=''
      ```