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
    <section className="grid-in-outlinks dark:border-turquoise-800 border-2 border-solid border-purple-400">
      <div className="dark:border-turquoise-700 sticky border-b-2 border-solid border-purple-200 bg-purple-100 text-blue-700 dark:bg-blue-800">
        <header className="font-pixel dark:bg-turquoise-700 dark:border-turquoise-300 border-b-2 border-dashed border-pink-500 bg-pink-300 p-2 text-center text-xl uppercase text-pink-700 dark:text-blue-800">
          Let&apos;s Connect!
        </header>
        <div className="dark:text-turquoise-100 flex h-full flex-col justify-center text-pink-700">
          <ul className="dark:text-turquoise-100 flex w-full flex-wrap items-center justify-between p-4 text-lg text-gray-700">
            {links.map((link) => (
              <li key={link.name} className="md:p-6">
                <Link key={link.name} href={link.link} className="dark:text-turquoise-200 text-xl">
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
