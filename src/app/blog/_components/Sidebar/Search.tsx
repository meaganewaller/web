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
        <div className="flex items-center rounded-lg bg-orange-400 p-1 shadow-md shadow-orange-600">
          <input
            type="text"
            className="w-full border-none bg-[var(--color-transparent)] font-mono text-orange-800 ring-0 placeholder:italic placeholder:text-orange-700 focus:border-none focus:ring-0"
            placeholder="search blog"
            value={query}
            onChange={handleInputChange}
          />
          <button type="submit" className="mr-1 text-3xl text-primary-800">
            <Icon name="search" width={30} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
