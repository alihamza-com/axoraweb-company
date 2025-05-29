import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";

import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";

import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AxoraWeb | Custom Software, Web & Mobile App Development Company",
  description:
    "AxoraWeb is a leading tech company offering custom software development, web design, mobile app solutions, and SaaS platforms for startups and enterprises.",
  keywords: [
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
    title: "AxoraWeb | Custom Software, Web & Mobile App Development Company",
    description:
      "AxoraWeb is a leading tech company offering custom software development, web design, mobile app solutions, and SaaS platforms for startups and enterprises.",
    url: "https://axoraweb.com",
    siteName: "AxoraWeb",
  },
    // other metadata
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
