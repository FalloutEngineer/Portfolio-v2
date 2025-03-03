import Container from "@/app/components/container/Container"
import ContentWrapper from "@/app/components/content-wrapper/ContentWrapper"
import Heading from "@/app/components/text/Heading"
import SubheadingText from "@/app/components/text/SubheadingText"
import React from "react"

export default function Path() {
  return (
    <section>
      <Container>
        <ContentWrapper>
          <Heading>My Path</Heading>
          <SubheadingText>
            Let&apos;s explore my personal path in software development.
          </SubheadingText>
          <div className="flex w-full mt-12">
            <div className="flex flex-grow">1</div>
            <div className="flex flex-grow">2</div>
          </div>
        </ContentWrapper>
      </Container>
    </section>
  )
}
