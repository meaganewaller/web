import { Metadata } from 'next';
import { Bio, Buttons, QuickInfo } from './_components/index';

export const metadata: Metadata = {
  title: 'about',
  description: 'about page',
};

const Page = async (): Promise<JSX.Element> => {
  return (
    <div>
      <h1 className="font-pixel text-center text-2xl uppercase before:pr-[5px] before:content-[url('/images/ui/leftsparkle.gif')] after:pl-[5px] after:content-[url('/images/ui/leftsparkle.gif')] lg:text-3xl">
        About
      </h1>
      <QuickInfo />
      <Bio />
      <Buttons />
    </div>
  );
};

export default Page;
