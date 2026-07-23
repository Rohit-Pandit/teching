import { ArrowRight, CheckCircle2 } from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";

const highlights = [
  "Experienced technology professionals",
  "Business-focused digital solutions",
  "Scalable and future-ready architecture",
  "Long-term partnership with our clients",
];

export default function AboutSection() {
  return (
    <section className="overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left Visual */}

          <div className="relative">
            {/* Main visual */}

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-900 shadow-2xl">
              {/* Dummy image / visual */}

              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-800 to-slate-950" />

              {/* Decorative circles */}

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />

              <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

              {/* Center content */}

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md">
                    <span className="text-4xl font-bold text-white">
                      T
                    </span>
                  </div>

                  <p className="mt-6 text-2xl font-bold text-white">
                    Technology
                  </p>

                  <p className="mt-2 text-sm text-blue-200">
                    Strategy • Innovation • Growth
                  </p>
                </div>
              </div>

              {/* Floating statistic */}

              <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-slate-950/80 px-6 py-4 shadow-xl backdrop-blur-md">
                <p className="text-2xl font-bold text-white">
                  10+
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Years of Experience
                </p>
              </div>
            </div>

            {/* Decorative element */}

            <div className="absolute -bottom-6 -right-6 -z-0 hidden h-32 w-32 rounded-2xl border-2 border-blue-100 sm:block" />
          </div>

          {/* Right Content */}

          <div className="relative z-10">
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Who We Are
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Technology that
              <span className="block text-blue-600">
                moves your business forward.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We partner with organizations to solve complex
              business challenges through technology,
              strategy, and innovation.
            </p>

            <p className="mt-4 leading-7 text-slate-500">
              From enterprise consulting to digital
              transformation, our approach combines deep
              technical expertise with a clear understanding
              of your business goals. We focus on creating
              solutions that deliver measurable and lasting
              value.
            </p>

            {/* Highlights */}

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-blue-600"
                  />

                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}

            <div className="mt-9">
              <Button
                to="/about"
                className="group"
              >
                Learn More

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}