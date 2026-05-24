import React, { useState } from "react";
import { ShoppingBag, ShieldCheck, Megaphone, Users, ArrowRight, ArrowLeft } from "lucide-react";

export default function UseCases({ lang, t }) {
  const [activeUseCase, setActiveUseCase] = useState("ecommerce");

  const useCasesData = {
    ecommerce: {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: lang === "ar" ? "أتمتة التجارة الإلكترونية" : "E-commerce Automation",
      subtitle: lang === "ar" ? "ربط متجرك مع سلات الشراء وإرسال تنبيهات تلقائية" : "Connect your store to automate transactional notifications",
      desc: lang === "ar" 
        ? "اربط متجرك على Shopify أو WooCommerce أو منصتك الخاصة مباشرة بـ CloudWA. سيقوم النظام تلقائياً بإرسال تنبيهات واتساب للعميل فور إنشاء الطلب، تغيير حالة الشحن، أو تذكيره بالسلات المتروكة لزيادة مبيعاتك بنسبة تصل إلى 30%."
        : "Connect your Shopify, WooCommerce, or custom e-commerce system directly. Send automated alerts to customers when an order is created, status changes, or remind them about abandoned carts to increase recovery rates.",
      features: lang === "ar" 
        ? ["تنبيهات حالة الطلب التلقائية", "استرجاع السلات المتروكة الذكي", "إرسال الفواتير بصيغة PDF", "تكامل مباشر مع Shopify & WooCommerce"]
        : ["Automated order status alerts", "Smart abandoned cart recovery", "Direct PDF Invoice delivery", "Native Shopify & WooCommerce webhooks"]
    },
    otp: {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: lang === "ar" ? "رسائل التحقق الثنائي (OTP)" : "Two-Factor Auth (OTP)",
      subtitle: lang === "ar" ? "توثيق حسابات المستخدمين بأعلى درجات الأمان وأوفر التكاليف" : "Authenticate user accounts securely at a fraction of SMS costs",
      desc: lang === "ar"
        ? "استبدل رسائل الـ SMS مرتفعة التكلفة والضعيفة في التوصيل بأكواد توثيق فورية عبر الواتساب. CloudWA تضمن إرسال أكواد الـ OTP لعملائك لتسجيل الدخول أو إتمام الدفع بنسبة تسليم 99.9% وثبات كامل للخدمة."
        : "Swap expensive, unreliable SMS alerts for instant WhatsApp OTP codes. CloudWA ensures secure delivery of one-time login or payment authentication codes to customers with a 99.9% delivery rate and high stability.",
      features: lang === "ar"
        ? ["سرعة توصيل أقل من 3 ثوانٍ", "بديل فائق التوفير لرسائل SMS", "أمان وحماية تامة لبيانات التوثيق", "تقارير استلام فورية لأكواد OTP"]
        : ["Under 3-second delivery", "Ultra low-cost alternative to SMS", "High data security compliance", "Instant delivery reports for validation"]
    },
    marketing: {
      icon: <Megaphone className="h-6 w-6" />,
      title: lang === "ar" ? "الحملات الإعلانية والتسويق" : "Bulk Marketing & Broadcasts",
      subtitle: lang === "ar" ? "أرسل عروضك وحملاتك لآلاف العملاء دفعة واحدة بأمان" : "Launch mass notification campaigns to thousands of customers safely",
      desc: lang === "ar"
        ? "أنشئ وجدول حملات تسويقية وتنبيهية جماعية لآلاف العملاء المستهدفين دفعة واحدة. يمكنك استخدام قوالب رسائل تفاعلية تحتوي على أزرار اتصال مباشر أو روابط مواقع، مع خوارزميات لحماية حساباتك من الحظر."
        : "Build and schedule high-impact promotional broadcasts to thousands of contacts at once. Utilize interactive message templates featuring click-to-action buttons, links, or media attachments with anti-ban delay features.",
      features: lang === "ar"
        ? ["إرسال جماعي آمن ومحمي", "أزرار تفاعلية داخل الرسالة (Quick Reply)", "جدولة الحملات للأوقات المناسبة", "تقارير أداء لمعرفة التفاعل والقرّاء"]
        : ["Anti-ban spacing and delays", "Interactive Quick Reply buttons", "Schedule campaigns in advance", "Rich analytics for open and click-through rates"]
    },
    support: {
      icon: <Users className="h-6 w-6" />,
      title: lang === "ar" ? "صندوق وارد مشترك وفريق دعم" : "Shared Team Inbox & Support",
      subtitle: lang === "ar" ? "أدر محادثات عملائك مع فريق عملك بالكامل من شاشة واحدة" : "Manage customer responses with your entire team from one window",
      desc: lang === "ar"
        ? "لا تشتت فريق مبيعاتك. مع CloudWA، يمكن لـ 10 موظفين العمل في نفس الوقت على حساب واتساب واحد، مع توزيع تلقائي للمحادثات، بالإضافة لبوت رد ذكي مدعوم بالذكاء الاصطناعي (ChatGPT) يعمل 24/7."
        : "Consolidate customer care. Connect up to 10 agents to handle customer chats from a single shared inbox simultaneously. Empower agents with private notes, auto-assignment, and ChatGPT-backed auto replies.",
      features: lang === "ar"
        ? ["توزيع ذكي للمحادثات على الموظفين", "شاشة شات موحدة لكل الفريق", "مساعد ذكي AI للرد 24/7", "إحصائيات أداء الموظفين وسرعة الرد"]
        : ["Smart automated agent assignment", "Unified chat screen for team alignment", "24/7 ChatGPT AI agent auto-replies", "Agent response speed analytics"]
    }
  };

  const useCasesList = [
    { id: "ecommerce", label: lang === "ar" ? "التجارة الإلكترونية" : "E-Commerce", icon: <ShoppingBag className="h-4 w-4" /> },
    { id: "otp", label: lang === "ar" ? "أكواد OTP للتوثيق" : "Secure OTP", icon: <ShieldCheck className="h-4 w-4" /> },
    { id: "marketing", label: lang === "ar" ? "حملات تسويقية" : "Broadcasts", icon: <Megaphone className="h-4 w-4" /> },
    { id: "support", label: lang === "ar" ? "صندوق دعم مشترك" : "Team Inbox", icon: <Users className="h-4 w-4" /> }
  ];

  const currentUseCase = useCasesData[activeUseCase];

  return (
    <section id="use-cases-list" className="py-20 bg-white dark:bg-gray-950 transition-theme border-t border-gray-250/50 dark:border-gray-800/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="use-cases">
          <span className="text-xs font-black tracking-wider text-brand-purple dark:text-brand-violet uppercase font-alexandria bg-brand-purple/10 px-3.5 py-1 rounded-full">
            {lang === "ar" ? "حالات التشغيل" : "Interactive Use Cases"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-alexandria text-gray-900 dark:text-white mt-4 mb-4">
            {lang === "ar" ? "كيف تساعد CloudWA عملك على النمو؟" : "How Does CloudWA Grow Your Business?"}
          </h2>
          <p className="text-sm sm:text-base text-gray-550 dark:text-gray-400 font-alexandria leading-relaxed">
            {lang === "ar" 
              ? "حلول وربط تقني مخصص يناسب مختلف الصناعات والمهام لرفع نسبة المبيعات وتأكيد العمليات بذكاء وسرعة."
              : "Bespoke tech integrations tailored to various industries, aimed at accelerating conversions and automating alerts."}
          </p>
        </div>

        {/* Use case tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {useCasesList.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveUseCase(item.id)}
              className={`flex items-center gap-2 rounded-xl border px-5 py-3 text-xs sm:text-sm font-bold font-alexandria transition-all ${
                activeUseCase === item.id
                  ? "bg-brand-purple/10 border-brand-purple text-brand-purple dark:text-brand-violet scale-[1.01]"
                  : "border-gray-200 dark:border-gray-800 text-gray-650 dark:text-gray-450 bg-white/40 dark:bg-gray-950/40 hover:bg-gray-50 dark:hover:bg-gray-900"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Tabs Content Display */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 shadow-xl max-w-5xl mx-auto grid md:grid-cols-12 gap-8 items-center">
          
          {/* Left Details column */}
          <div className="md:col-span-7 flex flex-col gap-6 text-start">
            <div className="h-12 w-12 rounded-xl bg-brand-purple/10 text-brand-purple dark:text-brand-violet flex items-center justify-center shadow-sm">
              {currentUseCase.icon}
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black font-alexandria text-gray-900 dark:text-white mb-2">
                {currentUseCase.title}
              </h3>
              <p className="text-xs sm:text-sm font-bold font-alexandria text-brand-purple dark:text-brand-violet">
                {currentUseCase.subtitle}
              </p>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-350 leading-relaxed font-alexandria font-normal">
              {currentUseCase.desc}
            </p>
            
            {/* Features checkmarks list */}
            <div className="grid sm:grid-cols-2 gap-3 mt-2">
              {currentUseCase.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold font-alexandria text-gray-700 dark:text-gray-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-purple dark:bg-brand-violet shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual mock / CTA column */}
          <div className="md:col-span-5 flex flex-col gap-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 p-6 shadow-inner text-center md:text-start justify-center min-h-[250px]">
            <h4 className="text-sm font-black font-alexandria text-gray-900 dark:text-white">
              {lang === "ar" ? "جاهز للبدء الآن؟" : "Ready to Implement?"}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-alexandria leading-relaxed">
              {lang === "ar"
                ? "اربط متجرك أو موقعك بنظام CloudWA خلال دقائق واختبر الخدمة مجاناً طوال الأسبوع."
                : "Connect your web platform with CloudWA in minutes and enjoy our 7-day free trial."}
            </p>
            <a
              href="#pricing"
              className="flex items-center justify-center gap-2 rounded-xl bg-brand-purple hover:bg-brand-purple/90 text-white font-bold font-alexandria text-xs py-3.5 shadow-md shadow-brand-purple/10 hover:shadow-lg hover:scale-[1.01] transition-all"
            >
              <span>{lang === "ar" ? "ابدأ تجربتك المجانية" : "Start Free Trial"}</span>
              {lang === "ar" ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
