'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { IconSearch } from '@tabler/icons-react';

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
        <div className="bg-peachy-pink flex items-center rounded-lg p-1 shadow-lg">
          <input
            type="text"
            className="text-primary placeholder:text-deep-pink w-full border-none bg-[var(--color-transparent)] font-mono ring-0 placeholder:italic focus:border-none focus:ring-0"
            placeholder="search blog"
            value={query}
            onChange={handleInputChange}
          />
          <button type="submit" className="text-espresso mr-1 text-3xl">
            <IconSearch className="text-deep-pink hover:text-accent-dark" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
