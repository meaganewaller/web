import Link from '@/components/Link';

export default function Connections() {
  const links = [
    {
      name: "Email",
      link: "mailto:meagan@meaganwaller.com",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/meaganewaller",
    },
    {
      name: "GitHub",
      link: "https://github.com/meaganewaller",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/meaganewaller/",
    },
    {
      name: "Polywork",
      link: "https://www.polywork.com/meaganewaller",
    },
    {
      name: "Dev.to",
      link: "https://dev.to/meaganwaller",
    },
  ];

  return (
    <section className="grid-in-outlinks border-2 border-solid border-purple-400">
      <div className="sticky border-b-2 border-solid border-purple-200 bg-purple-100 text-blue-700 dark:bg-zinc-600">
        <header className="font-pixel border-b-2 border-dashed border-primary-500 bg-primary-300 p-2 text-center text-xl uppercase text-primary-700 dark:bg-pink-900 dark:text-pink-300">
          Let&apos;s Connect!
        </header>
        <div className="flex h-full flex-col justify-center text-primary-700">
          <ul className="flex w-full flex-wrap items-center justify-between p-4 text-lg text-pink-700">
            {links.map((link) => (
              <li key={link.name} className="md:p-2">
                <Link
                  path={link.link}
                  label={link.name}
                  className="text-xl text-pink-700 hover:text-pink-800 dark:text-pink-300 dark:hover:text-pink-200"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
