import React, { useState, useEffect } from "react";
import { translations } from "./data/translations";
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
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import plansData from "./data/plans.json";

export default function App() {
  const [lang, setLang] = useState("ar"); // Default to Arabic ('ar') or English ('en')
  const [theme, setTheme] = useState("dark"); // Default to Dark Mode
  const [openFaqIdx, setOpenFaqIdx] = useState(null);
  
  // Initialize route from hash for direct links and bookmarks
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash;
    if (hash === "#stories") return "customers";
    if (hash === "#tutorials") return "tutorials";
    return "home";
  });

  // Sync translation dictionary
  const t = translations[lang];

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
        ...plansData.officialPlans.map(plan => ({
          "@type": "Offer",
          "price": plan.price,
          "priceCurrency": "USD",
          "description": plan.name[lang]
        })),
        ...plansData.unofficialPlans.map(plan => ({
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
  }, [lang, theme, currentPage]);

  const toggleFaq = (idx) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

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
            <UseCases lang={lang} t={t} />

            {/* Dynamic Wizard / Use Cases */}
            <Wizard lang={lang} t={t} />

            {/* Meta Cost Calculator */}
            <Calculator lang={lang} t={t} />

            {/* Competitor Comparison */}
            <Compare lang={lang} t={t} />

            {/* Transparent Pricing Plans */}
            <Pricing lang={lang} t={t} />

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
            <Customers lang={lang} />
          </div>
        )}

        {currentPage === "tutorials" && (
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <Tutorials lang={lang} />
          </div>
        )}

      </main>

      {/* Footer */}
      <Footer lang={lang} t={t} />

    </div>
  );
}
