import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="space-y-10 text-light-text dark:text-dark-text mt-20 mb-4">
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
