import { ArrowRight } from "lucide-react";

import Container from "../common/Container.jsx";
import Button from "../common/Button.jsx";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background */}

      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <Container className="relative">
        <div className="max-w-4xl py-24 sm:py-28 lg:py-32">
          {/* Label */}

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            About Us
          </span>

          {/* Heading */}

          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            We build technology
            <span className="block text-blue-500">
              that moves businesses forward.
            </span>
          </h1>

          {/* Description */}

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            We are a technology-focused company helping
            businesses solve complex challenges through
            innovative, scalable, and reliable digital
            solutions.
          </p>

          {/* CTA */}

          <div className="mt-8">
            <Button
              to="/contact"
              className="group"
            >
              Work With Us

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}