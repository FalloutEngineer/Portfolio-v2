import React from "react"

import styles from "./hero.module.css"
import Container from "@/app/components/container/Container"
import StarBg from "@/app/components/star-bg/StarBg"
import HeroText from "./hero-text/HeroText"

export default function Hero() {
  return (
    <section className={`${styles.section} overflow-hidden`}>
      <Container>
        <div className="flex flex-col justify-center items-start w-full h-screen max-h-screen lg:min-h-[300px]">
          <HeroText />
        </div>
      </Container>
      <StarBg />
    </section>
  )
}
