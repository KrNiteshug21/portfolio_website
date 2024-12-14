import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className=" text-light-text dark:text-dark-text mt-20">
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
