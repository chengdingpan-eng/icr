"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";

const NAV_ITEMS = [
  { label: "首页", href: "/" },
  { label: "服务", href: "/services" },
  { label: "专业领域", href: "/expertise" },
  { label: "为何选择 ICR", href: "/why-icr" },
  { label: "关于我们", href: "/about" },
  { label: "职业发展", href: "/careers" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4">
        {/* Logo 区域 */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative flex items-center">
            <Image
              src="/images/logo1.png"
              alt="ICR Logo"
              width={120}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* 桌面导航 */}
        <nav className="hidden flex-1 items-center justify-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative text-sm font-medium transition-colors ${
                  active
                    ? "text-brand-navy"
                    : "text-slate-600 hover:text-brand-navy"
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`pointer-events-none absolute inset-x-0 -bottom-1 h-0.5 origin-left rounded-full bg-gradient-to-r from-brand-blue to-brand-teal transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* 桌面端 "联系我们" CTA */}
        <div className="hidden items-center md:flex">
          <Link href="/ContactUS">
            <Button className="bg-gradient-to-r from-brand-blue to-brand-teal px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-105">
              联系我们
            </Button>
          </Link>
        </div>

        {/* 移动端菜单 */}
        <div className="flex items-center md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 text-brand-navy hover:bg-slate-100"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-[280px] flex-col border-l border-slate-200 bg-white/95 px-0 pb-0 pt-0"
            >
              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4">
                <SheetTitle className="text-sm font-semibold text-slate-900">
                  ICR 导航
                </SheetTitle>
                <SheetClose asChild>
                  <button className="rounded-full p-1 text-slate-500 hover:bg-slate-100">
                    <X className="h-4 w-4" />
                  </button>
                </SheetClose>
              </div>

              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-2 py-3">
                {NAV_ITEMS.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                          active
                            ? "bg-brand-blue/10 text-brand-navy"
                            : "text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>

              <div className="border-t border-slate-200 px-4 py-4">
                <Link href="/ContactUS" className="block w-full">
                  <Button className="w-full bg-gradient-to-r from-brand-blue to-brand-teal text-sm font-semibold text-white shadow-sm hover:shadow-md hover:brightness-105">
                    联系我们
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
