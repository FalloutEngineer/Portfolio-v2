"use client"
import ItemHeading from "@/app/components/text/ItemHeading"
import ItemSubheading from "@/app/components/text/ItemSubheading"
import React from "react"
import Image from "next/image"

import Slider from "@ant-design/react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import styles from "../../../../components/gradient.module.css"
import ConditionalLinkWrapper from "@/app/components/conditional-wrap/ConditionalLinkWrapper"

export default function Project({ project }: { project: Project }) {
  const imageSizeModifier = 1

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <ConditionalLinkWrapper
      condition={project.link ? true : false}
      href={project.link ? project.link : ""}
    >
      <div
        className={`${styles.gradient} flex gap-4 flex-col md:flex-row w-full justify-between rounded-[40px] px-6 py-4 md:px-16 md:py-8`}
      >
        <div className="flex flex-col gap-4">
          <div className="">
            <ItemHeading>{project.title}</ItemHeading>
            <p className="mt-3 whitespace-pre-wrap">{project.description}</p>
          </div>
          <div className="">
            <ItemSubheading>Role</ItemSubheading>
            <p>{project.role}</p>
          </div>
          <div className="">
            <ItemSubheading>Stack</ItemSubheading>
            <p>{project.stack}</p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4 md:mt-0">
          <div
            className={`slider-container ${
              project.orientation === "vertical"
                ? "max-w-72 lg:max-w-52"
                : "max-w-2xl lg:max-w-3xl"
            } border-8 rounded-3xl border-zinc-800 bg-zinc-800`}
          >
            {project.images ? (
              project.images.length > 1 ? (
                <Slider {...sliderSettings} className="max-h-fit flex w-full">
                  {project.images?.length
                    ? project.images.map((image) => (
                        <div
                          className="overflow-hidden h-full flex w-full"
                          key={image.url}
                        >
                          <Image
                            src={image.url}
                            alt={image.alt}
                            width={image.width * imageSizeModifier}
                            height={image.height * imageSizeModifier}
                            className={`transition-all select-none md:hover:scale-[1.05] flex`}
                          />
                        </div>
                      ))
                    : ""}
                </Slider>
              ) : (
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    key={project.images?.[0].url}
                    src={project.images?.[0].url}
                    alt={project.images?.[0].alt}
                    width={project.images?.[0].width * imageSizeModifier}
                    height={project.images?.[0].height * imageSizeModifier}
                    className="transition-all select-none md:hover:scale-[1.05]"
                    draggable={false}
                  />
                </div>
              )
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </ConditionalLinkWrapper>
  )
}
