import type { FC, ReactElement } from 'react';
import { Children, useState } from 'react';
import Tab from './Tab';
import styled from '@emotion/styled';
import tw from 'twin.macro';

interface TabsProps {
  children?: ReactElement[];
}

const TabsContainer = styled.div`
  @apply col-[1/-1] max-w-[50rem] w-full mx-auto my-4;
  scrollbar-height: none;

  &::-webkit-scrollbar {
    @apply hidden;
    background: transparent;
  }
`;

const TabsDiv = styled.div`
  @apply w-full overflow-x-auto w-[calc(100%_-_1rem)] whitespace-nowrap mx-2 my-0 pt-8 pb-0 px-0;

  @media (min-width: 50rem) {
    @apply w-[calc(100%_-_4rem)] mx-8 my-0;
  }
`;

const TabButton = styled.button`
  ${tw`uppercase leading-[0.8] inline-block ml-[-35px] relative whitespace-nowrap cursor-pointer mr-16 rounded-[6px_6px_0_0] border-[none] first-of-type:ml-[30px] before:skew-x-[25deg] before:rounded-[0_8px_0_0] before:-right-4 after:skew-x-[-25deg] after:rounded-[8px_0_0_0] after:-left-4 font-pixel bg-pink-500`};

  & {
    filter: drop-shadow(0px -3px 2px rgba(0, 0, 0, 0.05));
  }
`;

const Tabs: FC<TabsProps> = ({ children }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const arrayChildren = Children.toArray(children) as ReactElement[];
  const activeTabContent = arrayChildren[activeTabIndex]?.props?.children;

  return (
    <TabsContainer>
      <TabsDiv>
        {arrayChildren.map((child, index: number) => (
          <TabButton
            key={index}
            onClick={() => setActiveTabIndex(index)}
            className={index === activeTabIndex ? 'bg-pink-500' : 'bg-pink-300'}
          >
            {child?.props?.title ?? 'Tab Title'}
            <Tab title={child?.props?.title ?? 'Tab Title'} isActive={index === activeTabIndex} />
          </TabButton>
        ))}
      </TabsDiv>
      <div className='prose prose-headings:text-pink-400 prose-p:text-pink-300 prose-strong:text-pink-500 mb-12 !max-w-none text-pink-500'>
        {activeTabContent}
      </div>
    </TabsContainer >
  )
}

export default Tabs;
