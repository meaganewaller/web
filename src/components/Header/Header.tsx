'use client';

import { m } from 'framer-motion';

import * as React from 'react'
import useOnScroll from '@/hooks/use-on-scroll';
import cn from '@/utils/cn';

import { useRouter } from 'next/navigation';
import Logo from '@/components/Logo';
import MobileNav from '@/components/MobileNav';
import Navbar from '@/components/Navbar';
import ToggleDarkMode from "@/components/ToggleDarkMode";
import Container from '@/components/Container';
import Separator from '@/components/Separator';

const Header = () => {
  const isScrolled = useOnScroll();
  const router = useRouter();

  return (
    <m.header
      className={cn(
        'saturate-110 sticky top-0 z-50 flex h-[210px] bg-primary-300 dark:bg-zinc-950',
        isScrolled ? 'shadow-sm' : '',
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <Container wide={true}>
        <nav className={cn('flex h-16 flex-1 items-center justify-between')}>
          <div className={cn('flex items-center md:gap-2')}>
            <Logo onClick={() => router.push('/')} />
          </div>
          <div className={cn('flex items-center gap-2')}>
            <Navbar />
            <Separator orientation="vertical" className="h-6" />
            <div className={cn('flex items-center gap-1')}>
              <ToggleDarkMode />
              <MobileNav />
            </div>
          </div>
        </nav>
      </Container>
    </m.header>
  )
}

export default Header
