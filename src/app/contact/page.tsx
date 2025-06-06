import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | AxoraWeb - Custom Web & App Development",
  description:
    "Get in touch with AxoraWeb to discuss your next web, mobile, or software development project. We're here to turn your ideas into digital success.",
  keywords: "contact, web development, app development, software solutions, AxoraWeb",
  authors: [{ name: "Ali Hamza", url: "https://ali.hamza.dev" }],
  openGraph: {
    title: "Contact Us | AxoraWeb - Custom Web & App Development", 
    description:
      "Get in touch with AxoraWeb to discuss your next web, mobile, or software development project. We're here to turn your ideas into digital success.",
    url: "https://axoraweb.com/contact",
    siteName: "AxoraWeb",
  },
  // other metadata
  robots: {
    index: true,
    follow: true,
  },
};

const ContactPage = () => {
  return (
    <div className="mt-10 bg-white dark:bg-gray-900 text-black dark:text-white">
      <Breadcrumb
        pageName="Contact Us"
        description="Have a project in mind? Let's build it together. Reach out to AxoraWeb for custom web design and full-stack development using React, Node.js, and more."
      />
      <Contact />
    </div>
  );
  
};

export default ContactPage;
