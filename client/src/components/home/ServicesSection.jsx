import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Cloud,
  Code2,
  Database,
  LineChart,
  LoaderCircle,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";

import { getServices } from "../../services/services.api";

const iconMap = {
  Cloud,
  Code2,
  Database,
  LineChart,
  Server,
  ShieldCheck,
  Sparkles,
};

export default function ServicesSection() {
  const [services, setServices] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);

        setError("");

        const data = await getServices();

        setServices(data || []);
      } catch (error) {
        console.error(
          "Failed to fetch services:",
          error
        );

        setError(
          "Unable to load services at the moment."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        {/* Section Header */}

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              What We Do
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Technology solutions built
              <span className="block text-blue-600">
                around your business.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              From enterprise consulting to modern software
              development, we help organizations solve
              complex challenges and create lasting business
              value.
            </p>
          </div>

          <Button
            to="/services"
            variant="secondary"
            className="shrink-0 self-start lg:self-auto"
          >
            View All Services

            <ArrowUpRight size={18} />
          </Button>
        </div>

        {/* Loading */}

        {loading && (
          <div className="flex min-h-[300px] items-center justify-center">
            <div className="flex items-center gap-3 text-slate-500">
              <LoaderCircle
                size={24}
                className="animate-spin"
              />

              <span>
                Loading services...
              </span>
            </div>
          </div>
        )}

        {/* Error */}

        {!loading && error && (
          <div className="mt-14 rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
            <p className="font-medium text-red-600">
              {error}
            </p>
          </div>
        )}

        {/* Empty State */}

        {!loading &&
          !error &&
          services.length === 0 && (
            <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-10 text-center">
              <p className="text-slate-500">
                No services available at the moment.
              </p>
            </div>
          )}

        {/* Services Grid */}

        {!loading &&
          !error &&
          services.length > 0 && (
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon =
                  iconMap[service.icon] ||
                  Sparkles;

                return (
                  <div
                    key={service._id}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50"
                  >
                    {/* Background decoration */}

                    <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Icon */}

                    <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon
                        size={26}
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* Content */}

                    <h3 className="relative mt-7 text-xl font-bold text-slate-900">
                      {service.title}
                    </h3>

                    <p className="relative mt-3 min-h-[80px] text-sm leading-7 text-slate-600">
                      {service.shortDescription}
                    </p>

                    {/* Link */}

                    <Button
                      to={`/services/${service.slug}`}
                      variant="ghost"
                      className="relative mt-4 !px-0 !py-2 text-blue-600 hover:bg-transparent"
                    >
                      Learn More

                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </Button>
                  </div>
                );
              })}
            </div>
          )}
      </Container>
    </section>
  );
}