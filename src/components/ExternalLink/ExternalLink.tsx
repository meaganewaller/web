'use client';

import { useState } from 'react';

import { m } from 'framer-motion';
import Link from 'next/link';
import { HiArrowUp } from "react-icons/hi2";

export default function ExternalLink({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    <div className="font-bold inline-flex">
      <Link
        href={{
          pathname: link,
        }}
      >
        <m.button
          initial={{ scale: 1, y: 0 }}
          whileHover={{ scale: 1.01, y: 5 }}
          onHoverStart={() => {
            setX(5);
            setY(-5);
          }}
          onHoverEnd={() => {
            setX(0);
            setY(0);
          }}
          whileTap={{ scale: 0.99, y: 5 }}
          className="flex w-full items-center justify-start"
        >
          <div className="font-semibold">{text}</div>
          <m.div
            animate={{ x, y }}
            className="flex items-center justify-end"
          >
            <HiArrowUp
              size={16}
              className="rotate-45 text-neutral-500"
            />
          </m.div>
        </m.button>
      </Link>
    </div>
  );
}
