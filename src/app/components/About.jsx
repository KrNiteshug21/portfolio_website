import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";

const About = () => {
  return (
    <section className="mx-auto px-4 max-w-screen-lg min-h-screen text-primary dark:text-dark-text">
      <div className="flex flex-wrap md:flex-nowrap items-center gap-6">
        <div className="mx-auto md:w-1/3">
          <Image
            src={"/img/Photo.jpeg"}
            width={400}
            height={400}
            alt="user-photo"
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col gap-4 md:w-2/3">
          <h2 className="font-bold text-6xl">Hey, I'm Nitesh</h2>
          <p className="text-justify text-lg leading-6 tracking-wider">
            I am a <b>Full-Stack Developer</b> with a knack for building and
            developing web applications. I have a strong passion for learning
            new technologies and building applications that solve real-world
            problems. I have experience in building web applications using
            <b> JavaScript, React, Node.js, Express.js and also NEXTJs</b>. I am
            also experienced in working with databases like MongoDB and MySQL. I
            am a quick learner and a team player who is always willing to go the
            extra mile to get the job done.
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
          <div className="flex items-center gap-4 mt-4">
            <Link
              href={"/"}
              className="bg-[#0072b1] px-4 py-2 rounded-md text-dark-text"
            >
              Contact me
            </Link>
            <Link
              href="./NiteshKumar_Resume.pdf"
              alt="resume"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0072b1] px-4 py-2 rounded-md text-dark-text"
            >
              Download My resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
