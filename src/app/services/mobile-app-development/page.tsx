// app/services/AndroidDevelopment/page.tsx

import { Metadata } from "next";
import React from "react";
import AndroidDevelopmentSection from "@/components/services/andriod";

export const metadata: Metadata = {
  title: "Mobile App Development | AxoraWeb – iOS & Android App Experts",
  description:
    "AxoraWeb builds high-performance mobile apps for iOS and Android. From MVP to enterprise-level apps, we deliver scalable and user-friendly mobile solutions.",
  keywords: [
    "mobile app development",
    "iOS development",
    "Android app development",
    "React Native developers",
    "Flutter developers",
    "cross-platform apps",
    "AxoraWeb",
    "Ali Hamza",
    "custom mobile apps",
  ],
  authors: [{ name: "Ali Hamza", url: "https://axoraweb.vercel.app" }],
  creator: "Ali Hamza",
  publisher: "AxoraWeb",
  applicationName: "AxoraWeb",
  metadataBase: new URL("https://axoraweb.vercel.app"),
  openGraph: {
    title: "Mobile App Development | AxoraWeb – iOS & Android App Experts",
    description:
      "We create sleek, scalable, and secure mobile apps using the latest technologies. Work with AxoraWeb to turn your app idea into reality.",
    url: "https://axoraweb.vercel.app/mobile-app-development",
    siteName: "AxoraWeb",
    images: [
      {
        url: "https://axoraweb.vercel.app/og-mobile.png", // Add this image to /public
        width: 1200,
        height: 630,
        alt: "AxoraWeb Mobile App Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development | AxoraWeb",
    description:
      "AxoraWeb builds custom mobile apps that delight users and scale with your business. Hire top mobile developers today.",
    site: "@axoraweb",
    creator: "@alihamza",
    images: ["https://axoraweb.vercel.app/og-mobile.png"],
  },
  alternates: {
    canonical: "https://axoraweb.vercel.app/mobile-app-development",
    languages: {
      "en-US": "https://axoraweb.vercel.app/mobile-app-development",
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


export default function AndroidDevelopmentPage() {
  return (
    <section className="mt-20 bg-white dark:bg-gray-900 text-black dark:text-white px-4 py-12">
      <AndroidDevelopmentSection />
    </section>
  );
}

