'use client';

import NextLink from 'next/link';
import React, { useState } from 'react';
import { m } from 'framer-motion';
import cn from '@/utils/cn';
import { IconType } from 'react-icons';
import ExternalLink from '@/components/ExternalLink';
import { HiDownload, HiDocument } from 'react-icons/hi';
import { HiLink } from 'react-icons/hi2';

interface LinkProps {
  path: string
  label: string
  icon?: IconType
  className?: string
}

const Link = ({ path, label, icon: Icon, className = '' }: LinkProps) => {
  const [hover, setHover] = useState(false);

  const internal = path.startsWith('/') || path.startsWith('#');
  const external = !internal || (path.startsWith('http') && !path.includes(process.env.NEXT_PUBLIC_BASE_URL || 'localhost'));
  const download = path.startsWith('download:');
  const file = path.startsWith('file:');
  const anchor = path.startsWith('#');

  if (external) {
    return (
      <ExternalLink text={label} link={path} />
    )
  }

  return (
    <>
      <NextLink
        href={path}
        className={cn(`flex text-base hover:text-primary-700 transition-all pointer-events-auto font-medium hover:no-underline`, className)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >

        <div className='relative'>
          {Icon && <><Icon size={18} className='inline mr-2 font-thin text-pink-500' /></>}
          {anchor && <HiLink size={18} className='inline mr-1' />}
          {label}
          {download && <HiDownload size={18} className='inline mr-1' />}
          {file && <HiDocument size={18} className='inline mr-1' />}
          <m.div
            initial={{ width: 0 }}
            animate={{ width: hover ? '100%' : 0 }}
            className='absolute bg-pink-700 h-[2px] bottom-0 left-0'
          />
        </div>
      </NextLink>
    </>
  )
}

export default Link;
