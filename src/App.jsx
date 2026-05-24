import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import UseCases from "./components/UseCases";
import Wizard from "./components/Wizard";
import Calculator from "./components/Calculator";
import Compare from "./components/Compare";
import Pricing from "./components/Pricing";
import Developer from "./components/Developer";
import Footer from "./components/Footer";
import Customers from "./components/Customers";
import Tutorials from "./components/Tutorials";
import MessageTypes from "./components/MessageTypes";
import { HelpCircle, ChevronDown, ChevronUp, X, MessageSquare } from "lucide-react";

export default function App() {
  const [lang, setLang] = useState("ar"); // Default to Arabic ('ar') or English ('en')
  const [theme, setTheme] = useState("dark"); // Default to Dark Mode
  const [openFaqIdx, setOpenFaqIdx] = useState(null);
  const [showPromo, setShowPromo] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // States to hold dynamically loaded JSON datasets
  const [data, setData] = useState({
    translationsAr: null,
    translationsEn: null,
    plans: null,
    stories: null,
    useCases: null,
    tutorials: null
  });
  const [loadProgress, setLoadProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("");

  // Asynchronous dynamic loading of all datasets with smooth progression tracking
  useEffect(() => {
    let progressTimer;
    let dataLoaded = false;
    let loadedDataPayload = null;

    // 1. Start loading data asynchronously
    Promise.all([
      import("./data/ar.json").then((res) => res.default),
      import("./data/en.json").then((res) => res.default),
      import("./data/plans.json").then((res) => res.default),
      import("./data/stories.json").then((res) => res.default),
      import("./data/useCases.json").then((res) => res.default),
      import("./data/tutorials.json").then((res) => res.default),
    ]).then(([ar, en, plans, stories, useCases, tutorials]) => {
      loadedDataPayload = {
        translationsAr: ar,
        translationsEn: en,
        plans: plans,
        stories: stories,
        useCases: useCases,
        tutorials: tutorials
      };
      dataLoaded = true;
    }).catch(err => {
      console.error("Critical: Failed to load application data:", err);
      // Fallback flag so we don't block the user
      dataLoaded = true;
    });

    // 2. Animate progress bar smoothly, checking every 30ms
    progressTimer = setInterval(() => {
      setLoadProgress((prev) => {
        if (prev < 90) {
          // Normal smooth loading animation increments (takes ~1.2s to reach 90%)
          return prev + Math.floor(Math.random() * 3) + 1; // Increment by 1-3%
        } else if (dataLoaded) {
          // Data has successfully loaded, accelerate completion to 100%
          if (prev >= 100) {
            clearInterval(progressTimer);
            if (loadedDataPayload) {
              setData(loadedDataPayload);
            }
            setTimeout(() => {
              setIsLoading(false);
            }, 100); // 100ms finish delay for transition smoothness
            return 100;
          }
          return prev + 5; // Accelerate increments by 5%
        }
        // If data is still loading, hold at 90%
        return 90;
      });
    }, 30);

    return () => {
      if (progressTimer) clearInterval(progressTimer);
    };
  }, []);

  // Update localized text description based on percentage loaded
  useEffect(() => {
    if (loadProgress < 20) {
      setLoadingText(lang === "ar" ? "تهيئة النظام وقراءة الإعدادات..." : "Initializing system & reading config...");
    } else if (loadProgress < 40) {
      setLoadingText(lang === "ar" ? "تحميل اللغات وقواعد البيانات الفورية..." : "Loading languages & translations...");
    } else if (loadProgress < 60) {
      setLoadingText(lang === "ar" ? "تحميل باقات الاشتراك وتفاصيل الأسعار..." : "Loading plans & subscription pricing...");
    } else if (loadProgress < 80) {
      setLoadingText(lang === "ar" ? "تحميل قصص النجاح وقائمة الشركاء..." : "Loading customer stories & partners...");
    } else if (loadProgress < 100) {
      setLoadingText(lang === "ar" ? "تحميل مركز التعليم وشروحات الربط للبرمجة..." : "Loading integration docs & developer tutorials...");
    } else {
      setLoadingText(lang === "ar" ? "اكتمل التحميل بنجاح! جاري توجيهك..." : "Load complete! Directing you...");
    }
  }, [loadProgress, lang]);
  
  // Initialize route from hash for direct links and bookmarks
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash;
    if (hash === "#stories") return "customers";
    if (hash === "#tutorials") return "tutorials";
    if (hash === "#message-types") return "message-types";
    return "home";
  });

  // Sync translation dictionary with fallback
  const translations = data.translationsAr && data.translationsEn
    ? { ar: data.translationsAr, en: data.translationsEn }
    : null;

  const t = translations ? translations[lang] : null;

  // Apply RTL direction, Dark mode, and dynamic SEO metadata
  useEffect(() => {
    const root = document.documentElement;
    
    // Set text direction
    root.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    root.setAttribute("lang", lang);

    // Set theme
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Dynamic SEO Title and Description based on Language and Page Selection
    if (currentPage === "home") {
      document.title = lang === "ar" 
        ? "منصة CloudWA | ربط واتساب رسمي مع Meta وبوابة الربط الاقتصادي للمطورين"
        : "CloudWA | Official Meta WhatsApp API & Budget Web Gateway";
    } else if (currentPage === "customers") {
      document.title = lang === "ar"
        ? "قصص النجاح وعملاء منصة CloudWA | ربط وأتمتة الواتساب"
        : "Success Stories & Clients | CloudWA WhatsApp Gateway";
    } else if (currentPage === "tutorials") {
      document.title = lang === "ar"
        ? "مركز التعليم وشروحات الربط البرمجي | CloudWA Tutorials"
        : "Integration Guides & Developer Tutorials | CloudWA Reference";
    }

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", lang === "ar"
        ? "اربط متجرك وعملك عبر واتساب API الرسمي المعتمد من Meta بعمولة 0% وتفعيل فوري، أو جرب بوابة الويب المؤتمتة غير الرسمية للمطورين والشركات الناشئة بأقل التكاليف. دعم متكامل من أكوادك للبرمجيات."
        : "Connect via Meta Official WhatsApp API with 0% message commission or use our Web Automation API for quick setup. Backed by Aquadic."
      );
    }

    // Dynamic JSON-LD Schema.org update for SEO bots
    let schemaScript = document.getElementById("jsonld-schema");
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = "jsonld-schema";
      schemaScript.type = "application/ld+json";
      document.head.appendChild(schemaScript);
    }

    const activePlans = data.plans;
    if (activePlans) {
      const schemaData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "CloudWA",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": lang === "ar"
          ? "بوابة متكاملة لربط واتساب تدعم الربط الرسمي من ميتا وبوابة الربط الاقتصادي للمطورين وأصحاب المتاجر."
          : "WhatsApp integration gateway offering official Meta Cloud API and budget-friendly web automation API.",
        "url": "https://cloudwa.net",
        "offers": [
          ...activePlans.officialPlans.map(plan => ({
            "@type": "Offer",
            "price": plan.price,
            "priceCurrency": "USD",
            "description": plan.name[lang]
          })),
          ...activePlans.unofficialPlans.map(plan => ({
            "@type": "Offer",
            "price": plan.price,
            "priceCurrency": "USD",
            "description": plan.name[lang]
          }))
        ],
        "creator": {
          "@type": "Organization",
          "name": "Aquadic Software",
          "url": "https://aquadic.com"
        }
      };

      schemaScript.textContent = JSON.stringify(schemaData, null, 2);
    }
  }, [lang, theme, currentPage, data.plans]);

  const toggleFaq = (idx) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  // 1-minute delay promotional popup hook
  useEffect(() => {
    const hasShown = sessionStorage.getItem("cloudwa_promo_shown");
    if (hasShown === "true") return;

    const timer = setTimeout(() => {
      setShowPromo(true);
      sessionStorage.setItem("cloudwa_promo_shown", "true");
    }, 60000); // 1 minute (60,000ms)

    return () => clearTimeout(timer);
  }, []);

  const getCurrentMonthName = () => {
    const monthsAr = [
      "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
      "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
    ];
    const monthsEn = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const currentMonthIndex = new Date().getMonth();
    return lang === "ar" ? monthsAr[currentMonthIndex] : monthsEn[currentMonthIndex];
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950 text-white font-alexandria">
        {/* Animated Background blobs */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-purple/40 blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-brand-green/30 blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        </div>

        {/* Pulsing Branded Identity Icon */}
        <div className="relative flex items-center justify-center mb-8">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-brand-purple to-brand-green blur-xl animate-pulse opacity-70 scale-110" />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-tr from-brand-purple to-brand-green text-white shadow-2xl animate-floating border border-white/10">
            <MessageSquare className="h-12 w-12 text-white" />
          </div>
        </div>

        {/* Branded Text */}
        <h2 className="text-3xl font-black tracking-tight mb-1 bg-gradient-to-r from-white via-gray-150 to-gray-450 bg-clip-text text-transparent font-outfit">
          CloudWA
        </h2>

        {/* Company Subtext */}
        <p className="text-[10px] font-black tracking-widest text-gray-500 uppercase font-outfit mb-6">
          Powered by Aquadic
        </p>
        
        {/* Progress Text */}
        <div className="flex flex-col items-center gap-1.5 mb-4">
          <p className="text-xs font-bold text-gray-400 font-alexandria transition-all duration-300">
            {loadingText}
          </p>
          <span className="text-[11px] font-black font-outfit text-brand-green tracking-wider bg-brand-green/10 px-2.5 py-0.5 rounded-full border border-brand-green/20">
            {loadProgress}%
          </span>
        </div>

        {/* Real Progress bar */}
        <div className="h-2 w-48 bg-gray-900 rounded-full overflow-hidden border border-white/5 relative shadow-inner">
          <div 
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand-purple via-brand-violet to-brand-green rounded-full transition-all duration-500 ease-out" 
            style={{ width: `${loadProgress}%` }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen transition-theme bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 selection:bg-brand-purple/35 selection:text-white">
      
      {/* Header / Navigation */}
      <Header 
        lang={lang} 
        setLang={setLang} 
        theme={theme} 
        setTheme={setTheme} 
        t={t} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* Main Sections */}
      <main>
        
        {currentPage === "home" && (
          <>
            {/* Hero Section */}
            <Hero lang={lang} t={t} />

            {/* Features / Why Us */}
            <Features lang={lang} t={t} />

            {/* Use Cases Grid */}
            <UseCases lang={lang} t={t} useCasesData={data.useCases} />

            {/* Dynamic Wizard / Use Cases */}
            <Wizard lang={lang} t={t} />

            {/* Meta Cost Calculator */}
            <Calculator lang={lang} t={t} />

            {/* Competitor Comparison */}
            <Compare lang={lang} t={t} />

            {/* Transparent Pricing Plans */}
            <Pricing lang={lang} t={t} plansData={data.plans} />

            {/* Developer Sandbox */}
            <Developer lang={lang} t={t} />

            {/* FAQ Section */}
            <section id="faq" className="py-20 bg-white dark:bg-gray-950 transition-theme border-t border-gray-250/50 dark:border-gray-800/50">
              <div className="mx-auto max-w-4xl px-6 lg:px-12">
                
                {/* Title */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple dark:text-brand-violet mb-4">
                    <HelpCircle className="h-5 w-5" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black font-alexandria text-gray-900 dark:text-white mb-4">
                    {t.faq.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-550 dark:text-gray-400 font-alexandria leading-relaxed">
                    {t.faq.subtitle}
                  </p>
                </div>

                {/* Accordion FAQ Items */}
                <div className="flex flex-col gap-4">
                  {t.faq.questions.map((faqItem, idx) => {
                    const isOpen = openFaqIdx === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-gray-900/40 overflow-hidden transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full text-right sm:text-start flex items-center justify-between p-6 text-sm sm:text-base font-bold font-alexandria text-gray-950 dark:text-white hover:bg-gray-50/50 dark:hover:bg-gray-850/50 transition-colors"
                        >
                          <span className="flex-1 text-start">{faqItem.q}</span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-brand-purple shrink-0 ml-4" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-450 dark:text-gray-500 shrink-0 ml-4" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-6 text-xs sm:text-sm text-gray-600 dark:text-gray-350 leading-relaxed font-alexandria font-normal border-t border-gray-150/60 dark:border-gray-800/80 pt-4 bg-gray-50/20 dark:bg-gray-900/20">
                            {faqItem.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>
            </section>
          </>
        )}

        {currentPage === "customers" && (
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <Customers lang={lang} storiesData={data.stories} />
          </div>
        )}

        {currentPage === "message-types" && (
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <MessageTypes lang={lang} />
          </div>
        )}

        {currentPage === "tutorials" && (
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <Tutorials lang={lang} tutorialsData={data.tutorials} />
          </div>
        )}

      </main>

      {/* Footer */}
      <Footer lang={lang} t={t} />

      {/* Floating WhatsApp Chathead */}
      <div className={`fixed bottom-6 ${lang === "ar" ? "left-6" : "right-6"} z-40 flex flex-col items-end gap-2 group`}>
        {/* Tooltip text */}
        <div className={`bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-xs font-black font-alexandria px-3.5 py-2 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 opacity-0 scale-90 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none ${lang === "ar" ? "text-right" : "text-left"}`}>
          {lang === "ar" ? "👋 تحدث مع خدمة العملاء الآن" : "👋 Chat with Support Now"}
        </div>
        
        {/* Glowing floating button */}
        <a
          href="https://wa.me/201101782890"
          target="_blank"
          rel="noopener noreferrer"
          className="h-14 w-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all hover:scale-110 cursor-pointer animate-floating"
          aria-label="Chat on WhatsApp"
        >
          <svg
            className="h-7 w-7 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.725-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.516 0 10.005-4.486 10.008-10.007.001-2.673-1.036-5.186-2.92-7.071C16.471 1.64 13.968.602 11.3.602c-5.524 0-10.016 4.487-10.02 10.01 0 1.57.433 3.097 1.253 4.453l-.974 3.56 3.65-.959c1.353.74 2.766 1.135 4.382 1.136h.009zm10.224-6.843c-.278-.139-1.642-.81-1.898-.902-.256-.093-.443-.139-.629.139-.186.278-.72.902-.881 1.088-.162.186-.324.208-.602.069-.278-.139-1.173-.432-2.235-1.38-.826-.737-1.383-1.649-1.545-1.927-.162-.278-.017-.429.122-.567.125-.124.278-.324.417-.486.139-.162.186-.278.278-.463.093-.185.046-.347-.023-.486-.069-.139-.629-1.517-.862-2.074-.227-.546-.477-.472-.653-.481-.17-.008-.364-.01-.557-.01-.193 0-.509.072-.776.364-.267.292-1.02 1.02-1.02 2.483 0 1.463 1.065 2.875 1.213 3.074.149.199 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.642-.672 1.874-1.32.232-.648.232-1.204.162-1.32-.069-.116-.256-.208-.534-.347z"/>
          </svg>
        </a>
      </div>

      {/* 1-Minute Promo Modal Overlay */}
      {showPromo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          <div 
            className="glass-panel relative w-full max-w-md rounded-3xl p-8 text-center shadow-2xl border border-gray-200 dark:border-gray-800 scale-up flex flex-col items-center gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowPromo(false)}
              className={`absolute top-4 ${lang === "ar" ? "left-4" : "right-4"} h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-850 text-gray-505 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors flex items-center justify-center cursor-pointer`}
              aria-label="Close Promo"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Glowing Icon */}
            <div className="h-16 w-16 rounded-full bg-brand-purple/10 text-brand-purple dark:text-brand-violet flex items-center justify-center animate-bounce">
              <MessageSquare className="h-8 w-8" />
            </div>

            {/* Title & Body */}
            <div>
              <h3 className="text-xl sm:text-2xl font-black font-alexandria text-gray-900 dark:text-white mb-2 leading-tight">
                {lang === "ar" ? "محتار لسه؟ كلمنا الآن!" : "Still Confused? Chat with us!"}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-350 font-alexandria leading-relaxed">
                {lang === "ar"
                  ? `تحدث معنا الآن واحصل على خصم خاص بمناسبة شهر ${getCurrentMonthName()}! فريق المهندسين جاهز لإرشادك للقرار الصح.`
                  : `Chat with us now and unlock a special discount for ${getCurrentMonthName()}! Our engineers are ready to guide you.`}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 w-full">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/201101782890"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowPromo(false)}
                className="w-full rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold font-alexandria text-xs sm:text-sm py-4 shadow-md shadow-emerald-600/20 hover:scale-[1.01] hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>🟢 {lang === "ar" ? "افتح الواتساب وكلمنا" : "Chat on WhatsApp"}</span>
              </a>

              {/* Calendly Button */}
              <a
                href="https://calendly.com/aquadicsoftwares/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowPromo(false)}
                className="w-full rounded-2xl border border-gray-250 dark:border-gray-800 text-gray-700 dark:text-gray-300 bg-white/40 dark:bg-gray-950/40 hover:bg-gray-50 dark:hover:bg-gray-900 py-4 text-xs sm:text-sm font-bold font-alexandria hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>📅 {lang === "ar" ? "احجز ميعاد واستنانا" : "Book a Consultation"}</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
