import FlyingButtons from "../components/flying-buttons/FlyingButtons"
import Header from "../components/header/Header"
import Hero from "./sections/Hero"

export default function Home() {
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
      </main>
      <footer className=""></footer>
    </div>
  )
}
