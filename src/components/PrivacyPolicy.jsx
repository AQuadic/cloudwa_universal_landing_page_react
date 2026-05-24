import React, { useState } from "react";
import { ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";

const sections = {
  ar: [
    {
      title: "١. المعلومات التي نجمعها",
      content: `نجمع المعلومات التي تزودنا بها مباشرةً عند التسجيل أو استخدام خدماتنا، وتشمل:

• **بيانات الحساب**: الاسم، البريد الإلكتروني، رقم الهاتف، وبيانات الشركة.
• **بيانات الفوترة**: معلومات الدفع المشفرة عبر بوابات دفع آمنة معتمدة (لا نخزن بيانات البطاقات مباشرةً).
• **بيانات الاستخدام**: سجلات النشاط، الرسائل المُرسلة عبر المنصة، وإحصائيات الحملات.
• **بيانات الجهاز والاتصال**: عنوان IP، نوع المتصفح، ونظام التشغيل لأغراض الأمان والدعم الفني.`
    },
    {
      title: "٢. كيف نستخدم معلوماتك",
      content: `نستخدم بياناتك للأغراض التالية فقط:

• تشغيل وتطوير خدمات CloudWA وضمان جودتها.
• معالجة المدفوعات وإدارة الاشتراكات.
• تقديم الدعم الفني والتقني عبر فريق أكوادك.
• إرسال تحديثات المنتج والإشعارات التقنية الضرورية.
• الامتثال للمتطلبات القانونية والتنظيمية المعمول بها.
• تحسين الأداء وتجربة المستخدم بناءً على بيانات مجهولة الهوية.`
    },
    {
      title: "٣. مشاركة البيانات مع أطراف ثالثة",
      content: `نحن لا نبيع بياناتك الشخصية أبداً. نشارك البيانات فقط مع:

• **Meta Platforms Inc.**: لأغراض ربط الحسابات عبر واجهة برمجة التطبيقات الرسمية.
• **مزودي خدمات الدفع**: Stripe أو بوابات دفع معتمدة أخرى لمعالجة الاشتراكات.
• **مزودي البنية التحتية**: خوادم سحابية موثوقة لاستضافة البيانات.
• **الجهات القانونية**: عند الضرورة القصوى بموجب أمر قضائي أو طلب قانوني رسمي.`
    },
    {
      title: "٤. أمان البيانات",
      content: `نطبق معايير الأمان العالمية لحماية بياناتك:

• تشفير كامل للبيانات أثناء النقل (TLS 1.3) وأثناء التخزين (AES-256).
• مصادقة ثنائية العوامل (2FA) لحماية حسابك.
• مراجعات أمنية دورية واختبارات اختراق منتظمة.
• وصول محدود للموظفين المخولين فقط وفق مبدأ الصلاحية الدنيا.
• سجلات تدقيق شاملة لجميع عمليات الوصول إلى البيانات.`
    },
    {
      title: "٥. الاحتفاظ بالبيانات وحذفها",
      content: `• نحتفظ ببيانات حسابك طوال فترة الاشتراك النشط.
• عند إلغاء الاشتراك، يتم الاحتفاظ بالبيانات لمدة 90 يوماً ثم حذفها نهائياً.
• يمكنك طلب حذف بياناتك فوراً عبر التواصل مع فريق الدعم.
• بعض البيانات المحاسبية قد تُحتفظ لفترة أطول وفقاً للمتطلبات القانونية.`
    },
    {
      title: "٦. حقوقك كمستخدم",
      content: `لديك الحق الكامل في:

• **الوصول**: طلب نسخة من جميع بياناتك الشخصية المخزنة.
• **التصحيح**: تعديل أي بيانات غير دقيقة في حسابك مباشرةً.
• **الحذف**: طلب حذف حسابك وجميع البيانات المرتبطة به.
• **الاعتراض**: رفض معالجة بياناتك لأغراض التسويق.
• **النقل**: الحصول على بياناتك بصيغة قابلة للقراءة لنقلها لمنصة أخرى.`
    },
    {
      title: "٧. ملفات تعريف الارتباط (Cookies)",
      content: `نستخدم ملفات تعريف الارتباط لـ:

• الحفاظ على جلسة تسجيل الدخول.
• تذكر تفضيلاتك (اللغة، الوضع الليلي).
• تحليل الأداء عبر أدوات إحصائية مجهولة الهوية.

يمكنك تعطيل ملفات الكوكيز من إعدادات متصفحك، مع العلم أن بعض خصائص المنصة قد تتأثر.`
    },
    {
      title: "٨. تحديثات سياسة الخصوصية",
      content: `نحتفظ بحق تحديث هذه السياسة دورياً لمواكبة التغييرات التشريعية والتقنية. في حال إجراء تغييرات جوهرية، سنُخطرك عبر البريد الإلكتروني المسجل أو من خلال إشعار بارز داخل لوحة التحكم قبل 30 يوماً من تطبيق التغيير.`
    },
    {
      title: "٩. التواصل معنا",
      content: `لأي استفسار متعلق بخصوصيتك أو لممارسة حقوقك، تواصل معنا عبر:

• **البريد الإلكتروني**: support@cloudwa.net
• **الواتساب**: +201101782890
• **العنوان**: شركة أكوادك للبرمجيات، جمهورية مصر العربية`
    }
  ],
  en: [
    {
      title: "1. Information We Collect",
      content: `We collect information you provide directly when registering or using our services, including:

• **Account Data**: Name, email address, phone number, and company information.
• **Billing Data**: Encrypted payment information via certified secure payment gateways (we do not store card data directly).
• **Usage Data**: Activity logs, messages sent through the platform, and campaign analytics.
• **Device & Connection Data**: IP address, browser type, and OS for security and technical support purposes.`
    },
    {
      title: "2. How We Use Your Information",
      content: `We use your data solely for the following purposes:

• Operating and improving CloudWA services and ensuring quality.
• Processing payments and managing subscriptions.
• Providing technical support via the Aquadic team.
• Sending product updates and essential technical notifications.
• Complying with applicable legal and regulatory requirements.
• Improving performance and user experience using anonymized analytics.`
    },
    {
      title: "3. Third-Party Data Sharing",
      content: `We never sell your personal data. We only share data with:

• **Meta Platforms Inc.**: For account linking via the official WhatsApp Business API.
• **Payment Processors**: Stripe or other certified payment gateways for subscription processing.
• **Infrastructure Providers**: Trusted cloud servers for secure data hosting.
• **Legal Authorities**: Only when strictly required by court order or official legal request.`
    },
    {
      title: "4. Data Security",
      content: `We implement global security standards to protect your data:

• Full encryption in transit (TLS 1.3) and at rest (AES-256).
• Two-factor authentication (2FA) available for account protection.
• Regular security audits and penetration testing.
• Principle of least privilege — only authorized personnel have access.
• Comprehensive audit logs of all data access operations.`
    },
    {
      title: "5. Data Retention & Deletion",
      content: `• We retain your account data for the duration of your active subscription.
• Upon cancellation, data is retained for 90 days, then permanently deleted.
• You may request immediate data deletion by contacting our support team.
• Some financial records may be retained longer per applicable legal requirements.`
    },
    {
      title: "6. Your Rights as a User",
      content: `You have the full right to:

• **Access**: Request a copy of all your stored personal data.
• **Rectification**: Correct any inaccurate data in your account directly.
• **Erasure**: Request deletion of your account and all associated data.
• **Objection**: Opt out of data processing for marketing purposes.
• **Portability**: Receive your data in a machine-readable format to transfer to another service.`
    },
    {
      title: "7. Cookies",
      content: `We use cookies for:

• Maintaining your login session.
• Remembering your preferences (language, dark mode).
• Anonymous performance analytics.

You may disable cookies in your browser settings. Note that some platform features may be affected by doing so.`
    },
    {
      title: "8. Policy Updates",
      content: `We reserve the right to update this policy periodically to reflect regulatory and technical changes. For material changes, we will notify you via your registered email or through a prominent notice in your dashboard at least 30 days before the changes take effect.`
    },
    {
      title: "9. Contact Us",
      content: `For any privacy-related inquiries or to exercise your rights, contact us at:

• **Email**: support@cloudwa.net
• **WhatsApp**: +201101782890
• **Address**: Aquadic Software, Arab Republic of Egypt`
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
          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-350 font-alexandria leading-loose whitespace-pre-line">
            {section.content.split('\n').map((line, i) => {
              if (line.startsWith('• **') ) {
                const parts = line.replace('• **', '').split('**:');
                return (
                  <p key={i} className="mb-2 flex gap-2">
                    <span className="text-brand-purple mt-0.5">•</span>
                    <span><strong className="text-gray-800 dark:text-gray-200">{parts[0]}</strong>:{parts[1]}</span>
                  </p>
                );
              }
              if (line.startsWith('• ')) {
                return (
                  <p key={i} className="mb-2 flex gap-2">
                    <span className="text-brand-purple mt-0.5">•</span>
                    <span>{line.slice(2)}</span>
                  </p>
                );
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

export default function PrivacyPolicy({ lang }) {
  const content = sections[lang] || sections.en;
  const isAr = lang === "ar";

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-gray-950 transition-theme min-h-screen">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-brand-purple/20 to-brand-green/20 text-brand-purple dark:text-brand-violet mb-6">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-alexandria text-gray-900 dark:text-white mb-4 leading-tight">
            {isAr ? "سياسة الخصوصية" : "Privacy Policy"}
          </h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-alexandria max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? "نلتزم بحماية خصوصيتك وبياناتك الشخصية. هذه السياسة تشرح كيفية جمع واستخدام وحماية معلوماتك."
              : "We are committed to protecting your privacy and personal data. This policy explains how we collect, use, and protect your information."}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-brand-green animate-pulse" />
            <span className="text-xs font-bold font-alexandria text-gray-500 dark:text-gray-400">
              {isAr ? "آخر تحديث: مايو ٢٠٢٥" : "Last updated: May 2025"}
            </span>
          </div>
        </div>

        {/* Intro Banner */}
        <div className="rounded-2xl bg-gradient-to-br from-brand-purple/10 via-brand-violet/5 to-brand-green/10 border border-brand-purple/20 p-6 mb-8">
          <p className="text-xs sm:text-sm font-alexandria text-gray-700 dark:text-gray-300 leading-relaxed">
            {isAr
              ? "تسري هذه السياسة على جميع مستخدمي منصة CloudWA المقدمة من شركة أكوادك للبرمجيات. باستخدامك للمنصة، فإنك توافق على الشروط الواردة هنا. نحن ملتزمون بالامتثال لمعايير حماية البيانات الدولية واللوائح المحلية المعمول بها."
              : "This policy applies to all users of the CloudWA platform provided by Aquadic Software. By using the platform, you agree to the terms set out here. We are committed to complying with international data protection standards and applicable local regulations."}
          </p>
        </div>

        {/* Accordion Sections */}
        <div className="flex flex-col gap-4">
          {content.map((section, idx) => (
            <SectionCard key={idx} section={section} idx={idx} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-600 font-alexandria mb-4">
            {isAr ? "هل لديك أسئلة حول خصوصيتك؟" : "Have questions about your privacy?"}
          </p>
          <a
            href="https://wa.me/201101782890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-purple hover:bg-brand-violet text-white font-bold font-alexandria text-sm px-6 py-3 rounded-2xl transition-all hover:scale-105 shadow-lg shadow-brand-purple/25"
          >
            {isAr ? "💬 تواصل مع فريق الدعم" : "💬 Contact Support Team"}
          </a>
        </div>

      </div>
    </section>
  );
}
