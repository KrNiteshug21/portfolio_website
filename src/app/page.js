import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="space-y-10 text-light-text dark:text-dark-text  mb-4">
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
