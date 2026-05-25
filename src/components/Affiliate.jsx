import React from "react";
import { DollarSign, Users, Gift, ArrowRight, CheckCircle, Link } from "lucide-react";

const content = {
  ar: {
    badge: "برنامج الإحالة",
    title: "اربح معنا بكل رشحة",
    subtitle: "انضم لبرنامج شركاء CloudWA وكسب عمولة لكل عميل تجيبه. مش بس خدمة — دخل إضافي حقيقي.",
    howTitle: "كيف يعمل البرنامج؟",
    steps: [
      { icon: "1️⃣", title: "سجّل كشريك", desc: "أنشئ حساب شريك مجاناً واحصل على رابط إحالة فريد خاص بك." },
      { icon: "2️⃣", title: "شارك رابطك", desc: "شارك رابط الإحالة مع عملائك المحتملين عبر واتساب، السوشيال ميديا، أو موقعك." },
      { icon: "3️⃣", title: "اشتراك العميل", desc: "عندما يسجل أي شخص عبر رابطك ويشترك في أي خطة، يُسجل في حسابك تلقائياً." },
      { icon: "4️⃣", title: "اقبض عمولتك", desc: "تحصل على عمولتك شهرياً عبر محفظة إلكترونية أو تحويل بنكي." }
    ],
    commissionsTitle: "جدول العمولات",
    commissions: [
      { plan: "الخطط الشهرية", rate: "20%", desc: "من قيمة الاشتراك الشهري" },
      { plan: "الخطط السنوية", rate: "25%", desc: "من قيمة الاشتراك السنوي" },
      { plan: "عملاء Enterprise", rate: "مخصصة", desc: "تفاوض مباشر مع الفريق" }
    ],
    benefitsTitle: "مزايا الشراكة",
    benefits: [
      "لوحة تحكم شاملة لتتبع إحالاتك وأرباحك في الوقت الحقيقي.",
      "مواد تسويقية جاهزة (بنرات، نصوص، وفيديوهات ترويجية).",
      "دعم مباشر من فريق أكوادك لمساعدتك في إقناع عملائك.",
      "نظام Cookie Tracking لمدة 90 يوماً لضمان نسب الإحالات بشكل صحيح.",
      "لا حد أقصى للأرباح — كلما زادت إحالاتك، زادت عمولتك.",
      "صرف شهري منتظم عبر وسيلة الدفع المفضلة لديك."
    ],
    faqTitle: "أسئلة شائعة حول البرنامج",
    faqs: [
      { q: "متى أستلم عمولتي؟", a: "يتم صرف العمولات في بداية كل شهر عن المبيعات المؤكدة في الشهر السابق." },
      { q: "هل يوجد حد أدنى للسحب؟", a: "الحد الأدنى للسحب هو 50 دولار أو ما يعادله بالعملة المحلية." },
      { q: "هل يمكنني إحالة أكثر من عميل؟", a: "نعم! البرنامج مفتوح بدون حد أقصى لعدد الإحالات أو الأرباح." }
    ],
    ctaTitle: "ابدأ كسب عمولتك الآن",
    ctaDesc: "تواصل مع فريقنا عبر واتساب لتفعيل حسابك كشريك وتلقي رابط الإحالة الخاص بك.",
    ctaBtn: "انضم كشريك عبر واتساب",
    ctaBtn2: "تواصل عبر البريد"
  },
  en: {
    badge: "Affiliate Program",
    title: "Earn With Every Referral",
    subtitle: "Join the CloudWA Partner Program and earn a commission for every client you bring. Not just a service — a real additional income stream.",
    howTitle: "How Does the Program Work?",
    steps: [
      { icon: "1️⃣", title: "Register as a Partner", desc: "Create a free partner account and receive your unique referral link." },
      { icon: "2️⃣", title: "Share Your Link", desc: "Share your referral link with potential clients via WhatsApp, social media, or your website." },
      { icon: "3️⃣", title: "Client Subscribes", desc: "When someone registers through your link and subscribes to any plan, it is automatically attributed to your account." },
      { icon: "4️⃣", title: "Receive Your Commission", desc: "Collect your commissions monthly via e-wallet or bank transfer." }
    ],
    commissionsTitle: "Commission Structure",
    commissions: [
      { plan: "Monthly Plans", rate: "20%", desc: "of monthly subscription value" },
      { plan: "Annual Plans", rate: "25%", desc: "of annual subscription value" },
      { plan: "Enterprise Clients", rate: "Custom", desc: "Direct negotiation with the team" }
    ],
    benefitsTitle: "Partnership Benefits",
    benefits: [
      "Comprehensive dashboard to track your referrals and earnings in real time.",
      "Ready-made marketing materials (banners, scripts, promotional videos).",
      "Direct support from the Aquadic team to help you convert prospects.",
      "90-day Cookie Tracking to ensure referrals are attributed correctly.",
      "No earnings cap — the more you refer, the more you earn.",
      "Monthly payouts via your preferred payment method."
    ],
    faqTitle: "Program FAQs",
    faqs: [
      { q: "When do I receive my commission?", a: "Commissions are paid at the beginning of each month for confirmed sales from the previous month." },
      { q: "Is there a minimum withdrawal amount?", a: "The minimum withdrawal is $50 or equivalent in local currency." },
      { q: "Can I refer more than one client?", a: "Yes! The program is open with no cap on referrals or earnings." }
    ],
    ctaTitle: "Start Earning Commissions Now",
    ctaDesc: "Contact our team via WhatsApp to activate your partner account and receive your referral link.",
    ctaBtn: "Join as Partner via WhatsApp",
    ctaBtn2: "Contact via Email"
  }
};

