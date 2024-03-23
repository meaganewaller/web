import { LuAtSign as AtSign, LuBookOpen as BookOpenText, LuLayoutDashboard as Dashboard, LuFileCode as FileCode, LuGithub as GitHub, LuHome as Home, LuLightbulb as LightBulb, LuLinkedin as LinkedIn, LuMedal as Medal, LuPencil as Pencil, LuRss as RSS, LuShapes as Shapes, LuMegaphone as Megaphone } from "react-icons/lu";
export const MarkdownImageFromAssetManageAltConstant = "source protected";
export const MAX_VIEWS_PER_SESSION = 30;
export const MAX_SHARES_PER_SESSION = 10;
export const MAX_REACTIONS_PER_SESSION = 20;
import { IconType } from "react-icons";

interface NavLink {
  path: string
  label: string
  icon: IconType
  onlyShowOnDropdownMenu?: boolean
}

interface FooterIconLink {
  title: string
  url: string
  icon: JSX.Element
  className: string
}

export const ROUTES = {
  blog: '/blog',
  projects: '/projects',
  notes: '/notes',
  tags: '/tags',
  endorsements: '/endorsements',
  guestbook: '/guestbook',
  about: '/meagan',
  dashboard: '/dashboard',
  resume: '/resume',
  todayILearned: '/til',
  chat: '/chat',
}

export const NAV_LINKS: NavLink[] = [
  {
    path: '/',
    label: 'Home',
    icon: Home,
    onlyShowOnDropdownMenu: true,
  },
  {
    path: ROUTES.blog,
    label: 'Blog',
    icon: Pencil,
  },
  {
    path: ROUTES.guestbook,
    label: 'Guestbook',
    icon: BookOpenText,
  },
  {
    path: ROUTES.about,
    label: 'About',
    icon: AtSign,
  },
  {
    path: ROUTES.chat,
    label: 'Say Hi',
    icon: Megaphone,
  }
]

export const FOOTER_LINKS = [
  [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'About',
      url: ROUTES.about,
    },
    {
      title: 'Dashboard',
      url: ROUTES.dashboard,
    },
    {
      title: 'Projects',
      url: ROUTES.projects,
    },
  ],
  [
    {
      title: 'Blog',
      url: ROUTES.blog,
    },
    {
      title: 'Notes',
      url: ROUTES.notes,
    },
    {
      title: 'TIL',
      url: ROUTES.todayILearned,
    },
  ],
  [
    {
      title: 'Guestbook',
      url: ROUTES.guestbook,
    },
    {
      title: 'Endorsements',
      url: ROUTES.endorsements,
    },
  ],
]

export const FOOTER_ICON_LINKS: FooterIconLink[] = [
  {
    title: 'GitHub',
    url: 'https://github.com/meaganewaller',
    icon: <GitHub />,
    className: 'hover:text-current',
  },
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/meaganewaller',
    icon: <LinkedIn />,
    className: 'hover:text-[#0A66C2]',
  },
  {
    title: 'RSS Feed',
    url: '/feed.xml',
    icon: <RSS />,
    className: 'hover:text-[#FFA500]',
  },
]

export const OG = {
  static: ""
}
