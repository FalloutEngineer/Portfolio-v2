import React from "react"

export default function ContentWrapper({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <div className="flex flex-col w-full py-[30px] md:py-[55px] lg:py-[125px]">
      {children}
    </div>
  )
}
