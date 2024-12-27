"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";
import SectionWrapper from "../wrapper/SectionWrapper";
import ButtonAnimation from "@/Anim/ButtonAnimation";
import { delay, motion, useInView } from "framer-motion";

const container = {
  hidden: (direction) => ({ opacity: 0, x: direction * 100 }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const item = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.5 });

  return (
    <SectionWrapper>
      <div
        ref={ref}
        className="flex flex-wrap md:flex-nowrap items-center gap-6"
      >
        <motion.div
          variants={container}
          custom={-1}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto md:w-1/3"
        >
          <Image
            src={"/img/Photo.jpeg"}
            width={400}
            height={300}
            priority={true}
            alt="user-photo"
            className="rounded-md"
          />
        </motion.div>

        <motion.div
          custom={1}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-4 md:w-2/3"
        >
          <motion.h2 variants={item} className="font-bold text-6xl">
            Hey, I&apos;m Nitesh
          </motion.h2>
          <motion.p
            variants={item}
            className="text-justify text-lg leading-6 tracking-wider"
          >
            I am a <b>Full-Stack Developer</b> with a knack for building and
            developing web applications. I have a strong passion for learning
            new technologies and building applications that solve real-world
            problems. I have experience in building web applications using
            <b> JavaScript, React, Node.js, Express.js and also NEXTJs</b>. I am
            also experienced in working with databases like MongoDB and MySQL. I
            am a quick learner and a team player who is always willing to go the
            extra mile to get the job done.
          </motion.p>
          <motion.div variants={item} className="flex items-center gap-8 px-4">
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
          </motion.div>
          <motion.div variants={item} className="flex items-center gap-4 my-4">
            <Link href={"/#contact"}>
              <ButtonAnimation className="bg-blue-600 px-4 py-2 rounded-md text-dark-text text-lg">
                Contact Me
              </ButtonAnimation>
            </Link>
            <Link
              download={true}
              href="/docs/NiteshKumar_2106110.pdf"
              alt="resume"
              target="_blank"
            >
              <ButtonAnimation className="bg-blue-600 px-4 py-2 rounded-md text-dark-text text-lg">
                Download my Resume
              </ButtonAnimation>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
