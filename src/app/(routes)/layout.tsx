'use client';

import Layout from '@/components/Layout';
import { Container } from '@/components/Layout/Container';

export default function RoutesLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <Container className="mx-auto grid grid-cols-12 md:space-x-4">
        <div className="col-span-12 p-2">
          {children}
        </div>
      </Container>
    </Layout>
  );
}
