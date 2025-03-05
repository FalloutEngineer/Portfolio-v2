import React from "react"

export default function ItemSubheading({
  children,
}: {
  children: React.ReactNode
}) {
  return <h4 className="text-2xl font-semibold">{children}</h4>
}
