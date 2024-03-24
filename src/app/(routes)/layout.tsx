'use client';

import PageLayout from '@/components/Layout';
import Container from '@/components/Container'

export default function RoutesLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout>
      <Container>
        <div className="m-0 min-w-0 flex-grow flex-shrink basis-auto min-h-screen mt-24">
          {children}
        </div>
      </Container>
    </PageLayout>
  );
}
