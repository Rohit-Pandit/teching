import { useEffect, useState } from "react";
import { LoaderCircle, Quote, Star } from "lucide-react";

import Container from "../common/Container";
import { getTestimonials } from "../../services/testimonials.api";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);

        setError("");

        const data = await getTestimonials();

        setTestimonials(data || []);
      } catch (error) {
        console.error(
          "Failed to fetch testimonials:",
          error
        );

        setError(
          "Unable to load testimonials at the moment."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <Container>
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Client Stories
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            What our clients say
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We believe our success is measured by the
            success of the businesses we work with.
          </p>
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
                Loading testimonials...
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

        {/* Empty */}

        {!loading &&
          !error &&
          testimonials.length === 0 && (
            <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-10 text-center">
              <p className="text-slate-500">
                No testimonials available at the moment.
              </p>
            </div>
          )}

        {/* Testimonials */}

        {!loading &&
          !error &&
          testimonials.length > 0 && (
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial) => {
                const name =
                  testimonial.clientName  || "Our Client";

                const role =
                  testimonial.designation ||
                  testimonial.role ||
                  testimonial.company ||
                  "";

                return (
                  <article
                    key={testimonial._id}
                    className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 sm:p-8"
                  >
                    {/* Top */}

                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Quote size={21} />
                      </div>

                      {/* Rating */}

                      <div className="flex gap-1">
                        {Array.from({
                          length: testimonial.rating || 5,
                        }).map((_, index) => (
                          <Star
                            key={index}
                            size={16}
                            className="fill-current text-amber-400"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Message */}

                    <blockquote className="mt-7 flex-1 text-base leading-7 text-slate-600">
                      "{testimonial.message}"
                    </blockquote>

                    {/* Client */}

                    <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                      {/* Avatar */}

                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={name}
                          className="h-11 w-11 rounded-full object-cover"
                        />
                      ) : (
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                          {name
                            .split(" ")
                            .map((word) => word[0])
                            .join("")
                            .slice(0, 2)
                            .toUpperCase()}
                        </div>
                      )}

                      <div>
                        <p className="font-semibold text-slate-900">
                          {name}
                        </p>

                        {role && (
                          <p className="mt-1 text-sm text-slate-500">
                            {role}
                          </p>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
      </Container>
    </section>
  );
}