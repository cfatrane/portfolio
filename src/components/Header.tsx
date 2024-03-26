"use client";

import { useState } from "react";

import { usePathname } from "next/navigation";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Experiences", href: "/experiences" },
  { name: "Projects", href: "/projects" },
];

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isActive = usePathname() === href;

  return (
    <NavbarItem className="rounded p-2 hover:bg-blue-600" isActive={isActive}>
      <Link color={isActive ? "primary" : "foreground"} href={href}>
        {children}
      </Link>
    </NavbarItem>
  );
}

function NavMenuItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isActive = usePathname() === href;

  return (
    <NavbarMenuItem>
      <Link
        className="w-full"
        color={isActive ? "primary" : "foreground"}
        href={href}
        size="lg"
      >
        {children}
      </Link>
    </NavbarMenuItem>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHomePage = usePathname() === "/";

  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        <NavbarBrand className="flex items-center">
          <Link color={isHomePage ? "primary" : "foreground"} href="/">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="ml-2 font-bold text-inherit text-white">Home</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-10 sm:flex" justify="center">
        {navigation.map((navItem) => (
          <NavItem href={navItem.href} key={navItem.name}>
            {navItem.name}
          </NavItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          {/* <ThemeToggle /> */}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {navigation.map((item, index) => (
          <NavMenuItem href={item.href} key={`${item}-${index}`}>
            {item.name}
          </NavMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
