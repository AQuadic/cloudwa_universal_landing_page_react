import React, { useState } from "react";
import { Mail, MessageSquare, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const content = {
  ar: {
    badge: "تواصل معنا",
    title: "نحن هنا لمساعدتك",
    subtitle: "سواء كنت مهتماً باشتراك جديد، تحتاج دعماً فنياً، أو لديك استفسار عام — فريقنا جاهز للرد خلال ساعات.",
    formTitle: "أرسل لنا رسالة",
    namePlaceholder: "الاسم الكامل",
    emailPlaceholder: "البريد الإلكتروني",
    phonePlaceholder: "رقم الهاتف (اختياري)",
    subjectLabel: "موضوع التواصل",
    subjects: [
      "الاستفسار عن الاشتراك والأسعار",
      "دعم فني ومشكلة تقنية",
      "شراكة تجارية",
      "استفسار قانوني",
      "أخرى"
    ],
    messagePlaceholder: "اكتب رسالتك هنا بالتفصيل...",
    submitBtn: "إرسال الرسالة",
    successTitle: "تم إرسال رسالتك بنجاح! ✅",
    successDesc: "سيتواصل معك فريقنا خلال 24 ساعة على أقصى تقدير.",
    channelsTitle: "قنوات التواصل المباشر",
    channels: [
      { icon: "whatsapp", label: "واتساب (الأسرع)", value: "+201101782890", href: "https://wa.me/201101782890", desc: "رد خلال دقائق خلال ساعات العمل" },
      { icon: "email", label: "البريد الإلكتروني", value: "hello@aquadic.com", href: "mailto:hello@aquadic.com", desc: "رد خلال 24 ساعة عمل" },
      { icon: "calendly", label: "احجز موعداً", value: "Calendly Booking", href: "https://calendly.com/aquadicsoftwares/30min", desc: "مكالمة فيديو مجانية مع المهندس" }
    ],
    workingHours: "ساعات العمل",
    hours: [
      { day: "الأحد – الخميس", time: "9:00 ص – 8:00 م" },
      { day: "الجمعة والسبت", time: "11:00 ص – 4:00 م" }
    ],
    locationTitle: "موقعنا",
    location: "الإسكندرية، جمهورية مصر العربية 🇪🇬"
  },
  en: {
    badge: "Contact Us",
    title: "We Are Here to Help",
    subtitle: "Whether you're interested in a new subscription, need technical support, or have a general inquiry — our team is ready to respond within hours.",
    formTitle: "Send Us a Message",
    namePlaceholder: "Full Name",
    emailPlaceholder: "Email Address",
    phonePlaceholder: "Phone Number (Optional)",
    subjectLabel: "Subject",
    subjects: [
      "Subscription & Pricing Inquiry",
      "Technical Support",
      "Business Partnership",
      "Legal Inquiry",
      "Other"
    ],
    messagePlaceholder: "Write your message in detail...",
    submitBtn: "Send Message",
    successTitle: "Message sent successfully! ✅",
    successDesc: "Our team will get back to you within 24 hours at most.",
    channelsTitle: "Direct Contact Channels",
    channels: [
      { icon: "whatsapp", label: "WhatsApp (Fastest)", value: "+201101782890", href: "https://wa.me/201101782890", desc: "Reply within minutes during working hours" },
      { icon: "email", label: "Email", value: "hello@aquadic.com", href: "mailto:hello@aquadic.com", desc: "Reply within 24 working hours" },
      { icon: "calendly", label: "Book a Call", value: "Calendly Booking", href: "https://calendly.com/aquadicsoftwares/30min", desc: "Free video call with our engineer" }
    ],
    workingHours: "Working Hours",
    hours: [
      { day: "Sunday – Thursday", time: "9:00 AM – 8:00 PM" },
      { day: "Friday & Saturday", time: "11:00 AM – 4:00 PM" }
    ],
    locationTitle: "Our Location",
    location: "Alexandria, Arab Republic of Egypt 🇪🇬"
  }
};

export default function ContactUs({ lang }) {
  const c = content[lang] || content.en;
  const isAr = lang === "ar";
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Compose WhatsApp message
    const msg = encodeURIComponent(
      `📩 رسالة جديدة من موقع CloudWA\n\nالاسم: ${formData.name}\nالبريد: ${formData.email}\nالهاتف: ${formData.phone || "—"}\nالموضوع: ${formData.subject}\n\nالرسالة:\n${formData.message}`
    );
    window.open(`https://wa.me/201101782890?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const channelIcon = (icon) => {
    if (icon === "whatsapp") return (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.725-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.516 0 10.005-4.486 10.008-10.007.001-2.673-1.036-5.186-2.92-7.071C16.471 1.64 13.968.602 11.3.602c-5.524 0-10.016 4.487-10.02 10.01 0 1.57.433 3.097 1.253 4.453l-.974 3.56 3.65-.959z"/></svg>
    );
    if (icon === "email") return <Mail className="h-5 w-5" />;
    return <Phone className="h-5 w-5" />;
  };

  const channelColor = (icon) => {
    if (icon === "whatsapp") return "text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30";
    if (icon === "email") return "text-brand-purple dark:text-brand-violet bg-brand-purple/10";
    return "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30";
  };

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-gray-950 transition-theme min-h-screen">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-brand-purple/20 to-brand-green/20 text-brand-purple dark:text-brand-violet mb-6">
            <MessageSquare className="h-7 w-7" />
          </div>
          <span className="inline-block mb-4 text-xs font-black font-outfit tracking-widest uppercase text-brand-purple dark:text-brand-violet bg-brand-purple/10 px-3 py-1 rounded-full">
            {c.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-alexandria text-gray-900 dark:text-white mb-4 leading-tight">
            {c.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-alexandria max-w-2xl mx-auto leading-relaxed">
            {c.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8">
              <h2 className="font-black font-alexandria text-lg text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Send className="h-5 w-5 text-brand-purple" />
                {c.formTitle}
              </h2>

              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-12 text-center">
                  <div className="h-16 w-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="font-black font-alexandria text-xl text-gray-900 dark:text-white">{c.successTitle}</h3>
                  <p className="text-sm text-gray-500 font-alexandria">{c.successDesc}</p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                    className="mt-4 text-xs font-bold text-brand-purple font-alexandria underline underline-offset-2 hover:text-brand-violet transition-colors"
                  >
                    {isAr ? "إرسال رسالة أخرى" : "Send another message"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={c.namePlaceholder}
                      className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-sm font-alexandria text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-brand-purple dark:focus:border-brand-violet transition-colors"
                    />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={c.emailPlaceholder}
                      className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-sm font-alexandria text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-brand-purple dark:focus:border-brand-violet transition-colors"
                    />
                  </div>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={c.phonePlaceholder}
                    className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-sm font-alexandria text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-brand-purple dark:focus:border-brand-violet transition-colors"
                  />
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-sm font-alexandria text-gray-900 dark:text-white focus:outline-none focus:border-brand-purple dark:focus:border-brand-violet transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">{c.subjectLabel}</option>
                    {c.subjects.map((s, i) => <option key={i} value={s}>{s}</option>)}
                  </select>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={c.messagePlaceholder}
                    className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-sm font-alexandria text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-brand-purple dark:focus:border-brand-violet transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-gradient-to-r from-brand-purple to-brand-violet hover:opacity-90 text-white font-black font-alexandria text-sm py-4 transition-all hover:scale-[1.01] shadow-lg shadow-brand-purple/25 flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    {c.submitBtn}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Direct Channels */}
            <div>
              <h2 className="font-black font-alexandria text-base text-gray-900 dark:text-white mb-4">{c.channelsTitle}</h2>
              <div className="flex flex-col gap-3">
                {c.channels.map((ch, i) => (
                  <a
                    key={i}
                    href={ch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 p-4 hover:border-brand-purple/40 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 ${channelColor(ch.icon)}`}>
                      {channelIcon(ch.icon)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold font-alexandria text-sm text-gray-900 dark:text-white group-hover:text-brand-purple transition-colors">{ch.label}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-alexandria truncate">{ch.value}</p>
                      <p className="text-[10px] text-gray-400 dark:text-gray-600 font-alexandria mt-0.5">{ch.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 p-5">
              <h3 className="font-bold font-alexandria text-sm text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand-purple" />
                {c.workingHours}
              </h3>
              <div className="flex flex-col gap-2">
                {c.hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center text-xs font-alexandria">
                    <span className="text-gray-600 dark:text-gray-400">{h.day}</span>
                    <span className="font-bold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-lg">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 p-5">
              <h3 className="font-bold font-alexandria text-sm text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-purple" />
                {c.locationTitle}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-alexandria">{c.location}</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
