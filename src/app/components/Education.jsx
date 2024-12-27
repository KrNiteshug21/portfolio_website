import React from "react";
import SectionWrapper from "../wrapper/SectionWrapper";
import Image from "next/image";
import { TextRevealAnimation } from "@/Anim/TextRevealAnimation";

const educationData = [
  {
    logo: "/img/edu/nitp-logo.jpg",
    eduType: "Bachelor's of Technology",
    course: "Computer Science and Engineering",
    institution: "National Institute Of Technology Patna",
    duration: "2021-25",
    status: "Currently pursuing",
  },
  {
    logo: "/img/edu/oxford-logo.jpg",
    eduType: "Higher Secondary School",
    course: "Physics, Chemistry and Math",
    institution: "Oxford Public School",
    duration: "2019-21",
    status: "Completed",
  },
  {
    logo: "/img/edu/jude-logo2.jpg",
    eduType: "Matriculation",
    course: "Physics, Chemistry and Math",
    institution: "St. Jude's School",
    duration: "2015-19",
    status: "Completed",
  },
];

const EducationItem = ({ edu }) => {
  return (
    <div
      key={edu.institution}
      className="flex sm:flex-row flex-col flex-auto sm:flex-none sm:items-center gap-4"
    >
      <div className="rounded-md overflow-hidden">
        <Image
          src={edu.logo}
          width={300}
          height={300}
          alt={edu.institution}
          className=""
        />
      </div>
      <div className="w-[300px] sm:w-full text-gray-500 text-lg dark:text-dark-text leading-8">
        <h3 className="font-bold text-3xl text-primary dark:text-dark-text">
          {edu.eduType}
        </h3>
        <p>{edu.course}</p>
        <p className="">{edu.institution}</p>
        <p className="">{edu.duration}</p>
        <p>Status: {edu.status}</p>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <SectionWrapper id="education">
      <div>
        <h2 className="mb-8 font-bold text-4xl underline">
          <TextRevealAnimation text={"Education"} />
        </h2>
        <div className="space-y-4">
          {educationData.map((edu) => (
            <EducationItem key={edu.institution} edu={edu} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Education;
