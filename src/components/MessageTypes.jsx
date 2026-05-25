import React, { useState } from "react";
import { MessageSquare, Smartphone, ChevronLeft, ChevronRight, ArrowLeft, Send, Check } from "lucide-react";

export default function MessageTypes({ lang }) {
  const isAr = lang === "ar";
  const [activeTab, setActiveTab] = useState("official"); // 'official' or 'unofficial'
  const [activeType, setActiveType] = useState("carousel"); // Active selected message type
  
  // Carousel swipe state inside the simulator
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Flows form simulation states inside the simulator
  const [flowStep, setFlowStep] = useState("closed"); // 'closed', 'form', 'success'
  const [flowData, setFlowData] = useState({ name: "", date: "2026-05-25", service: "vip" });
  
  // List menu simulation states
  const [listState, setListState] = useState("closed"); // 'closed', 'open', 'selected'
  const [selectedListOption, setSelectedListOption] = useState(null);

  // Quick reply simulation states
  const [quickReplies, setQuickReplies] = useState([]); // Array of replies sent by user

  const handleSelectTab = (tab) => {
    setActiveTab(tab);
    if (tab === "official") {
      setActiveType("carousel");
    } else {
      setActiveType("text");
    }
    // Reset simulator states
    setCarouselIndex(0);
    setFlowStep("closed");
    setListState("closed");
    setSelectedListOption(null);
    setQuickReplies([]);
  };

  const handleSelectType = (type) => {
    setActiveType(type);
    setCarouselIndex(0);
    setFlowStep("closed");
    setListState("closed");
    setSelectedListOption(null);
    setQuickReplies([]);
  };

  // Datasets for Official Meta API
  const officialTypes = [
    {
      id: "carousel",
      title: isAr ? "الألبومات الدوارة (Carousel)" : "Swipable Carousels",
      desc: isAr 
        ? "أرسل ما يصل إلى 10 بطاقات صور قابلة للتمرير الأفقي في رسالة واحدة. كل بطاقة تحتوي على عنوان، وصف، وأزرار تفاعلية مخصصة. مثالية لعرض الكتالوجات والمنتجات المتعددة." 
        : "Send up to 10 horizontally swipable media cards. Each card can contain an image, header, description, and up to 3 custom CTA buttons.",
      badge: isAr ? "الأكثر مبيعاً" : "Best Seller"
    },
    {
      id: "flows",
      title: isAr ? "نماذج المحادثة (WhatsApp Flows)" : "Interactive Flows",
      desc: isAr 
        ? "ثورة التفاعل من Meta. تمكنك من جمع البيانات الاستمارية، حجز المواعيد، أو ملء الاستطلاعات مباشرة داخل الواتساب عبر نماذج منبثقة دون حاجة لمغادرة الشات." 
        : "Collect user data, schedule appointments, or complete feedback loops directly inside native WhatsApp popup sheets with zero friction.",
      badge: isAr ? "موصى به" : "Recommended"
    },
    {
      id: "buttons",
      title: isAr ? "الأزرار التفاعلية (Buttons)" : "Quick Buttons",
      desc: isAr 
        ? "أزرار ردود سريعة بضغطة زر (Quick Replies) أو أزرار اتصال وفتح روابط خارجية (CTA) تظهر منسقة تحت فقاعة الرسالة." 
        : "Display action items like direct web links, quick response selections, or phone dialing buttons underneath your main text bubbles.",
      badge: null
    },
    {
      id: "lists",
      title: isAr ? "قوائم الخيارات المنسدلة (Lists)" : "List Selection Menus",
      desc: isAr 
        ? "قائمة أنيقة ومنبثقة تحتوي على حتى 10 خيارات مقسمة، تسمح للعميل بالاختيار بسهولة بدلاً من كتابة الأرقام يدوياً." 
        : "Clean dropdown style menu listing up to 10 choices grouped under custom headers, making choice selection instant.",
      badge: null
    },
    {
      id: "media",
      title: isAr ? "الوسائط الغنية والملفات" : "Rich Media & Documents",
      desc: isAr 
        ? "دعم كامل وموثق لإرسال الصور، الفيديوهات التفاعلية، التسجيلات الصوتية، ومستندات الـ PDF (مثل الفواتير الإلكترونية) بحجم كامل." 
        : "Broadcast high-resolution images, video files, audio instructions, or corporate PDF invoices directly inside the thread.",
      badge: null
    }
  ];

  // Datasets for Unofficial Web API
  const unofficialTypes = [
    {
      id: "text",
      title: isAr ? "الرسائل النصية البسيطة" : "Standard Text Messages",
      desc: isAr 
        ? "إرسال نصوص عادية مع دعم كامل للإيموجي، تنسيقات الخطوط (بولد، مائل)، وتأثيرات الكتابة." 
        : "Send text strings with full unicode emoji support, standard markdown formatting (bold, italic), and spacing adjustments.",
      badge: null
    },
    {
      id: "media_web",
      title: isAr ? "الصور والملفات الاقتصادية" : "Web Media Attachments",
      desc: isAr 
        ? "إرسال الصور والملفات بتمرير مباشر عبر المتصفح ومحاكاة الجلسة." 
        : "Send images, audio files, and PDFs directly by referencing static links or local uploads through active session simulators.",
      badge: null
    },
    {
      id: "link",
      title: isAr ? "روابط مع معاينة ذكية" : "Links with Previews",
      desc: isAr 
        ? "إرسال روابط لموقعك أو متجرك تظهر تلقائياً مع صورة المعاينة، العنوان، والوصف المختصر لرفع نسبة النقر." 
        : "Share website URLs that automatically generate rich previews (image, title, description) to boost user click rates.",
      badge: null
    }
  ];

  const activeTypeList = activeTab === "official" ? officialTypes : unofficialTypes;
  const activeTypeData = activeTypeList.find(t => t.id === activeType) || activeTypeList[0];

  // Carousel product cards for mock phone
  const carouselProducts = [
    { nameAr: "حذاء رياضي برو", nameEn: "Pro Running Shoes", descAr: "مريح للجري الطويل ومقاوم للصدمات", descEn: "Engineered for maximum long-run comfort", price: "49$", image: "👟" },
    { nameAr: "ساعة رياضية ذكية", nameEn: "Fit Smartwatch v2", descAr: "حساب السعرات، دقات القلب والنوم", descEn: "Track heart rate, workouts & recovery", price: "79$", image: "⌚" },
    { nameAr: "حقيبة تمارين مقاومة للمياه", nameEn: "Waterproof Gym Bag", descAr: "جيوب منفصلة للأحذية والملابس", descEn: "Separate compartments for gear", price: "29$", image: "🎒" }
  ];

  const handleFlowSubmit = (e) => {
    e.preventDefault();
    setFlowStep("success");
    setTimeout(() => {
      setFlowStep("closed");
      // Add custom message to chat log simulating success
      setQuickReplies(prev => [
        ...prev, 
        { 
          sender: "user", 
          text: isAr ? `✅ تم إرسال الاستمارة بنجاح (الاسم: ${flowData.name})` : `✅ Form submitted successfully (Name: ${flowData.name})`
        }
      ]);
    }, 2000);
  };

  return (
    <div className="py-12 transition-theme min-h-[80vh]">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-black tracking-wider text-brand-purple dark:text-brand-violet uppercase font-alexandria bg-brand-purple/10 px-3.5 py-1 rounded-full">
          {isAr ? "معاينة أشكال وقوالب الرسائل" : "Visualizing WhatsApp Layouts"}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black font-alexandria text-gray-900 dark:text-white mt-4 mb-4 leading-tight">
          {isAr ? "قالب لكل غرض: استعرض تفاصيل رسائلك" : "Supported WhatsApp Message Layouts"}
        </h1>
        <p className="text-sm sm:text-base text-gray-550 dark:text-gray-400 font-alexandria leading-relaxed">
          {isAr 
            ? "نطاق واسع من أنواع الرسائل المعتمدة والمبهرة للعملاء. اختبر كيف تظهر الرسائل على هواتف عملائك عبر المحاكي المباشر."
            : "Explore our rich layouts. Select a message type and preview exactly how it appears on your customers' smartphones."}
        </p>
      </div>

      {/* Main Tab Selector (Official vs Unofficial) */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-2xl bg-gray-200/60 dark:bg-gray-900/60 p-1.5 border border-gray-250 dark:border-gray-800">
          <button
            onClick={() => handleSelectTab("official")}
            className={`rounded-xl px-6 py-3 text-xs sm:text-sm font-bold font-alexandria transition-all cursor-pointer ${
              activeTab === "official"
                ? "bg-white dark:bg-gray-850 text-emerald-600 dark:text-emerald-450 shadow-md scale-[1.01]"
                : "text-gray-500 dark:text-gray-450 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            {isAr ? "الربط الرسمي (Meta Cloud API)" : "Meta Official API"}
          </button>
          <button
            onClick={() => handleSelectTab("unofficial")}
            className={`rounded-xl px-6 py-3 text-xs sm:text-sm font-bold font-alexandria transition-all cursor-pointer ${
              activeTab === "unofficial"
                ? "bg-white dark:bg-gray-850 text-indigo-650 dark:text-indigo-400 shadow-md scale-[1.01]"
                : "text-gray-500 dark:text-gray-450 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            {isAr ? "الربط الاقتصادي (Web API)" : "Budget Web API"}
          </button>
        </div>
      </div>

      {/* Content Grid: Left List, Right Phone Mockup */}
      <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch px-4">
        
        {/* Left Side: Layout types cards list */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <h3 className="text-lg font-black font-alexandria text-gray-900 dark:text-white text-start mb-2">
            {isAr ? "اختر نوع القالب للمعاينة:" : "Select message type to preview:"}
          </h3>
          
          <div className="flex flex-col gap-3.5">
            {activeTypeList.map((type) => {
              const isSelected = type.id === activeType;
              return (
                <div
                  key={type.id}
                  onClick={() => handleSelectType(type.id)}
                  className={`rounded-2xl border p-5 text-start cursor-pointer transition-all duration-300 relative overflow-hidden ${
                    isSelected
                      ? activeTab === "official"
                        ? "bg-emerald-500/5 border-emerald-500 shadow-md scale-[1.01]"
                        : "bg-indigo-500/5 border-indigo-500 shadow-md scale-[1.01]"
                      : "border-gray-200 dark:border-gray-850 bg-white/40 dark:bg-gray-900/40 hover:bg-gray-50/50 dark:hover:bg-gray-850/30"
                  }`}
                >
                  {/* Badge */}
                  {type.badge && (
                    <span className="absolute top-2 left-3 rounded-full bg-brand-purple/10 text-brand-purple dark:text-brand-violet text-[9px] font-black font-alexandria px-2 py-0.5">
                      {type.badge}
                    </span>
                  )}
                  
                  <h4 className="text-sm sm:text-base font-black font-alexandria text-gray-900 dark:text-white mb-1.5 flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${isSelected ? (activeTab === "official" ? "bg-emerald-500" : "bg-indigo-500") : "bg-gray-300 dark:bg-gray-700"}`} />
                    {type.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-550 dark:text-gray-400 leading-relaxed font-alexandria font-normal">
                    {type.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: High fidelity WhatsApp Phone Mockup */}
        <div className="lg:col-span-6 flex items-center justify-center">
          <div className="relative w-[340px] h-[640px] bg-gray-950 rounded-[45px] border-[10px] border-gray-900 shadow-2xl overflow-hidden flex flex-col font-sans select-none">
            
            {/* Phone Speaker Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-40 flex items-center justify-center">
              <div className="w-10 h-1 bg-gray-850 rounded-full" />
            </div>

            {/* WhatsApp Phone Header */}
            <div className="bg-[#008069] dark:bg-[#202c33] text-white pt-8 pb-3 px-4 flex items-center justify-between shadow-md shrink-0 relative z-30">
              <div className="flex items-center gap-2.5">
                <ArrowLeft className="h-4.5 w-4.5 cursor-pointer" />
                {/* Simulated Contact Avatar */}
                <div className="h-9 w-9 rounded-full bg-emerald-100 flex items-center justify-center text-[#008069] font-black text-xs">
                  WA
                </div>
                <div>
                  <h4 className="text-xs font-black tracking-wide text-start">CloudWA Sandbox</h4>
                  <span className="text-[9px] text-emerald-100 block text-start">online</span>
                </div>
              </div>
              <div className="flex items-center gap-3 opacity-80">
                <Smartphone className="h-4 w-4" />
              </div>
            </div>

            {/* WhatsApp Chat Body Wallpaper container */}
            <div className="flex-1 bg-[#efeae2] dark:bg-[#0b141a] p-4 overflow-y-auto flex flex-col justify-end gap-3.5 relative">
              {/* Subtle background doodle watermark overlay */}
              <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.015] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

              {/* Initial welcome system bubble */}
              <div className="self-center bg-yellow-100 dark:bg-yellow-950/20 text-[#6f610d] dark:text-yellow-500/80 text-[9px] font-bold px-3 py-1 rounded-lg text-center max-w-[85%] shadow-sm relative z-10">
                {isAr 
                  ? "🔒 المحادثات مشفرة تماماً. اضغط على أزرار المعاينة لاختبار التفاعل." 
                  : "🔒 Messages are encrypted. Click buttons below to interact."}
              </div>

              {/* Incoming Message Bubble (System template sender) */}
              <div className="self-start max-w-[85%] bg-white dark:bg-[#202c33] text-gray-900 dark:text-white rounded-2xl rounded-tl-none p-3 shadow-md relative z-10 flex flex-col gap-2">
                
                {/* 1. Carousel Layout Render */}
                {activeType === "carousel" && (
                  <div className="w-[240px] flex flex-col gap-2 overflow-hidden">
                    {/* The Swipable Product Card */}
                    <div className="rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#111b21] overflow-hidden flex flex-col">
                      <div className="h-28 bg-gray-200 dark:bg-gray-900 flex items-center justify-center text-5xl relative">
                        <span>{carouselProducts[carouselIndex].image}</span>
                        {/* Pagination arrow buttons */}
                        <button 
                          onClick={() => setCarouselIndex(p => Math.max(0, p - 1))}
                          disabled={carouselIndex === 0}
                          className="absolute left-1.5 h-6 w-6 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 flex items-center justify-center disabled:opacity-40"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => setCarouselIndex(p => Math.min(carouselProducts.length - 1, p + 1))}
                          disabled={carouselIndex === carouselProducts.length - 1}
                          className="absolute right-1.5 h-6 w-6 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 flex items-center justify-center disabled:opacity-40"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <div className="p-3 text-start">
                        <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                          {carouselProducts[carouselIndex].price}
                        </span>
                        <h4 className="text-xs font-black text-gray-900 dark:text-white mt-1.5 mb-1 leading-tight">
                          {isAr ? carouselProducts[carouselIndex].nameAr : carouselProducts[carouselIndex].nameEn}
                        </h4>
                        <p className="text-[10px] text-gray-500 leading-tight">
                          {isAr ? carouselProducts[carouselIndex].descAr : carouselProducts[carouselIndex].descEn}
                        </p>
                      </div>
                    </div>

                    {/* Template CTA buttons inside card */}
                    <div className="flex flex-col gap-1.5 mt-1 border-t border-gray-100 dark:border-gray-800/80 pt-2">
                      <button 
                        onClick={() => setQuickReplies(prev => [...prev, { sender: "user", text: isAr ? `🛒 شراء: ${carouselProducts[carouselIndex].nameAr}` : `🛒 Purchase: ${carouselProducts[carouselIndex].nameEn}` }])}
                        className="w-full text-center text-xs font-black text-[#00a884] bg-emerald-500/5 dark:bg-emerald-500/10 py-2 rounded-xl cursor-pointer"
                      >
                        {isAr ? "إضافة للسلة وشراء" : "Add to Cart"}
                      </button>
                      <a 
                        href="https://aquadic.com" 
                        target="_blank" 
                        rel="noreferrer"
                        className="w-full text-center text-xs font-bold text-gray-600 dark:text-gray-350 border border-gray-150 dark:border-gray-750 py-2 rounded-xl"
                      >
                        {isAr ? "تفاصيل إضافية" : "More details"}
                      </a>
                    </div>
                    {/* Pagination indicators */}
                    <div className="flex justify-center gap-1.5 mt-1">
                      {carouselProducts.map((_, i) => (
                        <span key={i} className={`h-1.5 w-1.5 rounded-full transition-all ${carouselIndex === i ? "bg-[#00a884] w-3" : "bg-gray-300 dark:bg-gray-700"}`} />
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. Flows Layout Render */}
                {activeType === "flows" && (
                  <div className="w-[240px] flex flex-col text-start gap-2">
                    <div className="text-xs font-black text-gray-900 dark:text-white leading-tight">
                      {isAr ? "📅 تأكيد استمارة الاستشارة" : "📅 Booking Consultation Form"}
                    </div>
                    <p className="text-[11px] text-gray-500 leading-relaxed">
                      {isAr 
                        ? "يرجى تعبئة حقول الخدمة المطلوبة والمواعيد لتأكيد موعد استشارتك المجانية." 
                        : "Please complete the brief details inside the flow popup to schedule your engineering session."}
                    </p>
                    
                    {/* Native Flow Action Button */}
                    <button
                      onClick={() => setFlowStep("form")}
                      className="w-full text-center text-xs font-black text-white bg-[#00a884] hover:bg-[#009675] py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <Smartphone className="h-4 w-4" />
                      <span>{isAr ? "تعبئة البيانات (Flow)" : "Fill Details (Flow)"}</span>
                    </button>
                  </div>
                )}

                {/* 3. Buttons Layout Render */}
                {activeType === "buttons" && (
                  <div className="w-[240px] flex flex-col text-start gap-2">
                    <p className="text-xs text-gray-800 dark:text-gray-200 leading-relaxed">
                      {isAr 
                        ? "مرحباً بك! تواصل معنا واكتشف قوة الواتساب. اضغط على خيار سريع أو افتح الموقع." 
                        : "Welcome to CloudWA. Explore Meta official integration. Dial our support or open official domain below."}
                    </p>
                    
                    {/* Buttons List */}
                    <div className="flex flex-col gap-1.5 border-t border-gray-150 dark:border-gray-800 pt-2.5 mt-1.5">
                      <button
                        onClick={() => setQuickReplies(prev => [...prev, { sender: "user", text: isAr ? "📞 اتصال بالدعم الفني" : "📞 Call support" }])}
                        className="w-full text-center text-xs font-black text-[#00a884] py-2 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-xl cursor-pointer"
                      >
                        📞 {isAr ? "اتصال بالدعم" : "Call Support"}
                      </button>
                      <button
                        onClick={() => setQuickReplies(prev => [...prev, { sender: "user", text: isAr ? "💬 تجربة مميزات البوت" : "💬 Try Chatbot features" }])}
                        className="w-full text-center text-xs font-black text-[#00a884] py-2 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-xl cursor-pointer"
                      >
                        💬 {isAr ? "تجربة البوت" : "Try Bot"}
                      </button>
                    </div>
                  </div>
                )}

                {/* 4. Lists Layout Render */}
                {activeType === "lists" && (
                  <div className="w-[240px] flex flex-col text-start gap-2">
                    <p className="text-xs text-gray-800 dark:text-gray-200 leading-relaxed">
                      {isAr 
                        ? "أهلاً بك عميلنا العزيز. يرجى الضغط على القائمة أدناه واختيار القسم أو الخدمة المطلوبة." 
                        : "Hello. Click the interactive menu below to select your service department."}
                    </p>
                    
                    {selectedListOption && (
                      <div className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-2 mt-1">
                        <span className="text-[10px] font-bold text-gray-400 block">{isAr ? "الخيار المختار:" : "Selected:"}</span>
                        <span className="text-xs font-black text-emerald-500">{selectedListOption}</span>
                      </div>
                    )}

                    {/* Native List Trigger Button */}
                    <button
                      onClick={() => setListState("open")}
                      className="w-full text-center text-xs font-black text-[#00a884] border border-gray-200 dark:border-gray-850 py-2.5 rounded-xl flex items-center justify-center gap-1.5 bg-gray-50/50 dark:bg-gray-900/50 cursor-pointer"
                    >
                      <span>📋 {isAr ? "عرض الخدمات" : "View Options List"}</span>
                    </button>
                  </div>
                )}

                {/* 5. Media Layout Render */}
                {activeType === "media" && (
                  <div className="w-[240px] flex flex-col gap-2">
                    {/* Image Placeholder */}
                    <div className="h-32 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex flex-col items-center justify-center text-center p-2 relative overflow-hidden">
                      <span className="text-4xl">📄</span>
                      <span className="text-[11px] font-black text-gray-800 dark:text-white mt-1">invoice_48291.pdf</span>
                      <span className="text-[9px] text-gray-400">PDF Document - 1.2 MB</span>
                    </div>
                    <p className="text-xs text-start text-gray-800 dark:text-gray-200 leading-relaxed">
                      {isAr 
                        ? "مرفق فاتورة طلبكم رقم #48291 الصادرة إلكترونياً من متجركم." 
                        : "Attached is the order invoice #48291 generated dynamically."}
                    </p>
                  </div>
                )}

                {/* 6. Simple Text (Web API) */}
                {activeType === "text" && (
                  <div className="w-[240px] flex flex-col text-start">
                    <p className="text-xs text-gray-800 dark:text-gray-200 leading-relaxed font-mono">
                      *CloudWA Budget Web Gateway*<br />
                      <br />
                      {isAr 
                        ? "أهلاً بك! هذا مثال لرسالة نصية بسيطة مرسلة عبر مسح الـ QR الويب. تدعم *الخط العريض* و _المائل_ والإيموجي 👍🔥" 
                        : "Hi! This is a standard session text alert supporting *bolding*, _italics_, and unicode emojis 👍🔥"}
                    </p>
                  </div>
                )}

                {/* 7. Media Attachment (Web API) */}
                {activeType === "media_web" && (
                  <div className="w-[240px] flex flex-col gap-2">
                    <div className="h-32 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex flex-col items-center justify-center text-4xl">
                      📷
                    </div>
                    <p className="text-xs text-start text-gray-800 dark:text-gray-200 leading-relaxed">
                      {isAr 
                        ? "تم إرسال صورة إثبات التحويل والشحن بنجاح." 
                        : "Delivery attachment image sent via web gateway."}
                    </p>
                  </div>
                )}

                {/* 8. Link Previews (Web API) */}
                {activeType === "link" && (
                  <div className="w-[240px] flex flex-col gap-2 text-start">
                    {/* Link Card Mockup */}
                    <div className="rounded-xl border border-gray-200 dark:border-gray-850 bg-gray-100/50 dark:bg-gray-900/50 overflow-hidden">
                      <div className="h-20 bg-indigo-500/15 flex items-center justify-center text-3xl">
                        🚀
                      </div>
                      <div className="p-2 border-t border-gray-200/50 dark:border-gray-800">
                        <span className="text-[8px] font-bold text-gray-400 block uppercase">cloudwa.net</span>
                        <h5 className="text-[10px] font-black text-gray-850 dark:text-white leading-tight">منصة CloudWA | ربط وأتمتة الواتساب</h5>
                        <p className="text-[9px] text-gray-450 mt-0.5 line-clamp-2">بوابة المطورين وأصحاب الأعمال المتكاملة للربط.</p>
                      </div>
                    </div>
                    <a href="https://cloudwa.net" target="_blank" rel="noreferrer" className="text-[10px] text-[#00a884] underline block">
                      https://cloudwa.net
                    </a>
                  </div>
                )}

                {/* Message Timestamp */}
                <span className="self-end text-[8px] text-gray-400 text-right mt-1">10:14 PM ✓✓</span>
              </div>

              {/* Outgoing Replies sent by user simulation */}
              {quickReplies.map((reply, i) => (
                <div key={i} className="self-end max-w-[85%] bg-[#d9fdd3] dark:bg-[#005c4b] text-gray-900 dark:text-white rounded-2xl rounded-tr-none p-3 shadow-md relative z-10 flex flex-col text-start">
                  <p className="text-xs leading-relaxed">{reply.text}</p>
                  <span className="self-end text-[8px] text-gray-400 dark:text-emerald-200 mt-1">10:15 PM ✓✓</span>
                </div>
              ))}

            </div>

            {/* Simulated Chat Input Bar */}
            <div className="bg-[#f0f2f5] dark:bg-[#1f2c34] p-3 flex items-center gap-2 border-t border-gray-200 dark:border-gray-800 shrink-0 z-30">
              <div className="flex-1 bg-white dark:bg-[#2a3942] rounded-xl px-3 py-2 text-[10px] text-gray-400 text-start">
                {isAr ? "كتابة رسالة..." : "Type a message..."}
              </div>
              <div className="h-8 w-8 rounded-full bg-[#00a884] flex items-center justify-center text-white cursor-pointer">
                <Send className="h-4 w-4" />
              </div>
            </div>

            {/* Overlay Simulated WhatsApp Flow Sheet */}
            {flowStep === "form" && (
              <div className="absolute inset-0 bg-black/60 z-50 flex flex-col justify-end p-0 animate-fade-in">
                {/* Simulated native bottom sheet */}
                <div className="bg-white dark:bg-[#1f2c34] rounded-t-3xl p-6 flex flex-col gap-4 text-start scale-up">
                  
                  {/* Sheet Header */}
                  <div className="flex items-center justify-between border-b border-gray-150 dark:border-gray-800 pb-3">
                    <h4 className="text-xs sm:text-sm font-black text-gray-900 dark:text-white font-alexandria">
                      {isAr ? "📝 استمارة استشارة CloudWA" : "📝 CloudWA Consult Form"}
                    </h4>
                    <button 
                      onClick={() => setFlowStep("closed")}
                      className="text-xs text-gray-400 hover:text-black dark:hover:text-white font-bold"
                    >
                      {isAr ? "إلغاء" : "Cancel"}
                    </button>
                  </div>
                  
                  {/* Sheet Form */}
                  <form onSubmit={handleFlowSubmit} className="flex flex-col gap-3">
                    <div>
                      <label className="text-[10px] font-bold text-gray-400 block mb-1">
                        {isAr ? "الاسم الكريم:" : "Your Name:"}
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder={isAr ? "مثال: أحمد محمد" : "e.g. John Doe"}
                        value={flowData.name} 
                        onChange={(e) => setFlowData({...flowData, name: e.target.value})}
                        className="w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 px-3 py-2.5 text-xs text-gray-800 dark:text-white font-alexandria outline-none"
                      />
                    </div>
                    
                    <div>
                      <label className="text-[10px] font-bold text-gray-400 block mb-1">
                        {isAr ? "تاريخ الاستشارة المفضّل:" : "Preferred Date:"}
                      </label>
                      <input 
                        type="date" 
                        required
                        value={flowData.date} 
                        onChange={(e) => setFlowData({...flowData, date: e.target.value})}
                        className="w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 px-3 py-2.5 text-xs text-gray-800 dark:text-white font-alexandria outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full text-center text-xs font-black text-white bg-[#00a884] hover:bg-[#009675] py-3 rounded-xl mt-2 cursor-pointer"
                    >
                      {isAr ? "إرسال وتأكيد الموعد" : "Send & Confirm Booking"}
                    </button>
                  </form>

                </div>
              </div>
            )}

            {/* Overlay Simulated Flow Success Sheet */}
            {flowStep === "success" && (
              <div className="absolute inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
                <div className="bg-white dark:bg-[#1f2c34] rounded-3xl p-6 text-center max-w-[280px] flex flex-col items-center gap-3 shadow-2xl scale-up">
                  <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-950/20 text-[#00a884] flex items-center justify-center">
                    <Check className="h-6 w-6 stroke-[3px]" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-black text-gray-900 dark:text-white font-alexandria">
                    {isAr ? "تم التأكيد بنجاح!" : "Confirmed Successfully!"}
                  </h4>
                  <p className="text-[10px] text-gray-450 leading-relaxed">
                    {isAr ? "تم إرسال ردك تلقائياً لغرفة الدردشة الجارية." : "Your response has been sent back to the chat thread."}
                  </p>
                </div>
              </div>
            )}

            {/* Overlay Simulated WhatsApp List Menu Sheet */}
            {listState === "open" && (
              <div className="absolute inset-0 bg-black/60 z-50 flex flex-col justify-end p-0 animate-fade-in">
                {/* Simulated list menu sheet */}
                <div className="bg-white dark:bg-[#1f2c34] rounded-t-3xl p-4 flex flex-col gap-3 text-start scale-up max-h-[70%] overflow-y-auto">
                  
                  <div className="flex items-center justify-between border-b border-gray-150 dark:border-gray-800 pb-2">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider">{isAr ? "قائمة الخدمات المتاحة" : "Available Services Menu"}</span>
                    <button 
                      onClick={() => setListState("closed")}
                      className="text-xs text-gray-400 hover:text-black dark:hover:text-white font-bold"
                    >
                      ✕
                    </button>
                  </div>

                  {/* List Options */}
                  <div className="flex flex-col gap-1">
                    {[
                      { title: isAr ? "دعم الحسابات الرسمية" : "Official Accounts Support", desc: isAr ? "مساعدة في توثيق ميتا بيزنس" : "Meta verification aid" },
                      { title: isAr ? "الربط البرمجي وAPI" : "API Integration Helper", desc: isAr ? "مساعدة في ربط متجرك الخاص" : "E-commerce integration aid" },
                      { title: isAr ? "إدارة الفوتات والرد الآلي" : "AI Chatbot Configs", desc: isAr ? "إعداد ردود الذكاء الاصطناعي" : "OpenAI ChatGPT setups" }
                    ].map((opt, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          setSelectedListOption(opt.title);
                          setListState("closed");
                          setQuickReplies(prev => [...prev, { sender: "user", text: `📋 اختيار: ${opt.title}` }]);
                        }}
                        className="p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 border border-transparent hover:border-gray-150 dark:hover:border-gray-800 cursor-pointer transition-colors"
                      >
                        <h5 className="text-xs font-black text-gray-800 dark:text-white leading-tight">{opt.title}</h5>
                        <p className="text-[9px] text-gray-400 mt-0.5">{opt.desc}</p>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            )}

          </div>
        </div>

      </div>

      {/* Direct link comparison callout banner */}
      <div className="mt-16 max-w-4xl mx-auto px-4">
        <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-gray-900/40 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-start">
          <div className="max-w-xl">
            <h4 className="text-lg font-black font-alexandria text-gray-900 dark:text-white mb-2">
              {isAr ? "هل تريد تفعيل هذه الميزات الرائعة لعملك؟" : "Want to enable these layouts for your store?"}
            </h4>
            <p className="text-xs sm:text-sm text-gray-550 dark:text-gray-400 font-alexandria leading-relaxed">
              {isAr 
                ? "تفعيل الباقة الرسمية يمنحك دعماً كاملاً لـ WhatsApp Flows والألبومات الدوارة، مما يضاعف مبيعاتك ويسهل تفاعل العملاء."
                : "Official subscription unlocks interactive flows and swipable carousels, transforming your customer engagement channels."}
            </p>
          </div>
          <a
            href="https://wa.me/201101782890"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold font-alexandria text-xs sm:text-sm px-6 py-4 shadow-md shadow-emerald-600/20 hover:scale-[1.01] transition-all whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <svg className="h-4 w-4 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.725-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.516 0 10.005-4.486 10.008-10.007.001-2.673-1.036-5.186-2.92-7.071C16.471 1.64 13.968.602 11.3.602c-5.524 0-10.016 4.487-10.02 10.01 0 1.57.433 3.097 1.253 4.453l-.974 3.56 3.65-.959z"/>
            </svg>
            {isAr ? "كلمنا على واتساب الآن" : "Chat with Us on WhatsApp"}
          </a>
        </div>
      </div>

    </div>
  );
}
