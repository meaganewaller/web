'use client';

import PageLayout from '@/components/Layout';
import Container from '@/components/Container'

export default function RoutesLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout>
      <Container className="mx-auto grid grid-cols-12 md:space-x-4">
        <div className="col-span-12 p-2">
          {children}
        </div>
      </Container>
    </PageLayout>
  );
}
