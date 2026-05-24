import React from "react";
import { Quote, Sparkles, TrendingUp, Users, ShieldCheck } from "lucide-react";

export default function Customers({ lang }) {
  const isAr = lang === "ar";

  const stats = [
    { value: "+30%", label: isAr ? "زيادة في استرجاع السلات المتروكة" : "Increase in cart recovery", icon: <TrendingUp className="h-5 w-5 text-emerald-500" /> },
    { value: "+15M", label: isAr ? "رسالة يتم إرسالها شهرياً" : "Messages sent monthly", icon: <Sparkles className="h-5 w-5 text-indigo-500" /> },
    { value: "+450", label: isAr ? "علامة تجارية تعتمد علينا" : "Active brands trusting us", icon: <Users className="h-5 w-5 text-brand-purple" /> }
  ];

  const stories = [
    {
      title: isAr ? "متجر زينة للملابس الجاهزة" : "Zeina Fashion Store",
      industry: isAr ? "تجارة إلكترونية" : "E-Commerce",
      challenge: isAr 
        ? "كان المتجر يعاني من حظر متكرر للأرقام بسبب استخدام أدوات إرسال عشوائية غير معتمدة، مما أدى لخسارة آلاف محادثات العملاء."
        : "Faced frequent WhatsApp number bans using standard web scripts, losing valuable client chat histories and sales leads.",
      solution: isAr
        ? "الانتقال إلى بوابة CloudWA الرسمية (Meta API) وتفعيل ربط WooCommerce التلقائي لتنبيهات الطلبات."
        : "Migrated to CloudWA Meta Official API and integrated native WooCommerce checkout webhook automation.",
      result: isAr
        ? "نسبة حظر 0%، وزيادة في نسبة استرداد السلات المتروكة بمقدار 28% في أول شهرين."
        : "0% ban rate achieved, and a 28% increase in abandoned cart recovery in the first 60 days.",
      metric: "28% Cart Recovery"
    },
    {
      title: isAr ? "مجمع عيادات الشفاء الطبي" : "Al-Shifa Medical Center",
      industry: isAr ? "الرعاية الصحية" : "Healthcare & Clinics",
      challenge: isAr
        ? "صعوبة استقبال حجوزات المرضى على رقم واتساب واحد بموظف واحد فقط، مما سبب تأخراً كبيراً في الردود."
        : "Inability to handle patient bookings concurrently on a single WhatsApp number, causing delayed responses.",
      solution: isAr
        ? "استخدام باقة CloudWA الرسمية الموحدة لربط 10 موظفين دعم في نفس الوقت على شاشة محادثة واحدة."
        : "Deployed CloudWA shared inbox to allow 10 medical reception agents to respond simultaneously.",
      result: isAr
        ? "تقليل زمن الانتظار والرد من ساعة كاملة إلى أقل من دقيقتين للمريض."
        : "Reduced customer response wait times from 1 hour down to less than 2 minutes on average.",
      metric: "< 2 Mins Reply Time"
    },
    {
      title: isAr ? "منصة طلبات للتوصيل" : "Talabat Local Delivery",
      industry: isAr ? "الخدمات اللوجستية" : "Logistics & Delivery App",
      challenge: isAr
        ? "التكلفة الباهظة لرسائل التوثيق الثنائي (SMS OTP) للتحقق من هوية السائقين والعملاء الجدد."
        : "Extremely high costs of SMS gateways for sending OTP validation codes to drivers and users.",
      solution: isAr
        ? "ربط بوابة الويب الاقتصادية (QR Web API) من CloudWA وأتمتة إرسال رسائل التحقق عبر الواتساب."
        : "Connected CloudWA's budget-friendly Web Automation API to dispatch OTP verification codes via WhatsApp.",
      result: isAr
        ? "توفير أكثر من 70% من ميزانية رسائل التوثيق الثنائي الشهرية مع سرعة وصول فائقة."
        : "Saved over 70% on monthly verification budgets with immediate delivery times.",
      metric: "70% Budget Saved"
    }
  ];

  return (
    <div className="py-12 transition-theme min-h-[60vh]">
      
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-black tracking-wider text-brand-purple dark:text-brand-violet uppercase font-alexandria bg-brand-purple/10 px-3.5 py-1 rounded-full">
          {isAr ? "شركاء النجاح" : "Success Metrics"}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black font-alexandria text-gray-900 dark:text-white mt-4 mb-4 leading-tight">
          {isAr ? "كيف قمنا بتطوير أعمال عملائنا؟" : "Real Growth Stories from CloudWA Clients"}
        </h1>
        <p className="text-sm sm:text-base text-gray-550 dark:text-gray-400 font-alexandria leading-relaxed">
          {isAr 
            ? "نحن لا نبيع اشتراكات، بل نبني نجاحات حقيقية ونساعد المتاجر والشركات على توسيع آفاق تواصلها بأمان وتكلفة عادلة."
            : "We empower businesses to scale their outreach safely, lower their costs, and convert support into revenue."}
        </p>
      </div>

      {/* KPI Stats cards */}
      <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-gray-900/40 p-6 text-center flex flex-col items-center justify-center gap-2 shadow-sm"
          >
            <div className="h-10 w-10 rounded-xl bg-gray-100 dark:bg-gray-850 flex items-center justify-center mb-2">
              {stat.icon}
            </div>
            <span className="text-3xl sm:text-4xl font-black font-outfit text-gray-950 dark:text-white">
              {stat.value}
            </span>
            <span className="text-xs font-bold font-alexandria text-gray-500 dark:text-gray-400">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Success Stories Cards Grid */}
      <div className="flex flex-col gap-10 max-w-5xl mx-auto">
        {stories.map((story, idx) => (
          <div
            key={idx}
            className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-gray-900/40 p-8 sm:p-10 shadow-lg flex flex-col md:flex-row gap-8 items-center relative overflow-hidden"
          >
            {/* Visual badge highlight */}
            <div className="absolute top-0 right-0 h-20 w-20 bg-brand-purple/5 rounded-bl-full pointer-events-none" />
            
            {/* Details content */}
            <div className="flex-1 flex flex-col gap-4 text-start">
              <div className="flex items-center gap-3">
                <span className="text-xs font-black font-alexandria text-brand-purple dark:text-brand-violet bg-brand-purple/10 px-3 py-1 rounded-full">
                  {story.industry}
                </span>
                <span className="text-xs font-bold font-outfit text-gray-400">Case Study</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-black font-alexandria text-gray-900 dark:text-white">
                {story.title}
              </h3>

              {/* Challenge vs Solution */}
              <div className="grid sm:grid-cols-2 gap-6 mt-2">
                <div className="rounded-xl bg-rose-500/5 border border-rose-500/10 p-4">
                  <span className="text-xs font-black font-alexandria text-rose-500 block mb-1">
                    {isAr ? "❌ التحدي والمشكلة:" : "❌ The Challenge:"}
                  </span>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-alexandria leading-relaxed">
                    {story.challenge}
                  </p>
                </div>
                <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/10 p-4">
                  <span className="text-xs font-black font-alexandria text-emerald-500 block mb-1">
                    {isAr ? "✅ طريقة الحل بـ CloudWA:" : "✅ CloudWA Solution:"}
                  </span>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-alexandria leading-relaxed">
                    {story.solution}
                  </p>
                </div>
              </div>

              {/* Action output result */}
              <div className="mt-2 text-xs sm:text-sm font-semibold font-alexandria text-gray-700 dark:text-gray-300">
                <span className="font-bold text-gray-950 dark:text-white mr-1">{isAr ? "📊 النتيجة النهائية:" : "📊 Final Result:"}</span>
                {story.result}
              </div>
            </div>

            {/* Metric highlight box */}
            <div className="w-full md:w-56 shrink-0 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-violet text-white p-6 text-center shadow-md">
              <span className="text-[10px] font-bold uppercase tracking-wider block mb-2 opacity-80 font-alexandria">
                {isAr ? "أبرز أرقام النجاح" : "Key Metric Saved"}
              </span>
              <span className="text-2xl font-black font-alexandria block leading-tight">
                {story.metric}
              </span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
