import React, { useState } from "react";
import { ArrowRight, ArrowLeft, RotateCcw, CheckCircle, ShieldCheck, Zap } from "lucide-react";

export default function Wizard({ lang, t }) {
  const [step, setStep] = useState(0); // 0 to 2 for questions, 3 for result
  const [answers, setAnswers] = useState({
    docs: null,
    volume: null,
    budget: null,
  });

  const handleSelectOption = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      setStep(3); // Go to results
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleRestart = () => {
    setAnswers({ docs: null, volume: null, budget: null });
    setStep(0);
  };

  // Logic to determine recommendation
  // Official recommended if: has docs AND (either high volume OR prefers meta cost structure)
  // Unofficial recommended if: does NOT have docs OR prefers flat budget structure
  const getRecommendation = () => {
    if (answers.docs === "yes" && (answers.volume === "high" || answers.budget === "meta")) {
      return "official";
    }
    return "unofficial";
  };

  const currentQuestion = t.wizard.questions[step];
  const isOptionSelected = currentQuestion ? answers[currentQuestion.id] !== null : false;
  const recommendationKey = step === 3 ? getRecommendation() : null;
  const recommendedData = recommendationKey ? t.wizard.recommendations[recommendationKey] : null;

  return (
    <section id="wizard" className="py-20 bg-gray-50/50 dark:bg-gray-900/30">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-black font-alexandria text-gray-900 dark:text-white mb-4">
            {t.wizard.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-alexandria leading-relaxed">
            {t.wizard.subtitle}
          </p>
        </div>

        {/* Wizard Container */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 shadow-xl shadow-gray-100/10 transition-all duration-300">
          
          {/* Progress bar */}
          {step < 3 && (
            <div className="mb-10">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-gray-400 font-alexandria">
                  {lang === "ar" ? `السؤال ${step + 1} من 3` : `Question ${step + 1} of 3`}
                </span>
                <span className="text-xs font-black text-brand-purple font-outfit">
                  {Math.round(((step + 1) / 3) * 100)}%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-brand-purple to-brand-violet transition-all duration-500"
                  style={{ width: `${((step + 1) / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Question Panel */}
          {step < 3 ? (
            <div className="min-h-[220px] flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-alexandria text-gray-900 dark:text-white mb-6">
                  {currentQuestion.text}
                </h3>
                <div className="grid gap-4">
                  {currentQuestion.options.map((opt) => {
                    const isSelected = answers[currentQuestion.id] === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => handleSelectOption(currentQuestion.id, opt.value)}
                        className={`w-full text-right sm:text-start rounded-2xl p-5 border text-sm sm:text-base font-semibold font-alexandria transition-all ${
                          isSelected
                            ? "bg-gradient-to-br from-brand-purple/10 to-brand-violet/5 border-brand-purple text-brand-purple dark:text-brand-violet scale-[1.01]"
                            : "border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 bg-white/40 dark:bg-gray-950/40 hover:bg-gray-50 dark:hover:bg-gray-900/60"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{opt.text}</span>
                          {isSelected && <CheckCircle className="h-5 w-5 text-brand-purple dark:text-brand-violet shrink-0" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-100 dark:border-gray-800/80">
                <button
                  onClick={handlePrev}
                  disabled={step === 0}
                  className={`flex items-center gap-2 font-bold font-alexandria text-sm py-2 px-4 rounded-lg transition-colors ${
                    step === 0
                      ? "text-gray-300 dark:text-gray-750 cursor-not-allowed"
                      : "text-gray-600 dark:text-gray-400 hover:text-brand-purple"
                  }`}
                >
                  {lang === "ar" ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
                  <span>{t.wizard.prevBtn}</span>
                </button>
                <button
                  onClick={handleNext}
                  disabled={!isOptionSelected}
                  className={`flex items-center gap-2 font-bold font-alexandria text-sm py-3 px-6 rounded-xl transition-all shadow-md shadow-brand-purple/10 ${
                    isOptionSelected
                      ? "bg-gradient-to-r from-brand-purple to-brand-violet text-white hover:shadow-lg hover:shadow-brand-purple/20 hover:scale-[1.02]"
                      : "bg-gray-200 dark:bg-gray-850 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <span>{t.wizard.nextBtn}</span>
                  {lang === "ar" ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                </button>
              </div>
            </div>
          ) : (
            // Results Panel
            <div className="text-center py-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 mb-6 animate-pulse">
                {recommendationKey === "official" ? <ShieldCheck className="h-9 w-9" /> : <Zap className="h-9 w-9" />}
              </div>
              <h4 className="text-sm font-bold tracking-wider text-brand-purple dark:text-brand-violet uppercase mb-2 font-alexandria">
                {t.wizard.resultTitle}
              </h4>
              <h3 className="text-2xl sm:text-3xl font-black font-alexandria text-gray-900 dark:text-white mb-2">
                {recommendedData.title}
              </h3>
              <div className="inline-block px-3 py-1 text-xs font-bold font-alexandria rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-450 border border-emerald-500/20 mb-6">
                {recommendedData.badge}
              </div>
              <div className="max-w-xl mx-auto rounded-2xl bg-white/40 dark:bg-gray-950/40 border border-gray-200/50 dark:border-gray-800/80 p-6 text-sm font-alexandria leading-relaxed text-gray-600 dark:text-gray-300 mb-8">
                <span className="font-bold text-gray-900 dark:text-white block mb-2">{t.wizard.resultReason}</span>
                {recommendedData.desc}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={recommendationKey === "official" ? "https://calendly.com/aquadicsoftwares/30min" : "https://cloudwa.net/console/login"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-violet text-white font-bold font-alexandria text-sm shadow-lg shadow-brand-purple/20 hover:shadow-xl hover:shadow-brand-purple/35 hover:scale-[1.02] transition-all text-center"
                >
                  {recommendedData.btn}
                </a>
                <button
                  onClick={handleRestart}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-bold font-alexandria text-sm hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>{t.wizard.restartBtn}</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
