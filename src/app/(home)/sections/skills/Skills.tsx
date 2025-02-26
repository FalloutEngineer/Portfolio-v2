import Container from "@/app/components/container/Container"
import Skill from "@/app/components/skill/Skill"
import React from "react"

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
      description: "To catch errors on development time",
      imgUrl: "/svg/TypeScript.svg",
    },
    {
      title: "Next.js",
      description: "To make websites popular in search engines",
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
        <div className="flex flex-col w-full py-[50px] md:py-[75px] lg:py-[145px]">
          <div className="">
            <h2 className="font-black text-2xl md:text-3xl lg:text-4xl">
              How i could be useful
            </h2>
            <p className="mt-3 text-xl opacity-65">
              I’m geek in anything that helps with creating awesome IT products
            </p>
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
        </div>
      </Container>
    </section>
  )
}
