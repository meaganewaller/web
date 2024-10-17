import { Metadata } from 'next'
import PageTitle from '@/components/PageTitle'

export const metadata: Metadata = {
  title: 'colophon',
  description: 'Colophon',
}

const Page = async (): Promise<JSX.Element> => {
  return (
    <div className="font-sans font-normal max-w-[80%] mx-auto mt-[5rem] py-10">
      <PageTitle title="Colophon" />

      <div className="mt-[2rem] flex flex-col">
        <h2 className="font-pixel px-5 pb-1 pt-10 text-center text-lg uppercase tracking-wide text-violet-600 dark:text-yellow-400 before:pr-[5px] before:content-[url('/images/ui/leftsparkle.gif')] after:pl-[5px] after:content-[url('/images/ui/rightsparkle.gif')]">
          Blog Platform
        </h2>

        <ul className="my-8">
          <li>
            <span className="font-semibold">Content Management System (CMS)</span>: [Name of CMS]
          </li>
          <li>
            <span className="font-semibold">Theme</span>: [Name of Theme]
          </li>
          <li>
            <span className="font-semibold">Customizations</span>: [Brief description of any customizations or
            modifications made to the theme]
          </li>
        </ul>

        <h2 className="font-pixel px-5 pb-1 pt-10 text-center text-lg uppercase tracking-wide text-violet-600 dark:text-yellow-400 before:pr-[5px] before:content-[url('/images/ui/leftsparkle.gif')] after:pl-[5px] after:content-[url('/images/ui/rightsparkle.gif')]">
          Hosting
        </h2>
        <ul className="my-8">
          <li>
            <span className="font-semibold">Content Management System (CMS)</span>: [Name of CMS]
          </li>
          <li>
            <span className="font-semibold">Theme</span>: [Name of Theme]
          </li>
          <li>
            <span className="font-semibold">Customizations</span>: [Brief description of any customizations or
            modifications made to the theme]
          </li>
        </ul>

        <h2 className="font-pixel px-5 pb-1 pt-10 text-center text-lg uppercase tracking-wide text-violet-600 dark:text-yellow-400 before:pr-[5px] before:content-[url('/images/ui/leftsparkle.gif')] after:pl-[5px] after:content-[url('/images/ui/rightsparkle.gif')]">
          Design
        </h2>
        <ul className="my-8">
          <li>
            <span className="font-semibold">Content Management System (CMS)</span>: [Name of CMS]
          </li>
          <li>
            <span className="font-semibold">Theme</span>: [Name of Theme]
          </li>
          <li>
            <span className="font-semibold">Customizations</span>: [Brief description of any customizations or
            modifications made to the theme]
          </li>
        </ul>

        <h2 className="font-pixel px-5 pb-1 pt-10 text-center text-lg uppercase tracking-wide text-violet-600 dark:text-yellow-400 before:pr-[5px] before:content-[url('/images/ui/leftsparkle.gif')] after:pl-[5px] after:content-[url('/images/ui/rightsparkle.gif')]">
          Development Tools
        </h2>
        <ul className="my-8">
          <li>
            <span className="font-semibold">Content Management System (CMS)</span>: [Name of CMS]
          </li>
          <li>
            <span className="font-semibold">Theme</span>: [Name of Theme]
          </li>
          <li>
            <span className="font-semibold">Customizations</span>: [Brief description of any customizations or
            modifications made to the theme]
          </li>
        </ul>

        <h2 className="font-pixel px-5 pb-1 pt-10 text-center text-lg uppercase tracking-wide text-violet-600 dark:text-yellow-400 before:pr-[5px] before:content-[url('/images/ui/leftsparkle.gif')] after:pl-[5px] after:content-[url('/images/ui/rightsparkle.gif')]">
          Analytics and Tracking
        </h2>
        <ul className="my-8">
          <li>
            <span className="font-semibold">Content Management System (CMS)</span>: [Name of CMS]
          </li>
          <li>
            <span className="font-semibold">Theme</span>: [Name of Theme]
          </li>
          <li>
            <span className="font-semibold">Customizations</span>: [Brief description of any customizations or
            modifications made to the theme]
          </li>
        </ul>

        <h2 className="font-pixel px-5 pb-1 pt-10 text-center text-lg uppercase tracking-wide text-violet-600 dark:text-yellow-400 before:pr-[5px] before:content-[url('/images/ui/leftsparkle.gif')] after:pl-[5px] after:content-[url('/images/ui/rightsparkle.gif')]">
          Content Creation
        </h2>
        <ul className="my-8">
          <li>
            <span className="font-semibold">Content Management System (CMS)</span>: [Name of CMS]
          </li>
          <li>
            <span className="font-semibold">Theme</span>: [Name of Theme]
          </li>
          <li>
            <span className="font-semibold">Customizations</span>: [Brief description of any customizations or
            modifications made to the theme]
          </li>
        </ul>

        <h2 className="font-pixel px-5 pb-1 pt-10 text-center text-lg uppercase tracking-wide text-violet-600 dark:text-yellow-400 before:pr-[5px] before:content-[url('/images/ui/leftsparkle.gif')] after:pl-[5px] after:content-[url('/images/ui/rightsparkle.gif')]">
          Legal
        </h2>
        <ul className="my-8">
          <li>
            <span className="font-semibold">Content Management System (CMS)</span>: [Name of CMS]
          </li>
          <li>
            <span className="font-semibold">Theme</span>: [Name of Theme]
          </li>
          <li>
            <span className="font-semibold">Customizations</span>: [Brief description of any customizations or
            modifications made to the theme]
          </li>
        </ul>

        <h2 className="font-pixel px-5 pb-1 pt-10 text-center text-lg uppercase tracking-wide text-violet-600 dark:text-yellow-400 before:pr-[5px] before:content-[url('/images/ui/leftsparkle.gif')] after:pl-[5px] after:content-[url('/images/ui/rightsparkle.gif')]">
          Contact
        </h2>
        <ul className="my-8">
          <li>
            <span className="font-semibold">Content Management System (CMS)</span>: [Name of CMS]
          </li>
          <li>
            <span className="font-semibold">Theme</span>: [Name of Theme]
          </li>
          <li>
            <span className="font-semibold">Customizations</span>: [Brief description of any customizations or
            modifications made to the theme]
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Page
