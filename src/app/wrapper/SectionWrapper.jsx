"use client";
import { useTheme } from "next-themes";
import { Particles } from "../components/ui/Particles";

const SectionWrapper = ({
  children,
  id = "",
  className = "",
  particle = true,
}) => {
  const { theme } = useTheme();

  return (
    <section
      id={id}
      className={`${className} relative items-center grid scroll-m-6 mx-auto px-4 max-w-6xl min-h-screen text-primary dark:text-dark-text`}
    >
      {particle ? (
        <Particles
          className="absolute inset-0 w-full"
          quantity={100}
          ease={80}
          color={theme === "dark" ? "#ffffff" : "#000000"}
          refresh
        />
      ) : null}
      {children}
    </section>
  );
};

export default SectionWrapper;
