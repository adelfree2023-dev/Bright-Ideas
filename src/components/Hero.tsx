"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";

interface HeroProps {
  isEn: boolean;
  t: any;
}

export default function Hero({ isEn, t }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0B1120] py-24"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.12] transition-opacity duration-1000"
        style={{ backgroundImage: "url('/assets/man.webp')" }}
      />
      {/* Radial Gradient overlay to blend it with dark theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/75 via-[#0B1120]/90 to-[#0B1120] z-0" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center">
        {/* Animated Subtitle Badge (Pill Style) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 text-sm font-medium tracking-wide mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
          <span>{t.hero.subtitle}</span>
        </motion.div>

        {/* Headline with specific gradient highlights */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.2] mb-6 max-w-4xl tracking-tight"
        >
          {isEn ? (
            <>
              Elevating{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-400 to-yellow-200">
                Cleaning
              </span>
              ... with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-400 to-yellow-200">
                Quality
              </span>{" "}
              Standards ✨
            </>
          ) : (
            <>
              نرتقي{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-400 to-yellow-200">
                بالنظافة
              </span>
              ... بمعايير{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-400 to-yellow-200">
                الجودة
              </span>{" "}
              ✨
            </>
          )}
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-slate-100 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
        >
          {t.hero.desc}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full sm:w-auto"
        >
          {/* Primary Gold/Yellow CTA */}
          <a
            href="https://wa.me/97455056698"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-yellow-500 text-[#0B1120] font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-yellow-400 hover:shadow-[0_0_25px_rgba(234,179,8,0.4)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer text-base md:text-lg"
          >
            <MessageCircle size={22} className="fill-current" />
            <span>{t.hero.ctaPrimary}</span>
          </a>

          {/* Secondary Outline CTA */}
          <a
            href="#services"
            className="w-full sm:w-auto border border-gray-600 text-gray-300 font-semibold px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-white/5 hover:border-white hover:text-white transition-all duration-300 cursor-pointer text-base md:text-lg"
          >
            <span>{t.hero.ctaSecondary}</span>
            {isEn ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
          </a>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-40">
        <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center p-1.5">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1.5 h-1.5 rounded-full bg-yellow-500"
          />
        </div>
      </div>
    </section>
  );
}