export default function Affiliate({ lang }) {
  const c = content[lang] || content.en;

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-gray-950 transition-theme min-h-screen">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-brand-purple/20 to-brand-green/20 text-brand-purple dark:text-brand-violet mb-6">
            <DollarSign className="h-7 w-7" />
          </div>
          <span className="inline-block mb-4 text-xs font-black font-outfit tracking-widest uppercase text-brand-purple dark:text-brand-violet bg-brand-purple/10 px-3 py-1 rounded-full">
            {c.badge}
          </span>
          <h1 className="text-4xl sm:text-6xl font-black font-alexandria text-gray-900 dark:text-white mb-6 leading-tight">
            {c.title}
          </h1>
          <p className="text-sm sm:text-lg text-gray-500 dark:text-gray-400 font-alexandria max-w-2xl mx-auto leading-relaxed">
            {c.subtitle}
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-black font-alexandria text-gray-900 dark:text-white mb-12 text-center">{c.howTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.steps.map((step, i) => (
              <div key={i} className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 p-6 text-center hover:border-brand-purple/40 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="font-black font-alexandria text-sm sm:text-base text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-alexandria leading-relaxed">{step.desc}</p>
                {i < c.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 z-10 transform -translate-y-1/2">
                    <ArrowRight className="h-5 w-5 text-brand-purple" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Commissions Table */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-black font-alexandria text-gray-900 dark:text-white mb-10 text-center">{c.commissionsTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {c.commissions.map((comm, i) => (
              <div key={i} className={`rounded-2xl p-8 text-center border ${i === 1 ? "border-brand-purple/40 bg-gradient-to-br from-brand-purple/10 to-brand-green/10 shadow-lg shadow-brand-purple/10" : "border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60"}`}>
                {i === 1 && <div className="inline-block mb-3 text-xs font-black font-outfit tracking-wider uppercase text-brand-purple bg-brand-purple/10 px-3 py-1 rounded-full">{lang === "ar" ? "الأكثر شيوعاً ⭐" : "Most Popular ⭐"}</div>}
                <p className="text-4xl sm:text-5xl font-black font-outfit text-brand-purple dark:text-brand-violet mb-2">{comm.rate}</p>
                <p className="font-black font-alexandria text-base text-gray-900 dark:text-white mb-2">{comm.plan}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-alexandria">{comm.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-20">
          <h2 className="text-2xl font-black font-alexandria text-gray-900 dark:text-white mb-8 text-center">{c.benefitsTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {c.benefits.map((benefit, i) => (
              <div key={i} className="flex gap-3 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 p-4">
                <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-alexandria leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-2xl font-black font-alexandria text-gray-900 dark:text-white mb-8 text-center">{c.faqTitle}</h2>
          <div className="flex flex-col gap-4 max-w-3xl mx-auto">
            {c.faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 p-6">
                <p className="font-bold font-alexandria text-sm text-gray-900 dark:text-white mb-2">❓ {faq.q}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-alexandria leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center rounded-3xl bg-gradient-to-br from-brand-purple/15 via-brand-violet/10 to-brand-green/15 border border-brand-purple/20 p-12">
          <div className="text-5xl mb-6">💰</div>
          <h2 className="text-2xl sm:text-3xl font-black font-alexandria text-gray-900 dark:text-white mb-3">{c.ctaTitle}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-alexandria mb-8 max-w-lg mx-auto">{c.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/201101782890?text=أريد الانضمام لبرنامج الشراكة والإحالة في CloudWA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-purple hover:bg-brand-violet text-white font-bold font-alexandria text-sm px-8 py-4 rounded-2xl transition-all hover:scale-105 shadow-lg shadow-brand-purple/25"
            >
              💬 {c.ctaBtn}
            </a>
            <a
              href="mailto:hello@aquadic.com?subject=Affiliate Program Inquiry"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-gray-900/60 hover:bg-gray-50 dark:hover:bg-gray-900 font-bold font-alexandria text-sm px-8 py-4 rounded-2xl transition-all hover:scale-105"
            >
              📧 {c.ctaBtn2}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
