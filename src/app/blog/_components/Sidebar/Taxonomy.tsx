'use client';

import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import React from 'react';

export default function Taxonomy() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');
  const data = [
    {
      slug: 'my-category',
      title: 'Some category',
    },
  ];

  console.log(currentCategory);

  return (
    <div>
      <div className="mx-2 mb-14 w-full text-center">
        <p className="font-pixel mb-4 text-xs uppercase text-orange-600 underline decoration-orange-700 underline-offset-4 dark:text-blue-100 dark:decoration-blue-200">
          Categories
        </p>
        <ul className="list-outside py-2 pl-0 pr-5">
          {data.length > 0 &&
            data.map((category) => (
              <li
                className={clsx(
                  'my-1 rounded-full border-2 p-1 shadow-inner',
                  currentCategory !== category.slug &&
                    'border-purple-300 text-purple-700 bg-purple-100 shadow-purple-200 hover:border-turquoise-300 hover:text-turquoise-700 hover:bg-turquoise-200 hover:shadow-turquoise-300 dark:hover:border-turquoise-500 dark:hover:bg-turquoise-200 dark:hover:shadow-turquoise-300 dark:hover:text-turquoise-950',
                  currentCategory === category.slug &&
                    'border-turquoise-500 bg-turquoise-200 shadow-turquoise-300 hover:border-pink-400 hover:bg-pink-100 hover:shadow-pink-200 dark:border-turquoise-500 dark:bg-turquoise-200 dark:shadow-turquoise-300 dark:text-turquoise-900 dark:hover:bg-pink-800 dark:hover:border-pink-900 dark:hover:shadow-pink-700 dark:hover:text-pink-950 text-turquoise-900',
                )}
                key={`${category.slug}`}
              >
                <button
                  className="font-extra px-1 text-justify text-sm lowercase"
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
