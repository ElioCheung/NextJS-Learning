# Form with Server Actions

  1. 启用Server Actions

    ```
    // next.config.js
    /** @type {import('next').NextConfig} */
    const nextConfig = {
      experimental: {
        serverActions: true, //开启Server Actions
      },
    }

    module.exports = nextConfig
    ```

  2. 创建actions

    ```
    'use server'

    import { revalidatePath } from 'next/cache'
    import { redirect } from 'next/navigation'

    const UERNAME = 'elio'
    const PASSWORD = '123456'

    export async function login(data: FormData) {
      const username = data.get('username')
      const password = data.get('password')

      // 模拟等待
      await new Promise((r) => setTimeout(r, 4000))

      if (username === UERNAME && password === PASSWORD) {
        // 实际可能会与DB建立链接或者与其他API交互
        revalidatePath('/')
        redirect('/home')
      }

      redirect('/forbidden')
    }
    ```

## 注意事项

  1. action刷新缓存方式：revalidatePath、revalidateTag
  2. action可以使用redirect进行重定向，例如：登录跳转
  3. 通过使用experimental_useFormStatus（from react-dom package），获取表单提交的状态，注意此hook仅使用在client