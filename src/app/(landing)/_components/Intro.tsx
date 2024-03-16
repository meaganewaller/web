import Link from 'next/link'
import Icon from '@/components/Icon'
import { LuArrowRight } from 'react-icons/lu'

export default function Intro() {
  return (
    <section className="grid-in-about border-2 border-solid border-purple-400">
      <div className="sticky h-full border-b-2 border-solid border-purple-200 bg-purple-100 text-blue-700">
        <header className="font-pixel border-b-2 border-dashed border-primary-500 bg-primary-300 p-2 text-center text-xl uppercase text-primary-700">
          Hi! I&apos;m Meagan.
        </header>
        <div className="flex h-full flex-col justify-center text-primary-700">
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
              className="text-xs text-purple-700 hover:text-purple-600 hover:decoration-purple-400"
              href="/meagan"
            >
              Read more <LuArrowRight size={16} className="inline-flex" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
