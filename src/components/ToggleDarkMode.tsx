'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { IconSun, IconMoon } from '@tabler/icons-react';

const ToggleDarkMode = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const handleOnClick = () => setTheme(currentTheme === 'dark' ? 'light' : 'dark');

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      onClick={handleOnClick}
      className="inline-block rounded-lg p-1 text-sm text-neutral-500 hover:bg-pink-300 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:text-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
      aria-label="Toggle Dark Mode"
    >
      {mounted ? (
        currentTheme === 'dark' ? (
          <IconMoon className="size-8" />
        ) : (
          <IconSun className="size-8" />
        )
      ) : (
        <div className="size-8"></div>
      )}
    </button>
  );
};

export default ToggleDarkMode;
