"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export interface NavigationItemProps {
  label: string;
  href: string;
}

export default function NavigationItem({ label, href }: NavigationItemProps) {
  const pathname = usePathname();

  // We check if user is on the page of the current navigation item.
  const isActive = pathname === href

  return (
    <li>
      <Link
        href={href}
        className={cn(
          "text-sm font-medium opacity-80",
          isActive && "bg-gradient-primary bg-clip-text text-transparent"
        )}
      >
        {label}
      </Link>
    </li>
  )

}