'use client';

import { Menu } from '@headlessui/react'
import { m } from 'framer-motion'

import { NAV_LINKS } from '@/config/constants'
import cn from '@/utils/cn';

import { LuMenu as Hamburger } from 'react-icons/lu'

import Link from '@/components/Link'

const animation = {
  hide: { opacity: 0, y: 16 },
  show: { opacity: 1, transition: { duration: 0.18 } },
}

const MobileNav = ({ sticky = false }: { sticky?: boolean }) => {
  return (
    <div className={cn('flex', !sticky && 'md:hidden')}>
      <div className={cn('flex items-center text-sm')}>
        <div className={cn('relative')}>
          <Menu>
            {({ open }) => (
              <>
                <Menu.Button className={cn('flex h-9 w-9 items-center justify-center p-0 hover:text-blue-700')}>
                  <Hamburger size={18} className={cn('')} />
                </Menu.Button>
                {open && (
                  <Menu.Items
                    static
                    as={m.div}
                    variants={animation}
                    initial="hide"
                    animate="show"
                    className={cn(
                      'absolute right-0 w-56 origin-top-right rounded-md border-2 border-pink-200 bg-purple-100 text-blue-900 p-1',
                    )}
                  >
                    {NAV_LINKS.map(({ path, label, icon }) => (
                      <Menu.Item key={path}>
                        {({ active }) => (
                          <Link
                            href={path}
                            icon={icon}
                            skewOnHover={false}
                            className={cn(
                              'mx-1 my-0.5 flex items-center gap-2 rounded px-2 py-1.5 font-semibold transition-colors duration-150',
                              'hover:bg-yellow-200',
                              active ? 'bg-blue-200 text-blue-900' : '',
                            )}
                          >
                            {label}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                )}
              </>
            )}
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
