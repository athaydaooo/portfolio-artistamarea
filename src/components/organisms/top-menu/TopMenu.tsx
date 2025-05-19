"use client";

import Link from "next/link";
import React, { Fragment, useState } from "react";

interface MenuItem {
  name: string; // Nome do subitem (ex: "Curta", "Clipe")
  slug: string; // Rota do subitem (ex: "/curta", "/clipe")
}
interface TopMenuProps {
  sections: {
    name: string;
    slug?: string;
    items?: MenuItem[];
  }[];
}

const TopMenu: React.FC<TopMenuProps> = ({ sections }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = (clickedSubmenu: string) => {
    if (clickedSubmenu === subMenuOpen) {
      setSubMenuOpen("");
    } else {
      setSubMenuOpen(clickedSubmenu);
    }
  };

  return (
    <header className="relative top-0 left-0 w-full z-10 items-center bg-inherit lg:h-[10vh]">
      <nav>
        <div className="flex flex-wrap items-center mx-auto pt-5 justify-center">
          {/* desktop and mobile logo */}

          {/* desktop navitems */}
          <div className="hidden lg:block w-full lg:w-auto lg:max-h-full ">
            <ul className="flex flex-col items-center mt-8 lg:mt-0 lg:flex-row lg:space-x-4 lg:text-md 2k:text-2xl  ">
              {sections.map((section, index) => {
                return (
                  <Fragment key={`fragment-${index}`}>
                    {!(index === Math.floor(sections.length / 2)) || (
                      <li key="desktopLogo" className="flex text-center">
                        <h1 className="text-2xl lg:text-5xl 2k:text-6xl font-extralight px-2 p-4">
                          ARTISTA MAREA
                        </h1>
                      </li>
                    )}

                    <li
                      key={index}
                      className="flex text-center justify-center group"
                    >
                      <Link
                        href={`${section.slug || "#"}`}
                        className="hover:underline"
                      >
                        {section.name.toUpperCase()}
                      </Link>
                      {section.items && section.items.length > 0 && (
                        <ul
                          className="flex flex-col absolute items-center mt-10 p-0 group-hover:p-4 gap-2 bg-black text-white 
             max-h-0 overflow-hidden group-hover:max-h-40 
             transition-all duration-500 ease-in-out z-50 w-48"
                        >
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Link
                                href={item.slug}
                                className="hover:underline"
                              >
                                {item.name.toUpperCase()}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  </Fragment>
                );
              })}
            </ul>
          </div>

          {/* mobile navitems */}
          <h1 className="lg:hidden text-2xl lg:text-5xl 2k:text-6xl font-extralight px-2">
            ARTISTA MAREA
          </h1>
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
            className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"} w-full `}
            id="navbar-hamburger"
          >
            <ul className="flex flex-col items-center mt-8 lg:mt-0 lg:flex-row lg:space-x-4 lg:text-xl">
              {sections.map((section, index) => (
                <li
                  key={index}
                  className="flex flex-col text-center justify-center group"
                >
                  <Link
                    href={section.slug || "#"}
                    className="hover:underline"
                    data-collapse-toggle={`${section.name}-submenu`}
                    aria-controls={`${section.name}-submenu`}
                    aria-expanded={subMenuOpen === section.name}
                    onClick={() => {
                      toggleSubMenu(section.name);
                    }}
                  >
                    {section.name.toUpperCase()}
                  </Link>

                  {section.items && section.items.length > 0 && (
                    <ul
                      id={`${section.name}-submenu`}
                      className={`flex flex-col relative w-[100vw] items-center bg-black text-white 
                      ${subMenuOpen === section.name ? "visible max-h-60 py-4" : "collapse max-h-0 py-0"}
                      transition-all duration-500 ease-in-out z-50`}
                    >
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <Link href={item.slug} className="hover:underline">
                            {item.name.toUpperCase()}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
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
