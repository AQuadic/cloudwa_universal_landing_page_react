import React, { useState } from "react";
import { Check, X, ShieldAlert, Award, ChevronRight } from "lucide-react";

export default function Compare({ lang, t }) {
  const [activeCompareTab, setActiveCompareTab] = useState("official"); // 'official' or 'automation'

  const officialMetrics = [
    {
      metric: lang === "ar" ? "الاشتراك الشهري الأساسي" : "Base Monthly Subscription",
      cloudwa: lang === "ar" ? "35.00$ شهرياً" : "$35.00 / mo",
      competitors: lang === "ar" ? "49$ إلى 149$ شهرياً" : "$49 - $149 / mo",
      win: true
    },
    {
      metric: lang === "ar" ? "عمولة إضافية على أسعار Meta" : "Markup Fee on Meta Messages",
      cloudwa: lang === "ar" ? "0% (بدون أي زيادة)" : "0% (No Markup)",
      competitors: lang === "ar" ? "10% إلى 25% زيادة" : "10% - 25% Markup",
      win: true
    },
    {
      metric: lang === "ar" ? "عدد موظفي الدعم المدرجين" : "Included Team Agents",
      cloudwa: lang === "ar" ? "10 موظفين" : "10 Agents",
      competitors: lang === "ar" ? "موظفان فقط (رسوم إضافية للمزيد)" : "2 Agents (Fees for more)",
      win: true
    },
    {
      metric: lang === "ar" ? "حدود جهات الاتصال والعملاء" : "Contacts Database Limits",
      cloudwa: lang === "ar" ? "غير محدود" : "Unlimited",
      competitors: lang === "ar" ? "محدود (مثال: 5,000 كحد أقصى)" : "Limited (e.g. 5,000 max)",
      win: true
    },
    {
      metric: lang === "ar" ? "بوت رد تلقائي + ChatGPT AI" : "AI Chatbot & ChatGPT",
      cloudwa: lang === "ar" ? "مشمول مجاناً" : "Included",
      competitors: lang === "ar" ? "إضافة مدفوعة (15$ - 30$ شهرياً)" : "Paid Add-on ($15-$30/mo)",
      win: true
    },
    {
      metric: lang === "ar" ? "الدعم الفني المحلي المباشر" : "Direct Local Technical Support",
      cloudwa: lang === "ar" ? "بشري 24/7 (مهندسو أكوادك)" : "24/7 Human (Aquadic)",
      competitors: lang === "ar" ? "تذاكر بريد إلكتروني وبطيء" : "Email Tickets / Delayed",
      win: true
    },
    {
      metric: lang === "ar" ? "أنواع الرسائل التفاعلية المدعومة" : "Interactive Message Types Supported",
      cloudwa: lang === "ar" ? "كاملة (أزرار تفاعلية Buttons، عروض Carousel بالصور، ونماذج WhatsApp Flows)" : "Full (Interactive Buttons, Image Carousels, & WhatsApp Flows)",
      competitors: lang === "ar" ? "رسائل نصية أو أزرار بسيطة فقط (لا تدعم Flows أو Carousels)" : "Plain text or basic buttons only (no Flows or Carousels)",
      win: true
    },
    {
      metric: lang === "ar" ? "سرعة إرسال الحملات التسويقية" : "Campaign Broadcast Speed",
      cloudwa: lang === "ar" ? "فائقة السرعة في ثانية إلا ثانية" : "Instantaneous (split-second delivery)",
      competitors: lang === "ar" ? "محدودة وسيرفرات إرسال بطيئة" : "Rate-limited / slow sending queues",
      win: true
    }
  ];

  const automationMetrics = [
    {
      metric: lang === "ar" ? "التكلفة الشهرية (باقة Standard)" : "Monthly Equivalent Cost (Standard)",
      cloudwa: lang === "ar" ? "12.50$ (149.95$ سنوياً)" : "$12.50 ($149.95/yr)",
      competitors: lang === "ar" ? "25.00$ إلى 49.00$ شهرياً" : "$25.00 - $49.00 / month",
      win: true
    },
    {
      metric: lang === "ar" ? "قنوات واتساب المربوطة" : "Linked WhatsApp Channels",
      cloudwa: lang === "ar" ? "قناتين (رقمين)" : "2 Channels included",
      competitors: lang === "ar" ? "قناة واحدة فقط" : "1 Channel only",
      win: true
    },
    {
      metric: lang === "ar" ? "حدود الرسائل الشهرية" : "Monthly Message Limit",
      cloudwa: lang === "ar" ? "125,000 رسالة" : "125,000 Messages",
      competitors: lang === "ar" ? "10,000 إلى 30,000 رسالة" : "10,000 - 30,000 Messages",
      win: true
    },
    {
      metric: lang === "ar" ? "أدوات حماية الرقم من الحظر" : "Built-in Anti-Ban Features",
      cloudwa: lang === "ar" ? "متقدمة (بروكسي + تأخير عشوائي)" : "Advanced (Proxy + Random Delays)",
      competitors: lang === "ar" ? "بدائية أو غير متوفرة" : "Basic or None",
      win: true
    },
    {
      metric: lang === "ar" ? "جدولة رسائل وحملات لا نهائية" : "Unlimited Campaigns & Schedules",
      cloudwa: lang === "ar" ? "نعم (غير محدود)" : "Yes (Unlimited)",
      competitors: lang === "ar" ? "قيود حسب فئة الاشتراك" : "Limits based on tier",
      win: true
    },
    {
      metric: lang === "ar" ? "فريق دعم فني متحدث بالعربية" : "Arabic Speaking Support Team",
      cloudwa: lang === "ar" ? "نعم (مهندسون مصريون)" : "Yes (Egyptian Engineers)",
      competitors: lang === "ar" ? "تذاكر فقط / بالإنجليزية فقط" : "Ticket-only / English only",
      win: true
    },
    {
      metric: lang === "ar" ? "أمان وفواصل إرسال الرسائل" : "Anti-Ban Sending Protection",
      cloudwa: lang === "ar" ? "فواصل زمنية ذكية تلقائية (يساعدك فيها النظام)" : "Automatic smart intervals (system-assisted to prevent bans)",
      competitors: lang === "ar" ? "لا توجد فواصل ذكية (خطر حظر الرقم مرتفع)" : "No delay adjustments (high risk of immediate ban)",
      win: true
    }
  ];

  const currentMetrics = activeCompareTab === "official" ? officialMetrics : automationMetrics;

  return (
    <section id="compare" className="py-20 bg-gray-50/50 dark:bg-gray-900/30 transition-theme border-t border-gray-200/50 dark:border-gray-800/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black tracking-wider text-brand-purple dark:text-brand-violet uppercase font-alexandria bg-brand-purple/10 px-3.5 py-1 rounded-full">
            {lang === "ar" ? "دراسة السوق" : "Market Study"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-alexandria text-gray-900 dark:text-white mt-4 mb-4">
            {lang === "ar" ? "مقارنة تفصيلية: CloudWA ضد المنافسين" : "CloudWA vs Competitors Comparison"}
          </h2>
          <p className="text-sm sm:text-base text-gray-550 dark:text-gray-400 font-alexandria leading-relaxed">
            {lang === "ar" 
              ? "قارن بنفسك واكتشف لماذا تُعد CloudWA الخيار الأوفر والأكثر اعتمادية وملاءمة لعملك في السوقين الرسمي والاقتصادي." 
              : "See for yourself why CloudWA offers the highest features at the lowest cost in both Official and Budget segments."}
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-xl bg-gray-200/50 dark:bg-gray-900/50 p-1 border border-gray-250 dark:border-gray-800">
            <button
              onClick={() => setActiveCompareTab("official")}
              className={`rounded-lg px-5 py-2.5 text-xs font-bold font-alexandria transition-all ${
                activeCompareTab === "official"
                  ? "bg-white dark:bg-gray-850 text-emerald-600 dark:text-emerald-400 shadow-sm"
                  : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {lang === "ar" ? "الربط الرسمي مع Meta" : "Official Meta API Comparison"}
            </button>
            <button
              onClick={() => setActiveCompareTab("automation")}
              className={`rounded-lg px-5 py-2.5 text-xs font-bold font-alexandria transition-all ${
                activeCompareTab === "automation"
                  ? "bg-white dark:bg-gray-850 text-indigo-600 dark:text-indigo-400 shadow-sm"
                  : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {lang === "ar" ? "بوابة الربط الاقتصادي (الويب)" : "Web Automation API Comparison"}
            </button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-gray-950/40 overflow-hidden shadow-xl max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-start border-collapse">
              <thead>
                <tr className="bg-gray-100/50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-800">
                  <th className="p-6 text-xs sm:text-sm font-bold font-alexandria text-gray-500 dark:text-gray-400 text-start w-[40%]">
                    {lang === "ar" ? "المعيار / الميزة" : "Feature / Metric"}
                  </th>
                  <th className="p-6 text-xs sm:text-sm font-black font-alexandria text-brand-purple dark:text-brand-violet text-center w-[30%] bg-brand-purple/5">
                    CloudWA
                  </th>
                  <th className="p-6 text-xs sm:text-sm font-bold font-alexandria text-gray-600 dark:text-gray-400 text-center w-[30%]">
                    {lang === "ar" ? "المنصات المنافسة" : "Other Competitors"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentMetrics.map((item, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-150 dark:border-gray-850/80 hover:bg-gray-50/20 dark:hover:bg-gray-900/10 transition-colors"
                  >
                    {/* Metric name */}
                    <td className="p-6 text-xs sm:text-sm font-bold font-alexandria text-gray-900 dark:text-white text-start">
                      {item.metric}
                    </td>
                    
                    {/* CloudWA value */}
                    <td className="p-6 text-xs sm:text-sm font-black font-alexandria text-center bg-brand-purple/5 text-gray-950 dark:text-white">
                      <div className="flex items-center justify-center gap-1.5">
                        <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span>{item.cloudwa}</span>
                      </div>
                    </td>
                    
                    {/* Competitor value */}
                    <td className="p-6 text-xs sm:text-sm font-medium font-alexandria text-gray-600 dark:text-gray-400 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <X className="h-4 w-4 text-rose-500 shrink-0" />
                        <span>{item.competitors}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mini highlight note */}
        <div className="mt-8 text-center">
          <p className="text-xs font-semibold font-alexandria text-gray-500 dark:text-gray-450">
            {lang === "ar" 
              ? "💡 هل لاحظت؟ توفر لك باقة Standard الاقتصادية في CloudWA أكثر من 60% من تكلفة تشغيل حسابك مقارنة بالمنافسين مع دعم كامل لمطوريك."
              : "💡 Did you notice? CloudWA's Standard Web Automation plan saves you over 60% compared to typical single-channel rates."}
          </p>
        </div>

      </div>
    </section>
  );
}
