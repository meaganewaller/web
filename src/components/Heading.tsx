import { ReactNode } from 'react';

const defaultStyles = 'my-6 font-bold';

function h2({ children }: { children: ReactNode }) {
  return <h2 className={`text-2xl ${defaultStyles}`}>{children}</h2>;
}

function h3({ children }: { children: ReactNode }) {
  return <h3 className={`text-xl ${defaultStyles}`}>{children}</h3>;
}

function h4({ children }: { children: ReactNode }) {
  return <h4 className={`text-xl ${defaultStyles}`}>{children}</h4>;
}

export const Heading = {
  h2,
  h3,
  h4,
};
