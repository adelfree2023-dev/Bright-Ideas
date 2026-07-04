"use client";

import React from "react";
import Image from "next/image";

interface FooterProps {
  isEn: boolean;
  t: any;
}

export default function Footer({ isEn, t }: FooterProps) {
  return (
    <footer className="relative bg-slate-100 text-slate-800 border-t border-slate-200 pt-16 pb-12">
      {/* 1px Gradient brand divider line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-600 via-yellow-500 to-[#E63946]" />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
        {/* About */}
        <div className="md:col-span-5 flex flex-col gap-6">
          {/* Logo split into two side-by-side */}
          <a href="#" className="flex items-center gap-2.5 self-start select-none">
            <Image
              src="/assets/logo1.webp"
              alt="Bright Ideas Logo Icon"
              width={60}
              height={60}
              className="h-14 md:h-16 w-auto object-contain"
            />
            <Image
              src="/assets/logo2.webp"
              alt="Bright Ideas Logo Text"
              width={150}
              height={60}
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>
          <p className="text-slate-600 text-sm leading-relaxed font-semibold max-w-sm">
            {t.footer.aboutDesc}
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 flex flex-col gap-5">
          <h4 className="text-yellow-600 font-bold text-lg border-b border-slate-200 pb-2">
            {t.footer.linksTitle}
          </h4>
          <ul className="flex flex-col gap-3 text-slate-600 text-sm font-semibold">
            <li>
              <a href="#hero" className="hover:text-yellow-600 transition-colors">
                {t.nav.home}
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-yellow-600 transition-colors">
                {t.nav.services}
              </a>
            </li>
            <li>
              <a href="#why-us" className="hover:text-yellow-600 transition-colors">
                {t.nav.whyUs}
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-yellow-600 transition-colors">
                {t.nav.portfolio}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-600 transition-colors">
                {t.nav.contact}
              </a>
            </li>
          </ul>
        </div>

        {/* Working Hours */}
        <div className="md:col-span-4 flex flex-col gap-5">
          <h4 className="text-yellow-600 font-bold text-lg border-b border-slate-200 pb-2">
            {t.footer.hoursTitle}
          </h4>
          <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line font-semibold">
            {t.footer.hoursDesc}
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto px-6 border-t border-slate-200 pt-8 text-center text-xs text-slate-500 font-semibold">
        <p>{t.footer.rights}</p>
      </div>
    </footer>
  );
}

