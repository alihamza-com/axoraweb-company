"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const highlights = [
  {
    title: "10+ Projects Delivered",
    text: "Built scalable applications for startups and small businesses."
  },
  {
    title: "UI/UX Focused",
    text: "Design-first development approach using Figma & Tailwind."
  },
  {
    title: "API Integrations",
    text: "Experienced with REST, GraphQL, and third-party APIs."
  }
];

const faqs = [
  {
    id: 1,
    question: "Which technologies do you use for frontend development?",
    answer:
      "I primarily use React, Next.js, and Tailwind CSS for building fast and responsive user interfaces."
  },
  {
    id: 2,
    question: "Can you upgrade my existing website?",
    answer:
      "Yes, I specialize in modernizing legacy systems with a focus on performance, UX, and scalability."
  },
  {
    id: 3,
    question: "Do you work with backend systems?",
    answer:
      "Absolutely! I build APIs using Node.js, Express, and Prisma with secure and scalable architectures."
  }
];

const projects = [
  {
    name: "VSPDF",
    description: "PDF editing and signing tools platform",
    stack: ["Next.js", "React", "Tailwind", "Node.js"]
  },
  {
    name: "Digital Databank",
    description: "Secure cloud-based document storage and management.",
    stack: ["Next.js", "MongoDB", "TypeScript"]
  },
  {
    name: "Laam Web Portal",
    description: "Business marketplace with admin & customer dashboards.",
    stack: ["React", "Express.js", "PostgreSQL"]
  },
  {
    name: "ZeroKoin",
    description: "Decentralized app with secure wallet integration.",
    stack: ["Next.js", "Web3.js", "Prisma"]
  },
  {
    name: "Woah Web",
    description: "Creative agency portfolio site with animation effects.",
    stack: ["Next.js", "Framer Motion", "Tailwind CSS"]
  }
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
    <section className="relative min-h-screen bg-gradient-to-b from-white via-gray-100 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 py-24 px-6 md:px-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-extrabold mb-16 text-center tracking-tight"
      >
        My Web Development Journey
      </motion.h2>

      {/* Highlights Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-24">
        {highlights.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 border border-gray-200 dark:border-gray-700 text-center"
          >
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Featured Projects */}
      <div className="mt-10 text-center">
        <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Featured Projects
        </h2>
        <div
          ref={scrollRef}
          className="whitespace-nowrap flex gap-6 px-4 py-6 overflow-hidden relative"
        >
          {[...projects, ...projects].map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative inline-block w-auto min-w-[20rem] bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 text-left transition-transform duration-300 hover:shadow-xl"
            >
              <div className="absolute -top-6 left-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white text-sm px-4 py-1 rounded-full shadow-md">
                {project.name}
              </div>
              <div className="mt-6 overflow-hidden">
  <p className="text-gray-700 dark:text-gray-300 mb-4 break-words line-clamp-4">
    {project.description}
  </p>
  <div className="flex flex-wrap gap-2">
    {project.stack.map((tech) => (
      <span
        key={tech}
        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-white text-xs px-3 py-1 rounded-full"
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
      <div className="max-w-4xl mx-auto mt-32">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map(({ id, question, answer }) => (
            <div
              key={id}
              className="border border-gray-300 dark:border-gray-700 rounded-lg"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === id ? null : id)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 dark:text-white font-semibold focus:outline-none"
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
