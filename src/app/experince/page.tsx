
import Breadcrumb from "@/components/Common/Breadcrumb";

import ExperienceShowcase from "@/components/experince/experince";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | AxoraWeb - Web, App & Software Development Experts",
  description:
    "Discover the story behind AxoraWeb and meet Ali Hamza – a dedicated full-stack developer building fast, scalable, and modern websites for all industries.",
  keywords: [
    "AxoraWeb",
    "About Us",
    "Ali Hamza",
    "Full Stack Developer",
    "Web Development",
    "Software Development",
    "App Development",
    "Digital Solutions",
    "Tech Company",
    "Startup",
    "Enterprise Solutions",
    "Web Design",
    "UI/UX Design",
    "Agile Development",
    "Custom Software"
    
  ],
  authors: [{ name: "Ali Hamza", url: "https://axoraweb.vercel.app" }],
  openGraph: {
    title: "Experience | AxoraWeb - Web, App & Software Development Experts",
    description:
      "Discover the story behind AxoraWeb and meet Ali Hamza – a dedicated full-stack developer building fast, scalable, and modern websites for all industries.",
    url: "https://axoraweb.vercel.app/experince",
    siteName: "AxoraWeb",
  }

  // other metadata
  , robots: {
    index: true,
    follow: true,
  },
};

const Experince = () => {
  return (
    <div className="mt-20 bg-white dark:bg-gray-900 text-black dark:text-white">
      <Breadcrumb  
        pageName="Experience"
        description="Explore my journey as a full-stack developer, showcasing my skills in web and app development. Discover how I build fast, scalable, and modern websites for various industries."
      />

     <ExperienceShowcase />
    </div>
  );
};


export default Experince;
