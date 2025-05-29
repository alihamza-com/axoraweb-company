import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <div className="mt-20 bg-white dark:bg-gray-900 text-black dark:text-white">
      <Breadcrumb  
        pageName="About Us"
        description="Discover the story behind AxoraWeb and meet Ali Hamza – a dedicated full-stack developer building fast, scalable, and modern websites for all industries."
      />

      <AboutSectionOne />
      <AboutSectionTwo />
    </div>
  );
};


export default AboutPage;
