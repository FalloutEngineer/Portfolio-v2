import Container from "@/app/components/container/Container"
import React from "react"

import Text from "@/app/components/text/Text"

export default function Footer() {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  return (
    <footer className="bg-[var(--background-darker)]">
      <Container>
        <div className="flex flex-col justify-center align-center items-center w-full py-[20px]">
          <p>
            <Text>
              Made with 💜 by Fallout Engineer (c) {String(currentYear)}
            </Text>
          </p>
          <p>
            <Text>With help of Next.js</Text>
          </p>
        </div>
      </Container>
    </footer>
  )
}
