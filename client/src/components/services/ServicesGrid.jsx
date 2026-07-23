import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";

import Container from "../common/Container.jsx";

import ServiceCard from "./ServiceCard";

import { getServices } from "../../services/services.api";

export default function ServicesGrid() {
  const [services, setServices] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

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
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <Container>
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
          <div className="mx-auto max-w-xl rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
            <p className="font-medium text-red-600">
              {error}
            </p>
          </div>
        )}

        {/* Empty */}

        {!loading &&
          !error &&
          services.length === 0 && (
            <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-10 text-center">
              <p className="text-slate-500">
                No services available at the moment.
              </p>
            </div>
          )}

        {/* Grid */}

        {!loading &&
          !error &&
          services.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard
                  key={service._id}
                  service={service}
                />
              ))}
            </div>
          )}
      </Container>
    </section>
  );
}