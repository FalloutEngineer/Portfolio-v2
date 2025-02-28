import Container from "@/app/components/container/Container"
import Skill from "@/app/(home)/sections/skills/skill/Skill"
import React from "react"
import SubheadingText from "@/app/components/text/SubheadingText"
import Heading from "@/app/components/text/Heading"
import ContentWrapper from "@/app/components/content-wrapper/ContentWrapper"

export default function Skills() {
  const skills: Skill[] = [
    {
      title: "Web",
      description: "For awesome responsive interfaces",
      imgUrl: "/svg/HTML.svg",
    },
    {
      title: "React",
      description: "For building dynamic and interactive user interfaces",
      imgUrl: "/svg/React.svg",
    },
    {
      title: "JavaScript",
      description: "For speaking with devices",
      imgUrl: "/svg/JavaScript.svg",
    },
    {
      title: "TypeScript",
      description: "To catch errors on development stage",
      imgUrl: "/svg/TypeScript.svg",
    },
    {
      title: "Next.js",
      description: "To make websites optimized for search engines",
      imgUrl: "/svg/NextJS.svg",
    },
    {
      title: "Node.js",
      description: "For processing, managing and sharing data",
      imgUrl: "/svg/NodeJs.svg",
    },
    {
      title: "Figma",
      description: "For speaking with designers",
      imgUrl: "/svg/Figma.svg",
    },
    {
      title: "MongoDB",
      description: "For storing and managing data",
      imgUrl: "/svg/MongoDB.svg",
    },
    {
      title: "Wordpress",
      description: "For fast building and deploying sites",
      imgUrl: "/svg/WordPress.svg",
    },
    {
      title: "Git",
      description: "For version control and collaboration",
      imgUrl: "/svg/GitHub.svg",
    },
  ]

  return (
    <section>
      <Container styles="flex">
        <ContentWrapper>
          <div className="">
            <Heading>How i could be useful</Heading>
            <SubheadingText>
              I’m geek in anything that helps with creating awesome IT products
            </SubheadingText>
          </div>
          <div className="mt-12 flex min-w-full">
            <ul className="grid grid-cols-1 gap-[15px] md:grid-cols-2 md:gap-[30px] w-full">
              {skills.map((skill) => (
                <li key={skill.title} className="flex w-full">
                  <Skill
                    title={skill.title}
                    description={skill.description}
                    imgUrl={skill.imgUrl}
                    widthModifier={skill.title === "Figma" ? 2 / 3 : 1}
                  />
                </li>
              ))}
            </ul>
          </div>
        </ContentWrapper>
      </Container>
    </section>
  )
}
