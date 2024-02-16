'use client';

import { createContext, useEffect, useRef } from 'react';
import { ThemeProvider, useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { Analytics } from '@vercel/analytics/react';

export interface ProvidersProps {
  children: React.ReactNode;
}

const usePrevious = <T,>(value: T): T | undefined => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

const ThemeWatcher = (): null => {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const onMediaChange = () => {
      const systemTheme = media.matches ? 'dark' : 'light';
      if (resolvedTheme === systemTheme) {
        setTheme('system');
      }
    };

    onMediaChange();
    media.addEventListener('change', onMediaChange);

    return () => {
      media.removeEventListener('change', onMediaChange);
    };
  }, [resolvedTheme, setTheme]);

  return null;
};

export const AppContext = createContext<{ previousPathname?: string }>({});

const Providers = ({ children }: ProvidersProps): JSX.Element => {
  const pathname = usePathname();
  const previousPathname = usePrevious(pathname);

  return (
    <AppContext.Provider value={{ previousPathname }}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <ThemeWatcher />
        {children}
        <Analytics />
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default Providers;
