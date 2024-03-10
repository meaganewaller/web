"use client";

import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import Logo from "./Logo";
import ToggleDarkMode from "./ToggleDarkMode";
import { CiMenuKebab, CiCircleRemove } from "react-icons/ci";

const Navbar = () => {
  const links = [
    {
      label: "About",
      href: "/meagan",
      links: [],
    },
    {
      label: "Blog",
      href: "/blog",
      links: [],
    },
    {
      label: "Now",
      href: "/now",
      links: [],
    },
    {
      label: "Say Hi",
      href: "/chat",
      links: [],
    },
  ];

  const isSticky = false;
  const showToggleTheme = true;
  // const showRssFeed = false
  const position = "right";

  const updatedIsDropdownOpen = links?.map(() => {
    return false;
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(
    updatedIsDropdownOpen as boolean[],
  );
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState<boolean>(false);

  const handleDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues.forEach((value, i) => {
        if (value === true) {
          newValues[i] = false;
        } else {
          newValues[i] = i === index;
        }
      });

      return newValues;
    });
  };

  const handleCloseDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues[index] = false;

      return newValues;
    });
  };

  const handleToggleMenuOnClick = () => {
    setIsToggleMenuOpen(!isToggleMenuOpen);
  };

  return (
    <header
      className={`top-0 z-40 mx-auto w-full flex-none transition-all duration-100 ease-in-out md:bg-pink-300/50 md:backdrop-blur-sm dark:md:bg-purple-900/80 ${isSticky ? "sticky" : "relative"
        }`}
      id="header"
    >
      <div className="mx-auto max-w-7xl p-3 md:flex md:justify-between md:px-4 md:py-3.5">
        <div className="flex justify-between">
          <Logo
            onClick={() =>
              isToggleMenuOpen
                ? handleToggleMenuOnClick()
                : setIsDropdownOpen(updatedIsDropdownOpen as boolean[])
            }
          />
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="ml-1.5 inline-flex items-center rounded-lg p-2.5 text-sm text-pink-700 transition hover:bg-pink-100 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:text-blue-900 dark:hover:bg-blue-500 dark:focus:ring-blue-700"
              aria-label="Toggle Menu"
              onClick={handleToggleMenuOnClick}
            >
              {isToggleMenuOpen ? (
                <CiCircleRemove size={25} />
              ) : (
                <CiMenuKebab size={25} />
              )}
            </button>
          </div>
        </div>
        <nav
          className={`${isToggleMenuOpen ? "block" : "hidden"
            } h-screen md:w-full ${position === "right"
              ? "justify-end"
              : position === "left"
                ? "justify-start"
                : "justify-center"
            } w-auto overflow-y-auto md:mx-5 md:flex md:h-auto md:items-center md:overflow-visible`}
          aria-label="Main navigation"
        >
          <ul className="flex w-full flex-col gap-x-2 pt-8 text-xl md:w-auto md:flex-row md:self-center md:pt-0 md:text-base">
            <li
              style={{ imageRendering: "pixelated" }}
              className={clsx(
                {
                  hidden: !isToggleMenuOpen,
                  "max-md:flex hidden": isToggleMenuOpen,
                },
                "group hover:decoration-0",
                "text-center dark:text-purple-950 text-pink-900 border-4 border-transparent border-solid [border-image:url('/images/button.png')_4_fill_repeat] hover:[border-image:url('/images/button_hovered.png')_4_fill_repeat]",
              )}
            >
              <Link
                className="flex p-1 px-1.5 text-center font-medium transition duration-150 ease-in-out group-hover:no-underline group-hover:decoration-0"
                href="/"
                onClick={() => handleToggleMenuOnClick()}
              >
                Home
              </Link>
            </li>
            {links?.map(({ label, href, links }, index) => (
              <li
                key={`item-link-${index}`}
                style={{ imageRendering: "pixelated" }}
                className={clsx(
                  "group hover:decoration-0",
                  "text-center border-4 border-transparent border-solid [border-image:url('/images/button.png')_4_fill_repeat] hover:[border-image:url('/images/button_hovered.png')_4_fill_repeat]",
                )}
              >
                {links?.length ? (
                  <>
                    <button
                      type="button"
                      className="flex items-center bg-pink-300 px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-pink-900 group-hover:decoration-0"
                      onClick={() => handleDropdownOnClick(index)}
                    >
                      {label}
                    </button>
                    <ul
                      className={`${isDropdownOpen[index] ? "block" : "md:hidden"
                        } rounded pl-4 font-medium drop-shadow-xl md:absolute md:min-w-[200px] md:bg-pink-50/90 md:pl-0 md:backdrop-blur-md dark:md:bg-blue-900/90`}
                    >
                      {links.map(({ label: label2, href: href2 }, index2) => (
                        <li key={`item-link-${index2}`}>
                          <Link
                            className="whitespace-no-wrap block px-5 py-2 first:rounded-t last:rounded-b md:hover:bg-gray-200 dark:text-blue-900 dark:hover:bg-gray-700"
                            href={href2 as string}
                            onClick={() =>
                              isToggleMenuOpen
                                ? handleToggleMenuOnClick()
                                : handleCloseDropdownOnClick(index)
                            }
                          >
                            {label2}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    className="flex p-1 px-1.5 text-center font-medium text-purple-900 transition duration-150 ease-in-out group-hover:no-underline group-hover:decoration-0 dark:text-gray-900"
                    href={href as string}
                    onClick={() =>
                      isToggleMenuOpen
                        ? handleToggleMenuOnClick()
                        : handleDropdownOnClick(index)
                    }
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {showToggleTheme && (
          <div
            className={`${isToggleMenuOpen ? "block" : "hidden"
              } fixed bottom-0 left-0 w-full justify-end p-3 md:static md:mb-0 md:flex md:w-auto md:self-center md:p-0`}
          >
            <div className="flex w-full items-center justify-between md:w-auto">
              {showToggleTheme && <ToggleDarkMode />}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
