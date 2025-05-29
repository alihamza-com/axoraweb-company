"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaMobileAlt,
  FaTimes,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaLaptopCode className="text-5xl text-blue-600" />,
    title: "Frontend Development",
    description:
      "Modern, responsive user interfaces using React, Next.js, and Tailwind CSS.",
    details:
      "We build fast and interactive frontends with the latest tools like React and Next.js. Your site will look amazing on all devices.",
  },
  {
    id: 2,
    icon: <FaServer className="text-5xl text-green-600" />,
    title: "Backend Development",
    description:
      "Scalable and secure APIs with Node.js, Express, and Prisma.",
    details:
      "Our backend services ensure your application is fast, reliable, and scalable with modern tech stacks and best practices.",
  },
  {
    id: 3,
    icon: <FaMobileAlt className="text-5xl text-purple-600" />,
    title: "Mobile Optimization",
    description:
      "Fully responsive designs for a seamless experience on any device.",
    details:
      "We optimize your web apps for mobile devices, ensuring smooth performance and great UX no matter the screen size.",
  },
  {
    id: 4,
    icon: <FaCode className="text-5xl text-red-600" />,
    title: "Custom Web Solutions",
    description:
      "Tailored web applications built to match your unique business needs.",
    details:
      "We create custom web apps tailored exactly to your business requirements for maximum efficiency and impact.",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    feedback:
      "Meezan Software House transformed our outdated website into a modern, sleek platform. The team was responsive and professional.",
  },
  {
    id: 2,
    name: "Michael Lee",
    feedback:
      "The custom backend solutions provided by Meezan Software House helped us scale our services effortlessly.",
  },
  {
    id: 3,
    name: "Emily Davis",
    feedback:
      "Amazing mobile optimization! Our customers now have a seamless experience on any device.",
  },
];

const faqs = [
  {
    id: 1,
    question: "What technologies do you use for frontend development?",
    answer:
      "We primarily use React, Next.js, and Tailwind CSS to create fast, responsive, and visually appealing user interfaces.",
  },
  {
    id: 2,
    question: "How do you ensure the security of backend systems?",
    answer:
      "We follow best security practices including proper authentication, authorization, data validation, and secure API design.",
  },
  {
    id: 3,
    question: "Can you handle existing website upgrades?",
    answer:
      "Yes, we can update and optimize your existing website to improve performance, design, and functionality.",
  },
];

export default function WebDevelopmentServices() {
  const [selectedService, setSelectedService] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Cycle testimonials every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-4 md:px-20 transition-colors duration-500">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Web Development Services
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
          We offer a range of modern, scalable, and visually engaging web
          solutions to help your business grow online.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {services.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => setSelectedService(service)}
            className="cursor-pointer"
          >
            <Card className="p-6 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl bg-white dark:bg-gray-800">
              <CardContent className="flex flex-col items-center text-center space-y-4">
                {service.icon}
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
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
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 max-w-lg mx-4 relative"
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
      <div className="max-w-3xl mx-auto mb-20">
        <motion.div
          key={testimonialIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center"
        >
          <p className="text-gray-700 dark:text-gray-300 italic mb-4">
  &quot;{testimonials[testimonialIndex].feedback}&quot;
</p>

          <p className="font-semibold text-gray-900 dark:text-white">
            — {testimonials[testimonialIndex].name}
          </p>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto">
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
