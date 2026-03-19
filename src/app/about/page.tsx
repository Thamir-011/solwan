import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "عن سلوان - رفيقك الروحي",
  description: "تعرف على تطبيق سلوان ومهمته في تقديم الأحاديث النبوية المناسبة لمشاعرك",
};

export default function About() {
  return (
    <div className="h-screen bg-[#F7FEE7] relative flex flex-col overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#65A30D]/10 blur-3xl" />
        <div className="absolute bottom-32 right-16 w-80 h-80 rounded-full bg-[#FDE68A]/40 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-[#D97706]/10 blur-2xl" />
      </div>

      <header className="relative pt-8 pb-4 px-6 text-center shrink-0">
        <Link
          href="/"
          className="absolute right-6 top-8 p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors cursor-pointer"
        >
          <svg
            className="w-5 h-5 text-[#365314]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Link>

        <div className="flex justify-center mb-3">
          <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-[#65A30D] to-[#A3E635] flex items-center justify-center shadow-xl shadow-[#65A30D]/20">
            <svg
              className="w-7 h-7 text-white"
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
        <h1 className="font-display text-3xl font-bold text-[#365314] tracking-tight">
          عن سلوان
        </h1>
      </header>

      <main className="flex-1 w-[400px] mx-auto px-6 pb-6 overflow-y-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl shadow-[#65A30D]/10 border border-[#BEF264]/30 overflow-hidden p-6">
          <div className="space-y-4 text-[#365314] font-display">
            <p className="leading-relaxed">
              سلوان هو تطبيق ذكي يساعدك على فهم مشاعرك ويتقرب منك روحياً من خلال الأحاديث النبوية الشريفة المناسبة لك.
            </p>

            <p className="leading-relaxed">
              عندما تشعر بالحزن، الفرح، الخوف، أو أي مشاعر أخرى، كل ما عليك هو أن تخبرنا كيف تشعر، وسنبحث لك عن حديث نبوي يناسب حالتك.
            </p>

            <p className="leading-relaxed">
              هدفنا هو أن نجعل الحكمة النبوية في متناول يدك، بطريقة عصرية وبسيطة، لتكون رفيقك الروحي في كل لحظة.
            </p>

            <div className="pt-4 border-t border-[#BEF264]/30">
              <h2 className="text-lg font-semibold mb-3 text-[#65A30D]">
                التقنيات المستخدمة
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-[#ECFCCB] text-[#3F6212] rounded-full text-sm">
                  Next.js
                </span>
                <span className="px-3 py-1.5 bg-[#ECFCCB] text-[#3F6212] rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1.5 bg-[#ECFCCB] text-[#3F6212] rounded-full text-sm">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1.5 bg-[#ECFCCB] text-[#3F6212] rounded-full text-sm">
                  OpenAI API
                </span>
                <span className="px-3 py-1.5 bg-[#ECFCCB] text-[#3F6212] rounded-full text-sm">
                  Vercel
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center py-3 shrink-0">
        <p className="font-display text-[#5F6F34]/40 text-xs">© 2026 سلوان</p>
      </footer>
    </div>
  );
}
