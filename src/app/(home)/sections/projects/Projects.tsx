import Container from "@/app/components/container/Container"
import ContentWrapper from "@/app/components/content-wrapper/ContentWrapper"
import Heading from "@/app/components/text/Heading"
import SubheadingText from "@/app/components/text/SubheadingText"
import React from "react"

export default function Projects() {
  return (
    <section>
      <Container>
        <ContentWrapper>
          <div className="">
            <Heading>Projects</Heading>
            <SubheadingText>
              Let’s explore most notable projects in which i have participated
            </SubheadingText>
          </div>
        </ContentWrapper>
      </Container>
    </section>
  )
}
