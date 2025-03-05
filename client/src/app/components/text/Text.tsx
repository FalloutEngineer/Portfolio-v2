import React from "react"

type TextProps = { children?: React.ReactElement | string | string[] }

export default function Text(props: TextProps) {
  return <span className="text-zinc-500">{props.children}</span>
}
