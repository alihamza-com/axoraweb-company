'use client';
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { FaChartLine, FaSearchDollar, FaBullhorn, FaTools, FaTimes } from "react-icons/fa";

const seoServices = [
  {
    id: 1,
    icon: <FaSearchDollar className="text-5xl text-green-600" />,
    title: "Keyword Research",
    description:
      "Find high-impact keywords to drive targeted traffic.",
    details:
      "We conduct comprehensive keyword research to identify the most valuable terms your audience is searching for, ensuring high visibility and relevant traffic.",
  },
  {
    id: 2,
    icon: <FaChartLine className="text-5xl text-blue-600" />,
    title: "On-Page SEO",
    description:
      "Optimize site content and structure for search engines.",
    details:
      "From title tags and meta descriptions to content structure and URL optimization, we make sure your site is fully aligned with SEO best practices.",
  },
  {
    id: 3,
    icon: <FaBullhorn className="text-5xl text-red-600" />,
    title: "Off-Page SEO",
    description:
      "Build authority with strategic link building.",
    details:
      "We enhance your online reputation through quality backlinks and strategic outreach, helping improve domain authority and rankings.",
  },
  {
    id: 4,
    icon: <FaTools className="text-5xl text-purple-600" />,
    title: "Technical SEO",
    description:
      "Fix technical issues that hinder performance.",
    details:
      "We perform audits to identify and fix issues like slow load times, broken links, and crawl errors to improve search engine indexing.",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Liam Chen",
    feedback:
      "Our website traffic doubled in 3 months thanks to their SEO strategy.",
  },
  {
    id: 2,
    name: "Nora Patel",
    feedback:
      "Great communication and noticeable improvements in our rankings!",
  },
  {
    id: 3,
    name: "Marcus Lee",
    feedback:
      "Their technical audit fixed issues we didn’t even know we had. Highly recommended!",
  },
];

const faqs = [
  {
    id: 1,
    question: "How long does SEO take to show results?",
    answer:
      "SEO is a long-term strategy. Results typically start to appear within 3–6 months, depending on competition and current site status.",
  },
  {
    id: 2,
    question: "Do you guarantee first-page rankings?",
    answer:
      "No one can guarantee #1 rankings. We focus on sustainable strategies that align with search engine guidelines.",
  },
  {
    id: 3,
    question: "What tools do you use for SEO?",
    answer:
      "We use industry-leading tools like SEMrush, Ahrefs, Google Analytics, and Google Search Console.",
  },
];

export default function SEOServicesPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6 sm:px-12 md:px-20">
      <div className="text-center mb-12 max-w-xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          SEO Services
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          Increase your visibility, rank higher on search engines, and attract more organic traffic with our proven SEO strategies.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {seoServices.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => setSelectedService(service)}
            className="cursor-pointer"
          >
            <Card className="p-6 rounded-2xl shadow-md hover:shadow-xl bg-white dark:bg-gray-800">
              <CardContent className="flex flex-col items-center text-center space-y-4">
                {service.icon}
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 px-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <FaTimes size={24} />
              </button>
              <div className="flex items-center space-x-4 mb-6">
                {selectedService.icon}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedService.title}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{selectedService.details}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-3xl mx-auto mb-20 px-4">
        <motion.div
          key={testimonialIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center"
        >
         <p className="text-gray-700 dark:text-gray-300 italic mb-4">
  {testimonials[testimonialIndex].feedback}
      </p>

          <p className="font-semibold text-gray-900 dark:text-white">
            — {testimonials[testimonialIndex].name}
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
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
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 dark:text-white font-semibold"
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
