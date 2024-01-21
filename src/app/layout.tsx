import type { Metadata } from "next";
import "@/styles/globals.css";

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className="font-sans 2xl:text-2xl">
      <body className="debug-screens flex flex-col bg-clouds">
        <main className="@container">
          <div className="block @lg:flex">{children}</div>
        </main>
      </body>
    </html>
  );
}
