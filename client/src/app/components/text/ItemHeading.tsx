import React from "react"

export default function ItemHeading({
  children,
}: {
  children: React.ReactNode
}) {
  return <h3 className="text-xl md:text-2xl font-bold">{children}</h3>
}
