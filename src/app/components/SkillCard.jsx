import Image from "next/image";
import CardAnimation from "@/Anim/CardAnimation";

const SkillCard = ({ skill }) => {
  return (
    <CardAnimation
      triggerHoverAnimation={true}
      className="flex-auto sm:flex-none place-content-center space-y-4 grid bg-gray-200 dark:bg-gray-800 hover:shadow-md p-2 rounded-md w-32 h-36 text-center text-primary dark:text-white/90"
    >
      <Image
        src={skill.src}
        alt={skill.title}
        width={64}
        height={64}
        className="mx-auto w-16 h-16"
      />
      <p className="font-semibold text-lg">{skill.title}</p>
    </CardAnimation>
  );
};

export default SkillCard;
