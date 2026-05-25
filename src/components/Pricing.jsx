import React, { useState } from "react";
import { Check, Phone, Users } from "lucide-react";

export default function Pricing({ lang, t, plansData }) {
  const [activeTab, setActiveTab] = useState("official");

  if (!plansData) return null;
  const plans = activeTab === "official" ? plansData.officialPlans : plansData.unofficialPlans;
  const isAr = lang === "ar";

  return (
    <section id="pricing" className="py-20 bg-gray-50/60 dark:bg-gray-950/20 transition-theme">
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

        {/* Tab Selector */}
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

        {/* Pricing Cards Grid — always scrollable row on mobile, auto cols on desktop */}
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-stretch">
          {plans.map((plan, index) => {
            const isHighlighted = plan.highlight;
            const isCustom = plan.price === "custom";
            const planName = plan.name[lang];
            const planBadge = plan.badge ? plan.badge[lang] : null;
            const planPeriod = plan.period[lang];
            const planFeatures = plan.features[lang];
            const planCta = plan.cta[lang];
            const planNumbers = plan.numbers ? plan.numbers[lang] : null;
            const planAgents = plan.agents ? plan.agents[lang] : null;

            return (
              <div
                key={index}
                className={`rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 relative ${
                  isHighlighted
                    ? `bg-white dark:bg-gray-900 border-2 border-brand-purple dark:border-brand-violet shadow-2xl scale-[1.02] z-10`
                    : isCustom
                    ? "bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 border border-gray-700 dark:border-gray-800 shadow-lg"
                    : "bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-700"
                }`}
              >
                {/* Badge */}
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
                  <h3 className={`text-base font-black font-outfit tracking-widest mb-4 text-center uppercase ${
                    isCustom ? "text-white" : "text-gray-900 dark:text-white"
                  }`}>
                    {planName}
                  </h3>

                  {/* Numbers & Agents Pills */}
                  {(planNumbers || planAgents) && (
                    <div className="flex flex-col gap-2 mb-5">
                      {planNumbers && (
                        <div className={`flex items-center gap-2 rounded-xl px-3 py-2 ${
                          isCustom
                            ? "bg-white/10 text-white"
                            : activeTab === "official"
                            ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                            : "bg-brand-purple/10 text-brand-purple dark:text-brand-violet"
                        }`}>
                          <Phone className="h-3.5 w-3.5 shrink-0" />
                          <span className="text-xs font-black font-alexandria">{planNumbers}</span>
                        </div>
                      )}
                      {planAgents && (
                        <div className={`flex items-center gap-2 rounded-xl px-3 py-2 ${
                          isCustom
                            ? "bg-white/10 text-white"
                            : activeTab === "official"
                            ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                            : "bg-brand-purple/10 text-brand-purple dark:text-brand-violet"
                        }`}>
                          <Users className="h-3.5 w-3.5 shrink-0" />
                          <span className="text-xs font-black font-alexandria">{planAgents}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Price */}
                  <div className="text-center mb-5">
                    {isCustom ? (
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-3xl font-black font-outfit text-white">
                          {isAr ? "سعر مخصص" : "Custom Price"}
                        </span>
                        <span className="text-xs text-gray-400 font-alexandria">
                          {isAr ? "يناسب احتياجاتك" : "Tailored to your needs"}
                        </span>
                      </div>
                    ) : (
                      <>
                        {plan.originalPrice && (
                          <span className="text-sm font-semibold font-outfit text-gray-400 line-through block mb-1">
                            ${plan.originalPrice}
                          </span>
                        )}
                        <div className="flex justify-center items-baseline gap-1">
                          <span className="text-4xl font-black font-outfit text-gray-950 dark:text-white">
                            {plan.price === "0" ? isAr ? "مجاناً" : "Free" : `$${plan.price}`}
                          </span>
                          {plan.price !== "0" && (
                            <span className="text-xs font-semibold font-alexandria text-gray-500 dark:text-gray-400">
                              {planPeriod === "month" ? t.pricing.perMonth : t.pricing.perYear}
                            </span>
                          )}
                        </div>
                        {plan.price === "0" && (
                          <span className="text-[10px] font-bold font-alexandria text-gray-400 block mt-1">
                            {planPeriod}
                          </span>
                        )}
                      </>
                    )}
                  </div>

                  <div className={`h-px mb-5 ${isCustom ? "bg-white/10" : "bg-gray-200/60 dark:bg-gray-800/80"}`} />

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {planFeatures.map((feature, idx) => (
                      <li key={idx} className={`flex items-start gap-2.5 text-xs font-medium font-alexandria ${
                        isCustom ? "text-gray-300" : "text-gray-700 dark:text-gray-300"
                      }`}>
                        <Check className={`h-4 w-4 shrink-0 mt-0.5 ${
                          isCustom
                            ? "text-gray-400"
                            : activeTab === "official"
                            ? "text-emerald-500"
                            : "text-brand-purple dark:text-brand-violet"
                        }`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA — Custom plan gets 2 buttons, others get 1 */}
                {isCustom ? (
                  <div className="flex flex-col gap-3">
                    <a
                      href="https://wa.me/201101782890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 text-center rounded-xl font-bold font-alexandria text-xs py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white shadow-md transition-all hover:scale-[1.02]"
                    >
                      <svg className="h-4 w-4 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.725-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.516 0 10.005-4.486 10.008-10.007.001-2.673-1.036-5.186-2.92-7.071C16.471 1.64 13.968.602 11.3.602c-5.524 0-10.016 4.487-10.02 10.01 0 1.57.433 3.097 1.253 4.453l-.974 3.56 3.65-.959z"/>
                      </svg>
                      {isAr ? "واتساب مباشر" : "WhatsApp Us"}
                    </a>
                    <a
                      href="https://calendly.com/aquadicsoftwares/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 text-center rounded-xl font-bold font-alexandria text-xs py-3.5 border border-white/20 text-white hover:bg-white/10 transition-all hover:scale-[1.02]"
                    >
                      📅 {isAr ? "احجز موعداً مجانياً" : "Book Free Call"}
                    </a>
                  </div>
                ) : (
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
                )}
              </div>
            );
          })}
        </div>

        {/* Official note */}
        {activeTab === "official" && (
          <div className="mt-12 max-w-2xl mx-auto rounded-2xl bg-emerald-500/5 border border-emerald-500/20 p-5 text-center text-xs font-semibold font-alexandria text-emerald-800 dark:text-emerald-300 leading-relaxed">
            💡 {isAr
              ? "ملحوظة: المنافسون يعطونك موظفين اثنين فقط و 5,000 عميل كحد أقصى مع عمولة إضافية على الرسائل. نحن نعطيك أرقاماً وموظفين حسب احتياجك وعمولة 0% على رسائل Meta."
              : "Note: Competitors limit you to 2 agents and 5,000 contacts max, plus charge markups on messages. CloudWA scales with your team needs and charges 0% markups on official Meta rates."}
          </div>
        )}

      </div>
    </section>
  );
}
