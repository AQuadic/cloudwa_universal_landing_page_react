import React from "react";
import { Zap, Star, Wrench, ArrowUp, Bug } from "lucide-react";

const releases = [
  {
    version: "v2.5.0",
    date: { ar: "مايو ٢٠٢٥", en: "May 2025" },
    type: "major",
    changes: {
      ar: [
        { type: "feature", text: "إطلاق صفحة أنواع الرسائل الجديدة مع معاينات تفاعلية كاملة." },
        { type: "feature", text: "دعم رسائل WhatsApp Flows المتقدمة في بوابة الربط الرسمي." },
        { type: "feature", text: "تحسينات جذرية في سرعة تحميل لوحة التحكم (أسرع بـ 40%)." },
        { type: "improvement", text: "تحديث كامل لواجهة الحاسبة التفاعلية مع دعم 30 دولة جديدة." },
        { type: "improvement", text: "تحسين نظام الإشعارات الفوري وتقليل التأخير." },
        { type: "fix", text: "إصلاح مشكلة عدم ظهور رسائل بعض القوالب في الوضع الليلي." }
      ],
      en: [
        { type: "feature", text: "Launched new Message Types page with full interactive previews." },
        { type: "feature", text: "Added WhatsApp Flows advanced support in the Official API gateway." },
        { type: "feature", text: "Major dashboard loading speed improvements (40% faster)." },
        { type: "improvement", text: "Full redesign of the interactive Meta Calculator with 30+ new country support." },
        { type: "improvement", text: "Improved real-time notification system with reduced latency." },
        { type: "fix", text: "Fixed a display issue with some template messages in dark mode." }
      ]
    }
  },
  {
    version: "v2.4.0",
    date: { ar: "أبريل ٢٠٢٥", en: "April 2025" },
    type: "minor",
    changes: {
      ar: [
        { type: "feature", text: "إضافة مركز التعليم والشروحات البرمجية مع 15 درس تفاعلي." },
        { type: "feature", text: "دعم تصدير بيانات العملاء بصيغة CSV وExcel." },
        { type: "improvement", text: "تحسين أداء الحملات الكبيرة (أكثر من 10,000 رسالة)." },
        { type: "fix", text: "إصلاح خلل في توقيت الجدولة لبعض المناطق الزمنية." }
      ],
      en: [
        { type: "feature", text: "Added Education Center with 15 interactive developer tutorials." },
        { type: "feature", text: "Added CSV and Excel export for contact databases." },
        { type: "improvement", text: "Optimized large campaign performance (10,000+ messages)." },
        { type: "fix", text: "Fixed a scheduling timing bug for certain time zones." }
      ]
    }
  },
  {
    version: "v2.3.2",
    date: { ar: "مارس ٢٠٢٥", en: "March 2025" },
    type: "patch",
    changes: {
      ar: [
        { type: "fix", text: "إصلاح عاجل لمشكلة إرسال الرسائل المتعددة للوسائط." },
        { type: "fix", text: "تحسين استقرار Webhook لتقليل الرسائل الضائعة." },
        { type: "improvement", text: "تحسين تجربة الإعداد الأولي للمستخدمين الجدد." }
      ],
      en: [
        { type: "fix", text: "Urgent fix for multi-media message sending issues." },
        { type: "fix", text: "Improved Webhook stability to reduce missed messages." },
        { type: "improvement", text: "Improved onboarding experience for new users." }
      ]
    }
  },
  {
    version: "v2.3.0",
    date: { ar: "فبراير ٢٠٢٥", en: "February 2025" },
    type: "minor",
    changes: {
      ar: [
        { type: "feature", text: "إطلاق بوت الرد الذكي بتقنية ChatGPT للخطط المتقدمة." },
        { type: "feature", text: "إضافة ربط مباشر مع منصة n8n للأتمتة المتقدمة." },
        { type: "improvement", text: "تحسين لوحة الإحصائيات مع رسوم بيانية تفاعلية." }
      ],
      en: [
        { type: "feature", text: "Launched AI Smart Bot powered by ChatGPT for advanced plans." },
        { type: "feature", text: "Added direct n8n integration for advanced automation." },
        { type: "improvement", text: "Enhanced analytics dashboard with interactive charts." }
      ]
    }
  },
  {
    version: "v2.0.0",
    date: { ar: "يناير ٢٠٢٥", en: "January 2025" },
    type: "major",
    changes: {
      ar: [
        { type: "feature", text: "إطلاق CloudWA 2.0 مع واجهة مستخدم مصممة من الصفر." },
        { type: "feature", text: "دعم كامل لبوابة الربط الرسمي Meta Cloud API." },
        { type: "feature", text: "لوحة تحكم موحدة تجمع بوابة الويب والربط الرسمي معاً." },
        { type: "feature", text: "دعم اللغة العربية الكامل مع RTL في جميع الصفحات." }
      ],
      en: [
        { type: "feature", text: "Launched CloudWA 2.0 with a completely redesigned interface." },
        { type: "feature", text: "Full support for the official Meta Cloud API gateway." },
        { type: "feature", text: "Unified dashboard combining Web Automation and Official API." },
        { type: "feature", text: "Full Arabic language support with RTL across all pages." }
      ]
    }
  }
];

