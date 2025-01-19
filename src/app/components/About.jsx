"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";
import SectionWrapper from "../wrapper/SectionWrapper";
import ButtonAnimation from "@/Anim/ButtonAnimation";
import { motion, useInView } from "framer-motion";
import { BackgroundBeamsWithCollision } from "./ui/Backgroun-Beam";
import { AuroraBackground } from "./ui/Aurora-Background";

const container = {
  hidden: (direction) => ({
    opacity: "0",
    x: direction && direction * 100,
  }),
  visible: {
    opacity: "1",
    x: "0",
    transition: {
      duration: "0.5",
      ease: "easeInOut",
    },
  },
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.5 });

  return (
    <AuroraBackground>
      <SectionWrapper particle={false} id="about">
        <div
          ref={ref}
          className="flex flex-wrap lg:flex-nowrap lg:justify-center items-center gap-6 mt-20 sm:mt-0"
        >
          <motion.div
            variants={container}
            custom={-1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mx-auto lg:w-1/3"
          >
            <Image
              src={"/img/Photo.jpeg"}
              width={400}
              height={300}
              priority={true}
              alt="user-photo"
              className="object-top border-4 border-primary dark:border-white p-2 rounded-full w-80 h-80 object-cover"
            />
          </motion.div>

          <motion.div
            custom={1}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-4 lg:w-2/3"
          >
            <h2 className="font-bold text-6xl">Hey, I&apos;m Nitesh</h2>
            <p className="text-justify text-lg leading-6 tracking-wider">
              I am a <b>Full-Stack Developer</b> with a knack for building and
              developing web applications. I have a strong passion for learning
              new technologies and building applications that solve real-world
              problems. I have experience in building web applications using
              <b> JavaScript, React, Node.js, Express.js and also NEXTJs</b>. I
              am also experienced in working with databases like MongoDB and
              MySQL. I am a quick learner and a team player who is always
              willing to go the extra mile to get the job done.
            </p>
            <div className="flex items-center gap-8 px-4">
              <Link target="_blank" href="https://github.com/KrNiteshug21">
                <IoLogoGithub size={36} />
              </Link>
              <Link
                className="bg-dark-text rounded"
                target="_blank"
                href="https://www.linkedin.com/in/nitesh-kumar-021947242/"
              >
                <IoLogoLinkedin color="#0072b1" size={36} />
              </Link>
              <Link target="_blank" href="mailto:niteshkr8953@gmail.com">
                <IoMail size={36} />
              </Link>
            </div>
            <div className="flex sm:flex-row flex-col items-center gap-4 my-4">
              <Link className="w-full" href={"/#contact"}>
                <ButtonAnimation className="bg-blue-600 px-4 py-2 rounded-md w-full text-dark-text text-lg">
                  Contact Me
                </ButtonAnimation>
              </Link>
              <Link
                className="w-full"
                download={true}
                href="/docs/NiteshKumar_2106110.pdf"
                alt="resume"
                target="_blank"
              >
                <ButtonAnimation className="bg-blue-600 px-4 py-2 rounded-md w-full text-dark-text text-lg">
                  Download my Resume
                </ButtonAnimation>
              </Link>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </AuroraBackground>
  );
};

export default About;
