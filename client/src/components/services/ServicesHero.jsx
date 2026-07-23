import Container from "../common/Container.jsx";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background Decorations */}

      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <Container className="relative">
        <div className="max-w-4xl py-24 sm:py-28 lg:py-32">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Our Services
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Technology solutions
            <span className="block text-blue-500">
              designed for your business.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            From strategy and consulting to software
            development and digital transformation, we
            help businesses use technology to solve
            complex challenges and achieve sustainable
            growth.
          </p>
        </div>
      </Container>
    </section>
  );
}