"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

interface ContactFormProps {
  isEn: boolean;
  t: any;
}

export default function ContactForm({ isEn, t }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "contracting",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert(isEn ? "Please fill all required fields" : "يرجى ملء جميع الحقول المطلوبة");
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert(
        isEn
          ? "Thank you for contacting us. Your message has been sent successfully!"
          : "شكراً لتواصلك معنا. تم إرسال رسالتك بنجاح وسيتصل بك فريقنا قريباً."
      );
      setFormData({
        name: "",
        phone: "",
        service: "contracting",
        message: "",
      });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6">
                {t.contact.title}
              </h2>
              <p className="text-text-muted text-base md:text-lg leading-relaxed font-light mb-12">
                {t.contact.subtitle}
              </p>

              <div className="flex flex-col gap-8">
                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="bg-gold/10 p-3 rounded-full text-gold shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-1">
                      {t.contact.officeTitle}
                    </h4>
                    <p className="text-text-muted text-sm">{t.contact.officeDesc}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="bg-gold/10 p-3 rounded-full text-gold shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-1">
                      {t.contact.phoneTitle}
                    </h4>
                    <p className="text-text-muted text-sm" dir="ltr">
                      +974 55056698
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="bg-gold/10 p-3 rounded-full text-gold shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-1">
                      {t.contact.emailTitle}
                    </h4>
                    <p className="text-text-muted text-sm">info@brightideas-qa.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white border border-border/80 p-8 md:p-10 rounded-2xl shadow-sm">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-semibold text-primary">
                  {t.contact.nameLabel} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={isEn ? "Enter your name" : "أدخل اسمك الكريم"}
                  className="w-full px-4 py-3 rounded-xl border border-border outline-none focus:border-gold focus:ring-2 focus:ring-gold/15 transition-all text-sm font-medium"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-sm font-semibold text-primary">
                  {t.contact.phoneLabel} *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 55056698"
                  className="w-full px-4 py-3 rounded-xl border border-border outline-none focus:border-gold focus:ring-2 focus:ring-gold/15 transition-all text-sm font-medium"
                />
              </div>

              {/* Service Select */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="service" className="text-sm font-semibold text-primary">
                  {t.contact.serviceLabel}
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border outline-none focus:border-gold focus:ring-2 focus:ring-gold/15 transition-all text-sm font-medium bg-white"
                >
                  <option value="contracting">
                    {isEn ? "Contracting & Construction" : "أعمال المقاولات والإنشاءات"}
                  </option>
                  <option value="finishing">
                    {isEn ? "Finishing & Decor" : "التشطيبات والديكور الداخلي"}
                  </option>
                  <option value="mep">
                    {isEn ? "Electrical & Plumbing (MEP)" : "الأعمال الكهروميكانيكية (MEP)"}
                  </option>
                  <option value="ac">{isEn ? "AC Maintenance" : "صيانة التكييف"}</option>
                  <option value="cleaning">{isEn ? "Cleaning Services" : "خدمات النظافة"}</option>
                  <option value="floor">{isEn ? "Floor Polishing" : "جلي وتلميع الأرضيات"}</option>
                  <option value="pest">{isEn ? "Pest Control" : "مكافحة الحشرات"}</option>
                  <option value="moving">{isEn ? "Furniture Moving" : "نقل الأثاث والعفش"}</option>
                </select>
              </div>

              {/* Message Details */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-semibold text-primary">
                  {t.contact.messageLabel} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder={isEn ? "Describe your request..." : "اكتب تفاصيل طلبك هنا..."}
                  className="w-full px-4 py-3 rounded-xl border border-border outline-none focus:border-gold focus:ring-2 focus:ring-gold/15 transition-all text-sm font-medium resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gold hover:bg-gold-hover disabled:bg-gold/50 text-primary-dark font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer text-base mt-2"
              >
                <Send size={18} />
                <span>{isSubmitting ? "..." : t.contact.submitBtn}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
