import React from "react"

export default function SubheadingText({
  children,
}: {
  children: React.ReactNode
}) {
  return <p className="mt-3 text-xl text-[var(--subtext)]">{children}</p>
}
