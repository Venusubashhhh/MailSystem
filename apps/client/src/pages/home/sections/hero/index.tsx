import { t } from "@lingui/macro";
import { ArrowRight } from "@phosphor-icons/react";
import { Badge, buttonVariants } from "@reactive-resume/ui";
import { cn } from "@reactive-resume/utils";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { defaultTiltProps } from "@/client/constants/parallax-tilt";

import { HeroCTA } from "./call-to-action";
import { Decoration } from "./decoration";

export const HeroSection = () => (
  <section id="hero" className="relative">
    <Decoration.Grid />
    <Decoration.Gradient />

    <div className="mx-auto max-w-7xl px-6 lg:flex lg:h-screen lg:items-center lg:px-12">
      <motion.div
        className="mx-auto mt-12 max-w-3xl shrink-0 lg:mx-0 lg:mt-0 lg:max-w-xl lg:pt-8"
        viewport={{ once: true }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <div className="hidden items-center gap-x-4 sm:flex">
          {/* <Badge>{t`Version 4`}</Badge>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.rxresu.me/overview/features"
            className={cn(buttonVariants({ variant: "link" }), "space-x-2 text-left")}
          >
            <p>{t`What's new in the latest version`}</p>
            <ArrowRight />
          </a> */}
        </div>

        <div className="space-y-2">
   
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {t`A free and open-source Mail App`}
          </h1>
        </div>

        <p className="prose prose-base prose-zinc mt-6 text-lg leading-8 dark:prose-invert">
          {t`A Mail Application with AI Feature for Text Enhancement and Blockchain for Security.`}
        </p>

        <div className="mt-10 flex items-center gap-x-8">
          <HeroCTA />
        </div>
      </motion.div>
<div>
  <img
width={2420}
          height={1080}
          alt="Open books on a table"
          className="h-screen w-full object-cover object-center"
          src="/backgrounds/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg"
        />
</div>
    
    </div>
  </section>
);
