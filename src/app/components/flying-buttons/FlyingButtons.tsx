import React from "react"
import IconLink from "../icon-link/IconLink"
import Link from "next/link"

export default function FlyingButtons() {
  return (
    <ul className="fixed bottom-[25px] right-[25px] flex flex-col gap-[17px] z-10">
      <li>
        <Link href={process.env.linkedin || ""} target="_blank">
          <IconLink url="./svg/LinkedIn.svg" />
        </Link>
      </li>
      <li>
        <Link href={process.env.github || ""} target="_blank">
          <IconLink url="./svg/GitHub.svg" />
        </Link>
      </li>
    </ul>
  )
}
