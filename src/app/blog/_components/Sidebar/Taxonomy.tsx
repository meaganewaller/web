'use client';

import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import React from 'react';

export default function Taxonomy() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');
  const data = [
    {
      slug: 'category',
      title: 'Some category',
    },
  ];

  return (
    <div>
      <div className="mx-5 mb-14 w-full">
        <p className="font-venice text-deep-sky-blue decoration-robins-egg-blue mb-4 text-4xl underline underline-offset-4">
          Categories
        </p>
        <ul className="list-outside py-2 pl-0 pr-5">
          {data.length > 0 &&
            data.map((category) => (
              <li
                className={clsx(
                  'my-1 rounded-full border-2 border-creamy-white bg-sunshine-yellow p-1 shadow-inner shadow-goldenrod hover:border-purple hover:bg-lilac hover:shadow-lavender',
                  currentCategory === category.slug &&
                    'border-purple bg-lilac shadow-lavender hover:border-blush hover:bg-light-peach hover:shadow-peachy-pink',
                )}
                key={`${category.slug}`}
              >
                <button
                  className="font-extra text-secondary-txt px-1 text-justify text-sm lowercase"
                  onClick={() => {
                    window.location.href = `/blog?category=${category.slug}`;
                  }}
                >
                  {category.title}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
