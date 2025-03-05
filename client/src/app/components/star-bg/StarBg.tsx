"use client"
import React, { useEffect, useRef } from "react"

import styles from "./starsBg.module.css"

export default function StarBg() {
  const z1 = useRef<HTMLDivElement>(null)
  const z2 = useRef<HTMLDivElement>(null)
  const z3 = useRef<HTMLDivElement>(null)

  const ratio = 0.05
  const x = useRef(0)
  const y = useRef(0)

  useEffect(() => {
    const mouseListener = (e: MouseEvent) => {
      x.current = e.pageX
      y.current = e.pageY
    }

    document.addEventListener("mousemove", mouseListener)

    requestAnimationFrame(function animation() {
      if (z1.current && z2.current && z3.current) {
        z1.current.style.transform =
          "translate(" + x.current * ratio + "px," + y.current * ratio + "px)"

        z2.current.style.transform =
          "translate(" +
          (x.current * ratio) / 2 +
          "px," +
          (y.current * ratio) / 2 +
          "px) rotate(217deg)"

        z3.current.style.transform =
          "translate(" +
          (x.current * ratio) / 3 +
          "px," +
          (y.current * ratio) / 3 +
          "px) rotate(71deg)"

        requestAnimationFrame(animation)
      }
    })

    return () => {
      document.removeEventListener("mousemove", mouseListener)
    }
  }, [])

  return (
    <div className={`${styles.bg}`}>
      <div className={`${styles["z-3"]}`} ref={z3}>
        <div
          className={`${styles.tile} ${styles["top-left"]} ${styles.animateOpacity} ${styles["freq-5"]}`}
        ></div>
        <div
          className={`${styles.tile} ${styles["top-right"]} ${styles.animateOpacity} ${styles["freq-9"]}`}
        ></div>
        <div
          className={`${styles.tile} ${styles["bottom-left"]} ${styles.animateOpacity} ${styles["freq-7"]}`}
        ></div>
        <div
          className={`${styles.tile} ${styles["bottom-right"]} ${styles.animateOpacity} ${styles["freq-10"]}`}
        ></div>
      </div>
      <div className={`${styles["z-2"]}`} ref={z2}>
        <div
          className={`${styles.tile} ${styles["top-left"]} ${styles.animateOpacity} ${styles["freq-2"]} ${styles["delay-2"]}`}
        ></div>
        <div
          className={`${styles.tile} ${styles["top-right"]} ${styles.animateOpacity} ${styles["freq-2"]} ${styles["delay-2"]}`}
        ></div>
        <div
          className={`${styles.tile} ${styles["bottom-left"]} ${styles.animateOpacity} ${styles["freq-4"]} ${styles["delay-4"]}`}
        ></div>
        <div
          className={`${styles.tile} ${styles["bottom-right"]} ${styles.animateOpacity} ${styles["freq-4"]} ${styles["delay-4"]}`}
        ></div>
      </div>
      <div className={`${styles["z-1"]}`} ref={z1}>
        <div
          className={`${styles.tile} ${styles["top-left"]} ${styles.animateOpacity} ${styles["freq-7"]} ${styles["delay-2"]}`}
        ></div>
        <div
          className={`${styles.tile} ${styles["top-right"]} ${styles.animateOpacity} ${styles["freq-5"]} ${styles["delay-4"]}`}
        ></div>
        <div
          className={`${styles.tile} ${styles["bottom-left"]} ${styles.animateOpacity} ${styles["freq-9"]} ${styles["delay-2"]}`}
        ></div>
        <div
          className={`${styles.tile} ${styles["bottom-right"]} ${styles.animateOpacity} ${styles["freq-5"]} ${styles["delay-4"]}`}
        ></div>
      </div>
    </div>
  )
}
