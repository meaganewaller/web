import { clsx } from 'clsx';
import Link from 'next/link';

export default function Connections() {
  const links = [
    {
      name: 'Email',
      link: 'mailto:meagan@meaganwaller.com',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/meaganewaller',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/meaganewaller',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/meaganewaller/',
    },
    {
      name: 'Polywork',
      link: 'https://www.polywork.com/meaganewaller',
    },
    {
      name: 'Dev.to',
      link: 'https://dev.to/meaganwaller',
    },
  ];

  return (
    <section className="border-turquoise-400 grid-outlinks grid-areas-landingMobile min-w-md:grid-areas-landing grid-in-outlinks dark:border-turquoise-200 order-2 flex flex-col border-2 border-solid text-blue-700 dark:text-blue-200">
      <div className="border-turquoise-400 dark:border-turquoise-200 sticky border-b-2 border-solid bg-blue-100 text-blue-700 dark:bg-blue-500 dark:text-pink-100">
        <header className="font-pixel bg-turquoise-300 dark:bg-mauve border-turquoise-700 dark:border-mauve-300 border-b-2 border-dashed p-2 text-center text-xl uppercase text-pink-500 dark:text-pink-700">
          Let&apos;s Connect!
        </header>
        <div className="overflow-autotext-blue-700 h-auto">
          <ul className="flex w-full flex-wrap items-center justify-between p-4 text-lg text-gray-700 dark:text-pink-100">
            {links.map((link) => (
              <li key={link.name} className="md:p-6">
                <Link key={link.name} href={link.link} className="text-xl">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
