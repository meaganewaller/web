'use client'

import { usePathname } from 'next/navigation'

import { NAV_LINKS } from '@/config/constants'
import cn from '@/utils/cn'

import Link from '@/components/Link'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <div className={cn('hidden', 'md:flex')}>
      <ul className={cn('flex md:gap-1')}>
        {NAV_LINKS.filter(({ onlyShowOnDropdownMenu }) => !onlyShowOnDropdownMenu).map(({ path, label }) => {
          const isActive = pathname === path || pathname.startsWith(path)

          return (
            <li
              key={path}
              className={cn(
                'relative px-2',
                isActive
                  ? 'underline underline-offset-4 decoration-1 decoration-purple-600 decoration-wavy hover:no-underline dark:decoration-yellow-100'
                  : '',
              )}
            >
              <Link
                className={cn(
                  'text-lg font-medium text-purple-900 dark:text-yellow-400 hover:text-purple-800 dark:hover:text-yellow-200',
                )}
                href={path}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Navbar
