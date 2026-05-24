import React, { useState, useEffect } from "react";
import { Calculator as CalcIcon } from "lucide-react";

// Rate cards per message in USD
const rates = {
  EG: { marketing: 0.0105, utility: 0.0035, auth: 0.0032, name: { ar: "🇪🇬 مصر", en: "🇪🇬 Egypt" } },
  SA: { marketing: 0.0384, utility: 0.0125, auth: 0.0115, name: { ar: "🇸🇦 السعودية", en: "🇸🇦 Saudi Arabia" } },
  AE: { marketing: 0.0321, utility: 0.0118, auth: 0.0109, name: { ar: "🇦🇪 الإمارات", en: "🇦🇪 UAE" } },
  Other: { marketing: 0.0220, utility: 0.0080, auth: 0.0075, name: { ar: "🌐 دول أخرى", en: "🌐 Other Countries" } }
};

export default function Calculator({ lang, t }) {
  const [country, setCountry] = useState("EG");
  const [marketingCount, setMarketingCount] = useState(5000);
  const [utilityCount, setUtilityCount] = useState(10000);
  const [authCount, setAuthCount] = useState(2000);
  const [serviceCount, setServiceCount] = useState(15000);

  const [metaCost, setMetaCost] = useState(0);
  const [cloudwaTotal, setCloudwaTotal] = useState(0);
  const [competitorMarkup, setCompetitorMarkup] = useState(0);
  const [competitorTotal, setCompetitorTotal] = useState(0);
  const [monthlySavings, setMonthlySavings] = useState(0);

  useEffect(() => {
    const selectedRates = rates[country];
    const currentMetaCost = 
      (marketingCount * selectedRates.marketing) +
      (utilityCount * selectedRates.utility) +
      (authCount * selectedRates.auth);
    
    const currentCloudwaTotal = currentMetaCost + 35.00;
    
    // Competitors charge 20% markup on meta messages and standard $99 subscription
    const currentCompetitorMarkup = currentMetaCost * 0.20;
    const currentCompetitorTotal = currentMetaCost * 1.20 + 99.00;
    const currentSavings = currentCompetitorTotal - currentCloudwaTotal;

    setMetaCost(currentMetaCost);
    setCloudwaTotal(currentCloudwaTotal);
    setCompetitorMarkup(currentCompetitorMarkup);
    setCompetitorTotal(currentCompetitorTotal);
    setMonthlySavings(currentSavings > 0 ? currentSavings : 0);
  }, [country, marketingCount, utilityCount, authCount]);

  const selectedRates = rates[country];

  return (
    <section id="calculator" className="py-20 bg-white dark:bg-gray-950 transition-theme">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple dark:text-brand-violet mb-4">
            <CalcIcon className="h-5 w-5" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-alexandria text-gray-900 dark:text-white mb-4">
            {t.calculator.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-alexandria leading-relaxed">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Inputs Panel */}
          <div className="lg:col-span-7 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-gray-900/40 p-6 sm:p-8 flex flex-col gap-6">
            
            {/* Country Selector */}
            <div>
              <label className="block text-sm font-bold font-alexandria text-gray-800 dark:text-gray-200 mb-2">
                {t.calculator.countryLabel}
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-3.5 text-sm font-bold font-alexandria text-gray-800 dark:text-gray-200 focus:border-brand-purple outline-none"
              >
                {Object.keys(rates).map((key) => (
                  <option key={key} value={key}>
                    {rates[key].name[lang]}
                  </option>
                ))}
              </select>
            </div>

            {/* Marketing messages slider */}
            <div className="border-t border-gray-150 dark:border-gray-800/80 pt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold font-alexandria text-gray-950 dark:text-white">
                  {t.calculator.marketingLabel}
                </span>
                <span className="text-xs font-bold font-alexandria bg-brand-purple/10 text-brand-purple dark:text-brand-violet px-2.5 py-1 rounded-full">
                  ${selectedRates.marketing.toFixed(4)} / msg
                </span>
              </div>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="500"
                  value={marketingCount}
                  onChange={(e) => setMarketingCount(Number(e.target.value))}
                  className="flex-1 accent-brand-purple"
                />
                <input
                  type="number"
                  min="0"
                  max="1000000"
                  value={marketingCount}
                  onChange={(e) => setMarketingCount(Number(e.target.value))}
                  className="w-24 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-2 py-1.5 text-center text-xs font-bold font-outfit text-gray-800 dark:text-gray-200"
                />
              </div>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1 font-alexandria">
                {t.calculator.marketingDesc}
              </p>
            </div>

            {/* Utility messages slider */}
            <div className="border-t border-gray-150 dark:border-gray-800/80 pt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold font-alexandria text-gray-950 dark:text-white">
                  {t.calculator.utilityLabel}
                </span>
                <span className="text-xs font-bold font-alexandria bg-indigo-500/10 text-indigo-650 dark:text-indigo-400 px-2.5 py-1 rounded-full">
                  ${selectedRates.utility.toFixed(4)} / msg
                </span>
              </div>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="500"
                  value={utilityCount}
                  onChange={(e) => setUtilityCount(Number(e.target.value))}
                  className="flex-1 accent-indigo-500"
                />
                <input
                  type="number"
                  min="0"
                  max="1000000"
                  value={utilityCount}
                  onChange={(e) => setUtilityCount(Number(e.target.value))}
                  className="w-24 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-2 py-1.5 text-center text-xs font-bold font-outfit text-gray-800 dark:text-gray-200"
                />
              </div>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1 font-alexandria">
                {t.calculator.utilityDesc}
              </p>
            </div>

            {/* Authentication messages slider */}
            <div className="border-t border-gray-150 dark:border-gray-800/80 pt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold font-alexandria text-gray-950 dark:text-white">
                  {t.calculator.authLabel}
                </span>
                <span className="text-xs font-bold font-alexandria bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2.5 py-1 rounded-full">
                  ${selectedRates.auth.toFixed(4)} / msg
                </span>
              </div>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="500"
                  value={authCount}
                  onChange={(e) => setAuthCount(Number(e.target.value))}
                  className="flex-1 accent-emerald-500"
                />
                <input
                  type="number"
                  min="0"
                  max="1000000"
                  value={authCount}
                  onChange={(e) => setAuthCount(Number(e.target.value))}
                  className="w-24 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-2 py-1.5 text-center text-xs font-bold font-outfit text-gray-800 dark:text-gray-200"
                />
              </div>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1 font-alexandria">
                {t.calculator.authDesc}
              </p>
            </div>

            {/* Service replies slider */}
            <div className="border-t border-gray-150 dark:border-gray-800/80 pt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold font-alexandria text-gray-950 dark:text-white">
                  {t.calculator.serviceLabel}
                </span>
                <span className="text-xs font-bold font-alexandria bg-emerald-500 text-white px-2.5 py-1 rounded-full">
                  {t.calculator.freeBadge}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="1000"
                  value={serviceCount}
                  onChange={(e) => setServiceCount(Number(e.target.value))}
                  className="flex-1 accent-gray-400 cursor-not-allowed opacity-50"
                  disabled
                />
                <input
                  type="number"
                  value={serviceCount}
                  className="w-24 rounded-lg border border-gray-200 dark:border-gray-850 bg-gray-100 dark:bg-gray-900 px-2 py-1.5 text-center text-xs font-bold font-outfit text-gray-400 cursor-not-allowed"
                  disabled
                />
              </div>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1 font-alexandria">
                {t.calculator.serviceDesc}
              </p>
            </div>

          </div>

          {/* Right Results Panel */}
          <div className="lg:col-span-5 rounded-3xl bg-gray-900 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-950 border border-gray-800 dark:border-0 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-brand-purple/20 blur-xl pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-lg font-bold font-alexandria text-white border-b border-gray-700 pb-4 mb-6">
                {lang === "ar" ? "تحليل التكاليف الشهري مع CloudWA" : "CloudWA Monthly Cost Analysis"}
              </h3>

              {/* CloudWA Breakdown */}
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex justify-between items-center text-sm font-alexandria text-gray-400">
                  <span>{t.calculator.metaCost}</span>
                  <span className="font-outfit font-bold text-white">${metaCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-alexandria text-gray-400">
                  <span>{t.calculator.cloudwaSub}</span>
                  <span className="font-outfit font-bold text-white">$35.00</span>
                </div>
                <div className="flex justify-between items-center text-lg font-alexandria font-black border-t border-dashed border-gray-700 pt-4 mt-2">
                  <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                    {t.calculator.totalCloudwa}
                  </span>
                  <span className="font-outfit text-2xl text-emerald-400 font-extrabold">${cloudwaTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Competitors Comparison Box */}
              <div className="rounded-2xl border border-gray-700/80 bg-white/5 p-5 mb-8">
                <h4 className="text-xs font-bold font-alexandria text-gray-400 mb-4">
                  {t.calculator.competitorCost}
                </h4>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center text-xs font-alexandria text-gray-400">
                    <span>{t.calculator.competitorSub}</span>
                    <span className="font-outfit font-semibold text-white">$99.00</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-alexandria text-gray-400">
                    <span>{t.calculator.competitorMarkup}</span>
                    <span className="font-outfit font-semibold text-white">${competitorMarkup.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-alexandria font-bold border-t border-gray-700 pt-3 mt-1">
                    <span className="text-gray-300">{t.calculator.totalCompetitor}</span>
                    <span className="font-outfit font-extrabold text-lg text-rose-500">${competitorTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Savings Card */}
              <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-5 mb-6 text-center animate-pulse">
                <span className="text-xs font-bold font-alexandria text-emerald-400 block mb-1">
                  {t.calculator.savings}
                </span>
                <span className="text-3xl font-black font-outfit text-emerald-400">
                  ${monthlySavings.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="relative z-10 mt-4">
              <a
                href="#pricing"
                className="w-full block text-center rounded-xl bg-gradient-to-r from-brand-purple to-brand-violet text-white font-bold font-alexandria text-sm py-4 shadow-lg shadow-brand-purple/20 hover:shadow-xl hover:shadow-brand-purple/35 transition-all"
              >
                {t.calculator.cta}
              </a>
              <span className="block text-[9px] text-gray-400 font-alexandria text-center mt-3 leading-relaxed">
                {t.calculator.disclaimer}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
