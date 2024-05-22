import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import portraitImage from "@/images/portrait.jpg";

function WhoIAm() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mx-auto mt-12 w-full max-w-7xl px-6 py-20 sm:mt-0 lg:px-8 xl:mt-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Qui suis je ?
          </h2>

          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl leading-8 text-card-foreground">
                Salut ! Moi c'est Charles-Édouard Fatrane, un développeur
                full-stack passionné, basé entre Paris et Toulouse. Avec plus de
                six ans d'expérience dans le domaine, je maîtrise des
                technologies super cool comme Typescript, Next.js, React.js,
                React Native / Expo.
              </p>

              <div className="mt-10 max-w-xl text-base leading-7 text-muted-foreground">
                <p>
                  J'ai eu la chance de bosser avec des grands noms comme BNP, La
                  Poste et Le Figaro, ainsi qu'avec des startups pleines
                  d'innovation. J'ai touché à tout : mode, e-commerce,
                  audiovisuel, médias... Quand je ne suis pas derrière mon
                  écran, j'adore faire du vélo, courir, aller au cinéma et
                  voyager. Ces passions me gardent en forme et nourrissent ma
                  créativité.
                </p>

                <p className="mt-10">
                  Pour la suite, j'ai plein d'idées en tête : lancer plusieurs
                  business, aider de nouvelles startups et grand groupe à
                  grandir. Je suis aussi un grand fan des projets open source et
                  j'en crée de plus en plus aujourd'hui afin d'aider les jeunes
                  développeurs dans leurs parcours.
                </p>
              </div>
            </div>

            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="mx-auto w-64 space-y-8 xl:w-80">
                <Image
                  alt="me"
                  className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover grayscale dark:bg-zinc-800"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  src={portraitImage}
                />
              </dl>
            </div>
          </div>
        </div>
      </div>

      <Button asChild>
        <Link href="/about">En savoir plus</Link>
      </Button>
    </div>
  );
}
export default WhoIAm;
