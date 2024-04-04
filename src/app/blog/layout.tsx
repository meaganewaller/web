"use client";

import { usePathname } from "next/navigation";
import PageLayout from "@/components/Layout";
import { Container } from "@/components/Layout/Container";

import Sidebar from "@/app/blog/_components/Sidebar/index";

export default function BlogLayout({
  children,
}: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <PageLayout>
      <Container className="mx-auto grid grid-cols-12 md:space-x-4">
        {/* {pathname.split("/").length === 2 && <Sidebar />} */}
        <main className="relative z-[2] mx-auto my-0 w-full list-outside px-8 leading-7 col-span-12">
          {children}
        </main>
      </Container>
    </PageLayout>
  );
}
