import ConditionalLinkWrapper from "@/app/components/conditional-wrap/ConditionalLinkWrapper"
import React from "react"

import styles from "../../../../components/gradient.module.css"
import LinkIcon from "@/app/components/link-icon/LinkIcon"
import SkillTag from "@/app/components/skill-tag/SkillTag"

export default function PathItem(props: PathItem) {
  const isLink: boolean = props.link !== undefined

  return (
    <ConditionalLinkWrapper
      condition={isLink}
      href={props.link ? props.link : ""}
    >
      <div
        className={`${styles.gradient} flex gap-6 p-[30px] rounded-[40px] link-icon-trigger flex-col lg:flex-row`}
      >
        <div
          className="text-sm text-nowrap text-zinc-500"
          aria-label={props.ariaDate}
        >
          {props.date}
        </div>
        <div className="flex flex-col gap-3">
          <h4
            aria-label={props.ariaTitle}
            className={`${
              isLink ? "link-icon-text" : ""
            } text-xl font-bold flex gap-2 align-bottom items-start justify-start`}
          >
            <span className="flex gap-2">
              {props.title} {isLink && <LinkIcon />}
            </span>
          </h4>
          {props?.role ? (
            <span className="font-bold text-xl text-zinc-500">
              {props.role}
            </span>
          ) : (
            ""
          )}
          <p className="text-zinc-500">{props.description}</p>
          <ul className="flex gap-2 flex-wrap">
            {props.stack &&
              props.stack.map((item) => (
                <li key={item}>
                  <SkillTag text={item} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </ConditionalLinkWrapper>
  )
}
