import React from "react"
import Image from "next/image"
import styles from "../../../../components/gradient.module.css"
import ItemHeading from "@/app/components/text/ItemHeading"

type SkillProps = Skill & {
  baseWidth?: number
  baseHeight?: number
  widthModifier?: number
}

export default function Skill({
  title,
  imgUrl,
  baseWidth = 90,
  baseHeight = 90,
  widthModifier = 1,
}: SkillProps) {
  const width = baseWidth * widthModifier
  const height = baseHeight

  return (
    <div
      className={`${styles.gradient} aspect-square flex-col rounded-[40px] flex w-full p-2 md:p-6 items-center justify-center align-center`}
    >
      <div className="flex max-w-[12vw] md:max-w-[7vw]">
        <Image
          src={imgUrl}
          alt={""}
          width={width}
          height={height}
          className="flex"
        />
      </div>
      <div className="mt-1 md:mt-3 text-center text-[var(--subtext)]">
        <ItemHeading>{title}</ItemHeading>
      </div>
    </div>
  )
}
