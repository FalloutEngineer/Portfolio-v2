"use client"
import Link from "next/dist/client/link"
import React, { useState } from "react"

import styles from "./header.module.css"
import Container from "../container/Container"

export default function Header({
  left = [],
  center = [],
  right = [],
}: {
  left?: HeaderItem[]
  center?: HeaderItem[]
  right?: HeaderItem[]
}) {
  const [isActive, setIsActive] = useState(false)

  const burgerOnClick = () => setIsActive((prev) => !prev)

  const createList = (arr: HeaderItem[]) =>
    arr.map((item, index) => (
      <li key={index} className={`${styles.li}`}>
        <Link href={item.url} className={`${styles.link}`}>
          {item.text}
        </Link>
      </li>
    ))

  return (
    <div className="fixed w-full z-[9999]">
      <Container styles="relative px-0 md:px-[15px]">
        <button
          onClick={burgerOnClick}
          className={`${styles.burger} ${
            isActive ? styles.active : ""
          } absolute right-2 top-2 text-6xl md:hidden flex rounded-full h-[60px] w-[60px] text-center items-center justify-center bg-backgroundDarker border-b-2 border-zinc-800 z-10`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav
          className={`${styles.nav} ${
            isActive ? styles.active : ""
          } left-0 top-0 flex justify-between w-full py-[25px] flex-col md:flex-row bg-backgroundDarker md:bg-transparent absolute md:static`}
        >
          <ul className={styles.list}>{createList(left)}</ul>
          <ul className={styles.list}>{createList(center)}</ul>
          <ul className={styles.list}>{createList(right)}</ul>
        </nav>
      </Container>
    </div>
  )
}
