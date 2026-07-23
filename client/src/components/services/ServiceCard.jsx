import {
  ArrowUpRight,
  Cloud,
  Code2,
  Database,
  LineChart,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Button from "../common/Button.jsx";

const iconMap = {
  Cloud,
  Code2,
  Database,
  LineChart,
  Server,
  ShieldCheck,
  Sparkles,
};

export default function ServiceCard({
  service,
}) {
  const Icon =
    iconMap[service.icon] || Sparkles;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50 sm:p-8">
      {/* Decorative Background */}

      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon */}

      <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
        <Icon
          size={26}
          strokeWidth={1.8}
        />
      </div>

      {/* Content */}

      <div className="relative flex flex-1 flex-col">
        <h2 className="mt-7 text-xl font-bold text-slate-900">
          {service.title}
        </h2>

        <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
          {service.shortDescription}
        </p>

        {/* Link */}

        <Button
          to={`/services/${service.slug}`}
          variant="ghost"
          className="mt-6 self-start !px-0 !py-2 text-blue-600 hover:bg-transparent"
        >
          Explore Service

          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </Button>
      </div>
    </article>
  );
}