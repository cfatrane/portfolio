import { type Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import { clsx } from "clsx";

import { Container } from "@/components/Container";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MaltIcon,
  MeetingIcon,
  TwitterIcon,
} from "@/components/SocialIcons";

import SOCIAL from "@/constants/social";

import portraitImage from "@/images/portrait.jpg";

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: Readonly<{
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}>) {
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

function MailIcon(props: Readonly<React.ComponentPropsWithoutRef<"svg">>) {
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
              alt="me"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover grayscale dark:bg-zinc-800"
              sizes="(min-width: 1024px) 32rem, 20rem"
              src={portraitImage}
            />
          </div>
        </div>

        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            "Je m'appelle Charles-Édouard Fatrane. J'habite à Paris, où je
            conçois des sites Web et des applications mobiles."
          </h1>

          <div className="mt-6 space-y-7 font-sans text-base text-zinc-600 dark:text-zinc-400">
            <p>Hello 👋 !</p>

            <p>
              Je suis développeur frontend depuis plus de 5 ans exerçant dans
              des secteurs comme l'e-commerce, l'audiovisuel et les médias. J'ai
              eu l'opportunité de travailler avec des entreprises comme la BNP,
              La Poste et Le Figaro mais aussi avec différentes start-ups.
            </p>

            <p>
              Mon parcours professionnel, qui s'étend des startups innovantes
              aux grandes entreprises, m'a permis de développer des plateformes
              web, des sites vitrines, des solutions e-commerce, des blogs
              interactifs et des applications mobiles réactives.
            </p>

            <p>
              Je collabore étroitement avec mes clients pour comprendre leurs
              besoins et dépasser leurs attentes. Si vous cherchez un
              développeur qui combine expertise technique, souci du détail et
              une approche complete du développement web, je serais ravi de
              discuter avec vous.
            </p>

            {/* <p>
              Je suis passionné par le fait d'offrir des solutions qui non
              seulement répondent aux exigences techniques, mais qui apportent
              également une réelle valeur ajoutée à l'utilisateur final.
            </p>

            <p>
              Si vous avez besoin d'un expert capable de traduire vos visions en
              expériences numériques concrètes et performantes, je suis à votre
              disposition pour discuter de votre projet et contribuer à son
              succès.
            </p> */}

            <p>
              On échange sur votre projet ?<br />
              <br className="md:hidden" />
              Contactez-moi par e-mail :{" "}
              <Link className="underline" href="mailto:cfatrane.pro@gmail.com">
                cfatrane.pro@gmail.com
              </Link>
              <br />
              <br className="md:hidden" />
              Réserver un créneau :{" "}
              <Link
                className="underline"
                href="https://calendly.com/cfatrane-pro"
              >
                https://calendly.com/cfatrane-pro
              </Link>
            </p>
          </div>
        </div>

        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href={SOCIAL.linkedIn} icon={LinkedInIcon}>
              Suivez moi sur LinkedIn
            </SocialLink>

            <SocialLink
              className="mt-4"
              href={SOCIAL.instagram}
              icon={InstagramIcon}
            >
              Suivez moi sur Instagram
            </SocialLink>

            <SocialLink className="mt-4" href={SOCIAL.github} icon={GitHubIcon}>
              Suivez moi sur GitHub
            </SocialLink>

            <SocialLink
              className="mt-4"
              href={SOCIAL.twitter}
              icon={TwitterIcon}
            >
              Suivez moi sur Twitter
            </SocialLink>

            <SocialLink
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              href={SOCIAL.mail}
              icon={MailIcon}
            >
              Contacter moi par mail
            </SocialLink>

            <SocialLink
              className="pt-8"
              href={SOCIAL.calendly}
              icon={MeetingIcon}
            >
              Booker un meeting avec moi sur calendly
            </SocialLink>

            <SocialLink className="pt-8" href={SOCIAL.malt} icon={MaltIcon}>
              Booker une mission sur Malt
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}
