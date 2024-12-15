"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CiLight, CiDark } from "react-icons/ci";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure this code runs only on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // If not mounted, don't render anything to avoid SSR mismatch
  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button className="text-black dark:text-dark-text hover:underline">
      {theme === "light" ? (
        <CiDark size={24} onClick={toggleTheme} />
      ) : (
        <CiLight size={24} onClick={toggleTheme} />
      )}
    </button>
  );
};

export default ThemeToggle;
