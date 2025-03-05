import React from "react"

type SkillTagProps = {
  text: string
}

export default function SkillTag(props: SkillTagProps) {
  return (
    <div className="bg-[var(--highlighted-bg)] rounded-full px-2 py-1 flex w-min text-sm text-[var(--highlighted-text)] text-nowrap">
      {props.text}
    </div>
  )
}
