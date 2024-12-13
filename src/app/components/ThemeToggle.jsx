"use client";
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { CiLight, CiDark } from "react-icons/ci";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <button className="text-black dark:text-white hover:underline">
      {theme === "light" ? (
        <CiDark size={24} onClick={toggleTheme} />
      ) : (
        <CiLight size={24} onClick={toggleTheme} />
      )}
    </button>
  );
};

export default ThemeToggle;
