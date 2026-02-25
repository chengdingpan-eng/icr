import Link from "next/link";
import { CtaButton } from "./CtaButton";

/**
 * CareersCTA
 *
 * 招聘页底部冷灰底 CTA 横幅。
 */
export function CareersCTA() {
  return (
    <section className="border-t border-slate-200 bg-slate-100 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="serif-headline text-xl text-foreground md:text-2xl">
            还不确定自己是否匹配某个岗位？
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-700 md:text-base">
            你可以先把简历与兴趣方向发给我们，我们会在未来合适的项目或职位出现时主动与你联系；也欢迎先约一场非正式的线上咖啡聊天，彼此了解期待与节奏。
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 md:flex-row md:items-center">
          <CtaButton href="mailto:info@icr-me.com">发送简历</CtaButton>
          <Link
            href="/ContactUS"
            className="text-sm font-semibold text-gs-blue hover:underline underline-offset-4"
          >
            通过联系我们页面留下信息 →
          </Link>
        </div>
      </div>
    </section>
  );
}
