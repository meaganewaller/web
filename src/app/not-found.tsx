'use client';
import { useRouter } from 'next/navigation';
import { createMetadata } from '@/utils/metadata'

import PageLayout from '@/components/Layout';
import Container from '@/components/Container';
import Button from '@/components/Button';

export default function NotFound() {
  createMetadata({
    title: 'page not found',
    description: 'The page you are looking for does not exist.',
  });

  const router = useRouter();
  return (
    <PageLayout>
      <Container className="mx-auto grid grid-cols-12 md:space-x-4">
        <div className="col-span-12 p-2">
          <h1 className="font-pixel text-center text-2xl uppercase text-primary-600 before:pr-[7px] before:content-[url('/images/ui/leftsparkle.gif')] after:pl-[5px] after:content-[url('/images/ui/rightsparkle.gif')] lg:text-3xl">
            404 - Page Not Found
          </h1>

          <p className="text-center text-lg mt-4">
            The page you are looking for does not exist.
          </p>

          <div className="text-center mt-8 w-full items-center">
            <Button
              color="blue"
              size="small"
              type="button"
              onClick={() => { router.replace("/") }}
            >
              Go Back
            </Button>
          </div>
        </div>
      </Container>
    </PageLayout>
  )
}
