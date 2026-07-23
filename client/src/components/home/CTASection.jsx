import { ArrowRight, Sparkles } from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-blue-600 py-20 sm:py-24">
      {/* Background Decorations */}

      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-blue-900/20 blur-3xl" />

      <div className="absolute right-1/4 top-10 h-2 w-2 rounded-full bg-white/40" />

      <div className="absolute bottom-20 left-1/4 h-3 w-3 rounded-full bg-white/30" />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Icon */}

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-sm">
            <Sparkles size={26} />
          </div>

          {/* Heading */}

          <h2 className="mt-7 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to transform your business?
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Let's discuss how technology, innovation, and
            strategic thinking can help your business achieve
            its next level of growth.
          </p>

          {/* CTA */}

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              to="/contact"
              className="group bg-white text-blue-600 shadow-xl shadow-blue-900/20 hover:bg-slate-50"
            >
              Start a Conversation

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>

            <Button
              to="/services"
              variant="ghost"
              className="border border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}