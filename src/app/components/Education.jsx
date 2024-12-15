import React from "react";
import SectionWrapper from "../wrapper/SectionWrapper";
import Image from "next/image";

const Education = () => {
  return (
    <SectionWrapper id="education">
      <div>
        <h2 className="mb-8 font-bold text-4xl underline">Education</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="rounded-md overflow-hidden">
              <Image
                src="/img/edu/nitp-logo.jpg"
                width={200}
                height={200}
                alt="NIT Patna"
              />
            </div>
            <div className="text-gray-500 text-lg dark:text-dark-text leading-8">
              <h3 className="font-bold text-3xl text-primary dark:text-dark-text">
                Bachelor's of Technology
              </h3>
              <p>Computer Science and Engineering</p>
              <p className="">National Institute Of Technology Patna</p>
              <p className="">2021 - 2025</p>
              <p>Status: Currently pursuing</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded-md overflow-hidden">
              <Image
                src="/img/edu/oxford-logo.jpg"
                width={200}
                height={200}
                alt="Oxford Public School"
              />
            </div>
            <div className="text-gray-500 text-lg dark:text-dark-text leading-8">
              <h3 className="font-bold text-3xl text-primary dark:text-dark-text">
                Higher Secondary School
              </h3>
              <p>Physics, Chemistry and Math</p>
              <p className="">Oxford Public School</p>
              <p className="">2019 - 2021</p>
              <p>Status: Completed</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded-md overflow-hidden">
              <Image
                src="/img/edu/jude-logo2.jpg"
                width={200}
                height={200}
                alt="Oxford Public School"
              />
            </div>
            <div className="text-gray-500 text-lg dark:text-dark-text leading-8">
              <h3 className="font-bold text-3xl text-primary dark:text-dark-text">
                Matriculation
              </h3>
              <p>Physics, Chemistry and Math</p>
              <p className="">St. Jude's School</p>
              <p className="">2015 - 2019</p>
              <p>Status: Completed</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Education;
