import React, { useState } from "react";
import { Quote, Sparkles, TrendingUp, Users, Star, CheckCircle, MessageSquare, Send } from "lucide-react";

export default function Customers({ lang, storiesData }) {
  const isAr = lang === "ar";
  const [activeCategory, setActiveCategory] = useState("all");
  
  if (!storiesData) return null;
  
  // State for user submissions
  const [submissions, setSubmissions] = useState([]);
  const [formState, setFormState] = useState({
    name: "",
    industry: "ecommerce",
    metric: "",
    story: "",
    rating: 5
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const stats = [
    { value: "+30%", label: isAr ? "زيادة في استرجاع السلات المتروكة" : "Increase in cart recovery", icon: <TrendingUp className="h-5 w-5 text-emerald-500" /> },
    { value: "+15M", label: isAr ? "رسالة يتم إرسالها شهرياً" : "Messages sent monthly", icon: <Sparkles className="h-5 w-5 text-indigo-500" /> },
    { value: "+450", label: isAr ? "علامة تجارية تعتمد علينا" : "Active brands trusting us", icon: <Users className="h-5 w-5 text-brand-purple" /> }
  ];

  const defaultStories = storiesData.map(story => ({
    category: story.category,
    title: isAr ? story.title.ar : story.title.en,
    industry: isAr ? story.industry.ar : story.industry.en,
    challenge: isAr ? story.challenge.ar : story.challenge.en,
    solution: isAr ? story.solution.ar : story.solution.en,
    result: isAr ? story.result.ar : story.result.en,
    metric: story.metric,
    rating: story.rating
  }));

  // Combine default stories with user submissions
  const allStories = [...defaultStories, ...submissions];

  // Filter based on active tab
  const filteredStories = allStories.filter(
    (story) => activeCategory === "all" || story.category === activeCategory
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (stars) => {
    setFormState((prev) => ({ ...prev, rating: stars }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.metric.trim() || !formState.story.trim()) {
      setFormError(isAr ? "يرجى ملء جميع الحقول المطلوبة!" : "Please fill out all required fields!");
      return;
    }

    // Add to submissions array
    const newSubmission = {
      category: formState.industry,
      title: formState.name,
      industry: formState.industry === "ecommerce" 
        ? (isAr ? "تجارة إلكترونية" : "E-Commerce") 
        : formState.industry === "logistics" 
        ? (isAr ? "خدمات لوجستية" : "Logistics")
        : formState.industry === "healthcare"
        ? (isAr ? "الرعاية الصحية" : "Healthcare")
        : (isAr ? "قطاع آخر" : "Other Sector"),
      challenge: isAr ? "كان العميل يعاني من صعوبات في تنظيم التواصل الهاتفي والردود." : "Faced bottlenecks in managing messaging queues.",
      solution: isAr ? `الربط مع بوابة CloudWA لتسهيل الأتمتة.` : `Integrated CloudWA for system automations.`,
      result: formState.story,
      metric: formState.metric,
      rating: formState.rating
    };

    setSubmissions((prev) => [newSubmission, ...prev]);
    setFormSubmitted(true);
    setFormError("");
    
    // Reset form fields
    setFormState({
      name: "",
      industry: "ecommerce",
      metric: "",
      story: "",
      rating: 5
    });

    // Reset submission state after 5 seconds
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="py-12 transition-theme min-h-[60vh]">
      
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-4">
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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20 px-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-gray-900/40 p-6 text-center flex flex-col items-center justify-center gap-2 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
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

      {/* Integrations Logo Grid */}
      <div className="max-w-5xl mx-auto mb-20 px-4">
        <h3 className="text-center text-xs font-bold font-alexandria uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8">
          {isAr ? "يدعم الربط المباشر مع المنصات العالمية والمحلية" : "Seamlessly integrates with top-tier business hubs"}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-6 items-center justify-items-center opacity-60 dark:opacity-75">
          {["Shopify", "WooCommerce", "Salla", "Zid", "ExpandCart", "Aquadic"].map((logo, idx) => (
            <div key={idx} className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 px-5 py-3 w-full text-center text-xs font-black font-outfit text-gray-650 dark:text-gray-400 hover:opacity-100 hover:border-brand-purple/30 transition-all select-none">
              {logo}
            </div>
          ))}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto px-4">
        {[
          { id: "all", label: isAr ? "كل القطاعات" : "All Industries" },
          { id: "ecommerce", label: isAr ? "تجارة إلكترونية" : "E-Commerce" },
          { id: "logistics", label: isAr ? "خدمات لوجستية" : "Logistics" },
          { id: "healthcare", label: isAr ? "الرعاية الصحية" : "Healthcare" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id)}
            className={`rounded-xl px-4 py-2.5 text-xs font-bold font-alexandria border transition-all cursor-pointer ${
              activeCategory === tab.id
                ? "bg-brand-purple/10 border-brand-purple text-brand-purple dark:text-brand-violet scale-[1.01]"
                : "border-gray-200 dark:border-gray-850 text-gray-500 dark:text-gray-400 bg-white/40 dark:bg-gray-950/40 hover:bg-gray-50 dark:hover:bg-gray-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Success Stories Cards Grid */}
      <div className="flex flex-col gap-8 max-w-5xl mx-auto px-4 mb-24">
        {filteredStories.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-gray-200 dark:border-gray-800 rounded-3xl">
            <p className="text-sm text-gray-450 font-alexandria">
              {isAr ? "لا توجد قصص نجاح حالياً في هذا القسم." : "No success stories listed under this category yet."}
            </p>
          </div>
        ) : (
          filteredStories.map((story, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-gray-900/40 p-6 sm:p-10 shadow-lg flex flex-col md:flex-row gap-8 items-center relative overflow-hidden transition-all duration-300 hover:border-brand-purple/20"
            >
              {/* Visual badge highlight */}
              <div className="absolute top-0 right-0 h-20 w-20 bg-brand-purple/5 rounded-bl-full pointer-events-none" />
              
              {/* Details content */}
              <div className="flex-1 flex flex-col gap-4 text-start">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black font-alexandria text-brand-purple dark:text-brand-violet bg-brand-purple/10 px-3 py-1 rounded-full">
                    {story.industry}
                  </span>
                  {/* Testimonial Star rating */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
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
                <div className="mt-2 text-xs sm:text-sm font-semibold font-alexandria text-gray-750 dark:text-gray-300">
                  <span className="font-bold text-gray-950 dark:text-white mr-1">{isAr ? "📊 النتيجة النهائية والملاحظات:" : "📊 Final Result:"}</span>
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
          ))
        )}
      </div>

      {/* Interactive Form: Submit Your Story */}
      <div className="max-w-3xl mx-auto px-4">
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-gray-200 dark:border-gray-800 shadow-xl relative overflow-hidden">
          
          <div className="flex items-center gap-3 mb-6 text-start">
            <div className="h-10 w-10 rounded-xl bg-brand-purple/10 text-brand-purple dark:text-brand-violet flex items-center justify-center">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black font-alexandria text-gray-900 dark:text-white">
                {isAr ? "شاركنا قصة نجاح متجرك مع CloudWA" : "Submit Your CloudWA Success Story"}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-450 font-alexandria leading-normal">
                {isAr ? "يسعدنا دائماً مشاركة مراجعات عملائنا ودعمهم للنشر في منصتنا لبناء الثقة المتبادلة." : "We love featuring client milestones. Submit your metrics to inspire other brands."}
              </p>
            </div>
          </div>

          {formSubmitted ? (
            <div className="py-8 text-center flex flex-col items-center justify-center gap-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl animate-fade-in">
              <CheckCircle className="h-12 w-12 text-emerald-500" />
              <h4 className="text-base font-black font-alexandria text-gray-900 dark:text-white">
                {isAr ? "تم إرسال قصة نجاحك بنجاح!" : "Story Submitted Successfully!"}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-alexandria max-w-sm leading-relaxed">
                {isAr 
                  ? "شكراً لمشاركتنا تجربتك؛ تم تحديث لوحة النجاح بالأسفل وإدراج متجرك ضمن شركائنا الموثوقين."
                  : "Thank you for your valuable feedback. Your store review has been logged and featured below."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 text-start">
              
              {formError && (
                <div className="p-3 text-xs font-bold font-alexandria bg-rose-500/10 text-rose-500 rounded-xl">
                  ⚠️ {formError}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Store Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="store-name" className="text-xs font-bold font-alexandria text-gray-600 dark:text-gray-400">
                    {isAr ? "اسم المتجر / الشركة (مطلوب) *" : "Store / Brand Name *"}
                  </label>
                  <input
                    id="store-name"
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder={isAr ? "مثال: متجر الهدايا الفاخرة" : "e.g. Luxury Gift Store"}
                    className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-3 text-xs font-semibold font-alexandria focus:border-brand-purple outline-none"
                  />
                </div>

                {/* Industry Select */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="store-industry" className="text-xs font-bold font-alexandria text-gray-600 dark:text-gray-400">
                    {isAr ? "نوع النشاط / القطاع *" : "Industry Sector *"}
                  </label>
                  <select
                    id="store-industry"
                    name="industry"
                    value={formState.industry}
                    onChange={handleInputChange}
                    className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-3 text-xs font-semibold font-alexandria focus:border-brand-purple outline-none"
                  >
                    <option value="ecommerce">{isAr ? "تجارة إلكترونية" : "E-Commerce"}</option>
                    <option value="logistics">{isAr ? "خدمات لوجستية وتوصيل" : "Logistics & Delivery"}</option>
                    <option value="healthcare">{isAr ? "رعاية صحية وطبية" : "Healthcare & Medical"}</option>
                    <option value="other">{isAr ? "قطاع آخر / مخصص" : "Other Custom Sector"}</option>
                  </select>
                </div>
              </div>

              {/* Best Metric */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="store-metric" className="text-xs font-bold font-alexandria text-gray-600 dark:text-gray-400">
                  {isAr ? "أبرز رقم نجاح حققته (مطلوب) *" : "Key Success Metric achieved *"}
                </label>
                <input
                  id="store-metric"
                  type="text"
                  name="metric"
                  value={formState.metric}
                  onChange={handleInputChange}
                  placeholder={isAr ? "مثال: توفير 60% من التكلفة أو استرداد 25% من السلات" : "e.g. 60% Budget Saved or 25% Carts Recovered"}
                  className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-3 text-xs font-semibold font-alexandria focus:border-brand-purple outline-none"
                />
              </div>

              {/* Story/Feedback detail */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="store-story" className="text-xs font-bold font-alexandria text-gray-600 dark:text-gray-400">
                  {isAr ? "احكِ لنا تجربتك والنتائج بالتفصيل (مطلوب) *" : "Describe your results & experience *"}
                </label>
                <textarea
                  id="store-story"
                  name="story"
                  rows="3"
                  value={formState.story}
                  onChange={handleInputChange}
                  placeholder={isAr ? "مثال: بعد تفعيل ربط الواتساب الرسمي مع WooCommerce أصبحنا نرسل الفواتير فوراً وانعدم الحظر..." : "e.g. After integrating the Web API endpoint, we saved on SMS billing and reached drivers immediately..."}
                  className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-3 text-xs font-semibold font-alexandria focus:border-brand-purple outline-none resize-none"
                />
              </div>

              {/* Rating input */}
              <div className="flex items-center gap-3 mt-2">
                <span className="text-xs font-bold font-alexandria text-gray-600 dark:text-gray-400">
                  {isAr ? "تقييمك للمنصة:" : "Your Rating:"}
                </span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((stars) => (
                    <button
                      key={stars}
                      type="button"
                      onClick={() => handleRatingChange(stars)}
                      className="cursor-pointer text-amber-400 hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`h-5 w-5 ${
                          stars <= formState.rating ? "fill-amber-400 text-amber-400" : "text-gray-300 dark:text-gray-700"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="mt-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-violet text-white font-bold font-alexandria text-xs sm:text-sm py-4.5 transition-all shadow-md shadow-brand-purple/20 hover:scale-[1.01] hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="h-4 w-4" />
                <span>{isAr ? "إرسال قصة نجاحي ونشرها" : "Publish My Success Story"}</span>
              </button>

            </form>
          )}

        </div>
      </div>

    </div>
  );
}
