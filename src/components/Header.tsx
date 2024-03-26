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
  Button,
} from "@nextui-org/react";
import { clsx } from "clsx";

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
    <NavbarItem isActive={isActive}>
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

  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        <NavbarBrand>
          <Link color="foreground" href="/">
            <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
              <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>

            <p className="font-bold text-inherit">ACME</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {navigation.map((navItem) => (
          <NavItem href={navItem.href} key={navItem.name}>
            {navItem.name}
          </NavItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>

        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
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
