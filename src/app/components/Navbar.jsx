"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

const navObj = [
  { name: "Skills", link: "/#skills" },
  { name: "Projects", link: "/#projects" },
  { name: "Education", link: "/#education" },
  { name: "Achievement", link: "/#achievement" },
  { name: "Contact", link: "/#contact" },
];

const NavItems = () => {
  return (
    <>
      {navObj.map((item) => {
        const [hoverArrow, setHoverArrow] = useState(false);
        return (
          <Link
            className="flex items-center gap-4 hover:underline"
            onMouseEnter={() => setHoverArrow(true)}
            onMouseLeave={() => setHoverArrow(false)}
            key={item.name}
            href={item.link}
          >
            {item.name} {hoverArrow && <FaArrowRight />}
          </Link>
        );
      })}
    </>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="top-4 sticky px-4">
      <div className="mx-auto sm:max-w-screen-sm md:max-w-screen-md">
        <div className="flex justify-between items-center border-2 border-primary dark:border-dark-text backdrop-blur-md rounded-full">
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
                  <NavItems />
                </div>
              </div>
            )}
          </div>

          <div className="sm:flex sm:items-center sm:gap-4 hidden px-4 text-lg">
            {navObj.map((item) => (
              <Link
                className="hover:underline"
                key={item.name}
                href={item.link}
              >
                {item.name}
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
