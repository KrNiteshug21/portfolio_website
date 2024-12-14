"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

const navObj = [
  { name: "Skills", link: "/skills" },
  { name: "Projects", link: "/projects" },
  { name: "Blogs", link: "/blogs" },
  { name: "Achievement", link: "/achievement" },
  { name: "Contact", link: "/contact" },
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
        <div className="flex justify-between items-center border-2 dark:border-white backdrop-blur-md border-black rounded-full">
          <div className="bg-dark-background dark:bg-light-background px-6 py-1 rounded-full text-2xl text-white dark:text-black">
            <Link
              className="hover:dark:text-black/70 hover:text-white/90"
              href="/"
            >
              Nitesh
            </Link>
          </div>

          <div className="block sm:hidden px-4 text-lg">
            <GiHamburgerMenu
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
              size={24}
            />
            {isMenuOpen && (
              <div className="top-0 right-4 bottom-auto left-4 absolute bg-dark-background p-4 rounded-lg text-white">
                <div className="flex flex-col items-start space-y-4">
                  <IoMdClose
                    className="ml-auto cursor-pointer"
                    size={24}
                    onClick={() => setIsMenuOpen(false)}
                  />
                  <NavItems />
                  <ThemeToggle />
                </div>
              </div>
            )}
          </div>

          <div className="sm:flex sm:items-center sm:gap-4 hidden px-4 text-lg">
            <Link className="hover:underline" href="/">
              Skills
            </Link>
            <Link className="hover:underline" href="/">
              Projects
            </Link>
            <Link className="hover:underline" href="/">
              Blogs
            </Link>
            <Link className="hover:underline" href="/">
              Achievement
            </Link>
            <Link className="hover:underline" href="/">
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
