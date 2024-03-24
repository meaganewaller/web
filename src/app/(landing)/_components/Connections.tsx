import Link from '@/components/Link';
import Container from './Container';

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
    <Container gridName="grid-in-outlinks" title="Let&apos;s Connect!">
      <ul
        className="flex w-full flex-wrap items-center justify-between p-4 text-lg text-pink-700"
      >
        {links.map((link) => (
          <li
            key={link.name}
            className="md:p-2"
          >
            <Link
              path={link.link}
              label={link.name}
              className="text-xl text-pink-700 hover:text-pink-800 dark:text-pink-300 dark:hover:text-pink-200"
            />
          </li>
        ))}
      </ul>
    </Container>
  );
}
