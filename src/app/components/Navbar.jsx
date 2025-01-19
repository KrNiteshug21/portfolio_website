"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import ButtonAnimation from "@/Anim/ButtonAnimation";

const navObj = [
  { name: "Skills", url: "/#skills" },
  { name: "Projects", url: "/#projects" },
  { name: "Education", url: "/#education" },
  { name: "Contact", url: "/#contact" },
];

const NavItems = ({ item }) => {
  const [hoverArrow, setHoverArrow] = useState(false);
  return (
    <Link
      className="flex items-center gap-4 hover:underline"
      onMouseEnter={() => setHoverArrow(true)}
      onMouseLeave={() => setHoverArrow(false)}
      key={item.name}
      href={item.url}
    >
      {item.name} {hoverArrow && <FaArrowRight />}
    </Link>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="top-4 z-10 fixed px-4 w-full">
      <div className="mx-auto sm:max-w-screen-sm md:max-w-screen-md">
        <div className="flex justify-between items-center border-1 border-primary dark:border-dark-text backdrop-blur-md rounded-full">
          <div className="bg-primary dark:bg-light-background px-6 py-1 rounded-full text-2xl text-dark-text dark:text-primary">
            <Link
              className="hover:dark:text-primary/70 hover:text-dark-text/90"
              href="/"
            >
              Nitesh
            </Link>
          </div>

          <div className="block sm:hidden px-4 text-lg">
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <GiHamburgerMenu
                className="cursor-pointer"
                onClick={() => setIsMenuOpen(true)}
                size={24}
              />
            </div>
            {isMenuOpen && (
              <div className="top-0 right-0 left-0 absolute bg-primary p-4 rounded-lg text-dark-text">
                <div className="flex flex-col items-start space-y-4">
                  <IoMdClose
                    className="ml-auto cursor-pointer"
                    size={24}
                    onClick={() => setIsMenuOpen(false)}
                  />
                  {navObj.map((item) => (
                    <NavItems key={item.name} item={item} />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="sm:flex sm:items-center sm:gap-4 hidden px-4 text-lg">
            {navObj.map((item) => (
              <Link key={item.name} href={item.url}>
                <ButtonAnimation className="hover:bg-gray-300 hover:dark:bg-secondary/50 px-2 py-1 rounded-md">
                  {item.name}
                </ButtonAnimation>
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
