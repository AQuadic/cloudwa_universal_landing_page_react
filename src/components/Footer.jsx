import React from "react";
import { MessageSquare, ShieldCheck, Zap } from "lucide-react";

export default function Footer({ lang, t }) {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-12 transition-theme border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-gray-800 pb-12 mb-10">
          
          {/* Logo & description column */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <a href="#hero" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-purple to-brand-green text-white">
                <MessageSquare className="h-5 w-5" />
              </div>
              <span className="font-outfit text-xl font-black tracking-tight text-white">
                CloudWA
              </span>
            </a>
            <p className="text-xs sm:text-sm text-gray-400 font-alexandria leading-relaxed max-w-sm">
              {t.hero.subText}
            </p>
          </div>

          {/* Links Column */}
          <div className="md:col-span-3 flex flex-col items-start gap-3">
            <h4 className="text-sm font-bold font-alexandria text-white uppercase tracking-wider">
              {lang === "ar" ? "المنصات الحالية" : "Existing Portals"}
            </h4>
            <a
              href="https://cloudwa.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-gray-400 hover:text-brand-violet transition-colors font-alexandria"
            >
              cloudwa.net (Unofficial)
            </a>
            <a
              href="https://official.cloudwa.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-gray-400 hover:text-brand-violet transition-colors font-alexandria"
            >
              official.cloudwa.net (Official)
            </a>
            <a
              href="https://aquadic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-gray-400 hover:text-brand-violet transition-colors font-alexandria"
            >
              Aquadic Software
            </a>
          </div>

          {/* Verification Badges Column */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <h4 className="text-sm font-bold font-alexandria text-white uppercase tracking-wider">
              {lang === "ar" ? "الاعتمادات" : "Credentials"}
            </h4>
            <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5">
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
              <span className="text-[11px] font-bold text-gray-300 font-alexandria">
                {t.hero.metaBadge}
              </span>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5">
              <Zap className="h-5 w-5 text-indigo-400" />
              <span className="text-[11px] font-bold text-gray-300 font-alexandria">
                {t.hero.aquadicBadge}
              </span>
            </div>
          </div>

        </div>

        {/* Footer Legal Copy */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-start text-xs text-gray-500 font-alexandria">
          <p>
            &copy; {new Date().getFullYear()} {t.footer.rights}
          </p>
          <p className="max-w-md text-[10px] leading-relaxed text-gray-600">
            {t.footer.disclaimer}
          </p>
        </div>

      </div>
    </footer>
  );
}
