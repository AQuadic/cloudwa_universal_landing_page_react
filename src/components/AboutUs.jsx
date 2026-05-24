import React from "react";
import { Users, Rocket, Heart, MapPin, Linkedin, Twitter, Globe } from "lucide-react";

const content = {
  ar: {
    badge: "من نحن",
    title: "نمسك العصا من المنتصف",
    subtitle: "CloudWA هي منصة ربط واتساب متكاملة تجمع بين أمان الـ API الرسمي من Meta وسرعة بوابة الربط الاقتصادي في مكان واحد.",
    storyTitle: "قصة المنصة",
    story: [
      "في عالم يعتمد فيه ملايين الأعمال على واتساب للتواصل مع عملائهم، كانت هناك دائماً معادلة صعبة: إما الأمان الكامل مع التكلفة العالية للـ API الرسمي، أو السرعة والتكلفة المنخفضة مع مخاطر الحظر.",
      "جاءت CloudWA لتكسر هذه المعادلة. نحن لا نجبرك على الاختيار — بل نمنحك الخيارين داخل لوحة تحكم واحدة، مدعومة بفريق هندسي مصري متخصص يتحدث لغتك ويفهم سوقك.",
      "منصتنا مبنية على ثلاثة مبادئ: الشفافية في التسعير، الموثوقية في الأداء، والدعم الحقيقي من أناس حقيقيين."
    ],
    statsTitle: "CloudWA بالأرقام",
    stats: [
      { value: "500+", label: "عميل نشط على المنصة" },
      { value: "0%", label: "عمولة على رسائل Meta" },
      { value: "99.5%", label: "نسبة توفر الخدمة" },
      { value: "24/7", label: "دعم فني مباشر" }
    ],
    valuesTitle: "قيمنا الأساسية",
    values: [
      { icon: "🔒", title: "الأمان أولاً", desc: "نعمل كشريك تقني معتمد من Meta لضمان أعلى مستويات الأمان لعملائنا." },
      { icon: "💡", title: "الشفافية الكاملة", desc: "لا رسوم خفية. لا عمولات. أسعار واضحة ومعلنة للجميع." },
      { icon: "🚀", title: "الابتكار المستمر", desc: "فريقنا الهندسي يعمل باستمرار على إضافة ميزات جديدة تُحسن تجربتك." },
      { icon: "🤝", title: "الدعم الحقيقي", desc: "مهندسون مصريون حقيقيون يتحدثون لغتك ويحلون مشاكلك مباشرة." }
    ],
    aquadicTitle: "من وراء CloudWA؟",
    aquadicDesc: "CloudWA هي منتج أكوادك للبرمجيات — شركة تقنية مصرية متخصصة في بناء حلول SaaS المبتكرة للسوق العربي والدولي. أكوادك تؤمن بأن التقنية يجب أن تكون في متناول الجميع: سهلة الاستخدام، بأسعار عادلة، ومدعومة بفريق بشري حقيقي.",
    teamTitle: "فريق أكوادك",
    team: [
      { name: "سيف الله خالد", role: "المؤسس والرئيس التنفيذي", emoji: "👨‍💻" },
      { name: "فريق الهندسة", role: "مطورون وعمليات سحابية", emoji: "⚡" },
      { name: "فريق الدعم", role: "خبراء دعم ونجاح العملاء", emoji: "💬" }
    ],
    ctaTitle: "مستعد تبدأ رحلتك معنا؟",
    ctaDesc: "انضم لمئات الأعمال التي تثق في CloudWA لإدارة تواصلها عبر واتساب.",
    ctaBtn: "ابدأ تجربتك المجانية",
    ctaBtn2: "تواصل مع الفريق"
  },
  en: {
    badge: "About Us",
    title: "We Hold the Stick from the Middle",
    subtitle: "CloudWA is an integrated WhatsApp connection platform that combines the security of Meta's official API with the speed of the budget web gateway — all in one place.",
    storyTitle: "Our Story",
    story: [
      "In a world where millions of businesses rely on WhatsApp to communicate with their customers, there was always a difficult equation: either full security with the high cost of the official API, or speed and low cost with the risk of bans.",
      "CloudWA was built to break this equation. We don't force you to choose — we give you both options inside one unified dashboard, backed by a specialized Egyptian engineering team that speaks your language and understands your market.",
      "Our platform is built on three principles: pricing transparency, performance reliability, and real support from real people."
    ],
    statsTitle: "CloudWA by the Numbers",
    stats: [
      { value: "500+", label: "Active Platform Clients" },
      { value: "0%", label: "Meta Message Markup" },
      { value: "99.5%", label: "Service Uptime" },
      { value: "24/7", label: "Direct Technical Support" }
    ],
    valuesTitle: "Our Core Values",
    values: [
      { icon: "🔒", title: "Security First", desc: "We operate as a Meta-certified tech provider to ensure the highest security standards for our clients." },
      { icon: "💡", title: "Full Transparency", desc: "No hidden fees. No commissions. Clear and published pricing for everyone." },
      { icon: "🚀", title: "Continuous Innovation", desc: "Our engineering team continuously adds new features to improve your experience." },
      { icon: "🤝", title: "Real Support", desc: "Real human engineers who speak your language and solve your problems directly." }
    ],
    aquadicTitle: "Who Is Behind CloudWA?",
    aquadicDesc: "CloudWA is a product of Aquadic Software — an Egyptian tech company specializing in building innovative SaaS solutions for the Arab and global markets. Aquadic believes technology should be accessible to everyone: easy to use, fairly priced, and supported by a real human team.",
    teamTitle: "The Aquadic Team",
    team: [
      { name: "Saifallah Khaled", role: "Founder & CEO", emoji: "👨‍💻" },
      { name: "Engineering Team", role: "Developers & Cloud Operations", emoji: "⚡" },
      { name: "Support Team", role: "Customer Support & Success Experts", emoji: "💬" }
    ],
    ctaTitle: "Ready to Start Your Journey With Us?",
    ctaDesc: "Join hundreds of businesses that trust CloudWA to manage their WhatsApp communications.",
    ctaBtn: "Start Free Trial",
    ctaBtn2: "Contact the Team"
  }
};

