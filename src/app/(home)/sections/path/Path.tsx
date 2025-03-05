import Container from "@/app/components/container/Container"
import ContentWrapper from "@/app/components/content-wrapper/ContentWrapper"
import Heading from "@/app/components/text/Heading"
import SubHeading from "@/app/components/text/Subheading"
import SubheadingText from "@/app/components/text/SubheadingText"
import React from "react"
import PathItem from "./path-item/PathItem"

export default function Path() {
  const education: PathItem[] = [
    {
      title: "Software Engineering · KSU",
      link: "https://www.kspu.edu/default.aspx?lang=uk",
      role: "Master's",
      date: "SEP 2023 — JAN 2025",
      ariaDate: "from September 2023 to January 2025",
      description:
        "Mastered computer science, math, web development, backend development, programming principles (OOP, FP, SOLID), database development, data science basics, 3d modelling and many many more.",
    },
    {
      title: "Software Engineering · KSU",
      link: "https://www.kspu.edu/default.aspx?lang=uk",
      role: "Bachelor's",
      date: "SEP 2019 — JUN 2023",
      ariaDate: "from September 2019 to June 2023",
      description:
        "Studied computer science, math, web development, backend development, programming principles (OOP, FP, SOLID), database development, data science basics, 3d modelling and many many more.",
    },
  ]
  const work: PathItem[] = [
    {
      title: "Fullstack Developer · Freelance",
      date: "SEP 2022 — JAN 2025",
      ariaDate: "from September 2022 to January 2025",
      ariaTitle: "Fullstack Developer at Freelance",
      description:
        "Developed websites that achieved 100k+ monthly audience, telegram bots with 100+ active users, fixed bugs, developed layouts, and much more.",
      stack: ["React", "Node.js", "Wordpress", "PHP"],
    },
    {
      title: "Frontend (mobile) Developer · Meathammer studio",
      date: "NOV 2021 — MAR 2025",
      ariaDate: "from September 2022 to January 2025",
      ariaTitle: "Frontend (mobile) Developer at Meathammer studio",
      description:
        "During this period i worked on mobile app for business, that helped ukrainian people find job in poland.",
      stack: ["React (Native)", "TypeScript", "Intl"],
    },
  ]

  return (
    <section>
      <Container>
        <ContentWrapper>
          <Heading>My Path</Heading>
          <SubheadingText>
            Let&apos;s explore my personal path in software development.
          </SubheadingText>
          <div className="flex w-full mt-12 flex-col gap-6 md:gap-0 md:flex-row">
            <div className="flex flex-grow flex-col md:w-1/2 md:pr-[35px] md:border-r md:border-zinc-700">
              <SubHeading>Education</SubHeading>
              <ul className="flex flex-col mt-6 gap-6">
                {education.map((item) => (
                  <li key={`${item.title} ${item.date}`}>
                    <PathItem {...item} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-grow flex-col md:w-1/2 md:pl-[35px]">
              <SubHeading>Work Experience</SubHeading>
              <ul className="flex flex-col mt-6 gap-6">
                {work.map((item) => (
                  <li key={`${item.title} ${item.date}`}>
                    <PathItem {...item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ContentWrapper>
      </Container>
    </section>
  )
}
