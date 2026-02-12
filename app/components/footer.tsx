"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
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
                  height={40}
                  className="h-9 w-auto object-contain drop-shadow-sm"
                />
              </div>
            </Link>
            <p className="mt-4 max-w-md text-sm text-slate-200">
              ICR 专注于大数据驱动的研究与咨询，为公共部门与企业提供从研究设计、数据分析到战略落地的一体化支持。
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="text-xs font-semibold tracking-wide text-slate-200">
              快速链接
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <li>
                <Link href="/" className="hover:text-brand-teal transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-brand-teal transition-colors"
                >
                  服务
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise"
                  className="hover:text-brand-teal transition-colors"
                >
                  专业领域
                </Link>
              </li>
              <li>
                <Link
                  href="/why-icr"
                  className="hover:text-brand-teal transition-colors"
                >
                  为何选择 ICR
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-brand-teal transition-colors"
                >
                  关于我们
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-brand-teal transition-colors"
                >
                  招聘
                </Link>
              </li>
              <li>
                <Link
                  href="/ContactUS"
                  className="hover:text-brand-teal transition-colors"
                >
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系信息 */}
          <div>
            <h4 className="text-xs font-semibold tracking-wide text-slate-200">
              联系信息
            </h4>
            <div className="mt-4 space-y-3 text-sm">
              <div>
                <div className="text-slate-300">邮箱</div>
                <a
                  href="mailto:info@icr-me.com"
                  className="font-medium text-white hover:text-brand-teal transition-colors"
                >
                  info@icr-me.com
                </a>
              </div>
              <div>
                <div className="text-slate-300">电话（示意）</div>
                <p>+966 (0)11 000 0000</p>
              </div>
              <div>
                <div className="text-slate-300">办公城市（示意）</div>
                <p>利雅得 · 迪拜 · 多哈</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-xs text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Insight Consultancy &amp; Research. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link
              href="/privacy"
              className="hover:text-brand-teal transition-colors"
            >
              隐私政策
            </Link>
            <Link
              href="/terms"
              className="hover:text-brand-teal transition-colors"
            >
              条款与条件
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
