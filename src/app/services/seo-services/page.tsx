// app/services/[YourService]/page.tsx

import { Metadata } from "next";
import React from "react";
import SEOServicesPage from "@/components/services/seo";

export const metadata: Metadata = {
  title: "SEO Services | AxoraWeb – Rank Higher & Grow Organically",
  description:
    "AxoraWeb offers professional SEO services to help your website rank higher, drive organic traffic, and convert visitors into customers. On-page, technical, and local SEO experts.",
  keywords: [
    "SEO services",
    "technical SEO",
    "on-page SEO",
    "SEO agency",
    "AxoraWeb SEO",
    "Ali Hamza SEO expert",
    "search engine optimization",
    "local SEO",
    "website ranking",
    "organic traffic",
  ],
  authors: [{ name: "Ali Hamza", url: "https://axoraweb.vercel.app" }],
  creator: "Ali Hamza",
  publisher: "AxoraWeb",
  applicationName: "AxoraWeb",
  metadataBase: new URL("https://axoraweb.vercel.app"),
  openGraph: {
    title: "SEO Services | AxoraWeb – Rank Higher & Grow Organically",
    description:
      "Boost your search rankings and grow your business with AxoraWeb’s expert SEO services, including audits, optimization, and content strategy.",
    url: "https://axoraweb.vercel.app/seo-services",
    siteName: "AxoraWeb",
    images: [
      {
        url: "https://axoraweb.vercel.app/og-seo.png", // Add this to /public
        width: 1200,
        height: 630,
        alt: "AxoraWeb SEO Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services | AxoraWeb",
    description:
      "Partner with AxoraWeb to improve your Google rankings, boost visibility, and attract targeted traffic through ethical SEO strategies.",
    site: "@axoraweb",
    creator: "@alihamza",
    images: ["https://axoraweb.vercel.app/og-seo.png"],
  },
  alternates: {
    canonical: "https://axoraweb.vercel.app/seo-services",
    languages: {
      "en-US": "https://axoraweb.vercel.app/seo-services",
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
  category: "marketing",
};


export default function YourServicePage() {
  return (
    <section className="mt-20 bg-white dark:bg-gray-900 text-black dark:text-white px-4 py-12">

      <SEOServicesPage />
    </section>
  );
}
