import { useState } from "react";
import { CheckCircle, LoaderCircle } from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";

import { createContact } from "../../services/contacts.api";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactPreview() {
  const [formData, setFormData] =
    useState(initialForm);

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    setSuccess("");

    setError("");

    try {
      await createContact(formData);

      setSuccess(
        "Thank you! Your enquiry has been submitted successfully."
      );

      setFormData(initialForm);
    } catch (error) {
      console.error(
        "Contact form error:",
        error
      );

      setError(
        error?.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Get In Touch
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Let's build something
              great together.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Have a project in mind or looking for
              the right technology partner? Tell us
              about your requirements and our team
              will get back to you.
            </p>
          </div>

          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Name */}

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Name *
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Email */}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Email *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Phone */}

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Phone
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Service */}

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Service
                </label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">
                    Select a service
                  </option>

                  <option value="consulting">
                    Consulting
                  </option>

                  <option value="software-development">
                    Software Development
                  </option>

                  <option value="cloud">
                    Cloud Solutions
                  </option>

                  <option value="ai">
                    AI & Automation
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>
              </div>

              {/* Message */}

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Success */}

            {success && (
              <div className="mt-5 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                <CheckCircle size={20} />

                <span>{success}</span>
              </div>
            )}

            {/* Error */}

            {error && (
              <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Submit */}

            <Button
              type="submit"
              disabled={loading}
              className="mt-6 w-full"
            >
              {loading ? (
                <>
                  <LoaderCircle
                    size={18}
                    className="animate-spin"
                  />

                  Sending...
                </>
              ) : (
                "Send Enquiry"
              )}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}