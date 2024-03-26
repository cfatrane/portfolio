"use client";

import { useState } from "react";

import Link from "next/link";

import { Chip } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/utils/cn";

import { Meteors } from "@/components/ui/meteors";

export const HoverEffect = ({
  items,
  className,
  withMeteors,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    wip?: boolean;
  }[];
  className?: string;
  withMeteors?: boolean;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 py-10  md:grid-cols-2  lg:grid-cols-3",
        className,
      )}
    >
      {items.map((item, idx) => (
        <Link
          className="group relative  block h-full w-full p-2"
          href={item?.link}
          key={item?.link}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                className="absolute inset-0 block h-full w-full rounded-3xl bg-neutral-200  dark:bg-slate-800/[0.8]"
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
                initial={{ opacity: 0 }}
                layoutId="hoverBackground"
              />
            )}
          </AnimatePresence>

          <Card withMeteors={withMeteors}>
            <CardTitle wip={item.wip}>{item.title}</CardTitle>

            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  withMeteors,
}: {
  className?: string;
  children: React.ReactNode;
  withMeteors?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl border border-transparent bg-black p-4 group-hover:border-slate-700 dark:border-white/[0.2]",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>

      {withMeteors && isHovered && <Meteors number={20} />}
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
  wip,
}: {
  className?: string;
  children: React.ReactNode;
  wip?: boolean;
}) => {
  return (
    <div className="mt-4 flex items-center">
      <h4 className={cn("font-bold tracking-wide text-zinc-100", className)}>
        {children}
      </h4>

      {wip && (
        <Chip className="ml-2" color="warning" size="sm">
          WIP
        </Chip>
      )}
    </div>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-sm leading-relaxed tracking-wide text-zinc-400",
        className,
      )}
    >
      {children}
    </p>
  );
};
