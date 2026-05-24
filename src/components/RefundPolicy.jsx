import React from "react";
import { RefreshCcw, CheckCircle, XCircle, Clock, AlertTriangle } from "lucide-react";

const content = {
  ar: {
    title: "سياسة الاسترداد والإلغاء",
    subtitle: "نؤمن بالشفافية الكاملة. هذه هي سياستنا الواضحة والعادلة لاسترداد المبالغ.",
    lastUpdated: "آخر تحديث: مايو ٢٠٢٥",
    notice: "نهدف دائماً إلى رضا عملائنا الكامل. إذا لم تكن راضياً عن الخدمة لأي سبب، فريقنا جاهز للمساعدة وإيجاد حل يناسبك قبل اللجوء إلى الاسترداد.",
    eligible: {
      title: "✅ حالات يحق فيها الاسترداد",
      items: [
        "طلب الاسترداد خلال 7 أيام من تاريخ الاشتراك الأول دون استخدام الخدمة.",
        "حدوث عطل تقني من جانبنا أدى إلى عدم تمكنك من الوصول للخدمة لأكثر من 72 ساعة.",
        "تكرار الفوترة بشكل خاطئ (Double charge) نتيجة خطأ في النظام.",
        "إلغاء الخدمة من قِبَل CloudWA بدون سبب يتعلق بانتهاك الشروط."
      ]
    },
    notEligible: {
      title: "❌ حالات لا يحق فيها الاسترداد",
      items: [
        "مرور أكثر من 7 أيام على الاشتراك بغض النظر عن الاستخدام.",
        "إرسال أي رسائل عبر المنصة — حتى ولو رسالة واحدة.",
        "إتمام عملية ربط الرقم الرسمي بمنصة Meta (رسوم الإعداد).",
        "إلغاء الاشتراك بسبب انتهاك سياسات الاستخدام المقبول.",
        "تغيير رأيك أو تغيير خطتك التجارية بعد بدء الاستخدام.",
        "اشتراكات الباقات السنوية بعد مرور فترة التجربة الأولى."
      ]
    },
    timeline: {
      title: "⏱ الجدول الزمني للاسترداد",
      items: [
        { label: "تقديم طلب الاسترداد", desc: "تواصل مع فريق الدعم عبر واتساب أو البريد الإلكتروني" },
        { label: "مراجعة الطلب", desc: "يستغرق الفريق 2-3 أيام عمل لمراجعة طلبك والتحقق منه" },
        { label: "إشعار القرار", desc: "ستتلقى إشعاراً بقرار الطلب عبر البريد الإلكتروني المسجل" },
        { label: "تنفيذ الاسترداد", desc: "يُعالج الاسترداد المعتمد خلال 5-10 أيام عمل عبر وسيلة الدفع الأصلية" }
      ]
    },
    partialRefund: {
      title: "🔄 الاسترداد الجزئي",
      desc: "في بعض الحالات الاستثنائية، قد يُقرر فريقنا استرداداً جزئياً يُحسب على أساس الجزء غير المستخدم من الاشتراك. يخضع هذا التقدير للفريق الفني بشكل كامل."
    },
    contact: {
      title: "📞 كيف تطلب الاسترداد؟",
      desc: "تواصل معنا عبر الطرق التالية مع ذكر رقم الاشتراك وسبب طلب الاسترداد:",
      methods: [
        { icon: "💬", label: "واتساب", value: "+201101782890" },
        { icon: "📧", label: "البريد الإلكتروني", value: "support@cloudwa.net" }
      ]
    }
  },
  en: {
    title: "Refund & Cancellation Policy",
    subtitle: "We believe in full transparency. Here is our clear and fair refund policy.",
    lastUpdated: "Last updated: May 2025",
    notice: "We always aim for complete customer satisfaction. If you are dissatisfied for any reason, our team is ready to help find a solution before resorting to a refund.",
    eligible: {
      title: "✅ Eligible for Refund",
      items: [
        "Refund requested within 7 days of first subscription without using the service.",
        "Technical failure on our end preventing access for more than 72 hours.",
        "Duplicate/erroneous billing due to a system error.",
        "Service cancellation initiated by CloudWA without a terms violation cause."
      ]
    },
    notEligible: {
      title: "❌ Not Eligible for Refund",
      items: [
        "More than 7 days have passed since subscription regardless of usage.",
        "Any messages were sent through the platform — even a single one.",
        "Official Meta number registration has been completed (setup fees).",
        "Account cancellation due to violations of acceptable use policies.",
        "Change of mind or business strategy after usage has begun.",
        "Annual plan subscriptions after the initial trial period."
      ]
    },
    timeline: {
      title: "⏱ Refund Timeline",
      items: [
        { label: "Submit Refund Request", desc: "Contact our support team via WhatsApp or email" },
        { label: "Request Review", desc: "Our team takes 2-3 business days to review and verify your request" },
        { label: "Decision Notification", desc: "You will receive a decision notification to your registered email" },
        { label: "Refund Processing", desc: "Approved refunds are processed within 5-10 business days via the original payment method" }
      ]
    },
    partialRefund: {
      title: "🔄 Partial Refund",
      desc: "In exceptional cases, our team may approve a partial refund calculated based on the unused portion of the subscription. This is at the full discretion of our technical team."
    },
    contact: {
      title: "📞 How to Request a Refund?",
      desc: "Contact us through the following channels with your subscription number and reason for the refund request:",
      methods: [
        { icon: "💬", label: "WhatsApp", value: "+201101782890" },
        { icon: "📧", label: "Email", value: "support@cloudwa.net" }
      ]
    }
  }
};