export default function AboutUs({ lang }) {
  const c = content[lang] || content.en;
  const isAr = lang === "ar";

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-gray-950 transition-theme min-h-screen">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">

        {/* Hero Header */}
        <div className="text-center mb-20">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-brand-purple/20 to-brand-green/20 text-brand-purple dark:text-brand-violet mb-6">
            <Users className="h-7 w-7" />
          </div>
          <span className="inline-block mb-4 text-xs font-black font-outfit tracking-widest uppercase text-brand-purple dark:text-brand-violet bg-brand-purple/10 px-3 py-1 rounded-full">
            {c.badge}
          </span>
          <h1 className="text-4xl sm:text-6xl font-black font-alexandria text-gray-900 dark:text-white mb-6 leading-tight">
            {c.title}
          </h1>
          <p className="text-sm sm:text-lg text-gray-500 dark:text-gray-400 font-alexandria max-w-3xl mx-auto leading-relaxed">
            {c.subtitle}
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black font-alexandria text-gray-900 dark:text-white mb-6">
              {c.storyTitle}
            </h2>
            <div className="flex flex-col gap-4">
              {c.story.map((para, i) => (
                <p key={i} className="text-sm sm:text-base text-gray-600 dark:text-gray-350 font-alexandria leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
          {/* Visual Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-green/20 rounded-3xl blur-3xl" />
            <div className="relative rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-brand-purple to-brand-green flex items-center justify-center">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-black font-outfit text-xl text-gray-900 dark:text-white">CloudWA</p>
                  <p className="text-xs font-bold text-gray-400 font-outfit">Powered by Aquadic</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {c.stats.map((stat, i) => (
                  <div key={i} className="rounded-2xl bg-gray-50 dark:bg-gray-800/50 p-4 text-center">
                    <p className="text-2xl font-black font-outfit text-brand-purple dark:text-brand-violet mb-1">{stat.value}</p>
                    <p className="text-[10px] font-bold font-alexandria text-gray-500 dark:text-gray-400 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h2 className="text-2xl sm:text-3xl font-black font-alexandria text-gray-900 dark:text-white mb-10 text-center">
            {c.valuesTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.values.map((value, i) => (
              <div key={i} className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 p-6 hover:border-brand-purple/40 hover:shadow-lg hover:shadow-brand-purple/10 transition-all duration-300">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="font-black font-alexandria text-base text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-alexandria leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Aquadic Section */}
        <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 p-8 sm:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="h-6 w-6 text-brand-purple" />
                <h2 className="text-xl sm:text-2xl font-black font-alexandria text-gray-900 dark:text-white">{c.aquadicTitle}</h2>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-350 font-alexandria leading-relaxed mb-6">{c.aquadicDesc}</p>
              <div className="flex items-center gap-2 text-xs text-gray-400 font-alexandria">
                <MapPin className="h-3.5 w-3.5" />
                <span>{isAr ? "القاهرة، جمهورية مصر العربية 🇪🇬" : "Cairo, Arab Republic of Egypt 🇪🇬"}</span>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <a href="https://aquadic.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-bold text-brand-purple hover:text-brand-violet transition-colors font-alexandria">
                  <Globe className="h-3.5 w-3.5" /> aquadic.com
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-black font-alexandria text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-6">{c.teamTitle}</h3>
              <div className="flex flex-col gap-4">
                {c.team.map((member, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-4">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-brand-purple/20 to-brand-green/20 flex items-center justify-center text-2xl">
                      {member.emoji}
                    </div>
                    <div>
                      <p className="font-bold font-alexandria text-sm text-gray-900 dark:text-white">{member.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-alexandria">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center rounded-3xl bg-gradient-to-br from-brand-purple/15 via-brand-violet/10 to-brand-green/15 border border-brand-purple/20 p-12">
          <h2 className="text-2xl sm:text-3xl font-black font-alexandria text-gray-900 dark:text-white mb-3">{c.ctaTitle}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-alexandria mb-8 max-w-xl mx-auto">{c.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://cloudwa.net/console/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-purple hover:bg-brand-violet text-white font-bold font-alexandria text-sm px-8 py-4 rounded-2xl transition-all hover:scale-105 shadow-lg shadow-brand-purple/25"
            >
              🚀 {c.ctaBtn}
            </a>
            <a
              href="https://wa.me/201101782890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-gray-900/60 hover:bg-gray-50 dark:hover:bg-gray-900 font-bold font-alexandria text-sm px-8 py-4 rounded-2xl transition-all hover:scale-105"
            >
              💬 {c.ctaBtn2}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
