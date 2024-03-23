import type { FC, ReactNode } from "react";
import styled from "@emotion/styled";
import { theme } from "twin.macro";

export interface TabProps {
  isActive?: boolean;
  children?: ReactNode;
}

const TabContainer = styled.div`
  background: ${theme`colors.primary.500`};
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
  background: ${theme`colors.primary.200`};
  filter: drop-shadow(0px -2px 2px rgba(0, 0, 0, 0.15));
  background-image: linear-gradient(${theme`colors.primary.300`} 1px, transparent 1px);
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
