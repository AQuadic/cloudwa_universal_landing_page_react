import React, { useState, useEffect, useRef } from "react";
import { BookOpen, Search, HelpCircle, Code, Copy, Check, X, ShieldAlert, Award } from "lucide-react";

export default function Tutorials({ lang, tutorialsData }) {
  const isAr = lang === "ar";
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTutorial, setSelectedTutorial] = useState(null);
  const [copied, setCopied] = useState(false);

  const dialogRef = useRef(null);

  const categories = [
    { id: "all", label: isAr ? "الكل" : "All Guides" },
    { id: "meta", label: isAr ? "إعداد Meta وحساب البيزنس" : "Meta & Business Verification" },
    { id: "stores", label: isAr ? "ربط المتاجر والمنصات" : "E-commerce & Store Links" },
    { id: "dev", label: isAr ? "أتمتة وأدوات المطورين" : "APIs & Automations" }
  ];

  if (!tutorialsData) return null;

  // Filter based on search query and category tab
  const filteredTutorials = tutorialsData.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const titleText = isAr ? item.title.ar : item.title.en;
    const descText = isAr ? item.desc.ar : item.desc.en;
    const matchesSearch = titleText.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          descText.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openTutorial = (tut) => {
    setSelectedTutorial(tut);
    setTimeout(() => {
      if (dialogRef.current) {
        dialogRef.current.showModal();
      }
    }, 50);
  };

  const closeTutorial = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    setSelectedTutorial(null);
  };

  const copyCode = (codeText) => {
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Set up backdrop-click dismiss and Esc-key listener for native dialog
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      setSelectedTutorial(null);
    };

    const handleBackdropClick = (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const isDialogContent = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isDialogContent) {
        dialog.close();
      }
    };

    dialog.addEventListener("close", handleClose);
    dialog.addEventListener("click", handleBackdropClick);

    return () => {
      dialog.removeEventListener("close", handleClose);
      dialog.removeEventListener("click", handleBackdropClick);
    };
  }, [selectedTutorial]);

  const activeContent = selectedTutorial ? (isAr ? selectedTutorial.content.ar : selectedTutorial.content.en) : null;
  const activeTitle = selectedTutorial ? (isAr ? selectedTutorial.title.ar : selectedTutorial.title.en) : "";

  return (
    <div className="py-12 transition-theme min-h-[60vh]">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-black tracking-wider text-brand-purple dark:text-brand-violet uppercase font-alexandria bg-brand-purple/10 px-3.5 py-1 rounded-full">
          {isAr ? "مركز التعليم وشروحات الربط" : "Developer & Integration Center"}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black font-alexandria text-gray-900 dark:text-white mt-4 mb-4 leading-tight">
          {isAr ? "دليل الربط التقني والتعليمي خطوة بخطوة" : "Step-by-Step CloudWA Setup Guides"}
        </h1>
        <p className="text-sm sm:text-base text-gray-550 dark:text-gray-400 font-alexandria leading-relaxed">
          {isAr 
            ? "تعلم كيف تربط متجرك، وتوثق أرقامك، وتبني سيناريوهات الردود الذكية بسهولة تامة ودون تعقيد."
            : "Learn how to connect your platforms, configure automated webhooks, and launch your campaigns in minutes."}
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-10 relative px-4 sm:px-0">
        <div className="absolute inset-y-0 left-3 sm:left-4 flex items-center pointer-events-none text-gray-450 dark:text-gray-500">
          <Search className="h-5 w-5" />
        </div>
        <input
          type="text"
          placeholder={isAr ? "ابحث عن شرح أو موضوع معين..." : "Search for guides, platforms, API..."}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 pl-10 pr-4 py-3.5 text-xs sm:text-sm font-bold font-alexandria text-gray-850 dark:text-gray-200 focus:border-brand-purple outline-none shadow-sm transition-theme"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-12 max-w-4xl mx-auto px-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`rounded-xl px-5 py-3 text-xs font-bold font-alexandria border transition-all cursor-pointer ${
              activeCategory === cat.id
                ? "bg-brand-purple/10 border-brand-purple text-brand-purple dark:text-brand-violet scale-[1.01]"
                : "border-gray-200 dark:border-gray-850 text-gray-600 dark:text-gray-400 bg-white/40 dark:bg-gray-950/40 hover:bg-gray-50 dark:hover:bg-gray-900"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Tutorials List Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4 sm:px-6">
        {filteredTutorials.map((tut) => {
          const title = isAr ? tut.title.ar : tut.title.en;
          const desc = isAr ? tut.desc.ar : tut.desc.en;
          const duration = isAr ? tut.duration.ar : tut.duration.en;
          const difficulty = isAr ? tut.difficulty.ar : tut.difficulty.en;

          return (
            <div
              key={tut.id}
              onClick={() => openTutorial(tut)}
              className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-gray-900/40 p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg hover:border-brand-purple/40 dark:hover:border-brand-violet/40 transition-all duration-300 group cursor-pointer"
            >
              <div>
                {/* Category indicator icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black uppercase tracking-wider text-brand-purple dark:text-brand-violet bg-brand-purple/10 px-2.5 py-1 rounded-md">
                    {tut.category === "meta" ? "Meta" : tut.category === "stores" ? "Stores" : "API"}
                  </span>
                  <span className="text-[10px] font-bold font-alexandria text-gray-400">
                    {duration}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-black font-alexandria text-gray-900 dark:text-white mb-3 group-hover:text-brand-purple dark:group-hover:text-brand-violet transition-colors text-start">
                  {title}
                </h3>
                
                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-550 dark:text-gray-400 leading-relaxed font-alexandria font-normal text-start">
                  {desc}
                </p>
              </div>

              {/* Difficulty + Link detail */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-150/60 dark:border-gray-850">
                <span className="text-[10px] font-bold font-alexandria text-gray-450 dark:text-gray-500">
                  {isAr ? "الصعوبة:" : "Difficulty:"} <span className="text-gray-700 dark:text-gray-350 font-black">{difficulty}</span>
                </span>
                <span className="flex items-center gap-1 text-xs font-bold font-alexandria text-brand-purple dark:text-brand-violet group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                  <span>{isAr ? "اقرأ الدليل الكامل" : "Read Guide"}</span>
                  {isAr ? "←" : "→"}
                </span>
              </div>

            </div>
          );
        })}
      </div>

      {/* Support / Helpdesk Banner */}
      <div className="mt-20 max-w-4xl mx-auto px-4">
        <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-gradient-to-tr from-brand-purple/5 to-brand-green/5 p-8 text-center flex flex-col items-center justify-center gap-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-24 w-24 bg-brand-green/5 rounded-bl-full pointer-events-none" />
          <HelpCircle className="h-10 w-10 text-brand-purple dark:text-brand-violet" />
          <h3 className="text-xl sm:text-2xl font-black font-alexandria text-gray-900 dark:text-white">
            {isAr ? "لم تجد الشرح الذي تبحث عنه؟" : "Can't find the setup guide you need?"}
          </h3>
          <p className="text-xs sm:text-sm text-gray-550 dark:text-gray-405 font-alexandria max-w-lg leading-relaxed">
            {isAr
              ? "مهندسو الدعم الفني في أكوادك متواجدون لمساعدتك في تفعيل حسابك وربط متجرك الخاص خطوة بخطوة عبر محادثة واتساب سريعة."
              : "Our Egyptian technical engineers at Aquadic are available to help you hook up your systems step-by-step on WhatsApp."}
          </p>
          <a
            href="https://wa.me/201101782890"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold font-alexandria text-xs sm:text-sm px-6 py-3.5 transition-all shadow-md shadow-emerald-600/20 hover:scale-[1.01] inline-flex items-center gap-2"
          >
            <span>🟢 {isAr ? "تحدث مع مهندس دعم فني" : "Chat with Technical Support"}</span>
          </a>
        </div>
      </div>

      {/* Interactive Modal Dialog for Tutorial Reading */}
      <dialog
        ref={dialogRef}
        closedby="any"
        aria-labelledby="dialog-title"
        className="dialog-reset rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-0 shadow-2xl max-w-3xl w-[92%] sm:w-full max-h-[85vh] overflow-y-auto outline-none transition-theme backdrop:bg-black/60 backdrop:backdrop-blur-sm"
      >
        {selectedTutorial && activeContent && (
          <div className="flex flex-col">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md px-6 py-5 border-b border-gray-150/80 dark:border-gray-850 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black uppercase tracking-wider text-brand-purple dark:text-brand-violet bg-brand-purple/10 px-2.5 py-1 rounded-md">
                  {selectedTutorial.category === "meta" ? "Meta" : selectedTutorial.category === "stores" ? "Stores" : "API"}
                </span>
                <span className="text-xs font-bold font-alexandria text-gray-400">
                  {isAr ? selectedTutorial.duration.ar : selectedTutorial.duration.en}
                </span>
              </div>
              <button
                onClick={closeTutorial}
                className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-850 text-gray-500 hover:bg-gray-250 dark:hover:bg-gray-800 transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 flex flex-col gap-6 text-start">
              
              {/* Title */}
              <h2 id="dialog-title" className="text-xl sm:text-2xl font-black font-alexandria text-gray-950 dark:text-white leading-tight">
                {activeTitle}
              </h2>

              {/* Intro Text */}
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-350 leading-relaxed font-alexandria font-normal">
                {activeContent.intro}
              </p>

              {/* Step Checklist */}
              <div className="flex flex-col gap-4">
                <h4 className="text-xs sm:text-sm font-black font-alexandria text-gray-950 dark:text-white">
                  {isAr ? "📝 خطوات الإعداد والتطبيق:" : "📝 Integration Steps:"}
                </h4>
                <div className="flex flex-col gap-3.5">
                  {activeContent.steps.map((step, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <span className="h-7 w-7 shrink-0 rounded-full bg-brand-purple/10 text-brand-purple dark:text-brand-violet text-xs font-black font-outfit flex items-center justify-center">
                        {index + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-alexandria leading-relaxed pt-0.5">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Sandbox Block if present */}
              {activeContent.code && (
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800/80 px-4 py-2 rounded-t-xl">
                    <span className="text-[10px] font-black uppercase text-gray-500 tracking-wider">
                      {activeContent.codeLang} Code Block
                    </span>
                    <button
                      onClick={() => copyCode(activeContent.code)}
                      className="flex items-center gap-1 text-[10px] font-bold font-alexandria text-brand-purple dark:text-brand-violet bg-white dark:bg-gray-850 px-2.5 py-1 rounded-md border border-gray-200 dark:border-gray-750 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3 w-3 text-emerald-500" />
                          <span>{isAr ? "تم النسخ!" : "Copied!"}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          <span>{isAr ? "نسخ الكود" : "Copy Code"}</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="bg-gray-950 text-emerald-400 p-4 rounded-b-xl overflow-x-auto text-[10px] sm:text-xs font-mono text-start leading-relaxed border-x border-b border-gray-200 dark:border-gray-850">
                    <code>{activeContent.code}</code>
                  </pre>
                </div>
              )}

              {/* Tips & Warnings Box */}
              {activeContent.tips && activeContent.tips.length > 0 && (
                <div className="rounded-2xl bg-amber-500/5 border border-amber-500/10 p-5 mt-2">
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-500 mb-2">
                    <ShieldAlert className="h-5 w-5 shrink-0" />
                    <span className="text-xs sm:text-sm font-black font-alexandria">
                      {isAr ? "نصائح وتنبيهات هامة:" : "Important Tips & Warnings:"}
                    </span>
                  </div>
                  <ul className="space-y-2 list-disc pl-5 rtl:pl-0 rtl:pr-5 text-xs text-gray-550 dark:text-gray-400 font-alexandria leading-relaxed">
                    {activeContent.tips.map((tip, idx) => (
                      <li key={idx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 dark:bg-gray-900/60 px-6 py-5 border-t border-gray-150/80 dark:border-gray-850 flex justify-end gap-3 rounded-b-3xl">
              <button
                onClick={closeTutorial}
                className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-5 py-2.5 text-xs font-bold font-alexandria text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors cursor-pointer"
              >
                {isAr ? "إغلاق نافذة القراءة" : "Close"}
              </button>
            </div>

          </div>
        )}
      </dialog>

    </div>
  );
}
