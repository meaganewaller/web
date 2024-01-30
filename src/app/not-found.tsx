'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4 p-4 text-center">
      <h1 className="text-xl font-bold md:text-2xl">Not found!!!</h1>
      <div className="flex items-center justify-center gap-4">
        <Link href="/">Go back to home</Link>
      </div>
    </main>
  );
}
