import { CheckCircle2 } from "lucide-react";

import Container from "../common/Container.jsx";

const points = [
  "Business-focused technology solutions",
  "Experienced and dedicated professionals",
  "Scalable and future-ready architecture",
  "Long-term partnership with our clients",
];

export default function WhoWeAre() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Visual */}

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100">
              {/* Temporary Image */}

              <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-600 to-slate-900">
                <div className="text-center text-white">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-4xl font-bold backdrop-blur-md">
                    T
                  </div>

                  <p className="mt-5 text-xl font-semibold">
                    Technology & Innovation
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}

            <div className="absolute -bottom-5 -right-5 -z-0 hidden h-32 w-32 rounded-2xl border-2 border-blue-100 sm:block" />
          </div>

          {/* Content */}

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Who We Are
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Your technology partner
              for meaningful growth.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              We work with organizations to understand
              their unique business challenges and create
              technology solutions that deliver measurable
              value.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              From strategy and consulting to software
              development and digital transformation, we
              combine technical expertise with a deep
              understanding of business needs.
            </p>

            {/* Points */}

            <div className="mt-8 space-y-4">
              {points.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-blue-600"
                  />

                  <span className="text-sm font-medium text-slate-700">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}