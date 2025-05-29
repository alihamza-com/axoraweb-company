// app/services/[YourService]/page.tsx

import { Metadata } from "next";
import React from "react";
import SEOServicesPage from "@/components/services/seo";
export const metadata: Metadata = {
  title: "SEO service provied   | AxoraWeb",
  description: "Get expert SEO from AxoraWeb. We deliver top-notch digital solutions tailored to your business goals.",
};

export default function YourServicePage() {
  return (
    <section className="mt-20 bg-white dark:bg-gray-900 text-black dark:text-white px-4 py-12">

      <SEOServicesPage />
    </section>
  );
}
