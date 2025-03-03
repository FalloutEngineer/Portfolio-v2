import React from "react"

export default function SubHeading({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <h3 className="font-black text-1xl md:text-1xl lg:text-2xl">{children}</h3>
  )
}
