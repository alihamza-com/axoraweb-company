'use client'
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaApple,
  FaAndroid,
  FaMobileAlt,
  FaTabletAlt,
  FaTimes,
} from "react-icons/fa";

const mobileServices = [
  {
    id: 1,
    icon: <FaApple className="text-5xl text-gray-900 dark:text-white" />,
    title: "iOS App Development",
    description:
      "Beautiful, performant iOS apps with Swift and SwiftUI.",
    details:
      "We specialize in building native iOS apps that deliver a smooth user experience and integrate seamlessly with Apple’s ecosystem.",
  },
  {
    id: 2,
    icon: <FaAndroid className="text-5xl text-green-600" />,
    title: "Android App Development",
    description:
      "Robust Android apps with Kotlin and Jetpack Compose.",
    details:
      "Our Android apps are designed to be fast, reliable, and scalable, using modern development tools and best practices.",
  },
  {
    id: 3,
    icon: <FaMobileAlt className="text-5xl text-purple-600" />,
    title: "Cross-Platform Apps",
    description:
      "Efficient apps using React Native or Flutter.",
    details:
      "We build cross-platform mobile apps that run smoothly on both iOS and Android while minimizing development time and costs.",
  },
  {
    id: 4,
    icon: <FaTabletAlt className="text-5xl text-blue-600" />,
    title: "Tablet Optimization",
    description:
      "Optimized experiences for tablets and larger devices.",
    details:
      "We ensure your mobile applications look great and perform well on tablets and larger screens, providing a consistent experience across devices.",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Anna Roberts",
    feedback:
      "The iOS app developed by Meezan was flawless and helped us engage customers like never before.",
  },
  {
    id: 2,
    name: "David Kim",
    feedback:
      "Their cross-platform development saved us time and money while delivering a fantastic user experience.",
  },
  {
    id: 3,
    name: "Sophia Martinez",
    feedback:
      "Great Android app development team, very professional and communicative throughout the project.",
  },
];

const faqs = [
  {
    id: 1,
    question: "Do you develop native or cross-platform apps?",
    answer:
      "We develop both native apps (iOS and Android) and cross-platform apps using React Native or Flutter, based on client needs.",
  },
  {
    id: 2,
    question: "How do you ensure app performance?",
    answer:
      "We follow best practices including optimized code, native features use, and thorough testing to ensure fast, reliable apps.",
  },
  {
    id: 3,
    question: "Can you help publish apps to stores?",
    answer:
      "Yes, we handle submission, compliance, and updates on Apple App Store and Google Play Store.",
  },
];

export default function MobileAppServices() {
  const [selectedService, setSelectedService] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
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
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6 sm:px-12 md:px-20 transition-colors duration-500">
      <div className="text-center mb-12 max-w-xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Mobile Application Development
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          We build modern, reliable mobile apps tailored to your business and user needs.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {mobileServices.map((service) => (
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

      {/* Service Modal */}
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
                className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
                aria-label="Close modal"
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

      {/* Testimonials */}
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

      {/* FAQ Section */}
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
