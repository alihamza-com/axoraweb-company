// app/services/WebDevelopment/page.tsx

import { Metadata } from "next";
import React from "react";
import WebDevelopmentSection from "@/components/services/web-development";


export const metadata: Metadata = {
  title: "Web Development | AxoraWeb – Custom Website & Web App Solutions",
  description:
    "AxoraWeb provides custom web development services using modern technologies like Next.js, React, and Node.js. We build fast, scalable, and secure web apps tailored to your business.",
  keywords: [
    "web development services",
    "custom website development",
    "Next.js developers",
    "React development",
    "full-stack web development",
    "web app development",
    "Ali Hamza",
    "AxoraWeb",
    "Node.js web development",
    "responsive website design",
  ],
  authors: [{ name: "Ali Hamza", url: "https://axoraweb.vercel.app" }],
  creator: "Ali Hamza",
  publisher: "AxoraWeb",
  applicationName: "AxoraWeb",
  metadataBase: new URL("https://axoraweb.vercel.app"),
  openGraph: {
    title: "Web Development | AxoraWeb – Custom Website & Web App Solutions",
    description:
      "From corporate websites to complex web apps, AxoraWeb crafts high-performing web solutions tailored to your goals.",
    url: "https://axoraweb.vercel.app/web-development",
    siteName: "AxoraWeb",
    images: [
      {
        url: "https://axoraweb.vercel.app/og-web.png", // Place this image in /public
        width: 1200,
        height: 630,
        alt: "AxoraWeb Web Development Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development | AxoraWeb",
    description:
      "AxoraWeb delivers modern, responsive, and SEO-optimized web development services to startups and enterprises alike.",
    site: "@axoraweb",
    creator: "@alihamza",
    images: ["https://axoraweb.vercel.app/og-web.png"],
  },
  alternates: {
    canonical: "https://axoraweb.vercel.app/web-development",
    languages: {
      "en-US": "https://axoraweb.vercel.app/web-development",
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


export default function WebDevelopmentPage() {
  return (
    <section className="mt-20 bg-white dark:bg-gray-900 text-black dark:text-white px-4 py-12">
<WebDevelopmentSection />      

    </section>
  );
}
