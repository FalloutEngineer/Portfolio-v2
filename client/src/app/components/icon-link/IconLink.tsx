import React from "react"

import Image from "next/image"

type IconLinkProps = {
  url: string
}

export default function IconLink({ url }: IconLinkProps) {
  return (
    <Image
      src={url}
      alt={"LinkedIn icon"}
      width={50}
      height={50}
      className="opacity-15 hover:opacity-30 transition duration-300 ease-in-out"
    />
  )
}
