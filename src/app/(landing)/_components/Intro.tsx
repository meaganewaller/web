import Link from 'next/link';
import { IconArrowBigRightLine } from '@tabler/icons-react';

export default function Intro() {
  return (
    <section className="border-turquoise-400 grid-in-about flex flex-col border-2 border-solid text-blue-700">
      <div className="border-turquoise-400 dark:border-turquoise-200 sticky h-full border-b-2 border-solid bg-blue-100 text-blue-700 dark:bg-blue-500 dark:text-pink-100">
        <header className="font-pixel bg-turquoise-300 dark:bg-mauve border-turquoise-700 dark:border-mauve-300 border-b-2 border-dashed p-2 text-center text-xl uppercase text-pink-500 dark:text-pink-700">
          Hi! I&apos;m Meagan.
        </header>
        <div className="mb-5 flex h-full flex-col justify-center">
          <p className="font-extra text-md px-8 py-2 leading-relaxed">
            <span className="font-bold italic">I wrote my first line of HTML on Microsoft Notepad in 2004 </span>
            and fell head-over-heels for how magical it all felt. The problem I was solving in 2004? My Neopets shop
            page wasn&apos;t pretty enough. I was 12 years old.
          </p>
          <p className="font-extra text-md px-8 py-2 leading-relaxed">
            I spent a couple days working up the courage to convince my parents to put their credit card information
            into form on a website and buy me a domain name. They did. And my first website was born. I learned
            everything—HTML/CSS, creating graphics in Paint Shop Pro and Animation Shop, and getting my website live—by
            reading posts written by kids my age. Soon I started writing my own posts sharing my knowledge, my pitfalls,
            cool experiments.
          </p>
          <div className="font-pixel mb-7 flex place-content-end px-8 text-lg">
            <Link
              className="text-md text-purple-400 hover:text-purple-600 hover:no-underline hover:decoration-0 dark:text-purple-200 dark:hover:text-purple-100"
              href="/meagan"
            >
              <span className="text-xs">Read more</span>
              <IconArrowBigRightLine className="ml-1 table-cell text-xs" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
