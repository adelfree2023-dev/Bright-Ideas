"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Paintbrush, 
  Zap, 
  Wind, 
  Sparkles, 
  Layers, 
  Bug, 
  Truck, 
  ArrowLeft, 
  ArrowRight 
} from "lucide-react";

interface ServicesProps {
  isEn: boolean;
  t: any;
}

export default function Services({ isEn, t }: ServicesProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  } as const;

  // Icon mapping
  const icons = {
    contracting: <Building2 className="w-8 h-8" />,
    finishing: <Paintbrush className="w-8 h-8" />,
    mep: <Zap className="w-8 h-8" />,
    ac: <Wind className="w-8 h-8" />,
    cleaning: <Sparkles className="w-8 h-8" />,
    floor: <Layers className="w-8 h-8" />,
    pest: <Bug className="w-8 h-8" />,
    moving: <Truck className="w-8 h-8" />,
  };

  return (
    <section id="services" className="py-24 bg-bg-light relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-champagne/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-primary mb-4"
          >
            {t.services.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted text-base md:text-lg font-light"
          >
            {t.services.subtitle}
          </motion.p>
        </div>

        {/* Heavy Services Block */}
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-primary border-r-4 border-gold pr-3 mb-8">
            {t.services.heavyTitle}
          </h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Bento Card 1: Contracting (Large 2-column span) */}
            <motion.div
              variants={cardVariants}
              className="md:col-span-2 group bg-white hover:bg-primary hover:text-white rounded-2xl p-8 border border-border/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-gold group-hover:text-champagne mb-6 inline-block bg-gold/10 group-hover:bg-white/10 p-4 rounded-xl transition-colors">
                  {icons.contracting}
                </div>
                <h4 className="text-2xl font-bold mb-4 transition-colors">
                  {t.services.items.contracting.title}
                </h4>
                <p className="text-text-muted group-hover:text-white/80 mb-6 leading-relaxed">
                  {t.services.items.contracting.desc}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-sm">
                  {t.services.items.contracting.bullets.map((b: string, i: number) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="https://wa.me/97455056698"
                target="_blank"
                className="inline-flex items-center gap-2 text-gold group-hover:text-champagne font-bold text-sm"
              >
                <span>{t.services.exploreMore}</span>
                {isEn ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
              </a>
            </motion.div>

            {/* Bento Card 2: Finishing (1-column span) */}
            <motion.div
              variants={cardVariants}
              className="group bg-white hover:bg-primary hover:text-white rounded-2xl p-8 border border-border/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-gold group-hover:text-champagne mb-6 inline-block bg-gold/10 group-hover:bg-white/10 p-4 rounded-xl transition-colors">
                  {icons.finishing}
                </div>
                <h4 className="text-xl font-bold mb-3 transition-colors">
                  {t.services.items.finishing.title}
                </h4>
                <p className="text-text-muted group-hover:text-white/80 text-sm mb-6 leading-relaxed">
                  {t.services.items.finishing.desc}
                </p>
                <ul className="flex flex-col gap-2 mb-8 text-xs">
                  {t.services.items.finishing.bullets.map((b: string, i: number) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="https://wa.me/97455056698"
                target="_blank"
                className="inline-flex items-center gap-2 text-gold group-hover:text-champagne font-bold text-sm"
              >
                <span>{t.services.exploreMore}</span>
                {isEn ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Facility Management Block */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-primary border-r-4 border-gold pr-3 mb-8">
            {t.services.facilityTitle}
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Card 3: MEP */}
            <motion.div
              variants={cardVariants}
              className="group bg-white hover:bg-primary hover:text-white rounded-2xl p-8 border border-border/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-gold group-hover:text-champagne mb-6 inline-block bg-gold/10 group-hover:bg-white/10 p-4 rounded-xl transition-colors">
                  {icons.mep}
                </div>
                <h4 className="text-xl font-bold mb-3 transition-colors">
                  {t.services.items.mep.title}
                </h4>
                <p className="text-text-muted group-hover:text-white/80 text-sm mb-6 leading-relaxed">
                  {t.services.items.mep.desc}
                </p>
              </div>
              <a
                href="https://wa.me/97455056698"
                target="_blank"
                className="inline-flex items-center gap-2 text-gold group-hover:text-champagne font-bold text-sm"
              >
                <span>{t.services.exploreMore}</span>
                {isEn ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
              </a>
            </motion.div>

            {/* Card 4: AC Maintenance */}
            <motion.div
              variants={cardVariants}
              className="group bg-white hover:bg-primary hover:text-white rounded-2xl p-8 border border-border/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-gold group-hover:text-champagne mb-6 inline-block bg-gold/10 group-hover:bg-white/10 p-4 rounded-xl transition-colors">
                  {icons.ac}
                </div>
                <h4 className="text-xl font-bold mb-3 transition-colors">
                  {t.services.items.ac.title}
                </h4>
                <p className="text-text-muted group-hover:text-white/80 text-sm mb-6 leading-relaxed">
                  {t.services.items.ac.desc}
                </p>
              </div>
              <a
                href="https://wa.me/97455056698"
                target="_blank"
                className="inline-flex items-center gap-2 text-gold group-hover:text-champagne font-bold text-sm"
              >
                <span>{t.services.exploreMore}</span>
                {isEn ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
              </a>
            </motion.div>

            {/* Card 5: Cleaning (Large 2-column span) */}
            <motion.div
              variants={cardVariants}
              className="group bg-white hover:bg-primary hover:text-white rounded-2xl p-8 border border-border/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-gold group-hover:text-champagne mb-6 inline-block bg-gold/10 group-hover:bg-white/10 p-4 rounded-xl transition-colors">
                  {icons.cleaning}
                </div>
                <h4 className="text-xl font-bold mb-3 transition-colors">
                  {t.services.items.cleaning.title}
                </h4>
                <p className="text-text-muted group-hover:text-white/80 text-sm mb-6 leading-relaxed">
                  {t.services.items.cleaning.desc}
                </p>
              </div>
              <a
                href="https://wa.me/97455056698"
                target="_blank"
                className="inline-flex items-center gap-2 text-gold group-hover:text-champagne font-bold text-sm"
              >
                <span>{t.services.exploreMore}</span>
                {isEn ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
              </a>
            </motion.div>

            {/* Card 6: Floor Polishing */}
            <motion.div
              variants={cardVariants}
              className="group bg-white hover:bg-primary hover:text-white rounded-2xl p-8 border border-border/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-gold group-hover:text-champagne mb-6 inline-block bg-gold/10 group-hover:bg-white/10 p-4 rounded-xl transition-colors">
                  {icons.floor}
                </div>
                <h4 className="text-xl font-bold mb-3 transition-colors">
                  {t.services.items.floor.title}
                </h4>
                <p className="text-text-muted group-hover:text-white/80 text-sm mb-6 leading-relaxed">
                  {t.services.items.floor.desc}
                </p>
              </div>
              <a
                href="https://wa.me/97455056698"
                target="_blank"
                className="inline-flex items-center gap-2 text-gold group-hover:text-champagne font-bold text-sm"
              >
                <span>{t.services.exploreMore}</span>
                {isEn ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
              </a>
            </motion.div>

            {/* Card 7: Pest Control */}
            <motion.div
              variants={cardVariants}
              className="group bg-white hover:bg-primary hover:text-white rounded-2xl p-8 border border-border/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-gold group-hover:text-champagne mb-6 inline-block bg-gold/10 group-hover:bg-white/10 p-4 rounded-xl transition-colors">
                  {icons.pest}
                </div>
                <h4 className="text-xl font-bold mb-3 transition-colors">
                  {t.services.items.pest.title}
                </h4>
                <p className="text-text-muted group-hover:text-white/80 text-sm mb-6 leading-relaxed">
                  {t.services.items.pest.desc}
                </p>
              </div>
              <a
                href="https://wa.me/97455056698"
                target="_blank"
                className="inline-flex items-center gap-2 text-gold group-hover:text-champagne font-bold text-sm"
              >
                <span>{t.services.exploreMore}</span>
                {isEn ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
              </a>
            </motion.div>

            {/* Card 8: Moving */}
            <motion.div
              variants={cardVariants}
              className="group bg-white hover:bg-primary hover:text-white rounded-2xl p-8 border border-border/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-gold group-hover:text-champagne mb-6 inline-block bg-gold/10 group-hover:bg-white/10 p-4 rounded-xl transition-colors">
                  {icons.moving}
                </div>
                <h4 className="text-xl font-bold mb-3 transition-colors">
                  {t.services.items.moving.title}
                </h4>
                <p className="text-text-muted group-hover:text-white/80 text-sm mb-6 leading-relaxed">
                  {t.services.items.moving.desc}
                </p>
              </div>
              <a
                href="https://wa.me/97455056698"
                target="_blank"
                className="inline-flex items-center gap-2 text-gold group-hover:text-champagne font-bold text-sm"
              >
                <span>{t.services.exploreMore}</span>
                {isEn ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
