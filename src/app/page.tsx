"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Portfolio from "@/components/Portfolio";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { translations } from "@/translations";

export default function Home() {
  const [isEn, setIsEn] = useState(false);
  const t = isEn ? translations.en : translations.ar;

  return (
    <div
      dir={isEn ? "ltr" : "rtl"}
      className={`flex flex-col min-h-screen text-text-dark ${
        isEn ? "lang-en font-sans" : "font-cairo"
      }`}
    >
      {/* Navigation Header */}
      <Header isEn={isEn} setIsEn={setIsEn} t={t} />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero isEn={isEn} t={t} />

        {/* Why Choose Us & Statistics Section */}
        <WhyUs isEn={isEn} t={t} />

        {/* Portfolio / Projects Gallery Section */}
        <Portfolio isEn={isEn} t={t} />

        {/* Contact Form Section */}
        <ContactForm isEn={isEn} t={t} />

        {/* Bento Services Section */}
        <Services isEn={isEn} t={t} />
      </main>

      {/* Footer */}
      <Footer isEn={isEn} t={t} />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFAB isEn={isEn} />
    </div>
  );
}
