import { ReactNode } from 'react';

export function Text({ children }: { children: ReactNode }) {
  return <p className="mb-4 font-serif 2xl:text-2xl xl:text-xl lg:text-lg text-base font-normal leading-7">{children}</p>
}

export default Text
