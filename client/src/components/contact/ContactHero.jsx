import Container from "../common/Container.jsx";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <Container className="relative">
        <div className="max-w-4xl py-24 sm:py-28 lg:py-32">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Contact Us
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's build something
            <span className="block text-blue-500">
              great together.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Have an idea, a challenge, or a project
            in mind? Tell us about it. Our team would
            love to hear from you.
          </p>
        </div>
      </Container>
    </section>
  );
}