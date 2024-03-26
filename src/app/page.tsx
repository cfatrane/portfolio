import Image, { type ImageProps } from "next/image";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { clsx } from "clsx";

// import AcmeLogo from "@/assets/one.jpg";

import { Container } from "@/components/Container";
import HomeBis from "@/components/Home";
import LogoCloud from "@/components/LogoCloud";
import {
  MeetingIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  MaltIcon,
} from "@/components/SocialIcons";

import { AcmeLogo } from "./AcmeLogo.jsx";

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
      />

      <path
        className="stroke-zinc-400 dark:stroke-zinc-500"
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
      />
    </svg>
  );
}

export default async function Home() {
  return (
    <div>
      <Container>
        <HomeBis />

        <LogoCloud />
      </Container>
    </div>
  );
}
