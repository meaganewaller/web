import type { FC, ReactNode } from "react";
import { Children, useState } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { theme } from "twin.macro";

interface TabProps {
  isActive?: boolean;
  children?: ReactNode;
}

const TabContainer = styled.div`
  background: ${theme`colors.pink.500`};
  padding: 6px 0;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const TabContent = styled.div`
  border-radius: 10px;
  position: relative;
  width: 100%;
  color: ${theme`colors.neutral.600`};

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: inherit;
  }
`;

const TabContentInner = styled.div`
  padding: 1rem;
  border-radius: 10px;
  padding: 1rem;
  filter: drop-shadow(0px -2px 2px rgba(0, 0, 0, 0.1));
  z-index: 5;
`;

const Page = styled.div`
  padding: 1.5rem;
  border-radius: 10px;
  min-height: 10rem;
  line-height: 160%;
  background: ${theme`colors.pink.200`};
  filter: drop-shadow(0px -2px 2px rgba(0, 0, 0, 0.15));
  background-image: linear-gradient(${theme`colors.pink.300`} 1px, transparent 1px);
  background-size: 8% 8%, 2px 2px;
`;

const Tab: FC<TabProps> = ({ isActive, children }) => {
  return (
    <TabContainer className={isActive ? "block" : "hidden"}>
      <TabContent>
        <TabContentInner className="font-sans">
          <Page>{children ? <div>{children}</div> : null}</Page>
        </TabContentInner>
      </TabContent>
    </TabContainer>
  );
};

export default Tab;

// import { cn } from '@/utils/cn'
// import type { FC, ReactNode } from 'react';

// type TabProps = {
//   title: string;
//   isActive?: boolean;
//   children?: ReactNode;
// }

// const Tab: FC<TabProps> = ({ title, isActive, children }) => {
//   return (
//     <div className={cn(isActive ? 'block' : 'hidden')}>
//       <h2 className='-mb-px flex max-w-max whitespace-nowrap border-b-2 pb-2.5 pt-3 font-semibold leading-6'>
//         {title}
//       </h2>
//       {children ? <div>{children}</div> : null}
//     </div>
//   );
// };

// export default Tab;
