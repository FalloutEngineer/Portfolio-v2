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
import SkillTag from "@/app/components/skill-tag/SkillTag"

import Text from "@/app/components/text/Text"
import LinkIcon from "@/app/components/link-icon/LinkIcon"

export default function Project({ project }: { project: Project }) {
  const imageSizeModifier = 1

  const isSliderMode = project.images && project.images.length > 1

  const isLink = project.link ? true : false

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <ConditionalLinkWrapper
      condition={isLink}
      href={project.link ? project.link : ""}
    >
      <div
        className={`${styles.gradient} flex gap-10 flex-col lg:flex-row w-full justify-between rounded-[40px] px-6 md:px-16 py-8 link-icon-trigger`}
      >
        <div className="flex flex-col gap-4">
          <div className="">
            <ItemHeading>
              <span className="flex gap-2">
                {project.title} {isLink && <LinkIcon />}
              </span>
            </ItemHeading>
            <p className="mt-3 whitespace-pre-wrap">
              <Text>{project.description}</Text>
            </p>
          </div>
          <div className="">
            <ItemSubheading>Role</ItemSubheading>
            <p>
              <Text>{project.role}</Text>
            </p>
          </div>
          <div className="">
            <ItemSubheading>Stack</ItemSubheading>
            <ul className="flex gap-3 mt-3 flex-wrap">
              {project.stack.map((item) => (
                <li key={item}>
                  <SkillTag text={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          onClick={(e) => {
            if (isSliderMode) {
              e.stopPropagation()
              e.nativeEvent.stopImmediatePropagation()
              e.preventDefault()
            }
          }}
          className={`flex self-center lg:self-auto items-center justify-center mt-4 md:mt-0 ${
            project.orientation === "vertical"
              ? "max-w-60 md:max-w-72 lg:max-w-52"
              : "w-full max-w-80 md:max-w-[450px]"
          } ${isSliderMode ? "cursor-grab" : "cursor-default"}`}
        >
          <div
            className={`slider-container ${
              project.orientation === "vertical"
                ? "max-w-72 lg:max-w-52"
                : "w-full max-w-2xl lg:max-w-3xl"
            } border-8 rounded-3xl border-zinc-800 bg-zinc-800 w-full`}
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
                            className={`transition-all duration-300 select-none md:hover:scale-[1.05] flex`}
                          />
                        </div>
                      ))
                    : ""}
                </Slider>
              ) : (
                <div className="max-h-fit flex w-full">
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      key={project.images?.[0].url}
                      src={project.images?.[0].url}
                      alt={project.images?.[0].alt}
                      width={project.images?.[0].width * imageSizeModifier}
                      height={project.images?.[0].height * imageSizeModifier}
                      className="transition-all duration-300 select-none md:hover:scale-[1.05] flex"
                      draggable={false}
                    />
                  </div>
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
