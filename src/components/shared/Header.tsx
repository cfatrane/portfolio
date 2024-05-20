"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu, Home } from "lucide-react";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { label: "ABOUT", href: "/about" },
  { label: "EXPERIENCES", href: "/experiences" },
  { label: "PROJECTS", href: "/projects" },
  // { label: "TOOLS", href: "/tools" },
];

type NavigationItemProps = { href: string; label: string };

function HeaderNavigationItem({ href, label }: Readonly<NavigationItemProps>) {
  const isActive = usePathname() === href;

  return (
    <Link
      className={`${
        isActive ? "text-foreground" : "text-muted-foreground"
      } font-nippo transition-colors hover:text-foreground`}
      href={href}
    >
      {label}
    </Link>
  );
}

function HeaderNavigationItemMobile({
  href,
  label,
}: Readonly<NavigationItemProps>) {
  const isActive = usePathname() === href;

  return (
    <Link
      className={`${
        isActive
          ? "hover:text-foreground"
          : "text-muted-foreground hover:text-foreground"
      } font-nippo`}
      href={href}
    >
      {label}
    </Link>
  );
}

export function Header() {
  return (
    <div className="sticky top-0 z-10 w-full bg-secondary">
      <div className="container mx-auto sm:px-6 lg:px-8">
        <header className="flex h-16 w-full items-center gap-4 border-b px-4 md:px-6">
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
              <Button
                className="shrink-0 md:hidden"
                size="icon"
                variant="outline"
              >
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

          <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <div className="ml-auto">
              <ThemeToggle />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
