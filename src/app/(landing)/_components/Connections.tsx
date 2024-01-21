import Link from "next/link";
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
    <main>
      {links.map((link) => (
        <Link key={link.name} href={link.link} target="_blank">
          {link.name}
        </Link>
      ))}
    </main>
  );
}
