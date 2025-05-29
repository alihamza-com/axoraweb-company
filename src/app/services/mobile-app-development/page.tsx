// app/services/AndroidDevelopment/page.tsx

import { Metadata } from "next";
import React from "react";
import AndroidDevelopmentSection from "@/components/services/andriod";
export const metadata: Metadata = {
  title: "Android Development Services | AxoraWeb",
  description: "Get top-tier Android app development services from AxoraWeb using Kotlin, Java, and modern mobile frameworks.",
};

export default function AndroidDevelopmentPage() {
  return (
    <section className="mt-20 bg-white dark:bg-gray-900 text-black dark:text-white px-4 py-12">
      
      <AndroidDevelopmentSection />
    </section>
  );
}
