import React from "react";
import { MessageSquare, ShieldCheck, Zap } from "lucide-react";

export default function Footer({ lang, t, setCurrentPage }) {
  const isAr = lang === "ar";

  const navigate = (e, page, hash) => {
    e.preventDefault();
    if (setCurrentPage) setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (hash) window.location.hash = hash;
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white pt-16 pb-12 transition-theme border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-gray-200 dark:border-gray-800 pb-12 mb-10">
          
          {/* Logo & description column */}
          <div className="md:col-span-3 flex flex-col items-start gap-4">
            <a href="#home" onClick={(e) => navigate(e, "home", "")} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-purple to-brand-green text-white">
                <MessageSquare className="h-5 w-5" />
              </div>
              <span className="font-outfit text-xl font-black tracking-tight text-gray-900 dark:text-white">
                CloudWA
              </span>
            </a>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-alexandria leading-relaxed max-w-sm">
              {t.hero.subText}
            </p>
          </div>

          {/* Company Column */}
          <div className="md:col-span-2 flex flex-col items-start gap-3 text-start">
            <h4 className="text-sm font-bold font-alexandria text-gray-800 dark:text-white uppercase tracking-wider">
              {isAr ? "الشركة" : "Company"}
            </h4>
            <a href="#about" onClick={(e) => navigate(e, "about", "#about")}
              className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 hover:text-brand-violet transition-colors font-alexandria cursor-pointer">
              {isAr ? "من نحن" : "About Us"}
            </a>
            <a href="#changelog" onClick={(e) => navigate(e, "changelog", "#changelog")}
              className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 hover:text-brand-violet transition-colors font-alexandria cursor-pointer">
              {isAr ? "آخر التحديثات" : "Changelog"}
            </a>
            <a href="#affiliate" onClick={(e) => navigate(e, "affiliate", "#affiliate")}
              className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 hover:text-brand-violet transition-colors font-alexandria cursor-pointer">
              {isAr ? "برنامج الإحالة" : "Affiliate Program"}
            </a>
            <a href="#contact" onClick={(e) => navigate(e, "contact", "#contact")}
              className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 hover:text-brand-violet transition-colors font-alexandria cursor-pointer">
              {isAr ? "تواصل معنا" : "Contact Us"}
            </a>
          </div>

          {/* Aquadic Products Column */}
          <div className="md:col-span-2 flex flex-col items-start gap-3 text-start">
            <h4 className="text-sm font-bold font-alexandria text-gray-800 dark:text-white uppercase tracking-wider">
              {t.footer.productsTitle || (isAr ? "منتجات أكوادك" : "Aquadic Products")}
            </h4>
            {(t.footer.products || []).map((product, idx) => (
              <a
                key={idx}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 hover:text-brand-violet transition-colors font-alexandria"
              >
                {product.name}
              </a>
            ))}
          </div>

          {/* Legal Column */}
          <div className="md:col-span-2 flex flex-col items-start gap-3 text-start">
            <h4 className="text-sm font-bold font-alexandria text-gray-800 dark:text-white uppercase tracking-wider">
              {isAr ? "القانوني" : "Legal"}
            </h4>
            <a href="#privacy" onClick={(e) => navigate(e, "privacy", "#privacy")}
              className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 hover:text-brand-violet transition-colors font-alexandria cursor-pointer">
              {isAr ? "سياسة الخصوصية" : "Privacy Policy"}
            </a>
            <a href="#terms" onClick={(e) => navigate(e, "terms", "#terms")}
              className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 hover:text-brand-violet transition-colors font-alexandria cursor-pointer">
              {isAr ? "الشروط والأحكام" : "Terms & Conditions"}
            </a>
            <a href="#refund" onClick={(e) => navigate(e, "refund", "#refund")}
              className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 hover:text-brand-violet transition-colors font-alexandria cursor-pointer">
              {isAr ? "سياسة الاسترداد" : "Refund Policy"}
            </a>
          </div>

          {/* Verification Badges Column */}
          <div className="md:col-span-3 flex flex-col items-start gap-4">
            <h4 className="text-sm font-bold font-alexandria text-gray-800 dark:text-white uppercase tracking-wider">
              {isAr ? "الاعتمادات" : "Credentials"}
            </h4>
            <div className="flex items-center gap-2.5 rounded-xl bg-gray-200/60 dark:bg-white/5 border border-gray-300/50 dark:border-white/10 px-4 py-2.5 w-full">
              <ShieldCheck className="h-5 w-5 text-emerald-500 dark:text-emerald-400 shrink-0" />
              <span className="text-[11px] font-bold text-gray-700 dark:text-gray-300 font-alexandria text-start">
                {t.hero.metaBadge}
              </span>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl bg-gray-200/60 dark:bg-white/5 border border-gray-300/50 dark:border-white/10 px-4 py-2.5 w-full">
              <Zap className="h-5 w-5 text-indigo-500 dark:text-indigo-400 shrink-0" />
              <span className="text-[11px] font-bold text-gray-700 dark:text-gray-300 font-alexandria text-start">
                {t.hero.aquadicBadge}
              </span>
            </div>
          </div>

        </div>

        {/* Footer Legal Copy */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-start text-xs text-gray-500 dark:text-gray-500 font-alexandria">
          <p>
            &copy; {new Date().getFullYear()} {t.footer.rights}
          </p>
          <p className="max-w-md text-[10px] leading-relaxed text-gray-400 dark:text-gray-600">
            {t.footer.disclaimer}
          </p>
        </div>

      </div>
    </footer>
  );
}
