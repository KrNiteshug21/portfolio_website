import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCodeSlash, IoPlayOutline } from "react-icons/io5";

const travelBuddy = {
  title: "Travel Buddy",
  description:
    "Travel Buddy is a website where you can find buddies to travel with you and split the bill with. You can create trips and invite other people to join and make the plans accordingly.",
  github: "https://github.com/KrNiteshug21/Travel-Bud",
  live: "https://travel-bud-alpha.vercel.app/",
  image: [
    "/img/travel-buddy/1.png",
    "/img/travel-buddy/2.png",
    "/img/travel-buddy/3.png",
    "/img/travel-buddy/4.png",
    "/img/travel-buddy/5.png",
    "/img/travel-buddy/6.png",
  ],
  techStack: "NextJs, Tailwind, MongoDb, Framer Motion",
};

const moviedise = {
  title: "Moviedise",
  description:
    "Moviedise is frontend only website where one can see trending, popular, top rated movies and tv show see their ratings, popularity, trailers, etc and decide which one they prefer.",
  github: "https://github.com/KrNiteshug21/MovieDise",
  live: "https://react-movie-app-plum-tau.vercel.app/",
  image: [
    "/img/moviedise/1.png",
    "/img/moviedise/2.png",
    "/img/moviedise/3.png",
    "/img/moviedise/4.png",
    "/img/moviedise/5.png",
    "/img/moviedise/6.png",
  ],
  techStack: "CSS, ReactJs, API, Framer Motion",
};

const phoneShop = {
  title: "Phone Shop",
  description:
    "Phone Shop is an e-commerce website where users can buy mobile phones. Here one can view different phones and its details such as price, specifications, dimensions, etc. Also a cart page is added where user can track its cart items",
  github: "https://github.com/KrNiteshug21/ReactPhoneShopping",
  live: "https://react-phone-shopping.vercel.app/",
  image: [
    "/img/react-phone-shop/1.png",
    "/img/react-phone-shop/2.png",
    "/img/react-phone-shop/3.png",
    "/img/react-phone-shop/4.png",
  ],
  techStack: "ReactJs, Context API, Framer Motion",
};

const ProjectCard = ({ data }) => {
  return (
    <div className="flex flex-col justify-start items-center gap-4 border-2 border-gray-800 dark:border-white rounded-lg w-[400px] overflow-hidden">
      <div className="">
        <Image
          src={data.image[0]}
          alt={data.title}
          width={400}
          height={400}
          className="mx-auto"
        />
      </div>
      <div className="space-y-4 p-4 rounded-md text-gray-500 dark:text-dark-text">
        <h3 className="font-bold text-3xl text-light-text dark:text-dark-text">
          {data.title}
        </h3>
        <p className="font-thin text-base text-justify dark:text-gray-400">
          {data.description}
        </p>
        <p>TechSTack: {data.techStack}</p>
        <div className="flex items-center gap-4">
          <Link target="_blank" href={data.github}>
            <IoCodeSlash size={28} />
          </Link>
          <Link target="_blank" href={data.live}>
            <IoPlayOutline size={28} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="mx-auto px-4 min-h-screen text-primary dark:text-dark-text">
      <div>
        <h2 className="mb-8 font-bold text-4xl text-center underline">
          Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <ProjectCard data={travelBuddy} />
          <ProjectCard data={moviedise} />
          <ProjectCard data={phoneShop} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
