import type { Metadata } from "next";
import { Fredoka, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";

const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

export const metadata: Metadata = {
  title: "Raki Albani | ~ Portofolio ~",
  description: "Portfolio of Raki Albani Badrawi, Front-End Developer & UI/UX Designer bridging design and code.",
  keywords: ["Front-End Developer", "UI/UX Designer", "Portfolio", "Raki Albani Badrawi", "Next.js", "React", "Tailwind CSS"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fredoka.className} ${fredoka.variable} ${caveat.variable} antialiased min-h-screen bg-background text-foreground transition-colors duration-300`}>
        <CustomCursor />
        <Navbar />
        <div className="md:pl-64 px-6 py-10 md:py-24">
          {children}
        </div>
      </body>
    </html>
  );
}
