'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="h-screen flex flex-col justify-center items-center gap-4 text-center p-4">
      <h1 className="text-xl md:text-2xl font-bold">
        Not found!!!
      </h1>
      <div className="flex items-center justify-center gap-4">
        <Link href="/">
          Go back to home
        </Link>
      </div>
    </main>
  )
}
