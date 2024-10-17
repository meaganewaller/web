'use client'

import React, { ReactNode, useMemo } from 'react'
import { Tab as HeadlessTab } from '@headlessui/react'
import clsx from 'clsx'

interface TabData {
  title: string
  content: ReactNode
}

interface TabsProps {
  children: ReactNode
}

export function Tabs({ children }: TabsProps) {
  // Get title and content of tabs
  const tabs: TabData[] = useMemo(
    () =>
      (
        React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return null

          const title = child.props.title
          const content = child.props.children
          return { title, content }
        }) as TabData[]
      ).filter(Boolean),
    [children],
  )

  return (
    <>
      <div className="w-full rounded-lg border border-violet-700 dark:border-lime-300">
        <HeadlessTab.Group>
          <HeadlessTab.List
            className="flex flex-wrap space-x-6 rounded-t-md border-b border-violet-600 bg-violet-500/70 px-4 text-center text-base font-medium dark:border-lime-600 dark:bg-lime-300/70 font-pixel"
            id="defaultTab"
            data-tabs-toggle="#defaultTabContent"
          >
            {tabs.map((tab, index) => (
              <HeadlessTab
                key={index}
                className={({ selected }) =>
                  clsx(
                    selected
                      ? 'border-violet-900 text-violet-900 dark:border-lime-900 dark:text-lime-900 border-b-4'
                      : 'border-transparent text-violet-700 dark:text-lime-1000 hover:border-violet-900 hover:text-violet-900 dark:hover:border-lime-800 dark:hover:text-lime-800',
                    '-mb-px whitespace-nowrap border-b px-1 py-3 text-base font-medium transition-colors duration-300',
                  )
                }
              >
                {tab.title}
              </HeadlessTab>
            ))}
          </HeadlessTab.List>
          <HeadlessTab.Panels className="text-xl text-violet-800 bg-violet-300/60 dark:text-green-1000/70 font-display py-8 px-4 dark:bg-lime-500/60">
            {tabs.map((tab, index) => (
              <HeadlessTab.Panel key={index}>
                <p>{tab.content}</p>
              </HeadlessTab.Panel>
            ))}
          </HeadlessTab.Panels>
        </HeadlessTab.Group>
      </div>
    </>
  )
}

interface TabProps {
  children: ReactNode
}

export function Tab({ children, ...props }: TabProps) {
  return children
}

export default Tabs
