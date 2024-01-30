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
        <div className="col-span-12 p-2 md:col-span-9">{children}</div>
      </Container>
    </Layout>
  );
}