const typeConfig = {
  major: {
    color: "bg-brand-purple text-white",
    label: { ar: "إصدار رئيسي", en: "Major Release" }
  },
  minor: {
    color: "bg-brand-green/80 text-white",
    label: { ar: "إصدار ثانوي", en: "Minor Release" }
  },
  patch: {
    color: "bg-gray-500 text-white",
    label: { ar: "تصحيح عاجل", en: "Patch" }
  }
};

const changeTypeConfig = {
  feature: { icon: <Star className="h-3.5 w-3.5" />, color: "text-brand-purple", label: { ar: "جديد", en: "New" } },
  improvement: { icon: <ArrowUp className="h-3.5 w-3.5" />, color: "text-brand-green", label: { ar: "تحسين", en: "Improved" } },
  fix: { icon: <Bug className="h-3.5 w-3.5" />, color: "text-amber-500", label: { ar: "إصلاح", en: "Fixed" } }
};

export default function Changelog({ lang }) {
  const isAr = lang === "ar";

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-gray-950 transition-theme min-h-screen">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-brand-purple/20 to-brand-green/20 text-brand-purple dark:text-brand-violet mb-6">
            <Zap className="h-7 w-7" />
          </div>
          <span className="inline-block mb-4 text-xs font-black font-outfit tracking-widest uppercase text-brand-purple dark:text-brand-violet bg-brand-purple/10 px-3 py-1 rounded-full">
            {isAr ? "سجل التحديثات" : "Changelog"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-alexandria text-gray-900 dark:text-white mb-4 leading-tight">
            {isAr ? "آخر التحديثات والمميزات الجديدة" : "Latest Updates & New Features"}
          </h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-alexandria max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? "فريقنا الهندسي يعمل باستمرار على تحسين المنصة. تابع هنا كل جديد."
              : "Our engineering team continuously improves the platform. Track every update here."}
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-10 justify-center">
          {Object.entries(changeTypeConfig).map(([key, config]) => (
            <div key={key} className={`flex items-center gap-2 text-xs font-bold font-outfit ${config.color}`}>
              {config.icon}
              <span>{config.label[isAr ? "ar" : "en"]}</span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className={`absolute top-0 bottom-0 ${isAr ? "right-5" : "left-5"} w-0.5 bg-gradient-to-b from-brand-purple via-brand-violet to-brand-green opacity-30`} />

          <div className="flex flex-col gap-12">
            {releases.map((release, i) => {
              const typeConf = typeConfig[release.type];
              const changes = release.changes[isAr ? "ar" : "en"];
              const releaseDate = release.date[isAr ? "ar" : "en"];

              return (
                <div key={i} className={`relative flex gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
                  {/* Timeline dot */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white dark:bg-gray-950 border-2 border-brand-purple/40">
                    <Zap className="h-4 w-4 text-brand-purple" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="font-black font-outfit text-xl text-gray-900 dark:text-white">{release.version}</span>
                      <span className={`text-xs font-black font-outfit px-2.5 py-1 rounded-full ${typeConf.color}`}>
                        {typeConf.label[isAr ? "ar" : "en"]}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-gray-600 font-alexandria">{releaseDate}</span>
                    </div>

                    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 p-6">
                      <div className="flex flex-col gap-3">
                        {changes.map((change, j) => {
                          const changeConf = changeTypeConfig[change.type];
                          return (
                            <div key={j} className="flex gap-3 items-start">
                              <div className={`flex items-center gap-1.5 text-[10px] font-black font-outfit shrink-0 mt-0.5 ${changeConf.color}`}>
                                {changeConf.icon}
                                <span className="hidden sm:inline">{changeConf.label[isAr ? "ar" : "en"]}</span>
                              </div>
                              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-alexandria leading-relaxed">
                                {change.text}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Subscribe to Updates CTA */}
        <div className="mt-16 text-center rounded-2xl bg-gradient-to-br from-brand-purple/10 to-brand-green/10 border border-brand-purple/20 p-8">
          <p className="font-black font-alexandria text-base text-gray-900 dark:text-white mb-2">
            {isAr ? "🔔 هل تريد أن تكون أول من يعرف؟" : "🔔 Want to be the first to know?"}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 font-alexandria mb-4">
            {isAr ? "تابع قناتنا على واتساب للحصول على إشعارات التحديثات الجديدة فور صدورها." : "Follow our WhatsApp channel for instant update notifications as soon as they ship."}
          </p>
          <a
            href="https://wa.me/201101782890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-purple hover:bg-brand-violet text-white font-bold font-alexandria text-sm px-6 py-3 rounded-2xl transition-all hover:scale-105 shadow-lg shadow-brand-purple/25"
          >
            {isAr ? "💬 اشترك في تحديثات واتساب" : "💬 Subscribe to WhatsApp Updates"}
          </a>
        </div>

      </div>
    </section>
  );
}
