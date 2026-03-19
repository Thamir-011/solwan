import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "سلوان - رفيقك الروحي",
  description: "تطبيق سلوان يساعدك في فهم مشاعرك ويقترح عليك أحاديث نبوية تناسب حالتك النفسية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
