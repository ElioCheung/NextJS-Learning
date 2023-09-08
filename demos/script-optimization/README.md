# 脚本加载优化

  NextJS提供Script组件，引用自next/script，可用于加载第三方js库。

## 加载策略

  使用strategy属性设置加载策略：

    - beforeInteractive: 在所有代码加载前，优先加载

    『提醒』: beforeInteractive仅能使用在pages/_document.ts文件中，使用在其他地方会报错

    - afterInteractive： 默认值，必须的代码加载完毕之后，尽可能早的加载
    
    - lazyOnload： 当浏览器空闲时，加载脚本

    - worker： （实验性）将脚本加载到web work中，（Next App模式暂时无法使用）
      ```
      // next.config.js中开启此功能
      module.exports = {
        experimental: {
          nextScriptWorkers: true,
        },
      }
      ```

## 內联脚本

  为方便NextJs跟踪优化，內联脚本的id为必选项

  ```
  <Script id="show-banner">
    {`document.getElementById('banner').classList.remove('hidden')`}
  </Script>
  ```

  ```
  <Script
    id="show-banner"
    dangerouslySetInnerHTML={{
      __html: `document.getElementById('banner').classList.remove('hidden')`,
    }}
  />
  ```

## 生命周期

  生命周期运行在客户端组件，且仅在next/script导入后才生效

  - onLoad: 脚本加载完毕后运行
  - onReady： 脚本脚本完毕，组件被挂载时运行
  - onError： 脚本加载失败