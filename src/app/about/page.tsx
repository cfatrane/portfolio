import { type Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import { clsx } from "clsx";

import SOCIAL from "@/constants/social";

import { Container } from "@/components/Container";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MaltIcon,
  MeetingIcon,
  TwitterIcon,
} from "@/components/SocialIcons";

import portraitImage from "@/images/portrait.jpg";

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        href={href}
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />

        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "About",
  description:
    "I’m Charles-Édouard Fatrane. I live in Paris, where I design amazing website and applications !",
};

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              alt=""
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover grayscale dark:bg-zinc-800"
              sizes="(min-width: 1024px) 32rem, 20rem"
              src={portraitImage}
            />
          </div>
        </div>

        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Charles-Édouard Fatrane. I live in Paris, where I design the
            amazing website and applications.
          </h1>

          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>Hello 👋!</p>

            <p>
              An alumnus of Ecole 42 with a wealth of experience spanning 5
              years, I'm a Fullstack developer specializing in the design and
              deployment of web and mobile solutions using React Js , Node.js
              and React Native.
            </p>

            <p>
              My career path, which spans innovative startups to large
              enterprises, has enabled me to develop web platforms, showcase
              sites, e-commerce solutions, interactive blogs and responsive
              mobile applications.
            </p>

            <p>
              I work closely with my clients to understand their needs and
              exceed their expectations. If you're looking for a developer who
              combines technical expertise, attention to detail and a holistic
              approach to web development, I'd be delighted to discuss your
              project.
            </p>

            <p>
              I'm passionate about delivering solutions that not only meet
              technical requirements, but also add real value for the end user.
              If you need an expert who can translate your visions into
              concrete, high-performance digital experiences, I'm at your
              disposal to discuss your project and contribute to its success.
            </p>
          </div>
        </div>

        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href={SOCIAL.twitter} icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>

            <SocialLink
              className="mt-4"
              href={SOCIAL.instagram}
              icon={InstagramIcon}
            >
              Follow on Instagram
            </SocialLink>

            <SocialLink className="mt-4" href={SOCIAL.github} icon={GitHubIcon}>
              Follow on GitHub
            </SocialLink>

            <SocialLink
              className="mt-4"
              href={SOCIAL.linkedIn}
              icon={LinkedInIcon}
            >
              Follow on LinkedIn
            </SocialLink>

            <SocialLink
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              href={SOCIAL.mail}
              icon={MailIcon}
            >
              Contact me by mail
            </SocialLink>

            <SocialLink
              className="pt-8"
              href="https://calendly.com/cfatrane-pro"
              icon={MeetingIcon}
            >
              Book a meeting with me on calendly
            </SocialLink>

            <SocialLink className="pt-8" href={SOCIAL.malt} icon={MaltIcon}>
              Book a contract on Malt
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}
