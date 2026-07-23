import { useContext } from "react";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import settingContext from "../../context/settingContext/settingContext.js";

export default function ContactInfo() {
  const { settings } =
    useContext(settingContext);

  const email =
    settings?.contact?.email ||
    "info@techning.in";

  const phone =
    settings?.contact?.phone ||
    "+91 98765 43210";

  const address =
    settings?.contact?.address ||
    "India";

  return (
    <div>
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
        Get In Touch
      </span>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        We'd love to hear from you.
      </h2>

      <p className="mt-5 max-w-lg leading-8 text-slate-600">
        Whether you have a question about our
        services, need help with a project, or
        simply want to explore an idea, feel free
        to reach out.
      </p>

      {/* Contact Details */}

      <div className="mt-10 space-y-6">
        {/* Email */}

        <a
          href={`mailto:${email}`}
          className="group flex items-start gap-4"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
            <Mail size={21} />
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">
              Email
            </p>

            <p className="mt-1 text-sm text-slate-500 transition group-hover:text-blue-600">
              {email}
            </p>
          </div>
        </a>

        {/* Phone */}

        <a
          href={`tel:${phone}`}
          className="group flex items-start gap-4"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
            <Phone size={21} />
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">
              Phone
            </p>

            <p className="mt-1 text-sm text-slate-500 transition group-hover:text-blue-600">
              {phone}
            </p>
          </div>
        </a>

        {/* Address */}

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <MapPin size={21} />
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">
              Office
            </p>

            <p className="mt-1 max-w-xs text-sm leading-6 text-slate-500">
              {address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}