import React from "react";
import { Terminal, ArrowUpRight } from "lucide-react";

export default function Developer({ lang, t }) {
  const isAr = lang === "ar";
  
  return (
    <section id="developer" className="py-20 bg-gray-55/30 dark:bg-gray-950/20 transition-theme border-y border-gray-200/50 dark:border-gray-800/50">
      <div className="mx-auto max-w-4xl px-6 text-center">
        
        {/* Glowing Centered Icon */}
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-purple/10 text-brand-purple dark:text-brand-violet mb-6 shadow-sm">
          <Terminal className="h-8 w-8" />
        </div>
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-black font-alexandria text-gray-900 dark:text-white mb-4">
          {t.developer.title}
        </h2>
        
        {/* Subtitle / Description */}
        <p className="text-sm sm:text-base text-gray-550 dark:text-gray-400 font-alexandria leading-relaxed max-w-2xl mx-auto mb-10">
          {isAr 
            ? "اربط بوابة واتساب بنظامك البرمجي أو متجرك الخاص خلال دقائق معدودة وبأسهل الطرق الممكنة. نوفر لك وثائق برمجية متكاملة وسهلة التطبيق لبوابات الربط الرسمي والويب."
            : "Integrate WhatsApp into your application, CRM, or custom store in just a few minutes. We provide comprehensive, clean, and developer-friendly documentation for both official Meta and Web automation gateways."}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Official Docs Link */}
          <a
            href="https://docs.cloudwa.net"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-w-[240px] rounded-2xl px-6 py-4 text-xs sm:text-sm font-black font-alexandria bg-emerald-600 hover:bg-emerald-700 text-white text-center shadow-lg shadow-emerald-600/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>🌐 {isAr ? "الدليل الرسمي" : "Official Docs"}</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" />
          </a>
          
          {/* Unofficial Docs Link */}
          <a
            href="https://cloudwa.net/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-w-[240px] rounded-2xl px-6 py-4 text-xs sm:text-sm font-black font-alexandria bg-indigo-650 hover:bg-indigo-750 text-white text-center shadow-lg shadow-indigo-600/25 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>⚡ {isAr ? "الدليل غير الرسمي" : "Unofficial Docs"}</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" />
          </a>
        </div>

      </div>
    </section>
  );
}
