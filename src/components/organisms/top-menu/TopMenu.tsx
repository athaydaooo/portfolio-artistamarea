"use client";

import React, { useState } from "react";
import Link from "next/link";

interface TopMenuProps {
  sections: { name: string; slug: string }[];
}

const TopMenu: React.FC<TopMenuProps> = ({ sections }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative lg:absolute top-0 left-0 w-full z-10 items-center bg-inherit">
      <nav>
        <div className="flex  flex-wrap items-center mx-auto p-5 justify-center">
          {/* desktop and mobile logo */}

          {/* desktop navitems */}
          <div className={`hidden lg:block w-full lg:w-auto lg:max-h-full`}>
            <ul className="flex flex-col items-center mt-8 lg:mt-0 lg:flex-row lg:space-x-4 lg:text-xs 2k:text-2xl gap-2">
              {sections.map((section, index) => {
                if (index === Math.floor(sections.length / 2)) {
                  return (
                    <>
                      <h1 className="text-2xl lg:text-3xl 2k:text-7xl font-extralight px-2">
                        ARTISTA MAREA
                      </h1>
                      <li key={index} className="text-center">
                        <Link
                          href={`${section.slug}`}
                          className="hover:underline"
                        >
                          {section.name.toUpperCase()}
                        </Link>
                      </li>
                    </>
                  );
                }

                return (
                  <li key={index}>
                    <Link href={`${section.slug}`} className="hover:underline">
                      {section.name.toUpperCase()}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* mobile navitems */}
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-sm rounded-lg focus:outline-none "
            aria-controls="navbar-hamburger"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"} w-full `}
            id="navbar-hamburger"
          >
            <ul className="flex flex-col items-center mt-8 lg:mt-0 lg:flex-row lg:space-x-4 lg:text-xl">
              {sections.map((section, index) => (
                <li key={index}>
                  <Link href={section.slug} className="hover:underline">
                    {section.name.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopMenu;
