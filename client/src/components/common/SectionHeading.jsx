export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  const alignment = {
    center: "mx-auto text-center",
    left: "text-left",
  };

  return (
    <div
      className={`max-w-3xl ${alignment[align]}`}
    >
      {eyebrow && (
        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-blue-600">
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}