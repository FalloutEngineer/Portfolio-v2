import Container from "@/app/components/container/Container"
import Skill from "@/app/(home)/sections/skills/skill/Skill"
import React from "react"
import SubheadingText from "@/app/components/text/SubheadingText"
import Heading from "@/app/components/text/Heading"
import ContentWrapper from "@/app/components/content-wrapper/ContentWrapper"

export default function Skills() {
  const skills: Skill[] = [
    {
      title: "HTML",
      imgUrl: "/svg/HTML.svg",
    },
    {
      title: "CSS",
      imgUrl: "/svg/css.svg",
    },
    {
      title: "React",
      imgUrl: "/svg/React.svg",
    },
    {
      title: "JavaScript",
      imgUrl: "/svg/JavaScript.svg",
    },
    {
      title: "TypeScript",
      imgUrl: "/svg/TypeScript.svg",
    },
    {
      title: "Next.js",
      imgUrl: "/svg/NextJsIcon.svg",
    },
    {
      title: "Node.js",
      imgUrl: "/svg/NodeJs.svg",
    },
    {
      title: "Figma",
      imgUrl: "/svg/Figma.svg",
    },
    {
      title: "MongoDB",
      imgUrl: "/svg/MongoDB.svg",
    },
    {
      title: "Wordpress",
      imgUrl: "/svg/WordPress.svg",
    },
    {
      title: "Git",
      imgUrl: "/svg/GitHub.svg",
    },
    {
      title: "Tailwind",
      imgUrl: "/svg/tailwind.svg",
    },
    {
      title: "SCSS",
      imgUrl: "/svg/sass.svg",
    },
    {
      title: "Redux toolkit",
      imgUrl: "/svg/redux.svg",
    },
    {
      title: "Firebase",
      imgUrl: "/svg/firebase.svg",
    },
    {
      title: "Swagger",
      imgUrl: "/svg/swagger.svg",
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
            <ul className="grid gap-[15px] grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 md:gap-[25px] w-full">
              {skills.map((skill) => (
                <li key={skill.title} className="flex w-full aspect-square">
                  <Skill
                    title={skill.title}
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
