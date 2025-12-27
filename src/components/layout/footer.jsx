"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 80, scale: 0.8 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: 0.05,
      }}
      viewport={{ once: true }}
      className="bg-[#FAFAFA] py-14 px-5"
    >
      <Image
        src="/images/logo-black.svg"
        alt="Logo"
        width={300}
        height={200}
        className="mx-auto w-52 h-24 md:w-72 md:h-48"
      />

      <div className="flex justify-center items-center gap-5 mt-5">
        <Image src="/images/insta.svg" alt="Insta" width={30} height={30} />
        <Image src="/images/twitter.svg" alt="Twitter" width={30} height={30} />
        <Image src="/images/fb.svg" alt="FB" width={30} height={30} />
      </div>

      <div className="flex justify-center items-center mt-6">
        <Button className="px-10 md:px-16 py-5 md:py-5.5 md:text-base font-semibold rounded-sm border-2 border-transparent hover:border-(--color-easesmith) hover:bg-white hover:text-(--color-easesmith)">
          Let&apos;s Talk
        </Button>
      </div>
    </motion.footer>
  );
};
