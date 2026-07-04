import React from "react";
import Image from "next/image";
import { Phone } from "lucide-react";

interface WhatsAppFABProps {
  isEn: boolean;
}

export default function WhatsAppFAB({ isEn }: WhatsAppFABProps) {
  return (
    <>
      {/* Floating Call Button */}
      <a
        href="tel:+97455056698"
        className={`fixed bottom-24 z-[999] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-400/40 transition-all duration-300 hover:scale-110 cursor-pointer ${
          isEn ? "left-8" : "right-8"
        }`}
        aria-label="Call us directly"
      >
        {/* Sonar Ring Wave Effect */}
        <span className="absolute inset-0 rounded-full bg-blue-400/30 animate-ping -z-10" />
        <Image
          src="/assets/call_icon.webp"
          alt="Call"
          width={56}
          height={56}
          className="w-full h-full object-contain"
          priority
        />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/97455056698"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-8 z-[999] w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-105 animate-pulse-whatsapp cursor-pointer ${
          isEn ? "left-8" : "right-8"
        }`}
        aria-label="Contact us on WhatsApp"
      >
        <Image
          src="/assets/whatsapp_icon.webp"
          alt="WhatsApp"
          width={56}
          height={56}
          className="w-full h-full object-contain"
          priority
        />
      </a>
    </>
  );
}

