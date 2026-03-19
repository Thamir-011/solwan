"use client";

import { RotateCcw } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Hadith {
  id: number;
  text: string;
  narrator: string;
  source: string;
}

interface ApiResponse {
  hadith?: Hadith;
  message?: string;
}

export default function Home() {
  const [feeling, setFeeling] = useState("");
  const [hadith, setHadith] = useState<Hadith | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feeling.trim()) return;

    setIsLoading(true);
    setError("");
    setHadith(null);

    try {
      const res = await fetch("/api/get-hadith", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userInput: feeling }),
      });

      const data: ApiResponse = await res.json();

      if (!res.ok) {
        setError(data.message || "حدث خطأ ما");
        return;
      }

      if (data.hadith) {
        setHadith(data.hadith);
      }
    } catch {
      setError("فشل في الاتصال بالخادم");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFeeling("");
    setHadith(null);
    setError("");
  };

  return (
    <div className="h-screen bg-[#F7FEE7] relative flex flex-col">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#65A30D]/10 blur-3xl" />
        <div className="absolute bottom-32 right-16 w-80 h-80 rounded-full bg-[#FDE68A]/40 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-[#D97706]/10 blur-2xl" />
      </div>

      <header className="relative pt-8 pb-6 px-6 text-center shrink-0">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#65A30D] to-[#A3E635] flex items-center justify-center shadow-xl shadow-[#65A30D]/20">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
        </div>
        <h1 className="font-display text-4xl font-bold text-[#365314] mb-2 tracking-tight">
          سلوان
        </h1>
        <p className="font-display text-[#5F6F34] text-base max-w-md mx-auto opacity-80">
          رفيقك الروحي
        </p>
      </header>

      <main className="flex-1 w-150 mx-auto px-6 pb-6 overflow-y-auto">
        {!hadith ? (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="font-display text-xl font-semibold text-[#365314] mb-2">
                كيف تشعر الآن؟
              </h2>
              <p className="font-display text-[#5F6F34] opacity-70 text-sm">
                صف مشاعرك بكلماتك الخاصة، وسنزودك بما يناسبك من أحاديث نبوية
                شريفة
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <textarea
                  value={feeling}
                  onChange={(e) => setFeeling(e.target.value)}
                  placeholder="أشعر بـ..."
                  className="w-full h-36 p-4 pr-12 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-[#BEF264]/50 
                    text-[#365314] font-display text-lg placeholder-[#65A30D]/40 resize-none
                    focus:outline-none focus:border-[#65A30D] focus:ring-4 focus:ring-[#65A30D]/10
                    transition-all duration-300 shadow-lg shadow-[#65A30D]/5"
                  dir="rtl"
                />
                <div className="absolute bottom-3 right-4 text-[#65A30D]/40">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-center font-display text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={!feeling.trim() || isLoading}
                className="w-full py-3.5 bg-linear-to-l from-[#65A30D] to-[#A3E635] text-white font-display 
                  font-semibold text-base rounded-xl shadow-xl shadow-[#65A30D]/20
                  hover:shadow-2xl hover:shadow-[#65A30D]/30 hover:-translate-y-0.5
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0
                  transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="w-5 h-5 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>جاري البحث...</span>
                  </>
                ) : (
                  <>
                    <span>ابحث عن الأحاديث</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 flex justify-center gap-8 text-[#5F6F34]/50">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span className="font-display text-sm select-none">
                  خصوصيتك محفوظة
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-scale-in">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl shadow-[#65A30D]/10 border border-[#BEF264]/30 overflow-hidden">
              <div className="bg-linear-to-l from-[#65A30D] to-[#FDE68A] p-5 text-white">
                <div className="flex items-center justify-between select-none">
                  <span className="font-display text-base opacity-90">
                    حديث نبوي شريف
                  </span>
                  <span className="font-display text-xl">📖</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-center mb-4 select-none">
                  <div className="text-4xl text-[#FDE68A]">❧</div>
                </div>

                <blockquote
                  className="font-arabic text-xl text-[#365314] text-center leading-loose mb-6"
                  dir="rtl"
                >
                  {hadith.text}
                </blockquote>

                <div className="text-center">
                  <span className="inline-block font-display px-3 py-1.5 bg-[#ECFCCB] rounded-full text-[#65A30D] text-sm mb-2">
                    رواه: {hadith.narrator}
                  </span>
                  <div className="block font-display text-[#5F6F34] opacity-70 text-sm">
                    {hadith.source}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={handleReset}
                className="py-2.5 px-6 bg-[#F7FEE7] text-[#65A30D] font-display font-medium rounded-xl
                  hover:bg-[#ECFCCB] transition-colors duration-200 cursor-pointer border border-[#BEF264]/50"
              >
                <RotateCcw />
              </button>
            </div>

            <div className="mt-4 text-center">
              <p className="font-display text-[#5F6F34]/60 text-sm">
                اللهم صل على محمد وعلى آل محمد كما صليت على إبراهيم
              </p>
            </div>
          </div>
        )}
      </main>

      <footer className="text-center py-3 shrink-0 flex justify-center gap-4">
        <Link href="/about" className="font-display text-[#5F6F34]/40 text-xs hover:text-[#65A30D] transition-colors">
          عن التطبيق
        </Link>
        <span className="text-[#5F6F34]/20">|</span>
        <p className="font-display text-[#5F6F34]/40 text-xs">© 2026 سلوان</p>
      </footer>
    </div>
  );
}
