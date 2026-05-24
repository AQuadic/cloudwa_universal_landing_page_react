import React, { useState } from "react";
import { Check, Info } from "lucide-react";
import plansData from "../data/plans.json";

export default function Pricing({ lang, t }) {
  const [activeTab, setActiveTab] = useState("official"); // 'official' or 'unofficial'

  const plans = activeTab === "official" ? plansData.officialPlans : plansData.unofficialPlans;

  return (
    <section id="pricing" className="py-20 bg-gray-55/30 dark:bg-gray-950/20 transition-theme">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-black font-alexandria text-gray-900 dark:text-white mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-alexandria leading-relaxed">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Dynamic Selector Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex rounded-2xl bg-gray-200/60 dark:bg-gray-900/60 p-1.5 border border-gray-250 dark:border-gray-800">
            <button
              onClick={() => setActiveTab("official")}
              className={`rounded-xl px-6 py-3 text-xs sm:text-sm font-bold font-alexandria transition-all ${
                activeTab === "official"
                  ? "bg-white dark:bg-gray-850 text-emerald-600 dark:text-emerald-400 shadow-md scale-[1.01]"
                  : "text-gray-500 dark:text-gray-450 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {t.pricing.officialTab}
            </button>
            <button
              onClick={() => setActiveTab("unofficial")}
              className={`rounded-xl px-6 py-3 text-xs sm:text-sm font-bold font-alexandria transition-all ${
                activeTab === "unofficial"
                  ? "bg-white dark:bg-gray-850 text-indigo-600 dark:text-indigo-400 shadow-md scale-[1.01]"
                  : "text-gray-500 dark:text-gray-450 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {t.pricing.unofficialTab}
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className={`grid gap-8 justify-center mx-auto items-stretch ${
          activeTab === "official" ? "max-w-xl grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl"
        }`}>
          {plans.map((plan, index) => {
            const isHighlighted = plan.highlight;
            const planName = plan.name[lang];
            const planBadge = plan.badge ? plan.badge[lang] : null;
            const planPeriod = plan.period[lang];
            const planFeatures = plan.features[lang];
            const planCta = plan.cta[lang];
            
            return (
              <div
                key={index}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isHighlighted
                    ? `bg-white dark:bg-gray-900 border-2 border-brand-purple dark:border-brand-violet shadow-2xl scale-[1.03] z-10`
                    : "bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-700"
                }`}
              >
                {/* Popular Badge */}
                {planBadge && (
                  <span className={`absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[10px] font-black font-alexandria tracking-wide text-white uppercase bg-gradient-to-r ${
                    activeTab === "official" 
                      ? "from-emerald-500 to-teal-500 shadow-emerald-500/20" 
                      : "from-brand-purple to-brand-violet shadow-brand-purple/20"
                  } shadow-md`}>
                    {planBadge}
                  </span>
                )}

                <div>
                  {/* Plan Name */}
                  <h3 className="text-xl font-black font-alexandria text-gray-900 dark:text-white mb-4 text-center">
                    {planName}
                  </h3>

                  {/* Price */}
                  <div className="text-center mb-6">
                    {plan.originalPrice && (
                      <span className="text-sm font-semibold font-outfit text-gray-400 line-through block mb-1">
                        ${plan.originalPrice}
                      </span>
                    )}
                    <div className="flex justify-center items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black font-outfit text-gray-950 dark:text-white">
                        ${plan.price}
                      </span>
                      <span className="text-xs font-semibold font-alexandria text-gray-500 dark:text-gray-400">
                        {plan.price === "0" ? "" : planPeriod === "month" ? t.pricing.perMonth : t.pricing.perYear}
                      </span>
                    </div>
                    {plan.price === "0" && (
                      <span className="text-[10px] font-bold font-alexandria text-gray-400 block mt-1">
                        {planPeriod}
                      </span>
                    )}
                  </div>

                  <div className="h-px bg-gray-200/60 dark:bg-gray-800/80 mb-6" />

                  {/* Bullet points */}
                  <ul className="space-y-4 mb-8">
                    {planFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-medium font-alexandria text-gray-700 dark:text-gray-300">
                        <Check className={`h-5 w-5 shrink-0 mt-0.5 ${
                          activeTab === "official" ? "text-emerald-500" : "text-brand-purple dark:text-brand-violet"
                        }`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full block text-center rounded-xl font-bold font-alexandria text-sm py-4 shadow-md transition-all ${
                    isHighlighted
                      ? activeTab === "official"
                        ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-emerald-500/25 hover:shadow-lg hover:shadow-emerald-500/35 hover:scale-[1.01]"
                        : "bg-gradient-to-r from-brand-purple to-brand-violet text-white shadow-brand-purple/20 hover:shadow-lg hover:shadow-brand-purple/35 hover:scale-[1.01]"
                      : "border border-gray-250 dark:border-gray-800 text-gray-700 dark:text-gray-300 bg-white/40 dark:bg-gray-950/40 hover:bg-gray-50 dark:hover:bg-gray-900"
                  }`}
                >
                  {planCta}
                </a>
              </div>
            );
          })}
        </div>

        {/* Pricing Details Note */}
        {activeTab === "official" && (
          <div className="mt-12 max-w-2xl mx-auto rounded-2xl bg-emerald-500/5 border border-emerald-500/20 p-5 text-center text-xs font-semibold font-alexandria text-emerald-800 dark:text-emerald-300 leading-relaxed">
            <Info className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
            {lang === "ar"
              ? "💡 ملحوظة: المنافسون يعطونك موظفين اثنين فقط و 5,000 عميل كحد أقصى، مع عمولة إضافية على الرسائل. نحن نعطيك 10 موظفين وعملاء غير محدودين بسعر ثابت وعمولة 0% على رسائل Meta."
              : "💡 Note: Competitors limit you to 2 agents and 5,000 contacts max, plus charging markups on message costs. CloudWA gives you 10 agents, unlimited contacts, and 0% markups on official Meta rates."}
          </div>
        )}

      </div>
    </section>
  );
}
