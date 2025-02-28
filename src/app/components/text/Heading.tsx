import React from "react"

export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-black text-2xl md:text-3xl lg:text-4xl">{children}</h2>
  )
}
