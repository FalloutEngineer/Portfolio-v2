import React from "react"

import styles from "./hero.module.css"
import Container from "@/app/components/Container"

export default function Hero() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start w-full h-screen max-h-screen lg:min-h-[300px]">
        <p className={`${styles.regular} mb-4`}>👋 Hi, my name is Vlad, i am</p>
        <h1
          className={`${styles.heading} text-4xl sm:text-5xl md:text-6xl lg:text-mainHeading`}
        >
          Frontend Developer&lt;/&gt;
        </h1>
        <div className={`${styles.regular} mt-9`}>
          And i’m crazy about technologies and aesthetics
        </div>
      </div>
    </Container>
  )
}
