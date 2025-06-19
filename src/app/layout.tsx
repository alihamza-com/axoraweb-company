"use client";


import { Providers } from "./providers";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";
import { LoaderProvider, useLoader } from '@/components/LoaderContext';
import { initLoader } from '@/components/loaderControl';  
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

// InitLoader component to initialize the global showLoader
function InitLoader() {
  const setVisible = useLoader();
  useEffect(() => {
    initLoader(setVisible);
  }, [setVisible]);
  return null;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
       <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <meta name="theme-color" content="#0a192f" />
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <LoaderProvider>
          <InitLoader />
          <Providers>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
            
          </Providers>
        </LoaderProvider>
      </body>
    </html>
  );
}
