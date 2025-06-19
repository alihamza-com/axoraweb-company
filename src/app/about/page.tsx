import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AxoraWeb – Custom Software & App Development Company",
  description:
    "Learn more about AxoraWeb’s mission, team, and expertise in custom web, mobile app, and software development for startups and enterprises.",
  keywords: [
    "About AxoraWeb",
    "AxoraWeb team",
    "software company",
    "tech startup",
    "Ali Hamza",
    "custom software experts",
    "web development Pakistan",
    "mobile app agency",
  ],
  authors: [{ name: "Ali Hamza", url: "https://axoraweb.vercel.app" }],
  creator: "Ali Hamza",
  publisher: "AxoraWeb",
  applicationName: "AxoraWeb",
  metadataBase: new URL("https://axoraweb.vercel.app"),
  openGraph: {
    title: "About Us | AxoraWeb – Custom Software & App Development Company",
    description:
      "Get to know AxoraWeb—our values, our team, and how we build world-class custom software solutions.",
    url: "https://axoraweb.vercel.app/about",
    siteName: "AxoraWeb",
    images: [
      {
        url: "https://axoraweb.vercel.app/og-about.png", // You should create this image
        width: 1200,
        height: 630,
        alt: "AxoraWeb About Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | AxoraWeb – Custom Software & App Development",
    description:
      "Discover how AxoraWeb helps startups and enterprises with custom software, mobile apps, and web development.",
    site: "@axoraweb",
    creator: "@alihamza",
    images: ["https://axoraweb.vercel.app/og-about.png"],
  },
  alternates: {
    canonical: "https://axoraweb.vercel.app/about",
    languages: {
      "en-US": "https://axoraweb.vercel.app/about",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "technology",
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
