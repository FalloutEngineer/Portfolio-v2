import CursorEffect from "../components/cursor-effect/CursorEffect"
import FlyingButtons from "../components/flying-buttons/FlyingButtons"
import Header from "../components/header/Header"
import CustomMarquee from "../components/marquee/CustomMarquee"

import Hero from "./sections/hero/Hero"
import Projects from "./sections/projects/Projects"
import Skills from "./sections/skills/Skills"

export default function Home() {
  const CVMarquee = () => (
    <CustomMarquee
      items={[{ text: "DOWNLOAD CV", url: "#", isDownload: true }]}
    />
  )

  return (
    <div className="font-[family-name:var(--font-inter)] relative">
      <Header
        left={[{ text: "Test", url: "" }]}
        center={[
          { text: "Home", url: "#home" },
          { text: "Projects", url: "#projects" },
          { text: "Skills", url: "#skills" },
          { text: "Path", url: "#path" },
        ]}
        right={[{ text: "Apps", url: "./apps" }]}
      />
      <main className="">
        <Hero />
        <FlyingButtons />
        <CVMarquee />
        <CursorEffect />
        <Projects />
        <Skills />
      </main>
      <footer className=""></footer>
    </div>
  )
}
