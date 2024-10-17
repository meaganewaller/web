import Link from '@/components/Link'
import Container from './Container'

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
  ]

  return (
    <Container gridName="grid-in-outlinks" title="Let's Connect!">
      <ul className="flex w-full flex-wrap items-center justify-between p-4 text-lg text-cobalt_blue-700 font-extra">
        {links.map((link) => (
          <li key={link.name} className="md:p-2">
            <Link
              href={link.link}
              className="text-xl text-cobalt_blue-700 hover:text-cobalt_blue-800 dark:text-cobalt_blue-800 dark:hover:text-cobalt_blue-900"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}
