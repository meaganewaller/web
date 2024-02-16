'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Icon from '@/components/Icon';

const Search = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push(`/blog?query=${query}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center rounded-lg bg-orange-400 p-1 shadow-md shadow-orange-600 dark:bg-purple-900 dark:shadow-purple-800">
          <input
            type="text"
            className="dark:placeholder:text-purple w-full border-none bg-[var(--color-transparent)] font-mono text-orange-800 ring-0 placeholder:italic placeholder:text-orange-700 focus:border-none focus:ring-0 dark:text-purple-50"
            placeholder="search blog"
            value={query}
            onChange={handleInputChange}
          />
          <button type="submit" className="mr-1 text-3xl text-pink-800 dark:text-yellow-300">
            <Icon name="search" width={30} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
