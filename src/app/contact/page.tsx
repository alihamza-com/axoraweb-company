import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
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
