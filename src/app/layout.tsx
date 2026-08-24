import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StarryNightBackground } from "@/components/StarryNightBackground";

import { PageTransition } from "@/components/PageTransition";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Vaibhav Gupta",
  description: "Personal portfolio and technical writing of Vaibhav Gupta — Software Engineer building distributed systems, AI agent platforms, and full-stack applications.",
  keywords: ["Software Engineer", "Vaibhav Gupta", "Distributed Systems", "Java", "Python", "React", "Next.js", "AI Agents", "RAG"],
  authors: [{ name: "Vaibhav Gupta" }],
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0d14] text-slate-100 selection:bg-copper/20 selection:text-copper relative">
        <StarryNightBackground />
        <Header />
        <main className="flex-grow">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
