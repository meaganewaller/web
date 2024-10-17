'use client'

import { m } from 'framer-motion'

import site from '@/config'
import useOnScroll from '@/hooks/use-on-scroll'
import cn from '@/utils/cn'

import Logo from '@/components/Logo'
import MobileNav from '@/components/MobileNav'
import Navbar from '@/components/Navbar'
import ToggleDarkMode from '@/components/ToggleDarkMode'
import Container from '@/components/Container'
import Separator from '@/components/Separator'

const Header = () => {
  const isScrolled = useOnScroll(240)

  return (
    <m.header
      className={cn(
        'saturate-110 top-0 z-50 flex h-[240px] bg-pink-200 dark:bg-green-1000',
        isScrolled ? 'shadow-sm' : '',
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <Container wide={true}>
        <nav className={cn('flex h-16 flex-1 items-center w-full justify-between')}>
          <div className="flex items-center md:gap-2">
            <Logo onClick={() => site.url} />
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
