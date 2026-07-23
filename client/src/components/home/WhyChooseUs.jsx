import {
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";

const reasons = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Industry Expertise",
    description:
      "Our experienced professionals combine deep technical knowledge with a strong understanding of real-world business challenges.",
  },
  {
    number: "02",
    icon: Users,
    title: "Client-Centric Approach",
    description:
      "We take the time to understand your goals and create solutions that are aligned with your business needs.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Innovation Driven",
    description:
      "We embrace modern technologies and innovative approaches to help businesses stay competitive in a rapidly changing world.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Reliable Partnership",
    description:
      "We believe in building long-term relationships through transparency, reliability, and measurable results.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}

          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Why Choose Us
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              A technology partner
              <span className="block text-blue-400">you can rely on.</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Technology is only valuable when it creates meaningful business
              outcomes. We combine strategy, expertise, and innovation to help
              organizations move forward with confidence.
            </p>

            {/* Quick Benefits */}

            <div className="mt-8 space-y-4">
              {[
                "Business-focused solutions",
                "Transparent communication",
                "Scalable technology",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={19} className="text-blue-400" />

                  <span className="text-sm font-medium text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-9">
              <Button to="/contact" className="group">
                Let's Work Together
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
            </div>
          </div>

          {/* Right Reasons */}

          <div className="grid gap-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.number}
                  className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-900 sm:p-8"
                >
                  <div className="flex gap-5">
                    {/* Number */}

                    <span className="hidden text-sm font-bold text-blue-500/60 sm:block">
                      {reason.number}
                    </span>

                    {/* Icon */}

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    {/* Content */}

                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {reason.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {reason.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Line */}

                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
