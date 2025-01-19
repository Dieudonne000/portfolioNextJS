import Hero from "./hero";
import AboutMe from "./aboutme"
import Techstack from "./techstack"

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <h1 className="">Tech stack</h1>
      <Techstack />
    </main>
  );
}
