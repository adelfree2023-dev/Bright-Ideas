"use client";

import React from "react";
import Image from "next/image";

interface FooterProps {
  isEn: boolean;
  t: any;
}

export default function Footer({ isEn, t }: FooterProps) {
  return (
    <footer className="relative bg-[#050810] text-text-light pt-16 pb-12">
      {/* 1px Gradient brand divider line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-600 via-yellow-500 to-[#E63946]" />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
        {/* About */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <a href="#" className="inline-block self-start">
            <Image
              src="/Bright-Ideas/assets/logo_transparent.png"
              alt="Bright Ideas Logo"
              width={200}
              height={85}
              className="h-16 md:h-20 w-auto object-contain"
            />
          </a>
          <p className="text-text-light/60 text-sm leading-relaxed font-light max-w-sm">
            {t.footer.aboutDesc}
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 flex flex-col gap-5">
          <h4 className="text-yellow-500 font-bold text-lg border-b border-white/5 pb-2">
            {t.footer.linksTitle}
          </h4>
          <ul className="flex flex-col gap-3 text-text-light/60 text-sm">
            <li>
              <a href="#hero" className="hover:text-[#E63946] transition-colors">
                {t.nav.home}
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#E63946] transition-colors">
                {t.nav.services}
              </a>
            </li>
            <li>
              <a href="#why-us" className="hover:text-[#E63946] transition-colors">
                {t.nav.whyUs}
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-[#E63946] transition-colors">
                {t.nav.portfolio}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#E63946] transition-colors">
                {t.nav.contact}
              </a>
            </li>
          </ul>
        </div>

        {/* Working Hours */}
        <div className="md:col-span-4 flex flex-col gap-5">
          <h4 className="text-yellow-500 font-bold text-lg border-b border-white/5 pb-2">
            {t.footer.hoursTitle}
          </h4>
          <p className="text-text-light/60 text-sm leading-relaxed whitespace-pre-line font-light">
            {t.footer.hoursDesc}
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 text-center text-xs text-text-light/40 font-medium">
        <p>{t.footer.rights}</p>
      </div>
    </footer>
  );
}
