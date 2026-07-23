import { useState } from "react";
import { CheckCircle, LoaderCircle } from "lucide-react";

import Button from "../common/Button.jsx";

import { submitContact } from "../../services/contact.api.js";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] =
    useState(initialForm);

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState("");

  const [error, setError] =
    useState("");

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
        "Thank you! Your enquiry has been submitted successfully. Our team will get back to you soon."
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
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-8 lg:p-10"
    >
      <h3 className="text-2xl font-bold text-slate-900">
        Send us a message
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Fill out the form and we'll get back to
        you as soon as possible.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
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
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
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
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
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
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
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
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
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
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tell us about your project or requirements..."
            className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Success */}

      {success && (
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
          <CheckCircle
            size={20}
            className="mt-0.5 shrink-0"
          />

          <span>{success}</span>
        </div>
      )}

      {/* Error */}

      {error && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Submit */}

      <Button
        type="submit"
        disabled={loading}
        className="mt-7 w-full"
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
  );
}