import {
  BriefcaseBusiness,
  CalendarDays,
  Users,
  UserRoundCheck,
} from "lucide-react";

import Container from "../common/Container";

const stats = [
  {
    id: 1,
    value: "10+",
    label: "Years of Experience",
    icon: CalendarDays,
  },
  {
    id: 2,
    value: "100+",
    label: "Projects Delivered",
    icon: BriefcaseBusiness,
  },
  {
    id: 3,
    value: "50+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    id: 4,
    value: "20+",
    label: "Technology Experts",
    icon: UserRoundCheck,
  },
];

export default function StatsSection() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.id}
                className="flex flex-col items-center px-4 text-center"
              >
                {/* Icon */}

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                {/* Value */}

                <p className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  {stat.value}
                </p>

                {/* Label */}

                <p className="mt-2 text-sm font-medium text-slate-500">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}