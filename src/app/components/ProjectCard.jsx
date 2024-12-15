import Image from "next/image";
import Link from "next/link";
import { IoCodeSlash, IoPlayOutline } from "react-icons/io5";

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
        <p>
          <b>TechSTack:</b> {data.techStack}
        </p>
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

export default ProjectCard;
