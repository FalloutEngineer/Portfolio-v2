"use client"
import React, { useRef } from "react"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import TextPlugin from "gsap/TextPlugin"

gsap.registerPlugin(TextPlugin)

import styles from "../hero.module.css"

export default function HeroText() {
  const firstLine = useRef<HTMLParagraphElement>(null)
  const heading = useRef<HTMLHeadingElement>(null)
  const lastLine = useRef<HTMLParagraphElement>(null)

  const firstString = "Hi, my name is Vlad & i am"
  const secondString = "Frontend Developer"
  const thirdString = "And i’m crazy about technologies and aesthetics"

  useGSAP(() => {
    if (firstLine.current) {
      gsap.to(firstLine.current, {
        duration: 1.5,
        text: "👋" + firstString,
      })
    }

    if (heading.current) {
      gsap.to(heading.current, {
        delay: 1.8,
        duration: 0.5,
        text: "Sfd:Y*as #dA%pLE@",
      })
    }

    if (heading.current) {
      gsap.to(heading.current, {
        delay: 2.3,
        duration: 1.5,
        text: secondString + "&lt;/&gt;",
      })
    }

    if (lastLine.current) {
      gsap.to(lastLine.current, {
        delay: 3.5,
        duration: 2.5,
        ease: "bounce.in",
        text: thirdString,
      })
    }
  }, [])

  return (
    <>
      <p
        className={`${styles.regular} mb-4`}
        ref={firstLine}
        aria-label={firstString}
      >
        👋
      </p>
      <h1
        aria-label={secondString}
        className={`${styles.heading} min-h-[40px] sm:min-h-[48px] md:min-h-[60px] lg:min-h-[64px] text-4xl sm:text-5xl md:text-6xl lg:text-mainHeading`}
        ref={heading}
      ></h1>
      <p
        className={`${styles.regular} mt-9`}
        ref={lastLine}
        aria-label={thirdString}
      ></p>
    </>
  )
}
