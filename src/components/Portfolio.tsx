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
    { 
      src: "/assets/gallery_img_1.webp", 
      category: "services", 
      tag: "services", 
      titleAr: "تنظيف سجاد بالبخار (في نفس اليوم)", 
      titleEn: "Same-Day Steam Carpet Cleaning",
      descAr: "تنظيف وتعقيم عميق للسجاد بأحدث أجهزة البخار الحار لإزالة الأوساخ والبكتيريا بدون روائح.",
      descEn: "Deep steam carpet cleaning and sanitization using hot steam technology to remove dirt and bacteria."
    },
    { 
      src: "/assets/gallery_img_2.webp", 
      category: "services", 
      tag: "services", 
      titleAr: "تنظيف السجاد والمجالس والكنب", 
      titleEn: "Carpet, Sofa & Majlis Steam Cleaning",
      descAr: "نهتم بأدق التفاصيل لإزالة البقع المستعصية والروائح الكريهة من السجاد والكنب بأمان كامل على الأقمشة.",
      descEn: "Meticulous deep cleaning of carpets, sofas, and Majlis to eradicate stains and odors safely."
    },
    { 
      src: "/assets/gallery_img_3.webp", 
      category: "services", 
      tag: "services", 
      titleAr: "غسيل وتنظيف المطابخ الشامل", 
      titleEn: "Comprehensive Kitchen Deep Cleaning",
      descAr: "إزالة الدهون المتراكمة، تنظيف الشفاطات والأفران من الداخل والخارج، وتعقيم الجدران والأسطح بدون فوضى.",
      descEn: "Removing accumulated grease, cleaning exhaust hoods and ovens, and sanitizing kitchen walls and surfaces."
    },
    { 
      src: "/assets/gallery_img_4.webp", 
      category: "services", 
      tag: "services", 
      titleAr: "تنظيف وتعقيم دواليب وأسطح المطبخ", 
      titleEn: "Kitchen Cabinets & Countertops Sanitization",
      descAr: "فريق عمل متخصص لتنظيف المطابخ، وتعقيم الدواليب والأدراج والأحواض لضمان مطبخ صحي وآمن لعائلتك.",
      descEn: "Specialized team for deep kitchen cleaning, sanitizing cabinets, drawers, and sinks for a healthy kitchen."
    },
    { 
      src: "/assets/gallery_img_5.webp", 
      category: "services", 
      tag: "services", 
      titleAr: "تنظيف وتعقيم السجاد والمجالس بالبخار", 
      titleEn: "Steam Cleaning for Carpet & Majlis",
      descAr: "توفير أعلى مستويات النظافة والتعقيم للمجالس والسجاد بمواد آمنة تماماً على الأقمشة وصحة الأطفال.",
      descEn: "Providing top-tier cleaning and disinfection for Majlis and carpets with fabric-safe products."
    },
    { 
      src: "/assets/gallery_img_6.webp", 
      category: "contracting", 
      tag: "contracting", 
      titleAr: "أعمال المقاولات العامة والإنشاءات", 
      titleEn: "General Contracting & Construction Works",
      descAr: "نقدم حلول المقاولات العامة والإنشاءات المتكاملة من التأسيس إلى تسليم المفتاح بكفاءة وجودة عالية.",
      descEn: "Providing comprehensive general contracting and construction solutions from foundations to turnkey."
    },
    { 
      src: "/assets/gallery_img_7.webp", 
      category: "finishing", 
      tag: "finishing", 
      titleAr: "جلي وتلميع جميع أنواع الأرضيات", 
      titleEn: "Floor Grinding & Polishing Services",
      descAr: "تلميع الرخام، السيراميك، والجرانيت، وإزالة الخدوش والبقع لحماية الأرضيات وإعادة لمعانها البراق.",
      descEn: "Polishing marble, ceramic, and granite floors, removing scratches and stains for lasting shine."
    },
    { 
      src: "/assets/gallery_img_8.webp", 
      category: "finishing", 
      tag: "finishing", 
      titleAr: "جلي وتلميع الرخام الطبيعي", 
      titleEn: "Natural Marble Grinding & Polishing",
      descAr: "إعادة الرونق والفخامة للرخام الطبيعي من خلال إزالة الطبقات الباهتة وتلميعها بأحدث المعدات والمواد الآمنة.",
      descEn: "Restoring the luxury of natural marble by grinding, stain removal, and polishing with modern equipment."
    },
    { 
      src: "/assets/gallery_img_9.webp", 
      category: "contracting", 
      tag: "contracting", 
      titleAr: "بناء وتشييد الفلل والمباني", 
      titleEn: "Villa & Building Construction",
      descAr: "متخصصون في بناء الفلل السكنية والمباني التجارية مع التشطيبات الداخلية والخارجية بأعلى معايير الإتقان.",
      descEn: "Specialized in constructing residential villas and commercial buildings with high-quality finishes."
    },
    { 
      src: "/assets/gallery_img_10.webp", 
      category: "services", 
      tag: "services", 
      titleAr: "صيانة وإصلاح المكيفات 24/7", 
      titleEn: "24/7 Air Conditioner Maintenance",
      descAr: "خدمة صيانة وإصلاح أجهزة التكييف السبلت والمركزي بواسطة فنيين متخصصين لضمان هواء نقي وبارد.",
      descEn: "Maintenance and repair of split and central AC units by specialized technicians to ensure pure air."
    },
    { 
      src: "/assets/gallery_img_12.webp", 
      category: "contracting", 
      tag: "contracting", 
      titleAr: "خدمات المقاولات العامة المتكاملة", 
      titleEn: "Integrated General Contracting Services",
      descAr: "تنفيذ كافة أعمال الإنشاءات، والترميم، والدهانات، والسباكة والكهرباء، وتركيب السيراميك والإنترلوك والعوازل.",
      descEn: "Executing all construction, restoration, painting, plumbing, electrical, tile laying, and insulation works."
    },
    { 
      src: "/assets/gallery_img_13.webp", 
      category: "services", 
      tag: "services", 
      titleAr: "مكافحة ورش الحشرات والصراصير", 
      titleEn: "Pest & Insect Eradication Services",
      descAr: "إبادة تامة للصراصير والنمل والبعوض بمواد آمنة تماماً على أفراد الأسرة والحيوانات الأليفة وبضمان طويل.",
      descEn: "Complete eradication of cockroaches, ants, and pests using family-safe public health pesticides."
    },
    { 
      src: "/assets/gallery_img_14.webp", 
      category: "services", 
      tag: "services", 
      titleAr: "تنظيف وتعقيم خزانات المياه", 
      titleEn: "Water Tank Cleaning & Disinfection",
      descAr: "إزالة الرواسب، الطحالب، والبكتيريا من خزانات المياه بمواد معتمدة لضمان مياه نظيفة وحياة صحية لعائلتك.",
      descEn: "Removing sediment, algae, and bacteria from water tanks using certified safe disinfectants."
    },
    { 
      src: "/assets/gallery_img_15.webp", 
      category: "services", 
      tag: "services", 
      titleAr: "تنظيف وصيانة المكيفات الدورية", 
      titleEn: "Periodic AC Cleaning & Maintenance",
      descAr: "غسيل الوحدات الداخلية والخارجية للمكيفات وتعبئة الفريون لتحسين كفاءة التبريد وتقليل استهلاك الكهرباء.",
      descEn: "Washing internal and external AC units and refilling gas to improve cooling and efficiency."
    },
    { 
      src: "/assets/gallery_img_16.webp", 
      category: "services", 
      tag: "services", 
      titleAr: "نقل وتغليف العفش والأثاث", 
      titleEn: "Professional Furniture Moving & Packaging",
      descAr: "نقل آمن وسريع للأثاث مع فك وتركيب بواسطة نجارين محترفين وتغليف احترافي لضمان السلامة من الخدوش.",
      descEn: "Safe, fast furniture moving with professional disassembly, wrapping, and reassembly by carpenters."
    },
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
                className="group bg-[#131C31] flex flex-col overflow-hidden rounded-2xl shadow-md hover:shadow-xl border border-white/5 transition-all duration-300"
              >
                {/* Image Container */}
                <div 
                  className="relative w-full aspect-[4/3] overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(project.src)}
                >
                  <Image
                    src={project.src}
                    alt={isEn ? project.titleEn : project.titleAr}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Icon zoom overlay on hover */}
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-yellow-500/10 p-3 rounded-full text-yellow-500">
                      <Maximize2 size={20} />
                    </div>
                  </div>
                </div>

                {/* Content section */}
                <div className="p-5 flex-grow flex flex-col justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-yellow-500 text-xs font-bold uppercase tracking-wider block">
                      {project.category === "contracting" ? t.portfolio.filterContracting : 
                       project.category === "finishing" ? t.portfolio.filterFinishing : 
                       t.portfolio.filterServices}
                    </span>
                    <h4 className="text-white font-bold text-lg leading-tight group-hover:text-yellow-500 transition-colors">
                      {isEn ? project.titleEn : project.titleAr}
                    </h4>
                    <p className="text-gray-400 text-sm font-light leading-relaxed line-clamp-3">
                      {isEn ? project.descEn : project.descAr}
                    </p>
                  </div>

                  {/* Request Service WhatsApp Button */}
                  <a
                    href={`https://wa.me/97455056698?text=${encodeURIComponent(
                      isEn 
                        ? `Hello, I'd like to request the service: ${project.titleEn}` 
                        : `مرحباً، أود طلب خدمة: ${project.titleAr}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 transform active:scale-95 shadow-md text-sm cursor-pointer"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 2.019 14.12 1.012 11.5 1.012c-5.442 0-9.87 4.372-9.874 9.802-.001 1.758.473 3.479 1.372 4.988l-.903 3.3 3.383-.888zm13.116-4.88c-.287-.143-1.696-.837-1.959-.933-.262-.095-.453-.143-.643.143-.19.285-.737.933-.903 1.123-.167.19-.333.214-.62.071-1.007-.504-1.745-.885-2.484-2.146-.195-.333.195-.31.558-1.03.072-.143.036-.268-.018-.375-.054-.107-.453-1.09-.62-1.493-.164-.397-.33-.342-.453-.342h-.386c-.133 0-.35.05-.533.25-.183.2-.7.684-.7 1.67s.718 1.933.818 2.068c.1.135 1.414 2.16 3.424 3.03.48.208.854.33 1.146.423.483.153.923.132 1.27.08.387-.058 1.696-.693 1.935-1.362.24-.669.24-1.242.167-1.362-.072-.12-.262-.19-.55-.333z"/>
                    </svg>
                    <span>{isEn ? "Order via WhatsApp" : "طلب الخدمة عبر واتساب"}</span>
                  </a >
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

