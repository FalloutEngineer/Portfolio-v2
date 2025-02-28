import React from "react"
import Image from "next/image"
import styles from "./skill.module.css"

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
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-1">{description}</p>
      </div>
    </div>
  )
}
