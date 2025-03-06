import CursorEffect from "../components/cursor-effect/CursorEffect"
import FlyingButtons from "../components/flying-buttons/FlyingButtons"
import Header from "../components/header/Header"
import CustomMarquee from "../components/marquee/CustomMarquee"
import Footer from "./sections/footer/Footer"

import Hero from "./sections/hero/Hero"
import Path from "./sections/path/Path"
import Projects from "./sections/projects/Projects"
import Skills from "./sections/skills/Skills"

export default function Home() {
  const CVMarquee = () => (
    <CustomMarquee
      items={[
        {
          text: "DOWNLOAD CV",
          url: "/cv/Fullstack_Vladyslav Voichenko_CV.pdf",
          isDownload: true,
        },
      ]}
    />
  )

  return (
    <div className="font-[family-name:var(--font-inter)] relative">
      <Header
        center={[
          { text: "Home", url: "#home" },
          { text: "Path", url: "#path" },
          { text: "Projects", url: "#projects" },
          { text: "Skills", url: "#skills" },
        ]}
      />
      <main className="">
        <Hero />
        <FlyingButtons />
        <CVMarquee />
        <CursorEffect />
        <Path />
        <CVMarquee />
        <Projects />
        <CVMarquee />
        <Skills />
        <Footer />
      </main>
      <footer className=""></footer>
    </div>
  )
}
