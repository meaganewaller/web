import type { FC, ReactElement } from "react";
import { Children, useState } from "react";
import Tab from "@/components/Tab";
import styled from "@emotion/styled";
import tw from "twin.macro";

export interface TabsProps {
  children?: ReactElement[];
}

const TabsContainer = styled.div`
  width: 600px;
  margin: 10px auto;
`;

const TabsDiv = styled.div`
  ${tw`w-full overflow-x-auto w-[calc(100%_-_1rem)] whitespace-nowrap mx-2 my-0 pt-2 pb-0 px-0`};

  & {
    @media (min-width: 50rem) {
      @apply w-[calc(100%_-_4rem)] mx-8 my-0;
    }
  }
`;

const TabButton = styled.button`
  ${tw`uppercase leading-[0.8] inline-block ml-[-35px] relative whitespace-nowrap cursor-pointer mr-16 rounded-[6px_6px_0_0] border-[none] first-of-type:ml-[30px] before:skew-x-[25deg] before:rounded-[0_8px_0_0] before:-right-4 after:skew-x-[-25deg] after:rounded-[8px_0_0_0] after:-left-4 font-pixel bg-purple-500`};

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
            key={`${child.type}-${index}`}
            onClick={() => setActiveTabIndex(index)}
            className={index === activeTabIndex ? "bg-purple-500" : "bg-purple-800"}
          >
            {child?.props?.title ?? "Tab Title"}
          </TabButton>
        ))}
      </TabsDiv>
      <Tab isActive={true}>{activeTabContent}</Tab>
    </TabsContainer>
  );
};

export default Tabs;
