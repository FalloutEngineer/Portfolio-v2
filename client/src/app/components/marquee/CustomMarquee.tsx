import React from "react"
import Marquee from "react-fast-marquee"

import Link from "next/link"

type CustomMarqueeProps = {
  items?: MarqueeItem[]
}

export default function CustomMarquee({ items = [] }: CustomMarqueeProps) {
  return (
    <Marquee
      autoFill={true}
      pauseOnHover={false}
      direction={"right"}
      className={`background-gradient text-[var(--background)] font-extrabold text-6xl z-[9] overflow-hidden`}
    >
      {items.map((item) => (
        <Link
          href={item.url}
          download={item.isDownload}
          key={item.text}
          className="flex translate-y-3 flex-nowrap text-nowrap px-6"
          target="_blank"
        >
          {item.text}
        </Link>
      ))}
    </Marquee>
  )
}
