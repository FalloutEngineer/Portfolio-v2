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
      role: "Frontend (Mobile) Engineer",
      stack: "React Native, TypeScript, Intl, Figma",
      orientation: "vertical",
      link: "https://fairpartner.pl/",
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
      orientation: "vertical",
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
    {
      title: "Smart University",
      description: `Customizable engine for IoT websites of educational institutions. Includes admin dashboard, buildings list, floors list, rooms list and concrete pages.`,
      role: "FullStack Engineer",
      stack: "React.js, Node.js, TypeScript, Express.js",
      orientation: "horizontal",
      link: "https://github.com/FalloutEngineer/smart-university-react",
      images: [
        {
          url: "/projects/smart-university.png",
          alt: "Screenshot of Smart University main page",
          width: 3840,
          height: 1682,
        },
        {
          url: "/projects/smart-university-db.png",
          alt: "Screenshot of Smart University main page",
          width: 3840,
          height: 1682,
        },
      ],
    },
    {
      title: "Analisilogica",
      description: `Web service for analyzing grammar and logic of the texts written on the italian language `,
      role: "FullStack Engineer",
      stack: "JavaScript, WordPress, PHP",
      orientation: "horizontal",
      link: "https://analisilogica.net/",
      images: [
        {
          url: "/projects/analisilogica.png",
          alt: "Screenshot of Analisilogica main page",
          width: 3840,
          height: 1682,
        },
        {
          url: "/projects/analisi-stats.jpeg",
          alt: "Statistics of the analisilogica website",
          width: 3840,
          height: 1682,
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
              Let’s explore some selected projects in which i have participated
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
