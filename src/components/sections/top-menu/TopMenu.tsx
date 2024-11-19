"use client";

import React, { useState } from "react";
// eslint-disable-next-line camelcase
import { Noto_Serif_Display, Noto_Serif_Gujarati } from "next/font/google";

const notoSerifDisplay = Noto_Serif_Display({
  variable: "--font-noto-serif-display",
  weight: "300",
});

const notoSerifGujarati = Noto_Serif_Gujarati({
  variable: "--font-noto-serif-display",
  weight: "500",
});

interface TopMenuProps {
  sections: string[];
}

const TopMenu: React.FC<TopMenuProps> = ({ sections }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative top-0 left-0 w-screen z-10 items-center">
      <nav>
        <div className="flex text-black flex-wrap items-center mx-auto p-5 justify-center">
          <h1
            className={`${notoSerifDisplay.className} text-2xl md:text-3xl font-extralight font-serif tracking-widest pr-4 whitespace-nowrap`}
          >
            ARTISTA MAREA
          </h1>

          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg focus:outline-none dark:text-gray-400"
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
            <ul
              className={`flex flex-col items-center mt-8 lg:mt-0 lg:flex-row lg:space-x-4 lg:text-xl ${notoSerifGujarati.className}`}
            >
              {sections.map((section, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline">
                    {section.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`hidden lg:block w-full lg:w-auto lg:max-h-full`}
            id="navbar-hamburger"
          >
            <ul
              className={`flex flex-col items-center mt-8 lg:mt-0 lg:flex-row lg:space-x-4 lg:text-md ${notoSerifGujarati.className}`}
            >
              {sections.map((section, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline">
                    {section.toUpperCase()}
                  </a>
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
