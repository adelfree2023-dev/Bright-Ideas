import React from "react";
import Image from "next/image";

interface WhatsAppFABProps {
  isEn: boolean;
}

export default function WhatsAppFAB({ isEn }: WhatsAppFABProps) {
  return (
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
  );
}

