import React from "react"

export default function ContentWrapper({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <div className="flex flex-col w-full py-[50px] md:py-[75px] lg:py-[145px]">
      {children}
    </div>
  )
}
