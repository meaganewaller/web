'use client';

import Image from '@/components/Image'
import _ from 'lodash';

const buttons = [
  {
    src: '/images/buttons/meaganwaller.gif',
    alt: 'meaganwaller.com animated button',
    width: 150,
    height: 20,
  },
  {
    src: '/images/buttons/acab.gif',
    alt: 'ABAC',
    width: 88,
    height: 31,
  },
  {
    src: '/images/buttons/antiNFT.gif',
    alt: 'This is an Anti-NFT Site',
    width: 88,
    height: 31,
  },
  {
    src: '/images/buttons/aries.gif',
    alt: 'Aries',
    width: 150,
    height: 44,
  },
  {
    src: '/images/buttons/bestviewed.gif',
    alt: 'This site is best viewed with a computer and a monitor',
    width: 88,
    height: 31,
  },
  {
    src: '/images/buttons/bookmark.gif',
    alt: 'Bookmark this page',
    width: 88,
    height: 31,
  },
  {
    src: '/images/buttons/completelyrotten.gif',
    alt: 'Completely Rotten',
    width: 150,
    height: 20,
  },
  {
    src: '/images/buttons/computernerd.gif',
    alt: 'Computer Nerd',
    width: 150,
    height: 25,
  },
  {
    src: '/images/buttons/ducks.gif',
    alt: 'Get your ducks in a row',
    width: 150,
    height: 37,
  },
  {
    src: '/images/buttons/foreveronline.gif',
    alt: 'Forever Online',
    width: 88,
    height: 31,
  },
  {
    src: '/images/buttons/ggg.gif',
    alt: 'Gaslight Gatekeep Girlboss',
    width: 150,
    height: 20,
  },
  {
    src: '/images/buttons/homesweethome.gif',
    alt: 'Home Sweet Home',
    width: 146,
    height: 24,
  },
  {
    src: '/images/buttons/madewithmac.gif',
    alt: 'Made with Macintosh',
    width: 88,
    height: 31,
  },
  {
    src: '/images/buttons/meaganwaller.gif',
    alt: 'meaganwaller.com animated button',
    width: 150,
    height: 20,
  },
  {
    src: '/images/buttons/nobadhairdays.jpg',
    alt: 'There are no bad hairs days on the internet',
    width: 88,
    height: 31,
  },
  {
    src: '/images/buttons/noweb3.gif',
    alt: 'Keep the web weird -- Say no to Web 3.0',
    width: 88,
    height: 31,
  },
  {
    src: '/images/buttons/oldweb.png',
    alt: 'I love old web',
    width: 99,
    height: 55,
  },
  {
    src: '/images/buttons/online.gif',
    alt: 'Online',
    width: 83,
    height: 39,
  },
  {
    src: '/images/buttons/stupidandbisexual.gif',
    alt: 'Stupid and Bisexual',
    width: 150,
    height: 20,
  },
  {
    src: '/images/buttons/sucks.gif',
    alt: 'This site sucks',
    width: 76,
    height: 31,
  },
  {
    src: '/images/buttons/trustme.gif',
    alt: 'Trust Me, I am good with computers',
    width: 129,
    height: 38,
  },
  {
    src: '/images/buttons/www.gif',
    alt: 'World Wide Web',
    width: 91,
    height: 100,
  },
];

export function Buttons() {
  const setOfButtons = _.sampleSize(buttons, 10);
  console.log(setOfButtons)

  return (
    <div className="relative mt-[2rem] flex overflow-x-hidden before:absolute before:left-0 before:z-10 before:h-full before:w-[5vw] motion-reduce:overflow-x-auto motion-reduce:before:hidden motion-reduce:after:hidden">
      <div className="animate-marquee flex size-full flex-row whitespace-nowrap py-12">
        {setOfButtons.map((button, i: number) => (
          <Image
            className={`max-w-[${button.width}px] max-h-[${button.height}px] hover:scale-150`}
            src={button.src}
            alt={button.alt}
            priority={true}
            key={`button-${i}`}
            width={button.width}
            height={button.height}
          />
        ))}
      </div>
      <div className="animate-marquee2 absolute top-0 flex size-full flex-row whitespace-nowrap py-12">
        {setOfButtons.map((button, i: number) => (
          <Image
            className={`max-w-[${button.width}px] max-h-[${button.height}px] hover:scale-150`}
            src={button.src}
            alt={button.alt}
            key={`button2-${i}`}
            priority={true}
            width={button.width}
            height={button.height}
          />
        ))}
      </div>
    </div>
  );
}
