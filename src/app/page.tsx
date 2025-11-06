import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";
import Services from "../components/services";
import Projects from "../components/projects";
import Footer from "../components/footer";
import Stats from "../components/stats";
import Pricing from "../components/pricing";
import Skills from "../components/skills";
import { Contact } from "../components/contact";
import ChatWidget from "../components/Chat";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      

      <Stats />
      <Services />
      <Projects />
      <Skills />
            <Pricing />

      <About />
      <Contact />
    </main>
  )
}
