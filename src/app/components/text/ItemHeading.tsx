import React from "react"

export default function ItemHeading({
  children,
}: {
  children: React.ReactNode
}) {
  return <h3 className="text-3xl font-bold">{children}</h3>
}
