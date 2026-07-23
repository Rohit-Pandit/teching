import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";

import Container from "../common/Container";
import { getPartners } from "../../services/partners.api";

export default function TrustedPartners() {
  const [partners, setPartners] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setLoading(true);

        setError("");

        const data = await getPartners();

        setPartners(data || []);
      } catch (error) {
        console.error(
          "Failed to fetch partners:",
          error
        );

        setError(
          "Unable to load our partners at the moment."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  return (
    <section className="border-b border-slate-200 bg-white">
      <Container className="py-14 sm:py-16">
        {/* Heading */}

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Trusted Technology Ecosystem
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            We work with leading technology platforms
            and partners to deliver reliable and scalable
            solutions for modern businesses.
          </p>
        </div>

        {/* Loading */}

        {loading && (
          <div className="flex min-h-[120px] items-center justify-center">
            <div className="flex items-center gap-3 text-slate-500">
              <LoaderCircle
                size={22}
                className="animate-spin"
              />

              <span>
                Loading partners...
              </span>
            </div>
          </div>
        )}

        {/* Error */}

        {!loading && error && (
          <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-6 text-center">
            <p className="text-sm font-medium text-red-600">
              {error}
            </p>
          </div>
        )}

        {/* Empty */}

        {!loading &&
          !error &&
          partners.length === 0 && (
            <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
              <p className="text-sm text-slate-500">
                No partners available at the moment.
              </p>
            </div>
          )}

        {/* Partners */}

        {!loading &&
          !error &&
          partners.length > 0 && (
            <div className="mt-10 grid grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {partners.map((partner) => (
                <div
                  key={partner._id}
                  className="group flex h-20 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50"
                >
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-h-10 max-w-[140px] object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  ) : (
                    <span className="text-lg font-bold tracking-tight text-slate-400 transition-colors duration-300 group-hover:text-blue-600">
                      {partner.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
      </Container>
    </section>
  );
}