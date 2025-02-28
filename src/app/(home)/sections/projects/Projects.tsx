import Container from "@/app/components/container/Container"
import ContentWrapper from "@/app/components/content-wrapper/ContentWrapper"
import Heading from "@/app/components/text/Heading"
import SubheadingText from "@/app/components/text/SubheadingText"
import React from "react"
import Project from "./project/Project"

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Fair Partner App",
      description: `App for business, which mission is  to help foreigners find job in Poland.
App includes news feed, blog, employment documents and tax assistance`,
      role: "Frontend (mobile) Engineer",
      stack: "React Native, TypeScript, Intl, Figma",
      images: [
        {
          url: "/projects/fair.jpg",
          alt: "Screenshot number 1 of Fair Partner App",
          width: 498,
          height: 849,
        },
      ],
    },
    {
      title: "Compitoitaliano bot",
      description: `AI Telegram chatbot for analisilogica.net that analyse grammar and logic 
of given text written on Italian language.`,
      role: "Node.js Engineer",
      stack: "Node.js, TypeScript, Telegram API, ChatGPT API, Stripe",
      images: [
        {
          url: "/projects/compito-1.jpg",
          alt: "Screenshot number 1 of Compitoilaiano bot",
          width: 498,
          height: 849,
        },
        {
          url: "/projects/compito-2.jpg",
          alt: "Screenshot number 2 of Compitoilaiano bot",
          width: 498,
          height: 849,
        },
      ],
    },
  ]

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
          <ul className="flex flex-col gap-7 mt-12">
            {projects.map((project) => (
              <li key={project.title}>
                <Project project={project} />
              </li>
            ))}
          </ul>
        </ContentWrapper>
      </Container>
    </section>
  )
}
