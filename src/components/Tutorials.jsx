import React, { useState } from "react";
import { BookOpen, Search, Settings, Link, Share2, PlayCircle, Code } from "lucide-react";

export default function Tutorials({ lang }) {
  const isAr = lang === "ar";
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: isAr ? "الكل" : "All Guides" },
    { id: "meta", label: isAr ? "إعداد Meta وحساب البيزنس" : "Meta & Business Verification" },
    { id: "stores", label: isAr ? "ربط المتاجر والمنصات" : "E-commerce & Store Links" },
    { id: "dev", label: isAr ? "أتمتة وأدوات المطورين" : "APIs & Automations" }
  ];

  const tutorialsData = [
    {
      id: 1,
      category: "meta",
      title: isAr ? "كيفية توثيق حساب Meta Business Manager للربط الرسمي" : "How to verify Meta Business Manager for Official API",
      desc: isAr
        ? "دليل مبسط خطوة بخطوة لشرح المستندات المطلوبة والخطوات لتوثيق علامتك التجارية لدى Meta لربط الواتساب الرسمي في أقل من 24 ساعة."
        : "A complete step-by-step guide explaining the exact paperwork and steps to verify your business manager with Meta in 24 hours.",
      duration: isAr ? "شرح 5 دقائق" : "5 min read",
      difficulty: isAr ? "سهل" : "Beginner"
    },
    {
      id: 2,
      category: "stores",
      title: isAr ? "ربط وتفعيل إرسال الرسائل تلقائياً في WooCommerce" : "Integrating automated alerts with WooCommerce stores",
      desc: isAr
        ? "شرح تنصيب إضافات الواتساب في ووردبريس، وربط مفتاح API من لوحة تحكم CloudWA لتهيئة إرسال رسائل الفواتير والطلبات تلقائياً."
        : "Step-by-step guide to installing WordPress webhooks, binding your CloudWA API key, and configuring instant checkout alerts.",
      duration: isAr ? "شرح 8 دقائق" : "8 min read",
      difficulty: isAr ? "متوسط" : "Intermediate"
    },
    {
      id: 3,
      category: "stores",
      title: isAr ? "ربط متجر سلة (Salla) لإرسال تحديثات الشحن" : "Connecting Salla Store for automatic shipping alerts",
      desc: isAr
        ? "دليل إعداد الويب هوكس (Webhooks) المباشر في منصة سلة، وتحديد حالات الطلب المناسبة لإخطار العملاء تلقائياً بروابط الشحن وتغيير الحالات."
        : "How to configure direct webhooks inside Salla dashboard and trigger automatic notifications with shipping tracking links.",
      duration: isAr ? "شرح 6 دقائق" : "6 min read",
      difficulty: isAr ? "سهل" : "Beginner"
    },
    {
      id: 4,
      category: "dev",
      title: isAr ? "كيفية بناء سيناريو رد آلي (Chatbot) ذكي بالـ AI" : "Building a smart automated Chatbot with ChatGPT API",
      desc: isAr
        ? "دليل يشرح كيفية كتابة سيناريوهات الردود، وتكامل مساعد الذكاء الاصطناعي ChatGPT مع CloudWA للرد التلقائي الذكي على العملاء 24/7."
        : "Guide to writing response flows and connecting OpenAI's API inside CloudWA to provide 24/7 automated support to your users.",
      duration: isAr ? "شرح 12 دقيقة" : "12 min read",
      difficulty: isAr ? "متوسط" : "Intermediate"
    },
    {
      id: 5,
      category: "dev",
      title: isAr ? "الربط البرمجي وإرسال الرسائل عبر cURL و Node.js" : "Programmatic integration via cURL and Node.js",
      desc: isAr
        ? "توثيق برمي كامل للمطورين لتهيئة إرسال الرسائل الإخطارية، وتلقي الـ Webhooks لتحديثات استلام وقراءة الرسائل فورياً."
        : "Full documentation reference for developers, including triggering notifications and receiving webhook delivery reports.",
      duration: isAr ? "شرح 10 دقائق" : "10 min read",
      difficulty: isAr ? "متقدم" : "Advanced"
    }
  ];

  // Filter based on search query and category tab
  const filteredTutorials = tutorialsData.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
      <div className="max-w-md mx-auto mb-10 relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
          <Search className="h-5 w-5" />
        </div>
        <input
          type="text"
          placeholder={isAr ? "ابحث عن شرح أو موضوع معين..." : "Search for guides, platforms, API..."}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 pl-10 pr-4 py-3.5 text-xs sm:text-sm font-bold font-alexandria text-gray-800 dark:text-gray-200 focus:border-brand-purple outline-none shadow-sm"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-12 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`rounded-xl px-5 py-3 text-xs font-bold font-alexandria border transition-all ${
              activeCategory === cat.id
                ? "bg-brand-purple/10 border-brand-purple text-brand-purple dark:text-brand-violet scale-[1.01]"
                : "border-gray-200 dark:border-gray-800 text-gray-650 dark:text-gray-450 bg-white/40 dark:bg-gray-950/40 hover:bg-gray-50 dark:hover:bg-gray-900"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Tutorials List Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {filteredTutorials.map((tut) => (
          <div
            key={tut.id}
            className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-gray-900/40 p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group cursor-pointer"
          >
            <div>
              {/* Category indicator icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black uppercase tracking-wider text-brand-purple dark:text-brand-violet bg-brand-purple/10 px-2.5 py-1 rounded-md">
                  {tut.category === "meta" ? "Meta" : tut.category === "stores" ? "Stores" : "API"}
                </span>
                <span className="text-[10px] font-bold font-alexandria text-gray-400">
                  {tut.duration}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-black font-alexandria text-gray-900 dark:text-white mb-3 group-hover:text-brand-purple transition-colors text-start">
                {tut.title}
              </h3>
              
              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-450 leading-relaxed font-alexandria font-normal text-start">
                {tut.desc}
              </p>
            </div>

            {/* Difficulty + Link detail */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-150/60 dark:border-gray-850">
              <span className="text-[10px] font-bold font-alexandria text-gray-400">
                {isAr ? "الصعوبة:" : "Difficulty:"} <span className="text-gray-600 dark:text-gray-300 font-black">{tut.difficulty}</span>
              </span>
              <span className="flex items-center gap-1 text-xs font-bold font-alexandria text-brand-purple dark:text-brand-violet">
                <span>{isAr ? "اقرأ الدليل الكامل" : "Read Guide"}</span>
                {isAr ? "←" : "→"}
              </span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
