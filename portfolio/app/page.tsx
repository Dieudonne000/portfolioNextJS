import Hero from "./hero";
import AboutMe from "./aboutme"
import Techstack from "./techstack"
import Footer from "./footer";
import Project from "./project";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Techstack />
      <Project />
      <Footer />
    </main>
  );
}
