import React, { useState } from "react";
import { ScrollText, ChevronDown, ChevronUp, AlertTriangle } from "lucide-react";

const sections = {
  ar: [
    {
      title: "١. القبول والموافقة",
      content: `باستخدامك لمنصة CloudWA أو التسجيل فيها، فإنك تؤكد موافقتك الكاملة على هذه الشروط والأحكام. إذا كنت لا توافق على أي بند من هذه الشروط، يرجى التوقف عن استخدام المنصة فوراً.

تسري هذه الشروط على جميع المستخدمين، الأفراد والشركات، الذين يصلون إلى خدمات CloudWA المقدمة من شركة أكوادك للبرمجيات.`
    },
    {
      title: "٢. وصف الخدمة",
      content: `تقدم CloudWA المنتجات والخدمات التالية:

• **بوابة الربط الرسمي (Meta Cloud API)**: ربط WhatsApp Business عبر واجهة برمجية رسمية معتمدة من Meta.
• **بوابة الربط الاقتصادي (Web API)**: أداة أتمتة للتواصل عبر WhatsApp Web للمطورين والشركات الناشئة.
• **لوحة التحكم الموحدة**: واجهة مركزية لإدارة الرسائل، الحملات، والأتمتة.
• **خدمات الدعم الفني**: دعم مباشر من مهندسي شركة أكوادك.

الشركة تحتفظ بحق تعديل أو وقف أي جزء من الخدمة في أي وقت مع إخطار مسبق.`
    },
    {
      title: "٣. الاستخدام المقبول والمحظور",
      content: `**مسموح به:**
• استخدام الخدمة لأغراض تجارية مشروعة وقانونية.
• إرسال الرسائل التسويقية للمستخدمين الذين وافقوا على الاستلام.
• تطوير تطبيقات تجارية تعتمد على واجهة برمجة التطبيقات.

**محظور تماماً:**
• إرسال رسائل غير مرغوب فيها (Spam) أو التواصل مع أشخاص لم يوافقوا.
• انتهاك سياسات استخدام WhatsApp Business وMeta.
• أي نشاط احتيالي، تضليلي، أو يخالف القانون.
• محاولة اختراق أو إضعاف أنظمة المنصة.
• مشاركة بيانات الاعتماد مع أطراف غير مصرح لها.

انتهاك هذه الشروط يُعرض حسابك للتعليق الفوري.`
    },
    {
      title: "٤. الاشتراكات والفوترة",
      content: `• تُحتسب رسوم الاشتراك مقدماً على أساس شهري أو سنوي حسب الخطة المختارة.
• تُجدد الاشتراكات تلقائياً ما لم يتم إلغاؤها قبل نهاية الفترة الحالية بـ 48 ساعة على الأقل.
• رسوم رسائل Meta الرسمية تُحتسب بشكل منفصل وفق قوائم الأسعار الرسمية لـ Meta.
• الأسعار مقومة بالدولار الأمريكي (USD) وقد تخضع لضريبة القيمة المضافة وفق التشريعات المحلية.
• لا يحق للمستخدم المطالبة بأي استرداد إلا وفق سياسة الاسترداد المعلنة.`
    },
    {
      title: "٥. سياسة الاسترداد",
      content: `• يمكن طلب استرداد كامل خلال 7 أيام من تاريخ الاشتراك الأول إذا لم تُستخدم الخدمة.
• لا يحق الاسترداد بعد مرور 7 أيام أو بعد إرسال أي رسائل عبر المنصة.
• رسوم ربط الرقم بمنصة Meta لا تُسترد بعد إتمام عملية الربط الرسمي.
• يُعالج الاسترداد خلال 5-10 أيام عمل عبر وسيلة الدفع الأصلية.
• للاطلاع على التفاصيل الكاملة، راجع صفحة "سياسة الاسترداد" المنفصلة.`
    },
    {
      title: "٦. الملكية الفكرية",
      content: `• جميع العلامات التجارية، الشعارات، واسم "CloudWA" هي ملكية خالصة لشركة أكوادك للبرمجيات.
• كود المصدر، التصاميم، وواجهة برمجة التطبيقات محمية بحقوق الملكية الفكرية.
• لا يُمنح المستخدم أي حق في نسخ أو توزيع أو إعادة استخدام أصول المنصة.
• المحتوى الذي ينتجه المستخدم عبر المنصة يبقى ملكاً له مع منح الشركة حق استخدامه لتحسين الخدمة.`
    },
    {
      title: "٧. إخلاء المسؤولية وتحديد الالتزام",
      content: `• CloudWA ليست شركة تابعة لـ Meta Platforms Inc. بشكل مباشر. WhatsApp علامة تجارية مسجلة لـ Meta.
• الشركة غير مسؤولة عن أي أضرار ناجمة عن قرارات Meta بشأن حظر الأرقام أو تقييد الحسابات.
• الحد الأقصى لمسؤولية الشركة يُقيد بمبلغ الاشتراك المدفوع في الشهر الأخير.
• الشركة لا تضمن توفر الخدمة 100% من الوقت، وتسعى لمعدل uptime لا يقل عن 99.5%.
• المستخدم مسؤول مسؤولية كاملة عن المحتوى الذي يرسله عبر المنصة.`
    },
    {
      title: "٨. إنهاء الخدمة والتعليق",
      content: `تحتفظ الشركة بحق:

• تعليق حسابك فوراً في حال انتهاك هذه الشروط.
• إنهاء الخدمة مع إشعار مسبق لا يقل عن 30 يوماً في حالات غير طارئة.
• إنهاء الاشتراك تلقائياً في حالة فشل تجديد الدفع المتكرر.

يحق للمستخدم إنهاء اشتراكه في أي وقت عبر لوحة التحكم أو من خلال التواصل مع الدعم الفني.`
    },
    {
      title: "٩. القانون المنطبق وتسوية النزاعات",
      content: `• تخضع هذه الشروط وتفسر وفقاً للقانون المصري المعمول به.
• أي نزاع ينشأ يُحال أولاً إلى مفاوضات ودية بين الطرفين لمدة 30 يوماً.
• في حال تعذر التسوية الودية، يُحال النزاع إلى التحكيم وفق الإجراءات القانونية المعتمدة.
• اللغة الرسمية للنزاعات هي اللغة العربية، مع الأخذ بالنسخة الإنجليزية عند الاقتضاء.`
    },
    {
      title: "١٠. التحديثات والتعديلات",
      content: `نحتفظ بحق تعديل هذه الشروط في أي وقت. سيتم إخطارك بأي تعديلات جوهرية عبر البريد الإلكتروني المسجل أو إشعار داخلي في لوحة التحكم قبل 30 يوماً من تطبيقها. استمرارك في استخدام المنصة بعد التعديل يُعد موافقة ضمنية على الشروط المحدثة.`
    }
  ],
  en: [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing or using the CloudWA platform, you confirm your full agreement to these Terms and Conditions. If you do not agree with any provision herein, please discontinue use of the platform immediately.

These terms apply to all users — individuals and businesses — accessing CloudWA services provided by Aquadic Software.`
    },
    {
      title: "2. Service Description",
      content: `CloudWA provides the following products and services:

• **Official Meta API Gateway**: WhatsApp Business connection via Meta-certified official API.
• **Web Automation API Gateway**: A WhatsApp Web automation tool for developers and startups.
• **Unified Dashboard**: A centralized interface for managing messages, campaigns, and automation.
• **Technical Support**: Direct support from Aquadic engineers.

The company reserves the right to modify or suspend any part of the service at any time with prior notice.`
    },
    {
      title: "3. Acceptable & Prohibited Use",
      content: `**Permitted:**
• Using the service for legitimate and lawful commercial purposes.
• Sending marketing messages to users who have consented to receive them.
• Developing commercial applications using the API.

**Strictly Prohibited:**
• Sending unsolicited messages (spam) or contacting individuals without consent.
• Violating WhatsApp Business or Meta platform policies.
• Any fraudulent, misleading, or unlawful activity.
• Attempting to breach or compromise platform systems.
• Sharing credentials with unauthorized third parties.

Violating these terms may result in immediate account suspension.`
    },
    {
      title: "4. Subscriptions & Billing",
      content: `• Subscription fees are charged in advance on a monthly or annual basis per your selected plan.
• Subscriptions auto-renew unless cancelled at least 48 hours before the end of the current billing period.
• Meta official message fees are charged separately according to Meta's official rate cards.
• Prices are in USD and may be subject to applicable local VAT/taxes.
• Refunds are only available per our published Refund Policy.`
    },
    {
      title: "5. Refund Policy",
      content: `• A full refund may be requested within 7 days of initial subscription if the service was not used.
• No refunds are available after 7 days or after any messages have been sent via the platform.
• Meta account setup and verification fees are non-refundable after completion.
• Refunds are processed within 5-10 business days via the original payment method.
• Please refer to our separate "Refund Policy" page for full details.`
    },
    {
      title: "6. Intellectual Property",
      content: `• All trademarks, logos, and the "CloudWA" name are the exclusive property of Aquadic Software.
• Source code, designs, and API interfaces are protected by intellectual property rights.
• No rights are granted to users to copy, distribute, or reuse platform assets.
• Content generated by users through the platform remains their property, with a limited license granted to CloudWA for service improvement purposes.`
    },
    {
      title: "7. Disclaimer & Limitation of Liability",
      content: `• CloudWA is not directly affiliated with Meta Platforms Inc. WhatsApp is a registered trademark of Meta.
• The company is not liable for damages resulting from Meta's decisions regarding number bans or account restrictions.
• Maximum company liability is limited to the subscription fee paid in the last one month.
• The company does not guarantee 100% uptime but strives for at least 99.5% availability.
• Users bear full responsibility for all content sent through the platform.`
    },
    {
      title: "8. Termination & Suspension",
      content: `The company reserves the right to:

• Immediately suspend your account in case of terms violation.
• Terminate service with at least 30 days prior notice in non-emergency cases.
• Automatically cancel subscriptions following repeated payment renewal failures.

Users may cancel their subscription at any time via the dashboard or by contacting support.`
    },
    {
      title: "9. Governing Law & Dispute Resolution",
      content: `• These terms are governed by and interpreted in accordance with Egyptian law.
• Any arising dispute shall first be referred to good-faith negotiations for 30 days.
• If amicable resolution fails, the dispute shall be referred to arbitration per applicable legal procedures.
• The official language of dispute resolution is Arabic, with English versions used as supplementary reference.`
    },
    {
      title: "10. Updates & Amendments",
      content: `We reserve the right to update these terms at any time. You will be notified of any material changes via your registered email or an in-dashboard notification at least 30 days before the changes take effect. Continued use of the platform after an amendment constitutes implicit acceptance of the updated terms.`
    }
  ]
};

function SectionCard({ section, idx }) {
  const [open, setOpen] = useState(idx === 0);

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm overflow-hidden transition-all duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-start font-bold font-alexandria text-gray-900 dark:text-white hover:bg-gray-50/50 dark:hover:bg-gray-850/50 transition-colors"
      >
        <span className="text-sm sm:text-base flex-1">{section.title}</span>
        {open ? (
          <ChevronUp className="h-5 w-5 text-brand-purple shrink-0 ml-4" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-400 shrink-0 ml-4" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-6 border-t border-gray-100 dark:border-gray-800/80 pt-4">
          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-350 font-alexandria leading-loose">
            {section.content.split('\n').map((line, i) => {
              if (line.startsWith('• **')) {
                const parts = line.replace('• **', '').split('**:');
                return (
                  <p key={i} className="mb-2 flex gap-2">
                    <span className="text-brand-purple mt-0.5 shrink-0">•</span>
                    <span><strong className="text-gray-800 dark:text-gray-200">{parts[0]}</strong>:{parts[1]}</span>
                  </p>
                );
              }
              if (line.startsWith('• ')) {
                return (
                  <p key={i} className="mb-2 flex gap-2">
                    <span className="text-brand-purple mt-0.5 shrink-0">•</span>
                    <span>{line.slice(2)}</span>
                  </p>
                );
              }
              if (line.startsWith('**') && line.endsWith('**')) {
                return <p key={i} className="font-bold text-gray-800 dark:text-gray-200 mt-3 mb-1">{line.replace(/\*\*/g, '')}</p>;
              }
              if (line.trim() === '') return <div key={i} className="h-2" />;
              return <p key={i} className="mb-2">{line}</p>;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function TermsConditions({ lang }) {
  const content = sections[lang] || sections.en;
  const isAr = lang === "ar";

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-gray-950 transition-theme min-h-screen">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-brand-purple/20 to-brand-green/20 text-brand-purple dark:text-brand-violet mb-6">
            <ScrollText className="h-7 w-7" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-alexandria text-gray-900 dark:text-white mb-4 leading-tight">
            {isAr ? "الشروط والأحكام" : "Terms & Conditions"}
          </h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-alexandria max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? "يُرجى قراءة هذه الشروط بعناية قبل استخدام منصة CloudWA. استخدامك للمنصة يعني موافقتك الكاملة."
              : "Please read these terms carefully before using the CloudWA platform. Using the platform implies your full agreement."}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-brand-green animate-pulse" />
            <span className="text-xs font-bold font-alexandria text-gray-500 dark:text-gray-400">
              {isAr ? "آخر تحديث: مايو ٢٠٢٥" : "Last updated: May 2025"}
            </span>
          </div>
        </div>

        {/* Important Notice */}
        <div className="rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 p-5 mb-8 flex gap-4">
          <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm font-alexandria text-amber-800 dark:text-amber-300 leading-relaxed">
            {isAr
              ? "تذكير مهم: CloudWA ليست شركة تابعة لـ Meta Platforms Inc. بشكل مباشر. WhatsApp هي علامة تجارية مسجلة لشركة Meta. استخدام الخدمة يخضع أيضاً لشروط استخدام Meta WhatsApp Business."
              : "Important reminder: CloudWA is not directly affiliated with Meta Platforms Inc. WhatsApp is a registered trademark of Meta. Use of this service is also subject to Meta's WhatsApp Business Terms of Service."}
          </p>
        </div>

        {/* Accordion Sections */}
        <div className="flex flex-col gap-4">
          {content.map((section, idx) => (
            <SectionCard key={idx} section={section} idx={idx} />
          ))}
        </div>

        {/* Agreement Footer */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-brand-purple/10 via-brand-violet/5 to-brand-green/10 border border-brand-purple/20 p-6 text-center">
          <p className="text-xs sm:text-sm font-bold font-alexandria text-gray-800 dark:text-gray-200 mb-2">
            {isAr ? "بتسجيلك أو استخدامك للمنصة فأنت توافق على هذه الشروط" : "By registering or using the platform, you agree to these terms"}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 font-alexandria">
            {isAr
              ? "آخر مراجعة قانونية: مايو ٢٠٢٥ | شركة أكوادك للبرمجيات، جمهورية مصر العربية"
              : "Last legal review: May 2025 | Aquadic Software, Arab Republic of Egypt"}
          </p>
        </div>

        {/* Contact */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-600 font-alexandria mb-4">
            {isAr ? "هل لديك أسئلة قانونية؟" : "Have legal questions?"}
          </p>
          <a
            href="https://wa.me/201101782890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-purple hover:bg-brand-violet text-white font-bold font-alexandria text-sm px-6 py-3 rounded-2xl transition-all hover:scale-105 shadow-lg shadow-brand-purple/25"
          >
            {isAr ? "💬 تواصل مع الدعم القانوني" : "💬 Contact Legal Support"}
          </a>
        </div>

      </div>
    </section>
  );
}
