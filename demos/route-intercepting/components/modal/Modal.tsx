'use client'

import { MouseEventHandler, PropsWithChildren, useCallback, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

export default function Modal({ children }: PropsWithChildren) {
  const overlay = useRef(null)  // 遮罩
  const wrapper = useRef(null)  // 最外层dom

  const router = useRouter()

  const onDismiss = useCallback(() => {
    router.back()
  }, [router])

  const onClick: MouseEventHandler = useCallback(
    e => {
      // 点击最外层或者遮罩，关闭modal
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss()
      }
    }
    , [onDismiss, overlay, wrapper])

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // 按‘esc’按键，关闭modal
      if (e.key === 'Escape') onDismiss()
    }
    , [onDismiss]
  )

  useEffect(() => {
    // 全局监听按键点击事件
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-8/12 lg:w-1/2 p-6"
      >
        {children}
      </div>
    </div>
  )
}