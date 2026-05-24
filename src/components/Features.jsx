import React from "react";
import { AlertTriangle, BadgeCheck, XCircle, ShieldCheck, Zap } from "lucide-react";

export default function Features({ lang, t }) {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-950 transition-theme">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Pain points section */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="problem">
          <span className="text-xs font-black tracking-wider text-rose-500 uppercase font-alexandria bg-rose-500/10 px-3.5 py-1 rounded-full">
            {t.problem.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-alexandria text-gray-900 dark:text-white mt-4 mb-4">
            {t.problem.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-alexandria leading-relaxed">
            {t.problem.subtitle}
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {t.problem.cards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-gray-900/40 p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-3xl">{card.icon}</div>
              <h3 className="text-lg font-bold font-alexandria text-gray-900 dark:text-white">
                {card.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-alexandria leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* The Middle Way section (Official vs Unofficial Portal differences) */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-black tracking-wider text-brand-purple dark:text-brand-violet uppercase font-alexandria bg-brand-purple/10 px-3.5 py-1 rounded-full">
            {t.solution.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-alexandria text-gray-900 dark:text-white mt-4 mb-4">
            {t.solution.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-alexandria leading-relaxed">
            {t.solution.subtitle}
          </p>
        </div>

        {/* Two Portals Side-by-side comparison */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Official API Card */}
          <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-950/10 p-8 flex flex-col justify-between">
            <div>
              <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-black font-alexandria text-gray-900 dark:text-white mb-3">
                {t.solution.official.title}
              </h3>
              <p className="text-sm text-gray-650 dark:text-gray-350 leading-relaxed font-alexandria mb-6">
                {t.solution.official.desc}
              </p>
              <div className="h-px bg-emerald-500/10 mb-6" />
              <ul className="space-y-4">
                {t.solution.official.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-semibold font-alexandria text-gray-700 dark:text-gray-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Unofficial API Card */}
          <div className="rounded-3xl border border-indigo-500/20 bg-indigo-500/5 dark:bg-indigo-950/10 p-8 flex flex-col justify-between">
            <div>
              <div className="h-12 w-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-650 dark:text-indigo-400 mb-6">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-black font-alexandria text-gray-900 dark:text-white mb-3">
                {t.solution.unofficial.title}
              </h3>
              <p className="text-sm text-gray-650 dark:text-gray-350 leading-relaxed font-alexandria mb-6">
                {t.solution.unofficial.desc}
              </p>
              <div className="h-px bg-indigo-500/10 mb-6" />
              <ul className="space-y-4">
                {t.solution.unofficial.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-semibold font-alexandria text-gray-700 dark:text-gray-300">
                    <span className="h-2 w-2 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
