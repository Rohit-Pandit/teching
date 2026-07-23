import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import Container from "../common/Container";

import settingContext from "../../context/settingContext/settingContext.js";

const navigation = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export default function Footer() {
  const { settings } = useContext(settingContext);

  const companyName =
    settings?.companyName || "Techning";

  const tagline =
    settings?.tagline ||
    "Technology that drives business forward.";

  const logo = settings?.logo || "";

  const email =
    settings?.contact?.email ||
    "info@techning.in";

  const phone =
    settings?.contact?.phone ||
    "+91 98765 43210";

  const address =
    settings?.contact?.address ||
    "India";

  const socialLinks =
    settings?.socialLinks || {};

  return (
    <footer className="bg-slate-950 text-white">
      <Container>
        {/* Main Footer */}

        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Company */}

          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-flex items-center gap-3"
            >
              {logo ? (
                <img
                  src={logo}
                  alt={companyName}
                  className="h-10 w-auto object-contain"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold">
                  {companyName
                    .charAt(0)
                    .toUpperCase()}
                </div>
              )}

              <span className="text-xl font-bold">
                {companyName}
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              {tagline}
            </p>

            {/* Social Links */}

            <div className="mt-7 flex items-center gap-3">
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  <FaLinkedinIn size={16} />
                </a>
              )}

              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  <FaFacebookF size={16} />
                </a>
              )}

              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  <FaInstagram size={16} />
                </a>
              )}

              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  <FaXTwitter size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <nav className="mt-5 flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4 text-sm text-slate-400">
              <a
                href={`mailto:${email}`}
                className="block transition hover:text-blue-400"
              >
                {email}
              </a>

              <a
                href={`tel:${phone}`}
                className="block transition hover:text-blue-400"
              >
                {phone}
              </a>

              <p className="leading-6">
                {address}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}

        <div className="flex flex-col gap-4 border-t border-slate-800 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()}{" "}
            {companyName}. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              className="transition hover:text-slate-300"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition hover:text-slate-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}