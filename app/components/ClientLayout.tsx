"use client";

import type { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

/**
 * 新的客户端布局：不再依赖旧的 LanguageContext / i18n 方案，
 * 仅负责渲染站点统一的 Header + Footer 以及页面内容。
 */
export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-4rem)] bg-background">{children}</main>
      <Footer />
    </>
  );
}
