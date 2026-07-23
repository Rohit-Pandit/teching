import { ArrowRight, Play } from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-20 lg:grid-cols-2 lg:py-24">
          {/* Left Content */}

          <div className="max-w-2xl">
            {/* Badge */}

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />

              Digital Transformation Partner
            </div>

            {/* Heading */}

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Transforming
              <span className="block text-blue-400">
                Businesses
              </span>
              Through Technology
            </h1>

            {/* Description */}

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
              We help businesses accelerate growth,
              modernize operations, and build scalable
              digital solutions through innovative
              technology and strategic consulting.
            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                to="/contact"
                className="group"
              >
                Get Started

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>

              <Button
                to="/services"
                variant="secondary"
                className="border-slate-700 bg-white/5 text-white hover:border-blue-400 hover:bg-white/10 hover:text-white"
              >
                <Play size={17} />

                Explore Services
              </Button>
            </div>

            {/* Trust text */}

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-slate-400">
              <div>
                <span className="font-semibold text-white">
                  10+
                </span>{" "}
                Years Experience
              </div>

              <div>
                <span className="font-semibold text-white">
                  100+
                </span>{" "}
                Projects Delivered
              </div>

              <div>
                <span className="font-semibold text-white">
                  50+
                </span>{" "}
                Happy Clients
              </div>
            </div>
          </div>

          {/* Right Visual */}

          <div className="relative hidden lg:block">
            <div className="relative mx-auto aspect-square max-w-xl">
              {/* Main card */}

              <div className="absolute inset-8 rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm" />

              {/* Inner visual */}

              <div className="absolute inset-16 flex items-center justify-center rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/20 to-cyan-500/5">
                <div className="text-center">
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-3xl bg-blue-600 shadow-2xl shadow-blue-600/30">
                    <span className="text-4xl font-bold text-white">
                      T
                    </span>
                  </div>

                  <p className="mt-6 text-xl font-semibold text-white">
                    Technology
                  </p>

                  <p className="mt-2 text-sm text-slate-400">
                    Innovation • Strategy • Growth
                  </p>
                </div>
              </div>

              {/* Floating Card 1 */}

              <div className="absolute left-0 top-20 rounded-2xl border border-white/10 bg-slate-900/90 p-5 shadow-xl backdrop-blur-md">
                <p className="text-xs text-slate-400">
                  Digital Growth
                </p>

                <p className="mt-1 text-2xl font-bold text-white">
                  +85%
                </p>
              </div>

              {/* Floating Card 2 */}

              <div className="absolute bottom-16 right-0 rounded-2xl border border-white/10 bg-slate-900/90 p-5 shadow-xl backdrop-blur-md">
                <p className="text-xs text-slate-400">
                  Projects Delivered
                </p>

                <p className="mt-1 text-2xl font-bold text-white">
                  100+
                </p>
              </div>

              {/* Decorative dots */}

              <div className="absolute right-10 top-5 grid grid-cols-4 gap-2 opacity-50">
                {Array.from({ length: 16 }).map(
                  (_, index) => (
                    <span
                      key={index}
                      className="h-1.5 w-1.5 rounded-full bg-blue-400"
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}