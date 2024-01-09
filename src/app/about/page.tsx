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
function MeetingIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      height="16"
      viewBox="0 0 640 512"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48V352h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16V352c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V128H16zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128V352c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V144c0-8.8-7.2-16-16-16H544zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "About",
  description:
    "I’m Charles-Edouard Fatrane. I live in Paris, where I design amazing website and applications !",
};

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              alt=""
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 grayscale"
              sizes="(min-width: 1024px) 32rem, 20rem"
              src={portraitImage}
            />
          </div>
        </div>

        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Charles-Edouard Fatrane. I live in Paris, where I design the
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
              href={SOCIAL.linkedin}
              icon={LinkedInIcon}
            >
              Follow on LinkedIn
            </SocialLink>

            <SocialLink
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              href="mailto:cfatrane.pro@gmail.com"
              icon={MailIcon}
            >
              cfatrane.pro@gmail.com
            </SocialLink>

            <SocialLink
              className="pt-8"
              href="https://calendly.com/cfatrane-pro"
              icon={MeetingIcon}
            >
              Book a meeting with me on calendly
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}
