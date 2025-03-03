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
      className={`${styles.gradient} aspect-square flex-col rounded-[40px] flex w-full p-6 items-center justify-center align-center`}
    >
      <div>
        <Image src={imgUrl} alt={title} width={width} height={height} />
      </div>
      <div className="mt-3 text-center text-[var(--subtext)]">
        <ItemHeading>{title}</ItemHeading>
      </div>
    </div>
  )
}
