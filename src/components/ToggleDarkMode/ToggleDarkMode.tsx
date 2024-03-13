"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { CiSun, CiCloudMoon } from "react-icons/ci";

const ToggleDarkMode = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  const handleOnClick = () =>
    setTheme(currentTheme === "dark" ? "light" : "dark");

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      onClick={handleOnClick}
      className="inline-block rounded-lg p-1 text-sm text-pink-900 hover:text-pink-700 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:text-purple-50 dark:hover:text-purple-300 dark:focus:ring-purple-500"
      aria-label="Toggle Dark Mode"
    >
      {mounted ? (
        currentTheme === "dark" ? (
          <CiSun size={70} className="text-purple-500 hover:text-purple-400" />
        ) : (
          <CiCloudMoon
            size={70}
            className="text-pink-500 hover:text-pink-400"
          />
        )
      ) : (
        <div className="size-8" />
      )}
    </button>
  );
};

export default ToggleDarkMode;
