import Hero from "./hero";
import AboutMe from "./aboutme"
import Techstack from "./techstack"
import Footer from "./footer";
import Project from "./project";
import Experience from "./experience";
import Contact from "./contact";
import Scroll from "./scroll";
import { Suspense } from "react";


export default function Home() {
  return (
    <main className="pt-20">
        <section id="hero">
          <Hero />
        </section>
        <Scroll>
        <section id="aboutme">
          <AboutMe />
        </section>
        </Scroll>
        <Scroll>
        <section id="techstack">
          <Techstack />
        </section>
        </Scroll>
        <Scroll>
        <section id="project">
          <Project />
        </section>
        </Scroll>
        <Scroll>
        <section id="experience">
          <Experience />
        </section>
        </Scroll>
        <section id="contact">
          <Contact />
        </section>
        <footer id="footer">
          <Footer />
        </footer>
      </main>
  );
}
