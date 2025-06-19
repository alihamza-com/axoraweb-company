"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const highlights = [
  {
    title: "10+ Projects Delivered",
    text: "Built scalable applications for startups and small businesses.",
  },
  {
    title: "UI/UX Focused",
    text: "Design-first development approach using Figma & Tailwind.",
  },
  {
    title: "API Integrations",
    text: "Experienced with REST, GraphQL, and third-party APIs.",
  },
];

const faqs = [
  {
    id: 1,
    question: "Which technologies do you use for frontend development?",
    answer:
      "I primarily use React, Next.js, and Tailwind CSS for building fast and responsive user interfaces.",
  },
  {
    id: 2,
    question: "Can you upgrade my existing website?",
    answer:
      "Yes, I specialize in modernizing legacy systems with a focus on performance, UX, and scalability.",
  },
  {
    id: 3,
    question: "Do you work with backend systems?",
    answer:
      "Absolutely! I build APIs using Node.js, Express, and Prisma with secure and scalable architectures.",
  },
];

const projects = [
  {
    name: "VSPDF",
    description: "PDF merge, compress , split  and signing tools platform",
    stack: ["Next.js", "React", "Tailwind", "Node.js"],
  },
  {
    name: "Digital Databank",
    description: "Secure cloud-based document storage and management.",
    stack: ["Next.js", "MongoDB", "TypeScript"],
  },
  {
    name: "Laam Web Portal",
    description: "Business marketplace with admin & customer dashboards.",
    stack: ["React", "Express.js", "PostgreSQL"],
  },
  {
    name: "ZeroKoin",
    description: "Decentralized app with secure wallet integration.",
    stack: ["Next.js", "Web3.js", "Prisma"],
  },
  {
    name: "Woah Web",
    description: "Creative agency portfolio site with animation effects.",
    stack: ["Next.js", "Framer Motion", "Tailwind CSS"],
  },
];

export default function ExperienceShowcase() {
  const [selected, setSelected] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scroll = () => {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
        el.scrollLeft = 0;
      } else {
        el.scrollLeft += 1;
      }
    };
    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white via-gray-100 to-gray-50 px-6 py-24 text-gray-800 md:px-32 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-gray-100">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center text-5xl font-extrabold tracking-tight"
      >
        My Web Development Journey
      </motion.h2>

      {/* Highlights Section */}
      <div className="mb-24 grid gap-6 md:grid-cols-3">
        {highlights.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <h3 className="mb-2 text-xl font-semibold text-blue-600 dark:text-blue-400">
              {item.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Featured Projects */}
      <div className="mt-10 text-center">
        <h2 className="mb-10 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-4xl font-bold text-transparent">
          Featured Projects
        </h2>
        <div
          ref={scrollRef}
          className="relative flex gap-6 overflow-hidden px-4 py-6 whitespace-nowrap"
        >
          {[...projects, ...projects].map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative inline-block w-auto min-w-[35rem] rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-lg transition-transform duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="absolute -top-6 left-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1 text-sm text-white shadow-md dark:from-blue-500 dark:to-purple-500">
                {project.name}
              </div>
              <div className="overflow-wap mt-6 min-h-[7rem]">
                <p className="overflow-wrap mb-4 text-sm leading-relaxed break-words text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mx-auto mt-32 max-w-4xl">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map(({ id, question, answer }) => (
            <div
              key={id}
              className="rounded-lg border border-gray-300 dark:border-gray-700"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === id ? null : id)}
                className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold text-gray-800 focus:outline-none dark:text-white"
              >
                {question}
                <span className="ml-4 text-xl font-bold">
                  {activeFaq === id ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence>
                {activeFaq === id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-4 text-gray-600 dark:text-gray-300"
                  >
                    {answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
