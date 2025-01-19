import Image from "next/image";

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

export default EducationItem;
