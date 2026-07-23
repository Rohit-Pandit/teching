import { useContext } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import Button from "../common/Button";

import settingContext from "../../context/settingContext/settingContext.js";

export default function Hero() {
  const {
    settings,

  } = useContext(settingContext);

  const hero = settings?.hero;

  const title =
    hero?.title ||
    "Transform Your Business With Technology";

  const description =
    hero?.description ||
    "We deliver innovative technology solutions that help businesses grow, adapt, and succeed in a rapidly changing digital world.";

  const image = hero?.image || "";

  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background Decorations */}

      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <Container className="relative">
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          {/* Left Content */}

          <div className="max-w-2xl">
            {/* Small Label */}

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              <Sparkles size={16} />

              <span>
                Technology • Innovation • Growth
              </span>
            </div>

            {/* Heading */}

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              {title}
            </h1>

            {/* Description */}

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
              {description}
            </p>

            {/* CTA */}

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
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
                variant="ghost"
                className="border border-white/20 text-white hover:bg-white/10 hover:text-white"
              >
                Explore Services
              </Button>
            </div>

            {/* Small Trust Text */}

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-400">
              <span>
                ✓ Business-focused solutions
              </span>

              <span>
                ✓ Experienced professionals
              </span>
            </div>
          </div>

          {/* Right Visual */}

          <div className="relative">
            {/* Main Visual */}

            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
              {image ? (
                <img
                  src={image}
                  alt={
                    settings?.companyName ||
                    "Technology Solutions"
                  }
                  className="h-full w-full object-cover"
                />
              ) : (
                <>
                  {/* Dummy Background */}

                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-800 to-slate-950" />

                  {/* Decorative Circles */}

                  <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />

                  <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full border border-white/10" />

                  {/* Center Content */}

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md">
                        <span className="text-4xl font-bold text-white">
                          {(
                            settings?.companyName ||
                            "T"
                          )
                            .charAt(0)
                            .toUpperCase()}
                        </span>
                      </div>

                      <p className="mt-6 text-2xl font-bold text-white">
                        {settings?.companyName ||
                          "Techning"}
                      </p>

                      <p className="mt-2 text-sm text-blue-200">
                        Technology • Strategy • Innovation
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* Floating Card */}

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-slate-950/80 p-5 shadow-xl backdrop-blur-md">
                <p className="text-sm font-semibold text-white">
                  Digital Transformation
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Building smarter solutions for a
                  better tomorrow.
                </p>
              </div>
            </div>

            {/* Decorative Square */}

            <div className="absolute -bottom-6 -right-6 -z-0 hidden h-32 w-32 rounded-2xl border border-blue-500/20 sm:block" />
          </div>
        </div>
      </Container>
    </section>
  );
}