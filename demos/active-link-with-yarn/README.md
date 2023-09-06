# Link Active Demo with yarn

## 项目初始化

  ```
  npx create-next-app@latest --ts --use-yarn
  ```

## 项目初始化

  1. 升级至stable版本

    ```
    yarn set version stable
    ```

  2. 创建yarn.lock文件

    ```
    touch yarn.lock
    ```

  3. 配置nodeLinker

    ```
    yarn config set nodeLinker node-modules
    ```

  4. install packages

    ```
    yarn install
    ```
  
  5. 运行项目

    ```
    yarn dev
    ```

## 注意事项

  1. useRouter Error:

      - 若用于测试，请从next/router导入useRouter
      - 若使用app模式，请从next/navigation导入useRouter

  2. NextJS APP模式：

      - usePathname hook只运行在client下
  
  3. 