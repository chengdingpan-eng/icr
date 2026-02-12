"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();
  const pathname = usePathname();

  const navItems = [
    { label: "home.nav.home", href: "/" },
    { label: "home.nav.services", href: "/services" },
    { label: "home.nav.expertise", href: "/expertise" },
    { label: "home.nav.whyIcr", href: "/why-icr" },
    { label: "home.nav.about", href: "/about" },
    { label: "home.nav.careers", href: "/careers" },
    { label: "home.nav.contact", href: "/ContactUS" },
  ];

  const languages = [
    { code: "en" as const, name: "lang.english" },
    { code: "zh" as const, name: "lang.chinese" },
    { code: "ar" as const, name: "lang.arabic" },
  ];

  return (
    <header
      className="w-full sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur-md"
      dir="ltr"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Logo 区域：保持品牌识别 */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative flex items-center">
              <Image
                src="/images/logo1.png"
                alt="ICR Logo"
                width={120}
                height={120}
                className="h-9 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* 桌面端主导航 */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative border-b-2 border-transparent px-1.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-brand-navy border-brand-blue"
                      : "text-slate-600 hover:text-brand-navy hover:border-brand-blue/80"
                  }`}
                >
                  {t(item.label)}
                </Link>
              );
            })}
          </nav>

          {/* 桌面端语言切换 + 主要 CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* 语言切换器 */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-2.5 py-1 text-slate-500 shadow-sm transition-colors hover:border-brand-blue/60 hover:text-brand-navy"
              >
                <Globe className="h-4 w-4" strokeWidth={1.5} />
                <span className="text-xs font-medium uppercase tracking-wide">
                  {language.toUpperCase()}
                </span>
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white shadow-lg border border-slate-200 overflow-hidden z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                      onClick={() => {
                        changeLanguage(lang.code);
                        setLangMenuOpen(false);
                      }}
                    >
                      <span className="font-medium">{t(lang.name)}</span>
                      {language === lang.code && (
                        <Check className="h-4 w-4 text-brand-blue" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 联系我们 CTA：蓝绿渐变按钮 */}
            <Link href="/ContactUS">
              <Button
                size="sm"
                className="bg-gradient-to-r from-brand-blue to-brand-teal text-white shadow-sm hover:shadow-md hover:brightness-105 px-4 py-2"
              >
                {t("home.nav.contact")}
              </Button>
            </Link>
          </div>

          {/* 移动端菜单 */}
          <div className="flex items-center gap-2 md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 text-brand-navy hover:bg-slate-100"
                >
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-gradient-to-b from-brand-navy to-brand-soft-navy border-l border-white/10 p-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right duration-300"
              >
                {/* 抽屉头部：标题 + 关闭按钮 */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <SheetTitle className="text-lg font-semibold text-white">
                    {t("nav.menu")}
                  </SheetTitle>
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/10 h-9 w-9"
                    >
                      <X size={20} />
                      <span className="sr-only">Close</span>
                    </Button>
                  </SheetClose>
                </div>

                {/* 移动端导航列表 */}
                <nav className="flex flex-col p-6 pb-48 space-y-1 overflow-y-auto max-h-[calc(110vh-280px)]">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <SheetClose asChild key={item.label}>
                        <Link
                          href={item.href}
                          className="group relative flex items-center py-3 px-4 rounded-lg text-sm font-medium text-slate-100 transition-all duration-300 overflow-hidden"
                          onClick={() => setIsOpen(false)}
                        >
                          <span
                            className={`absolute inset-0 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm transition-opacity duration-300 ${
                              isActive
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                            }`}
                          />
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                          <span
                            className={`relative z-10 flex items-center gap-3 ${
                              isActive ? "text-white" : "group-hover:text-white"
                            }`}
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full bg-brand-teal transition-opacity ${
                                isActive
                                  ? "opacity-100"
                                  : "opacity-0 group-hover:opacity-100"
                              }`}
                            />
                            {t(item.label)}
                          </span>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>

                {/* 移动端语言切换区块 */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-gradient-to-t from-brand-navy to-brand-navy/90">
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="h-4 w-4 text-brand-teal" />
                    <span className="text-xs font-semibold text-slate-200 uppercase tracking-wide">
                      {t("nav.language")}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                          language === lang.code
                            ? "bg-white/10 border border-brand-teal/60"
                            : "bg-white/5 border border-white/10 hover:bg-white/10"
                        }`}
                        onClick={() => {
                          changeLanguage(lang.code);
                        }}
                      >
                        <span
                          className={`text-sm font-medium ${
                            language === lang.code
                              ? "text-white"
                              : "text-slate-200"
                          }`}
                        >
                          {t(lang.name)}
                        </span>
                        {language === lang.code && (
                          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-brand-teal">
                            <Check className="h-3 w-3 text-white" strokeWidth={3} />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
