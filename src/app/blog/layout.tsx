'use client';

import { usePathname } from 'next/navigation';
import Layout from '@/components/Layout';
import { Container } from '@/components/Layout/Container';

import Sidebar from '@/app/blog/_components/Sidebar/index';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <Layout>
      <Container className="mx-auto grid grid-cols-12 md:space-x-4">
        {pathname.split('/').length === 2 && <Sidebar />}
        <main className="relative z-[2] mx-auto my-0 w-full max-w-[42.1875rem] list-outside px-8 leading-7 text-neutral-800 md:col-span-9 dark:text-neutral-50">
          {children}
        </main>
      </Container>
    </Layout>
  );
}