export default function RefundPolicy({ lang }) {
  const c = content[lang] || content.en;
  const isAr = lang === "ar";

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-gray-950 transition-theme min-h-screen">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-brand-purple/20 to-brand-green/20 text-brand-purple dark:text-brand-violet mb-6">
            <RefreshCcw className="h-7 w-7" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-alexandria text-gray-900 dark:text-white mb-4 leading-tight">
            {c.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-alexandria max-w-2xl mx-auto leading-relaxed">
            {c.subtitle}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full px-4 py-2">
            <Clock className="h-3 w-3 text-gray-400" />
            <span className="text-xs font-bold font-alexandria text-gray-500 dark:text-gray-400">{c.lastUpdated}</span>
          </div>
        </div>

        {/* Customer Notice */}
        <div className="rounded-2xl bg-gradient-to-br from-brand-purple/10 via-brand-violet/5 to-brand-green/10 border border-brand-purple/20 p-6 mb-10">
          <p className="text-xs sm:text-sm font-alexandria text-gray-700 dark:text-gray-300 leading-relaxed text-center">
            💜 {c.notice}
          </p>
        </div>

        {/* Eligible / Not Eligible Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Eligible */}
          <div className="rounded-2xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/50 dark:bg-emerald-950/20 p-6">
            <h2 className="font-black font-alexandria text-sm sm:text-base text-emerald-800 dark:text-emerald-300 mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 shrink-0" />
              {c.eligible.title.replace("✅ ", "")}
            </h2>
            <ul className="flex flex-col gap-3">
              {c.eligible.items.map((item, i) => (
                <li key={i} className="flex gap-2.5 text-xs sm:text-sm text-emerald-700 dark:text-emerald-400 font-alexandria leading-relaxed">
                  <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not Eligible */}
          <div className="rounded-2xl border border-rose-200 dark:border-rose-900/50 bg-rose-50/50 dark:bg-rose-950/20 p-6">
            <h2 className="font-black font-alexandria text-sm sm:text-base text-rose-800 dark:text-rose-300 mb-4 flex items-center gap-2">
              <XCircle className="h-5 w-5 shrink-0" />
              {c.notEligible.title.replace("❌ ", "")}
            </h2>
            <ul className="flex flex-col gap-3">
              {c.notEligible.items.map((item, i) => (
                <li key={i} className="flex gap-2.5 text-xs sm:text-sm text-rose-700 dark:text-rose-400 font-alexandria leading-relaxed">
                  <span className="text-rose-500 mt-0.5 shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Timeline */}
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 p-8 mb-8">
          <h2 className="font-black font-alexandria text-base sm:text-lg text-gray-900 dark:text-white mb-8">
            {c.timeline.title}
          </h2>
          <div className="relative">
            {/* Connecting Line */}
            <div className={`absolute top-5 ${isAr ? "right-5" : "left-5"} bottom-5 w-0.5 bg-gradient-to-b from-brand-purple to-brand-green`} />
            <div className="flex flex-col gap-8">
              {c.timeline.items.map((step, i) => (
                <div key={i} className={`flex gap-6 items-start ${isAr ? "flex-row-reverse" : ""}`}>
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-brand-purple to-brand-green text-white font-black text-sm font-outfit">
                    {i + 1}
                  </div>
                  <div className="pt-1.5">
                    <p className="font-bold font-alexandria text-sm text-gray-900 dark:text-white mb-1">{step.label}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-alexandria leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partial Refund Note */}
        <div className="rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 p-5 mb-8 flex gap-4">
          <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold font-alexandria text-sm text-amber-800 dark:text-amber-300 mb-1">{c.partialRefund.title.replace("🔄 ", "")}</p>
            <p className="text-xs text-amber-700 dark:text-amber-400 font-alexandria leading-relaxed">{c.partialRefund.desc}</p>
          </div>
        </div>

        {/* Contact */}
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 p-8 text-center">
          <h2 className="font-black font-alexandria text-base sm:text-lg text-gray-900 dark:text-white mb-3">{c.contact.title.replace("📞 ", "")}</h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-alexandria mb-6">{c.contact.desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {c.contact.methods.map((method, i) => (
              <a
                key={i}
                href={i === 0 ? "https://wa.me/201101782890" : "mailto:support@cloudwa.net"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:bg-brand-purple hover:text-white hover:border-brand-purple transition-all duration-300 font-bold font-alexandria text-sm text-gray-700 dark:text-gray-300 hover:scale-105"
              >
                <span>{method.icon}</span>
                <span>{method.label}: {method.value}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
