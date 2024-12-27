import ButtonAnimation from "@/Anim/ButtonAnimation";
import CardAnimation from "@/Anim/CardAnimation";
import Image from "next/image";
import Link from "next/link";
import { IoCodeSlash, IoPlayOutline } from "react-icons/io5";

const ProjectCard = ({ data }) => {
  return (
    <CardAnimation className="flex flex-col justify-stretch items-center gap-4 border-2 border-gray-800 dark:border-white rounded-lg overflow-hidden">
      <div className="w-full">
        <Image
          src={data.image[0]}
          alt={data.title}
          width={400}
          height={500}
          className="mx-auto w-full h-full object-center object-cover"
        />
      </div>
      <div className="space-y-2 p-2 rounded-md text-gray-500 dark:text-dark-text">
        <h3 className="font-bold text-3xl text-light-text dark:text-dark-text">
          {data.title}
        </h3>
        <p className="font-thin text-base text-justify dark:text-gray-400">
          {data.description}
        </p>
        <p>
          <b>TechSTack:</b> {data.techStack}
        </p>
        <div className="flex justify-between items-center gap-4 w-full">
          <Link className="flex-auto" target="_blank" href={data.github}>
            <ButtonAnimation className="flex justify-center items-center gap-2 bg-blue-700 px-4 py-2 rounded-md w-full text-white text-xl">
              <span>Github</span>
              <IoCodeSlash size={24} />
            </ButtonAnimation>
          </Link>
          <Link className="flex-auto" target="_blank" href={data.live}>
            <ButtonAnimation className="flex justify-center items-center gap-2 bg-blue-700 px-4 py-2 rounded-md w-full text-white text-xl">
              <span>Live</span>
              <IoPlayOutline size={24} />
            </ButtonAnimation>
          </Link>
        </div>
      </div>
    </CardAnimation>
  );
};

export default ProjectCard;
