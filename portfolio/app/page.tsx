import Hero from "./hero";
import AboutMe from "./aboutme"
import Techstack from "./techstack"
import Footer from "./footer";
import Project from "./project";
import Experience from "./experience";
import Contact from "./contact";

export default function Home() {
  return (
    <main className="pt-20">
        <section id="hero">
          <Hero />
        </section>
        <section id="aboutme">
          <AboutMe />
        </section>
        <section id="techstack">
          <Techstack />
        </section>
        <section id="project">
          <Project />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <footer id="footer">
          <Footer />
        </footer>
      </main>
  );
}
