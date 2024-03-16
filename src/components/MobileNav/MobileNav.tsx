'use client';

import { Menu } from '@headlessui/react'
import { m } from 'framer-motion'

import { NAV_LINKS } from '@/config/constants'
import cn from '@/utils/cn';

import { LuMenu as Hamburger } from 'react-icons/lu'

import Button from '@/components/Button'
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
                <Menu.Button
                  title="Menu"
                  aria-label="Menu"
                  htmlType="button"
                  variant="ghost"
                  className={cn('flex h-9 w-9 items-center justify-center p-0')}
                  as={Button}
                >
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
                      'absolute right-0 w-56 origin-top-right rounded-md border-2 border-primary-200 bg-primary-100 p-1',
                    )}
                  >
                    {NAV_LINKS.map(({ path, label, icon }) => (
                      <Menu.Item key={path}>
                        {({ active }) => (
                          <Link
                            path={path}
                            label={label}
                            icon={icon}
                            className={cn(
                              'mx-1 my-0.5 flex items-center gap-2 rounded px-2 py-1.5 font-semibold text-muted-foreground transition-colors duration-150',
                              'hover:bg-accent hover:text-accent-foreground',
                              active ? 'bg-accent text-accent-foreground' : '',
                            )}
                          />
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
