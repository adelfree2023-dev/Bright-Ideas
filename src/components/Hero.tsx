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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-dark pt-24"
    >
      {/* Fixed Background Image with Ken Burns effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 2.0, ease: "easeOut" }}
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('assets/hero_slider_1.webp')" }}
        />
        {/* Navy Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/60 via-transparent to-primary-dark/60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center">
        {/* Animated Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-light/80 border border-champagne/30 text-champagne text-xs md:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          {t.hero.subtitle}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-text-light leading-tight mb-6 max-w-4xl tracking-tight"
        >
          {t.hero.title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-base md:text-xl text-text-light/80 max-w-2xl mb-10 leading-relaxed font-light"
        >
          {t.hero.desc}
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
        >
          {/* Primary Gold CTA */}
          <a
            href="https://wa.me/97455056698"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gold hover:bg-gold-hover text-primary-dark font-bold px-8 py-4 rounded-full flex items-center justify-center gap-3 shadow-lg shadow-gold/20 hover:shadow-gold/30 transition-all transform hover:-translate-y-1 cursor-pointer text-base md:text-lg"
          >
            <MessageCircle size={22} className="fill-current" />
            <span>{t.hero.ctaPrimary}</span>
          </a>

          {/* Secondary Outline CTA */}
          <a
            href="#services"
            className="w-full sm:w-auto border-2 border-text-light/40 hover:border-gold text-text-light hover:text-gold font-bold px-8 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 cursor-pointer text-base md:text-lg"
          >
            <span>{t.hero.ctaSecondary}</span>
            {isEn ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
          </a>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-60">
        <div className="w-5 h-9 rounded-full border-2 border-text-light/30 flex justify-center p-1.5">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1 h-2 rounded-full bg-gold"
          />
        </div>
      </div>
    </section>
  );
}
