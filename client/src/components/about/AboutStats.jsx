import Container from "../common/Container.jsx";

const stats = [
  {
    value: "10+",
    label: "Projects Delivered",
  },
  {
    value: "5+",
    label: "Technology Solutions",
  },
  {
    value: "95%",
    label: "Client Satisfaction",
  },
  {
    value: "24/7",
    label: "Support",
  },
];

export default function AboutStats() {
  return (
    <section className="bg-blue-600 py-16">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <p className="text-4xl font-bold text-white sm:text-5xl">
                {stat.value}
              </p>

              <p className="mt-2 text-sm text-blue-100">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}