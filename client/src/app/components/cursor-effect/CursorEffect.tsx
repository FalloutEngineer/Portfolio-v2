"use client"
import React, { useEffect, useRef } from "react"

import styles from "./cursorEffect.module.css"

export default function CursorEffect() {
  const effectRef = useRef<HTMLDivElement>(null)

  const mouseMoveEvent = (e: MouseEvent) => {
    effectRef.current?.style.setProperty("--mouseX", `${e.pageX}px`)
    effectRef.current?.style.setProperty("--mouseY", `${e.pageY}px`)
  }

  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveEvent)

    return () => {
      document.removeEventListener("mousemove", mouseMoveEvent)
    }
  }, [])

  return <div className={styles.cursorEffect} ref={effectRef}></div>
}
