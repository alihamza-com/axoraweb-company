// app/services/WebDevelopment/page.tsx

import { Metadata } from "next";
import React from "react";
import WebDevelopmentSection from "@/components/services/web-development";

export const metadata: Metadata = {
  title: "Web Development Services | AxoraWeb",
  description: "Discover high-quality, modern web development services using React, Next.js, and more from AxoraWeb.",
};

export default function WebDevelopmentPage() {
  return (
    <section className="mt-20 bg-white dark:bg-gray-900 text-black dark:text-white px-4 py-12">
<WebDevelopmentSection />      

    </section>
  );
}
