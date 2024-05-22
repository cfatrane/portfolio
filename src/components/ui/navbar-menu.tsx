"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="relative " onMouseEnter={() => setActive(item)}>
      <motion.p
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
        transition={{ duration: 0.3 }}
      >
        {item}
      </motion.p>

      {active !== null && (
        <motion.div
          animate={{ opacity: 1, scale: 1, y: 0 }}
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute left-1/2 top-[calc(100%_+_1.7rem)] -translate-x-1/2 transform">
              <motion.div
                className="overflow-hidden rounded-2xl border border-black/[0.2] bg-white shadow-xl backdrop-blur-sm dark:border-white/[0.2] dark:bg-black"
                layoutId="active" // layoutId ensures smooth animation
                transition={transition}
              >
                <motion.div
                  className="h-full w-max p-4"
                  layout // layout ensures smooth animation
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      className="relative flex justify-center space-x-4 rounded-full border border-transparent bg-white px-8 py-6 shadow-input dark:border-white/[0.2] dark:bg-black "
      onMouseLeave={() => setActive(null)} // resets the state
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link className="flex space-x-2" href={href}>
      <Image
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
        height={70}
        src={src}
        width={140}
      />

      <div>
        <h4 className="mb-1 text-xl font-bold text-black dark:text-white">
          {title}
        </h4>

        <p className="max-w-[10rem] text-sm text-neutral-700 dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 hover:text-black dark:text-neutral-200 "
    >
      {children}
    </Link>
  );
};
