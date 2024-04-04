'use client';

import NextLink from 'next/link';
import React, { useState } from 'react';
import { m } from 'framer-motion';
import cn from '@/utils/cn';
import { IconType } from 'react-icons';
import ExternalLink from '@/components/ExternalLink';
import { HiDownload, HiDocument } from 'react-icons/hi';
import { HiLink } from 'react-icons/hi2';
import { LinkProps as NextLinkProps } from 'next/link';

interface LinkProps extends NextLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  icon?: IconType
  skewOnHover?: boolean;
}

const Link = ({ href = '', children, icon: Icon, className = '', skewOnHover = true }: LinkProps) => {
  const [hover, setHover] = useState(false);

  const internal = href.startsWith('/') || href.startsWith('#');
  const external = !internal || (href.startsWith('http') && !href.includes(process.env.NEXT_PUBLIC_BASE_URL || 'localhost'));
  const download = href.startsWith('download:');
  const file = href.startsWith('file:');
  const anchor = href.startsWith('#');

  if (external) {
    return (
      <ExternalLink text={children} link={href} className={className} />
    )
  }

  return (
    <>
      <NextLink
        href={href}
        className={cn(
          `flex text-pink-800 hover:text-blue-700 transition-all pointer-events-auto font-medium hover:no-underline dark:text-purple-900 dark:hover:text-pink-900 group`,
          `duration-200 transform`,
          skewOnHover && `hover:skew-x-[15deg]`,
          className)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className='relative'>
          {Icon && <><Icon size={18} className='inline mr-2 font-thin text-blue-700 dark:text-pink-900 group-hover:text-pink-900 group-hover:dark:text-purple-900' /></>}
          {anchor && <HiLink size={18} className='inline mr-1' />}
          {children}
          {download && <HiDownload size={18} className='inline mr-1' />}
          {file && <HiDocument size={18} className='inline mr-1' />}
          <m.div
            initial={{ width: 0 }}
            animate={{ width: hover ? '100%' : 0 }}
            className='absolute bg-blue-700 h-[2px] bottom-0 left-0'
          />
        </div>
      </NextLink>
    </>
  )
}

export default Link;
