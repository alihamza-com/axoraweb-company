"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px] dark:bg-gray-900"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mb-5 font-sans text-lg leading-tight font-bold text-black sm:text-xl md:text-2xl dark:text-white "
              >
                Welcome to AxoraWeb — Powering Your Digital Future with Smart
                Backend Solutions
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-12 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl dark:text-white/80"
              >
                Join us at AxoraWeb, where modern technologies meet expert
                craftsmanship to build web applications that perform
                flawlessly and scale seamlessly.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
              >
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 dark:hover:bg-primary ml-4 inline-block rounded-xs px-8 py-4 text-base font-semibold text-black duration-300 ease-in-out dark:bg-white/10 dark:text-white dark:hover:text-white/90"
                >
                  Get Started
                </Link>

                <Link
                  href="/about"
                  className="bg-primary hover:bg-primary/90 dark:hover:bg-primary ml-4 inline-block rounded-xs px-8 py-4 text-base font-semibold text-black duration-300 ease-in-out dark:bg-white/10 dark:text-white dark:hover:text-white/90"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* SVGs remain unchanged */}
    </section>
  );
};

export default Hero;
