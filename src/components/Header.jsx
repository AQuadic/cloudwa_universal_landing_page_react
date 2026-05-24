import React from "react";
import { Sun, Moon, Globe, MessageSquare } from "lucide-react";

export default function Header({ lang, setLang, theme, setTheme, t, currentPage, setCurrentPage }) {
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleLanguage = () => {
    setLang(lang === "ar" ? "en" : "ar");
  };

  const menuItems = [
    { id: "home", label: lang === "ar" ? "الرئيسية" : "Home" },
    { id: "problem", label: t.nav.problem },
    { id: "customers", label: lang === "ar" ? "قصص النجاح" : "Success Stories" },
    { id: "tutorials", label: lang === "ar" ? "الشروحات" : "Tutorials" },
    { id: "calculator", label: t.nav.calculator },
    { id: "pricing", label: t.nav.pricing },
    { id: "faq", label: t.nav.faq },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    if (id === "home") {
      setCurrentPage("home");
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.location.hash = "";
      return;
    }
    if (id === "customers") {
      setCurrentPage("customers");
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.location.hash = "#stories";
      return;
    }
    if (id === "tutorials") {
      setCurrentPage("tutorials");
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.location.hash = "#tutorials";
      return;
    }

    // Otherwise scroll to the element on Home page
    setCurrentPage("home");
    window.location.hash = `#${id}`;
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-theme border-b border-gray-200/50 bg-white/80 dark:bg-gray-900/80 dark:border-gray-800/50 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-3 group"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-purple to-brand-green text-white shadow-md shadow-brand-purple/20 transition-transform group-hover:scale-105">
            <MessageSquare className="h-6 w-6" />
          </div>
          <span className="font-outfit text-2xl font-black tracking-tight bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 dark:from-white dark:via-gray-100 dark:to-gray-200 bg-clip-text text-transparent">
            CloudWA
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex items-center gap-6">
          {menuItems.map((item) => {
            const isActive = 
              (item.id === "home" && currentPage === "home") ||
              (item.id === "customers" && currentPage === "customers") ||
              (item.id === "tutorials" && currentPage === "tutorials");
              
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`font-alexandria font-medium text-xs transition-colors ${
                  isActive
                    ? "text-brand-purple dark:text-brand-violet font-black"
                    : "text-gray-600 dark:text-gray-300 hover:text-brand-purple dark:hover:text-brand-violet"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Actions (Language, Theme, CTA) */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 rounded-lg border border-gray-200 dark:border-gray-850 px-3 py-2 text-xs font-semibold font-alexandria text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            aria-label="Switch Language"
          >
            <Globe className="h-4 w-4 text-brand-purple dark:text-brand-violet" />
            <span>{lang === "ar" ? "English" : "عربي"}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-lg border border-gray-200 dark:border-gray-850 p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-amber-500" />
            ) : (
              <Moon className="h-4 w-4 text-gray-550" />
            )}
          </button>

          {/* Nav CTA */}
          <a
            href="#pricing"
            onClick={(e) => handleNavClick(e, "pricing")}
            className="hidden sm:inline-flex rounded-full bg-gradient-to-r from-brand-purple to-brand-violet px-5 py-2.5 text-xs font-bold font-alexandria text-white shadow-md shadow-brand-purple/20 hover:shadow-lg hover:shadow-brand-purple/30 hover:scale-[1.02] transition-all"
          >
            {t.nav.startNow}
          </a>
        </div>
      </div>
    </header>
  );
}
