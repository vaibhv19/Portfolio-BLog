import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vaibhav Gupta | Portfolio & Engineering Writing",
  description: "Personal portfolio and technical writing of Vaibhav Gupta — Software Engineer building distributed systems, AI agent platforms, and full-stack applications.",
  keywords: ["Software Engineer", "Vaibhav Gupta", "Distributed Systems", "Java", "Python", "React", "Next.js", "AI Agents", "RAG"],
  authors: [{ name: "Vaibhav Gupta" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0b0f17] text-slate-100 selection:bg-amber-500/20 selection:text-amber-300">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
