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
  description,
  imgUrl,
  baseWidth = 65,
  baseHeight = 65,
  widthModifier = 1,
}: SkillProps) {
  const width = baseWidth * widthModifier
  const height = baseHeight

  return (
    <div
      className={`${styles.gradient} rounded-[40px] flex w-full p-6 items-center justify-start`}
    >
      <div>
        <Image src={imgUrl} alt={title} width={width} height={height} />
      </div>
      <div className="ml-4">
        <ItemHeading>{title}</ItemHeading>
        <p className="mt-1">{description}</p>
      </div>
    </div>
  )
}
