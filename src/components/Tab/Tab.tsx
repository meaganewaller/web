import { Tab as HUITab } from '@headlessui/react'

export const Tab = ({ children }: { children: React.ReactNode | undefined }) => {
  return (
    <HUITab.Panels>
      <HUITab.Panel>{children}</HUITab.Panel>
    </HUITab.Panels>
  )
}

export default Tab
