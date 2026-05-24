import React, { useState, useEffect } from "react";
import { ShieldCheck, Zap, Layers, BadgeCheck, Users, HelpCircle, AlertCircle } from "lucide-react";

export default function Hero({ lang, t }) {
  const [hoveredSide, setHoveredSide] = useState(null); // 'official', 'unofficial', or null
  const [chatMessages, setChatMessages] = useState([]);
  const [activeTab, setActiveTab] = useState("official"); // 'official' or 'unofficial' inside the phone preview

  // Generate automated mock chats based on selected side
  useEffect(() => {
    let timer;
    if (activeTab === "official") {
      setChatMessages([
        { id: 1, sender: "client", text: lang === "ar" ? "مرحباً، هل تم تأكيد حجز طلبي؟" : "Hi, is my order booking confirmed?" },
      ]);
      timer = setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          {
            id: 2,
            sender: "system",
            text: lang === "ar" 
              ? "✅ نعم يا فندم! تم تأكيد طلبك رقم #1920. شكراً لاختيارك لنا." 
              : "✅ Yes! Your order #1920 is confirmed. Thank you for choosing us.",
            isOfficial: true
          }
        ]);
      }, 1500);
    } else {
      setChatMessages([
        { id: 1, sender: "client", text: lang === "ar" ? "اريد الاستفسار عن مواعيد العمل" : "What are your business hours?" },
      ]);
      timer = setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          {
            id: 2,
            sender: "bot",
            text: lang === "ar" 
              ? "🤖 أهلاً بك! مواعيد العمل من 9 صباحاً حتى 10 مساءً." 
              : "🤖 Welcome! Our hours are from 9 AM to 10 PM.",
            isOfficial: false
          }
        ]);
      }, 1500);
    }
    return () => clearTimeout(timer);
  }, [activeTab, lang]);

  return (
    <section id="hero" className="relative overflow-hidden bg-gray-50/60 dark:bg-gray-950/20 pt-10 pb-20">
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-30">
        <div className={`absolute top-12 left-10 w-96 h-96 rounded-full blur-3xl transition-colors duration-1000 ${
          hoveredSide === "official" ? "bg-emerald-400" : hoveredSide === "unofficial" ? "bg-indigo-400" : "bg-purple-300"
        }`} />
        <div className={`absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl transition-colors duration-1000 ${
          hoveredSide === "official" ? "bg-teal-300" : hoveredSide === "unofficial" ? "bg-violet-400" : "bg-emerald-300"
        }`} />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        {/* Partnership / Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-950/40 px-4 py-2 border border-emerald-200 dark:border-emerald-900/50">
            <ShieldCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 font-alexandria">
              {t.hero.metaBadge}
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-indigo-100 dark:bg-indigo-950/40 px-4 py-2 border border-indigo-200 dark:border-indigo-900/50">
            <Zap className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xs font-bold text-indigo-800 dark:text-indigo-300 font-alexandria">
              {t.hero.aquadicBadge}
            </span>
          </div>
        </div>

        {/* Dynamic Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-6xl font-black font-alexandria tracking-tight leading-tight mb-6">
            <span className="text-gray-400 dark:text-gray-500 font-normal text-2xl sm:text-3xl block mb-2">
              {t.hero.titlePre}
            </span>
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 bg-clip-text text-transparent transition-opacity duration-300">
              {t.hero.titleOfficial}
            </span>
            <span className="mx-3 text-gray-400 dark:text-gray-600 text-3xl font-light">&amp;</span>
            <span className="bg-gradient-to-r from-indigo-650 to-violet-500 dark:from-indigo-400 dark:to-violet-300 bg-clip-text text-transparent transition-opacity duration-300">
              {t.hero.titleUnofficial}
            </span>
            <span className="block mt-4 text-3xl sm:text-4xl text-gray-900 dark:text-white font-extrabold">
              {t.hero.titlePost}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-alexandria font-normal">
            {t.hero.subText}
          </p>

          {/* Smart Pathfinder CTA */}
          <div className="mt-8">
            <button
              onClick={() => {
                const wizardEl = document.getElementById("wizard");
                if (wizardEl) {
                  wizardEl.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center gap-2 rounded-full bg-brand-purple/10 hover:bg-brand-purple/20 border border-brand-purple/35 dark:border-brand-violet/40 px-6 py-3.5 text-xs sm:text-sm font-black font-alexandria text-brand-purple dark:text-brand-violet hover:scale-[1.02] transition-all cursor-pointer shadow-sm animate-pulse-glow"
            >
              <span>{t.hero.adviserBtn}</span>
            </button>
          </div>
        </div>

        {/* Interactive Split Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Portal - Official API */}
          <div
            onMouseEnter={() => { setHoveredSide("official"); setActiveTab("official"); }}
            onMouseLeave={() => setHoveredSide(null)}
            className={`lg:col-span-4 rounded-3xl p-8 transition-all duration-500 cursor-pointer flex flex-col justify-between ${
              hoveredSide === "official"
                ? "bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border-2 border-emerald-500 shadow-xl shadow-emerald-500/5 scale-[1.02]"
                : hoveredSide === "unofficial"
                ? "border border-gray-200 dark:border-gray-800 opacity-40 scale-[0.98]"
                : "border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50"
            }`}
          >
            <div>
              <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-black font-alexandria mb-3 text-gray-900 dark:text-white">
                {t.solution.official.title}
              </h3>
              
              {/* Target Audience Badge */}
              <div className="mb-4 inline-flex items-start bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-3.5 py-1.5 rounded-2xl text-[11px] font-bold font-alexandria text-start leading-normal">
                <span>{t.hero.officialAudience}</span>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-alexandria leading-relaxed">
                {t.solution.official.desc}
              </p>
              <ul className="space-y-3">
                {t.solution.official.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs font-semibold text-gray-700 dark:text-gray-300 font-alexandria">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="https://calendly.com/aquadicsoftwares/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block text-center rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold font-alexandria text-sm py-3.5 transition-colors shadow-md shadow-emerald-600/10"
            >
              {t.hero.officialBtn}
            </a>
          </div>

          {/* Center Phone Simulator Mockup */}
          <div className="lg:col-span-4 flex items-center justify-center py-6">
            <div className="relative w-72 h-[520px] rounded-[40px] border-[10px] border-gray-900 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 shadow-2xl overflow-hidden animate-floating">
              
              {/* Phone Camera Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-gray-800" />
              </div>

              {/* Chat Header */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-850 p-4 pt-8 text-white flex items-center justify-between border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-brand-purple to-brand-green flex items-center justify-center font-bold text-xs">
                    CW
                  </div>
                  <div>
                    <div className="font-bold text-xs flex items-center gap-1">
                      <span>CloudWA</span>
                      {activeTab === "official" && <BadgeCheck className="h-3.5 w-3.5 text-emerald-400 fill-emerald-400/20" />}
                    </div>
                    <div className="text-[9px] text-emerald-400">online</div>
                  </div>
                </div>
              </div>

              {/* Chat Body */}
              <div className="p-4 h-[380px] overflow-y-auto flex flex-col gap-3 justify-end bg-gray-50 dark:bg-gray-900/50">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs ${
                      msg.sender === "client"
                        ? "self-end bg-indigo-650 text-white rounded-tr-none"
                        : "self-start bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-tl-none border border-gray-250 dark:border-gray-700"
                    }`}
                  >
                    <p className="leading-relaxed">{msg.text}</p>
                    {msg.sender !== "client" && (
                      <span className="text-[8px] text-gray-400 block mt-1 text-right">
                        {msg.isOfficial ? (lang === "ar" ? "رسمي معتمد" : "Official Meta API") : (lang === "ar" ? "رد تلقائي" : "Web Bot")}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Phone Input Mock */}
              <div className="p-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex items-center gap-2">
                <div className="flex-1 h-8 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-750 px-3 flex items-center text-[10px] text-gray-400">
                  {lang === "ar" ? "اكتب رسالة..." : "Type a message..."}
                </div>
                <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                  ▶
                </div>
              </div>
            </div>
          </div>

          {/* Right Portal - Unofficial API */}
          <div
            onMouseEnter={() => { setHoveredSide("unofficial"); setActiveTab("unofficial"); }}
            onMouseLeave={() => setHoveredSide(null)}
            className={`lg:col-span-4 rounded-3xl p-8 transition-all duration-500 cursor-pointer flex flex-col justify-between ${
              hoveredSide === "unofficial"
                ? "bg-gradient-to-br from-indigo-500/10 to-violet-500/5 border-2 border-indigo-500 shadow-xl shadow-indigo-500/5 scale-[1.02]"
                : hoveredSide === "official"
                ? "border border-gray-200 dark:border-gray-800 opacity-40 scale-[0.98]"
                : "border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50"
            }`}
          >
            <div>
              <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-650 dark:text-indigo-400 mb-6">
                <Zap className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-black font-alexandria mb-3 text-gray-900 dark:text-white">
                {t.solution.unofficial.title}
              </h3>

              {/* Target Audience Badge */}
              <div className="mb-4 inline-flex items-start bg-indigo-500/10 dark:bg-indigo-500/15 border border-indigo-500/20 text-indigo-650 dark:text-indigo-400 px-3.5 py-1.5 rounded-2xl text-[11px] font-bold font-alexandria text-start leading-normal">
                <span>{t.hero.unofficialAudience}</span>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-alexandria leading-relaxed">
                {t.solution.unofficial.desc}
              </p>
              <ul className="space-y-3">
                {t.solution.unofficial.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs font-semibold text-gray-700 dark:text-gray-300 font-alexandria">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="https://cloudwa.net/console/login"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block text-center rounded-xl bg-indigo-650 hover:bg-indigo-700 text-white font-bold font-alexandria text-sm py-3.5 transition-colors shadow-md shadow-indigo-650/10"
            >
              {t.hero.unofficialBtn}
            </a>
          </div>

        </div>

        {/* Trust Stats Row */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200/50 dark:border-gray-800/50 pt-12">
          <div className="text-center">
            <div className="text-3xl font-black text-gray-900 dark:text-white font-outfit mb-2">10</div>
            <div className="text-xs font-bold text-gray-500 dark:text-gray-450 font-alexandria">{t.hero.stats.agents}</div>
          </div>
          <div className="text-center border-l border-gray-200/50 dark:border-gray-850">
            <div className="text-3xl font-black text-gray-900 dark:text-white font-outfit mb-2">♾️</div>
            <div className="text-xs font-bold text-gray-500 dark:text-gray-450 font-alexandria">{t.hero.stats.contacts}</div>
          </div>
          <div className="text-center border-l border-gray-200/50 dark:border-gray-850">
            <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 font-outfit mb-2">0%</div>
            <div className="text-xs font-bold text-gray-500 dark:text-gray-450 font-alexandria">{t.hero.stats.commission}</div>
          </div>
          <div className="text-center border-l border-gray-200/50 dark:border-gray-850">
            <div className="text-3xl font-black text-gray-900 dark:text-white font-outfit mb-2">24/7</div>
            <div className="text-xs font-bold text-gray-500 dark:text-gray-450 font-alexandria">{t.hero.stats.support}</div>
          </div>
        </div>

      </div>
    </section>
  );
}
