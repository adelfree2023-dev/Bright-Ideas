"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface PortfolioProps {
  isEn: boolean;
  t: any;
}

export default function Portfolio({ isEn, t }: PortfolioProps) {
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Map optimized images to realistic project details
  const projects = [
    { src: "/Bright-Ideas/assets/gallery_img_2.webp", category: "contracting", tag: "contracting", titleAr: "إنشاء فيلا سكنية فاخرة", titleEn: "Luxury Residential Villa Construction" },
    { src: "/Bright-Ideas/assets/gallery_img_5.webp", category: "contracting", tag: "contracting", titleAr: "هيكل معدني لمستودع تجاري", titleEn: "Commercial Hangar Steel Structure" },
    { src: "/Bright-Ideas/assets/gallery_img_10.webp", category: "contracting", tag: "contracting", titleAr: "تشييد مبنى تجاري متعدد الاستخدامات", titleEn: "Multi-use Commercial Building Construction" },
    { src: "/Bright-Ideas/assets/gallery_img_12.webp", category: "contracting", tag: "contracting", titleAr: "أعمال صيانة هيكلية للمباني", titleEn: "Structural Building Restoration" },
    { src: "/Bright-Ideas/assets/gallery_img_15.webp", category: "contracting", tag: "contracting", titleAr: "بناء ملحق فيلا سكني", titleEn: "Residential Villa Annex Construction" },
    
    { src: "/Bright-Ideas/assets/gallery_img_3.webp", category: "finishing", tag: "finishing", titleAr: "تركيب سيراميك وبورسلان فيلا", titleEn: "Ceramic & Porcelain Installation in Villa" },
    { src: "/Bright-Ideas/assets/gallery_img_4.webp", category: "finishing", tag: "finishing", titleAr: "دهانات وديكورات داخلية حديثة", titleEn: "Modern Interior Paint & Decorations" },
    { src: "/Bright-Ideas/assets/gallery_img_7.webp", category: "finishing", tag: "finishing", titleAr: "تلميع وجلي أرضيات رخام طبيعي", titleEn: "Natural Marble Grinding & Polishing" },
    { src: "/Bright-Ideas/assets/gallery_img_13.webp", category: "finishing", tag: "finishing", titleAr: "تنفيذ جبس بورد أسقف معلقة", titleEn: "Gypsum Board Suspended Ceilings" },
    { src: "/Bright-Ideas/assets/gallery_img_14.webp", category: "finishing", tag: "finishing", titleAr: "تركيب أرضيات جرانيت فاخرة", titleEn: "Luxury Granite Floor Installation" },
    
    { src: "/Bright-Ideas/assets/gallery_img_1.webp", category: "services", tag: "services", titleAr: "تنظيف وتعقيم ما بعد تشطيب الفلل", titleEn: "Post-Construction Villa Deep Cleaning" },
    { src: "/Bright-Ideas/assets/gallery_img_6.webp", category: "services", tag: "services", titleAr: "تنظيف سجاد ومجالس بالبخار", titleEn: "Steam Cleaning for Majlis & Carpets" },
    { src: "/Bright-Ideas/assets/gallery_img_8.webp", category: "services", tag: "services", titleAr: "مكافحة حشرات وقائية للمنازل", titleEn: "Residential Preventative Pest Control" },
    { src: "/Bright-Ideas/assets/gallery_img_9.webp", category: "services", tag: "services", titleAr: "تطهير وتعقيم دوري للمكاتب", titleEn: "Corporate Office Regular Sanitization" },
    { src: "/Bright-Ideas/assets/gallery_img_16.webp", category: "services", tag: "services", titleAr: "نقل وتغليف عفش فيلا سكنية", titleEn: "Residential Villa Furniture Relocation" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const openLightbox = (src: string) => {
    const idx = projects.findIndex(p => p.src === src);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % projects.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + projects.length) % projects.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#0B1120] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            {t.portfolio.title}
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: "all", label: t.portfolio.filterAll },
            { id: "contracting", label: t.portfolio.filterContracting },
            { id: "finishing", label: t.portfolio.filterFinishing },
            { id: "services", label: t.portfolio.filterServices },
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                filter === btn.id
                  ? "bg-gold text-primary-dark shadow-md"
                  : "bg-white/5 hover:bg-white/10 text-gray-300 border border-white/5"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.src}
                className="group relative overflow-hidden rounded-xl aspect-square shadow-sm hover:shadow-lg border border-white/5 cursor-pointer"
                onClick={() => openLightbox(project.src)}
              >
                {/* Image */}
                <Image
                  src={project.src}
                  alt={isEn ? project.titleEn : project.titleAr}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="self-end bg-gold/10 p-2.5 rounded-full text-gold">
                    <Maximize2 size={18} />
                  </div>
                  <div>
                    <span className="text-gold text-xs font-bold uppercase tracking-wider mb-1 block">
                      {project.category === "contracting" ? t.portfolio.filterContracting : 
                       project.category === "finishing" ? t.portfolio.filterFinishing : 
                       t.portfolio.filterServices}
                    </span>
                    <h4 className="text-text-light font-bold text-lg leading-tight">
                      {isEn ? project.titleEn : project.titleAr}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary-dark/95 z-[2000] flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-text-light hover:text-gold cursor-pointer"
            >
              <X size={32} />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={showPrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-gold text-text-light hover:text-primary-dark w-12 h-12 rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Lightbox Image Container */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl max-h-[80vh] w-full h-[60vh]"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={projects[lightboxIndex].src}
                alt={isEn ? projects[lightboxIndex].titleEn : projects[lightboxIndex].titleAr}
                fill
                sizes="100vw"
                className="object-contain"
              />
              <div className="absolute bottom-[-50px] left-0 w-full text-center text-text-light text-base font-semibold">
                {isEn ? projects[lightboxIndex].titleEn : projects[lightboxIndex].titleAr}
              </div>
            </motion.div>

            <button
              onClick={showNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-gold text-text-light hover:text-primary-dark w-12 h-12 rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
