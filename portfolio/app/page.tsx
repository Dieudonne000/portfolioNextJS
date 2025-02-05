import Hero from "./hero";
import AboutMe from "./aboutme"
import Techstack from "./techstack"
import Footer from "./footer";
import Project from "./project";
import Experience from "./experience";
import Contact from "./contact";
import Scroll from "./scroll";
import Scroll1 from "./scroll1";

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
        <Scroll1>
        <section id="techstack">
          <Techstack />
        </section>
        </Scroll1>
        <Scroll>
        <section id="project">
          <Project />
        </section>
        </Scroll>
        <Scroll1>
        <section id="experience">
          <Experience />
        </section>
        </Scroll1>
        <section id="contact">
          <Contact />
        </section>
        <footer id="footer">
          <Footer />
        </footer>
      </main>
  );
}
