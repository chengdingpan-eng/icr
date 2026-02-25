import Link from "next/link";

export interface OfficeCardProps {
  name: string;
  city: string;
  email: string;
  phone: string;
}

export function OfficeCard({ name, city, email, phone }: OfficeCardProps) {
  return (
    <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-800 shadow-sm">
      <h3 className="text-sm font-semibold text-slate-900 md:text-base">{name}</h3>
      <p className="mt-1 text-xs text-slate-500 md:text-sm">{city}</p>
      <div className="mt-3 space-y-1 text-xs md:text-sm">
        <p>
          <span className="text-slate-500">邮箱：</span>
          <Link
            href={`mailto:${email}`}
            className="font-medium text-gs-blue hover:underline underline-offset-4"
          >
            {email}
          </Link>
        </p>
        <p>
          <span className="text-slate-500">电话：</span>
          <span className="font-medium text-slate-900">{phone}</span>
        </p>
      </div>
    </div>
  );
}
