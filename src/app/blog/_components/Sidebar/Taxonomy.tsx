'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';
import { Button } from '@/components/ui/button';

export default function Taxonomy() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');
  const data = [
    {
      slug: 'my-category',
      title: 'Some category',
    },
  ];

  return (
    <div>
      <div className="mx-2 mb-14 w-full text-center mx-auto">
        <p className="font-pixel mb-4 text-xs uppercase text-orange-600 underline decoration-orange-700 underline-offset-4 dark:text-blue-100 dark:decoration-blue-200">
          Categories
        </p>
        <ul className="list-outside">
          {data.length > 0 &&
            data.map((category) => (
              <li
                key={`${category.slug}`}
              >
                <Button
                  variant="primary"
                  isSmall={true}
                  onClick={() => {
                    window.location.href = `/blog?category=${category.slug}`;
                  }}
                >
                  {category.title}
                </Button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
