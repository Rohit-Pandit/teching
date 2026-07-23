import {
  Eye,
  Target,
} from "lucide-react";

import Container from "../common/Container.jsx";

const cards = [
  {
    title: "Our Mission",
    description:
      "To empower businesses with practical and innovative technology solutions that solve real-world challenges and create lasting value.",
    icon: Target,
  },
  {
    title: "Our Vision",
    description:
      "To become a trusted technology partner for organizations looking to innovate, scale, and build a smarter digital future.",
    icon: Eye,
  },
];

export default function MissionVision() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <Container>
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Our Purpose
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Driven by purpose.
            <br />
            Focused on impact.
          </h2>
        </div>

        {/* Cards */}

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 sm:p-10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={27} />
                </div>

                <h3 className="mt-7 text-2xl font-bold text-slate-900">
                  {card.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}