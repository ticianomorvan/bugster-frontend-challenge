// In a context of a SaaS application, we may want to share the navigation bar
// across multiple brand pages, but not every page (e.g. authentication pages)
// That's the reason we group these pages under the (brand) folder.

import type { ReactNode } from "react";

import Navigation from "@/components/navigation";

type BrandLayoutProps = Readonly<{ children: ReactNode }>;

export default function BrandLayout({ children }: BrandLayoutProps) {
  return (
    <main className="max-h-screen h-screen w-full flex-col lg:overflow-hidden">
      <Navigation />

      {children}
    </main>
  )
}