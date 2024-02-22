import { cn } from '@/utils/cn'
import type { FC, ReactNode } from 'react';

type TabProps = {
  title: string;
  isActive?: boolean;
  children?: ReactNode;
}

const Tab: FC<TabProps> = ({ title, isActive, children }) => {
  return (
    <div className={cn(isActive ? 'block' : 'hidden')}>
      <h2 className='-mb-px flex max-w-max whitespace-nowrap border-b-2 pb-2.5 pt-3 font-semibold leading-6'>
        {title}
      </h2>
      {children ? <div>{children}</div> : null}
    </div>
  );
};

export default Tab;
