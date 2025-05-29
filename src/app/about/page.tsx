import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AxoraWeb - Web, App & Software Development Experts",
  description:
    "Learn about AxoraWeb — a passionate team of developers, designers, and strategists dedicated to building high-quality digital solutions for startups and enterprises.",
  keywords: [
    "about us",
    "web development",
    "app development",
    "software development",
    "custom software",
    "full-stack development", 
    "digital solutions",
    "tech company",
    "Ali Hamza",
    "AxoraWeb",
  ],
  authors: [{ name: "Ali Hamza", url: "https://ali.hamza.dev" }],
  openGraph: {
    title: "About Us | AxoraWeb - Web, App & Software Development Experts",
    description:
      "Learn about AxoraWeb — a passionate team of developers, designers, and strategists dedicated to building high-quality digital solutions for startups and enterprises.",
    url: "https://axoraweb.com/about",
    siteName: "AxoraWeb",
  }

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
