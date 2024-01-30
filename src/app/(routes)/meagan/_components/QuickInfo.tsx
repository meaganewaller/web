'use client';

import Image from 'next/image';
import Link from 'next/link';

export function QuickInfo() {
  return (
    <div className="mx-auto my-10 flex w-full flex-nowrap justify-center">
      <Image
        src="/images/meaganwaller.png"
        width={200}
        height={200}
        alt="Meagan Waller's avatar"
        className="border-image mr-[10px] h-[200px] w-auto rounded-[20px] border-[8px] border-solid"
      />
      <div className="ml-3 h-[190px] overflow-auto">
        <ul className="list-flower flex h-full list-inside flex-col justify-center">
          <li className="text-md relative">
            <strong className="mr-2">name:</strong>
            meagan <em>(she/her/hers)</em>
          </li>
          <li className="text-md relative">
            <strong className="mr-2">location:</strong>
            northeast florida
          </li>
          <li className="text-md relative">
            <strong className="mr-2">working at:</strong>
            senior dev consultant @{' '}
            <Link href="https://testdouble.com" target="_blank">
              test double
            </Link>
          </li>
          <li className="text-md relative">
            <strong className="mr-2">sign:</strong>
            aries ☼ / aquarius ☽ / taurus ↑
          </li>
          <li className="text-md relative">
            <strong className="mr-2">languages:</strong>
            ruby, typescript, lua
          </li>
          <li className="text-md relative">
            <strong className="mr-2">contact:</strong>
            meagan [at] meaganwaller.com
          </li>
        </ul>
      </div>
    </div>
  );
}
