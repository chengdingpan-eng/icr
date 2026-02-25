import type { Metadata } from "next";
import { Geist, Geist_Mono, Merriweather } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const serifDisplay = Merriweather({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "ICR - Insight Consultancy & Research",
  description: "Independent research and advisory firm",
  openGraph: {
    title: "ICR - Insight Consultancy & Research",
    description: "Independent research and advisory firm",
    url: "https://www.icr-me.com",
    siteName: "ICR - Insight Consultancy & Research",
    images: [
      {
        url: "/images/gs_style/gs_home_hero.png",
        width: 1920,
        height: 1080,
        alt: "ICR 中文首页预览图：团队在城市高楼会议室内围绕数据讨论",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICR - Insight Consultancy & Research",
    description: "Independent research and advisory firm",
    images: ["/images/gs_style/gs_home_hero.png"],
  },
  icons: {
    icon: [{ url: "/images/icon.png" }, { url: "/icon.png" }],
    shortcut: "/images/icon.png",
    apple: "/images/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${serifDisplay.variable} antialiased`}
        suppressHydrationWarning
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
