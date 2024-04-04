import Link from 'next/link'
import { LuArrowRight } from 'react-icons/lu'
import Container from './Container'

export default function Intro() {
  return (
    <Container
      title="Hi! I&apos;m Meagan."
      gridName="grid-in-about"
    >
      <>
        <p className="font-extra text-lg px-8 py-2 leading-relaxed">
          <span className="font-bold italic">I wrote my first line of HTML on Microsoft Notepad in 2004 </span>
          and fell head-over-heels for how magical it all felt. The problem I was solving in 2004? My Neopets shop
          page wasn&apos;t pretty enough. I was 12 years old.
        </p>
        <p className="font-extra text-lg px-8 py-2 leading-relaxed">
          I spent a couple days working up the courage to convince my parents to put their credit card information
          into form on a website and buy me a domain name. They did. And my first website was born. I learned
          everything—HTML/CSS, creating graphics in Paint Shop Pro and Animation Shop, and getting my website live—by
          reading posts written by kids my age. Soon I started writing my own posts sharing my knowledge, my pitfalls,
          cool experiments.
        </p>
        <div className="font-pixel mb-7 flex place-content-end px-8 text-lg">
          <Link
            className="text-xs text-rose_pink hover:text-rose_pink-400 hover:decoration-purple-400 dark:text-rose_pink-800 dark:hover:text-rose_pink-900"
            href="/meagan"
          >
            Read more <LuArrowRight size={16} className="inline-flex" />
          </Link>
        </div>
      </>
    </Container>
  );
}
