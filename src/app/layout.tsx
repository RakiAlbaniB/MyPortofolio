import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raki Albani Badrawi | Front-End Developer",
  description: "Portfolio of Raki Albani Badrawi, Front-End Developer & UI/UX Designer bridging design and code.",
  keywords: ["Front-End Developer", "UI/UX Designer", "Portfolio", "Raki Albani Badrawi", "Next.js", "React", "Tailwind CSS"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `
    let theme = window.localStorage.getItem('theme')
    if (!theme) {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.className} antialiased min-h-screen bg-background text-foreground transition-colors duration-300`}>
        <ThemeToggle />
        <div className="max-w-3xl mx-auto min-h-screen border-y md:border-y-0 md:border-x border-border px-6 py-16 md:py-24">
          {children}
        </div>
      </body>
    </html>
  );
}
