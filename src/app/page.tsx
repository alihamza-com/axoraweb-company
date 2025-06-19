import { Metadata } from "next";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Video from "@/components/Video";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "AxoraWeb | Custom Software, Web & Mobile App Development Company",
  description:
    "AxoraWeb is a top-tier software house delivering custom web, mobile, and SaaS solutions tailored for startups and enterprises worldwide.",
  keywords: [
    "AxoraWeb",
    "Ali Hamza",
    "web development company",
    "custom software development",
    "mobile app development",
    "Next.js agency",
    "full-stack developer",
    "Pakistan software house",
    "SaaS development",
    "UI UX design",
  ],
  authors: [{ name: "Ali Hamza", url: "https://axoraweb.vercel.app" }],
  creator: "Ali Hamza",
  publisher: "AxoraWeb",
  applicationName: "AxoraWeb",
  metadataBase: new URL("https://axoraweb.vercel.app"),
  openGraph: {
    title: "AxoraWeb | Custom Software, Web & Mobile App Development Company",
    description:
      "AxoraWeb builds fast, scalable, and secure digital solutions for businesses—from MVP to enterprise platforms.",
    url: "https://axoraweb.vercel.app",
    siteName: "AxoraWeb",
    images: [
      {
        url: "https://axoraweb.vercel.app/og-image.png", // Add this image in your public folder
        width: 1200,
        height: 630,
        alt: "AxoraWeb - Custom Software and App Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AxoraWeb | Custom Software, Web & Mobile App Development",
    description:
      "AxoraWeb helps startups and enterprises build robust web and mobile solutions using the latest technologies.",
    site: "@axoraweb",
    creator: "@alihamza",
    images: ["https://axoraweb.vercel.app/og-image.png"],
  },
  alternates: {
    canonical: "https://axoraweb.vercel.app",
    languages: {
      "en-US": "https://axoraweb.vercel.app",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "technology",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />

      <AboutSectionOne />
      <AboutSectionTwo />
      

      <Contact />
    </>
  );
}
