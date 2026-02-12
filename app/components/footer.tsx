"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();
  const isArabic = language === "ar";

  return (
    <footer className="bg-brand-navy text-slate-100" dir="ltr">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-[2fr,1.3fr,1.3fr]">
          {/* 品牌区：Logo + 标语 */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative flex items-center">
                <Image
                  src="/images/logo1.png"
                  alt="ICR Logo"
                  width={110}
                  height={110}
                  className="h-9 w-auto object-contain drop-shadow-sm"
                />
              </div>
            </Link>
            <p className="mt-4 max-w-md text-sm text-slate-200">
              {t("footer.tagline")}
            </p>
          </div>

          {/* 快速导航链接 */}
          <div>
            <h4
              className={`text-xs font-semibold tracking-wide uppercase text-slate-200 ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {t("footer.quicklinks")}
            </h4>
            <ul
              className={`mt-4 grid grid-cols-2 gap-2 text-sm ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              <li>
                <Link
                  href="/services"
                  className="hover:text-brand-teal transition-colors"
                >
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise"
                  className="hover:text-brand-teal transition-colors"
                >
                  {t("nav.expertise")}
                </Link>
              </li>
              <li>
                <Link
                  href="/why-icr"
                  className="hover:text-brand-teal transition-colors"
                >
                  {t("nav.whyicr")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-brand-teal transition-colors"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-brand-teal transition-colors"
                >
                  {t("nav.careers")}
                </Link>
              </li>
              <li>
                <Link
                  href="/ContactUS"
                  className="hover:text-brand-teal transition-colors"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系方式区块 */}
          <div>
            <h4
              className={`text-xs font-semibold tracking-wide uppercase text-slate-200 ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {t("nav.contact")}
            </h4>
            <div
              className={`mt-4 text-sm ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              <a
                href="mailto:info@icr-me.com"
                className="font-medium text-white hover:text-brand-teal transition-colors"
              >
                info@icr-me.com
              </a>
            </div>
            <p
              className={`mt-3 text-xs text-slate-300 ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {t("contact.email.desc")}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-300">
            © 2026 Insight Consultancy &amp; Research. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-200">
            <Link
              href="/privacy"
              className="hover:text-brand-teal transition-colors"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              href="/terms"
              className="hover:text-brand-teal transition-colors"
            >
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
