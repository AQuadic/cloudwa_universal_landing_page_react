import React, { useState } from "react";
import { ShoppingBag, ShieldCheck, Megaphone, Users, ArrowRight, ArrowLeft } from "lucide-react";
import useCases from "../data/useCases.json";

const getUseCaseIcon = (id, sizeClass = "h-4 w-4") => {
  switch (id) {
    case "ecommerce":
      return <ShoppingBag className={sizeClass} />;
    case "otp":
      return <ShieldCheck className={sizeClass} />;
    case "marketing":
      return <Megaphone className={sizeClass} />;
    case "support":
      return <Users className={sizeClass} />;
    default:
      return null;
  }
};

export default function UseCases({ lang, t }) {
  const [activeUseCase, setActiveUseCase] = useState("ecommerce");

  const useCasesList = useCases.useCasesList.map((item) => ({
    id: item.id,
    label: lang === "ar" ? item.label.ar : item.label.en,
    icon: getUseCaseIcon(item.id)
  }));

  const rawData = useCases.useCasesData[activeUseCase];
  const currentUseCase = {
    icon: getUseCaseIcon(activeUseCase, "h-6 w-6"),
    title: lang === "ar" ? rawData.title.ar : rawData.title.en,
    subtitle: lang === "ar" ? rawData.subtitle.ar : rawData.subtitle.en,
    desc: lang === "ar" ? rawData.desc.ar : rawData.desc.en,
    features: lang === "ar" ? rawData.features.ar : rawData.features.en
  };

  return (
    <section id="use-cases-list" className="py-20 bg-white dark:bg-gray-950 transition-theme border-t border-gray-250/50 dark:border-gray-800/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="use-cases">
          <span className="text-xs font-black tracking-wider text-brand-purple dark:text-brand-violet uppercase font-alexandria bg-brand-purple/10 px-3.5 py-1 rounded-full">
            {lang === "ar" ? "حالات التشغيل" : "Interactive Use Cases"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-alexandria text-gray-900 dark:text-white mt-4 mb-4">
            {lang === "ar" ? "كيف تساعد CloudWA عملك على النمو؟" : "How Does CloudWA Grow Your Business?"}
          </h2>
          <p className="text-sm sm:text-base text-gray-550 dark:text-gray-400 font-alexandria leading-relaxed">
            {lang === "ar" 
              ? "حلول وربط تقني مخصص يناسب مختلف الصناعات والمهام لرفع نسبة المبيعات وتأكيد العمليات بذكاء وسرعة."
              : "Bespoke tech integrations tailored to various industries, aimed at accelerating conversions and automating alerts."}
          </p>
        </div>

        {/* Use case tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {useCasesList.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveUseCase(item.id)}
              className={`flex items-center gap-2 rounded-xl border px-5 py-3 text-xs sm:text-sm font-bold font-alexandria transition-all ${
                activeUseCase === item.id
                  ? "bg-brand-purple/10 border-brand-purple text-brand-purple dark:text-brand-violet scale-[1.01]"
                  : "border-gray-200 dark:border-gray-800 text-gray-650 dark:text-gray-450 bg-white/40 dark:bg-gray-950/40 hover:bg-gray-50 dark:hover:bg-gray-900"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Tabs Content Display */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 shadow-xl max-w-5xl mx-auto grid md:grid-cols-12 gap-8 items-center">
          
          {/* Left Details column */}
          <div className="md:col-span-7 flex flex-col gap-6 text-start">
            <div className="h-12 w-12 rounded-xl bg-brand-purple/10 text-brand-purple dark:text-brand-violet flex items-center justify-center shadow-sm">
              {currentUseCase.icon}
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black font-alexandria text-gray-900 dark:text-white mb-2">
                {currentUseCase.title}
              </h3>
              <p className="text-xs sm:text-sm font-bold font-alexandria text-brand-purple dark:text-brand-violet">
                {currentUseCase.subtitle}
              </p>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-350 leading-relaxed font-alexandria font-normal">
              {currentUseCase.desc}
            </p>
            
            {/* Features checkmarks list */}
            <div className="grid sm:grid-cols-2 gap-3 mt-2">
              {currentUseCase.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold font-alexandria text-gray-700 dark:text-gray-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-purple dark:bg-brand-violet shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual mock / CTA column */}
          <div className="md:col-span-5 flex flex-col gap-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 p-6 shadow-inner text-center md:text-start justify-center min-h-[250px]">
            <h4 className="text-sm font-black font-alexandria text-gray-900 dark:text-white">
              {lang === "ar" ? "جاهز للبدء الآن؟" : "Ready to Implement?"}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-alexandria leading-relaxed">
              {lang === "ar"
                ? "اربط متجرك أو موقعك بنظام CloudWA خلال دقائق واختبر الخدمة مجاناً طوال الأسبوع."
                : "Connect your web platform with CloudWA in minutes and enjoy our 7-day free trial."}
            </p>
            <a
              href="#pricing"
              className="flex items-center justify-center gap-2 rounded-xl bg-brand-purple hover:bg-brand-purple/90 text-white font-bold font-alexandria text-xs py-3.5 shadow-md shadow-brand-purple/10 hover:shadow-lg hover:scale-[1.01] transition-all"
            >
              <span>{lang === "ar" ? "ابدأ تجربتك المجانية" : "Start Free Trial"}</span>
              {lang === "ar" ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
