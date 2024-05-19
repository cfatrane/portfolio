"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu, Home } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { label: "ABOUT", href: "/about" },
  { label: "EXPERIENCES", href: "/experiences" },
  { label: "PROJECTS", href: "/projects" },
];

type NavigationItemProps = { href: string; label: string };

function HeaderNavigationItem({ href, label }: NavigationItemProps) {
  const isActive = usePathname() === href;

  return (
    <Link
      className={`${
        isActive ? "text-foreground" : "text-muted-foreground"
      } transition-colors hover:text-foreground`}
      href={href}
    >
      {label}
    </Link>
  );
}

function HeaderNavigationItemMobile({ href, label }: NavigationItemProps) {
  const isActive = usePathname() === href;

  return (
    <Link
      className={`${
        isActive
          ? "hover:text-foreground"
          : "text-muted-foreground hover:text-foreground"
      }`}
      href={href}
    >
      {label}
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-secondary px-4 font-nippo md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
          href="/"
        >
          <Home className="h-6 w-6" />

          <span className="sr-only">CEF Inc</span>
        </Link>

        {navItems.map((item) => (
          <HeaderNavigationItem
            href={item.href}
            key={item.label}
            label={item.label}
          />
        ))}
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <Button className="shrink-0 md:hidden" size="icon" variant="outline">
            <Menu className="h-5 w-5" />

            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              className="flex items-center gap-2 text-lg font-semibold"
              href="/"
            >
              <Home className="h-6 w-6" />

              <span className="sr-only">CEF Inc</span>
            </Link>

            {navItems.map((item) => (
              <HeaderNavigationItemMobile
                href={item.href}
                key={item.label}
                label={item.label}
              />
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
