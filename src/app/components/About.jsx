import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";

const About = () => {
  return (
    <section className="mx-auto px-4 max-w-screen-lg text-primary dark:text-white">
      <div className="flex items-center gap-4">
        <div className="w-1/3">
          <Image
            src={"/img/Photo.jpeg"}
            width={400}
            height={400}
            alt="user-photo"
            className="rounded-md"
          />
        </div>
        <div className="space-y-4 w-2/3">
          <h2 className="mt-4 font-bold text-6xl">Hey, I'm Nitesh</h2>
          <p className="mt-4 text-justify text-lg leading-8 tracking-wider">
            I am a full-stack developer with a kanck for building and developing
            web applications. I have a strong passion for learning new
            technologies and building applications that solve real-world
            problems. I have experience in building web applications using
            JavaScript, React, Node.js, and Express.js. I am also experienced in
            working with databases like MongoDB and MySQL. I am a quick learner
            and a team player who is always willing to go the extra mile to get
            the job done.
          </p>
          <div className="flex items-center gap-8 px-4">
            <Link target="_blank" href="https://github.com/KrNiteshug21">
              <IoLogoGithub size={36} />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/nitesh-kumar-021947242/"
            >
              <IoLogoLinkedin size={36} />
            </Link>
            <Link target="_blank" href="mailto:niteshkr8953@gmail.com">
              <IoMail size={36} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
