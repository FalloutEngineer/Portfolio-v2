import React from "react"

export default function Container({
  children,
  styles = "",
}: Readonly<{
  children: React.ReactNode
  styles?: string
}>) {
  return (
    <div
      className={`max-w-[1400px] box-border px-[15px] w-full flex items-center mx-auto ${styles}`}
    >
      {children}
    </div>
  )
}
