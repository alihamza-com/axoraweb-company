// app/services/AndroidDevelopment/page.tsx

import { Metadata } from "next";
import React from "react";
import AndroidDevelopmentSection from "@/components/services/andriod";

export const metadata: Metadata = {
  title: "Android Development Services | AxoraWeb",
  description: "Get top-tier Android app development services from AxoraWeb using Kotlin, Java, and modern mobile frameworks.",
  keywords: [
    "android development",
    "mobile app development",
    "kotlin development",
    "java android apps",
    "android frameworks",
    "custom android solutions",
    "android app design",
    "android software development",
    "AxoraWeb"
  ],
  authors: [{ name: "Ali Hamza", url: "https://axoraweb.vercel.app" }],
  openGraph: {
    title: "Android Development Services | AxoraWeb",
    description: "Get top-tier Android app development services from AxoraWeb using Kotlin, Java, and modern mobile frameworks.",
    url: "https://axoraweb.vercel.app/services/android-development",
    siteName: "AxoraWeb",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://axoraweb.vercel.app/services/android-development",
    languages: {
      "en-US": "https://axoraweb.vercel.app/services/android-development",
      "es-ES": "https://axoraweb.vercel.app/es/services/android-development",
      "fr-FR": "https://axoraweb.vercel.app/fr/services/android-development",
      "de-DE": "https://axoraweb.vercel.app/de/services/android-development",
      "zh-CN": "https://axoraweb.vercel.app/zh/services/android-development",
      "ar-SA": "https://axoraweb.vercel.app/ar/services/android-development",
      "hi-IN": "https://axoraweb.vercel.app/hi/services/android-development",
      "ja-JP": "https://axoraweb.vercel.app/ja/services/android-development",
      "pt-BR": "https://axoraweb.vercel.app/pt/services/android-development",
    },
  },
};

export default function AndroidDevelopmentPage() {
  return (
    <section className="mt-20 bg-white dark:bg-gray-900 text-black dark:text-white px-4 py-12">
      <AndroidDevelopmentSection />
    </section>
  );
}

