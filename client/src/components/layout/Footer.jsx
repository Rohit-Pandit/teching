import { Link } from "react-router-dom";
import Container from "../common/Container";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}

          <div>
            <Link
              to="/"
              className="text-2xl font-bold"
            >
              Tech<span className="text-blue-500">ning</span>
            </Link>

            <p className="mt-5 max-w-sm leading-7 text-slate-400">
              Helping businesses transform,
              innovate, and grow through modern
              technology solutions.
            </p>
          </div>

          {/* Company */}

          <div>
            <h3 className="font-semibold">
              Company
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-slate-400">
              <Link
                to="/about"
                className="hover:text-white"
              >
                About Us
              </Link>

              <Link
                to="/services"
                className="hover:text-white"
              >
                Services
              </Link>

              <Link
                to="/contact"
                className="hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}

          <div>
            <h3 className="font-semibold">
              Services
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-slate-400">
              <span>SAP Consulting</span>
              <span>Cloud Solutions</span>
              <span>AI & Automation</span>
              <span>Digital Transformation</span>
            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="font-semibold">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-slate-400">
              <p>info@techning.in</p>
              <p>+91 98765 43210</p>
              <p>India</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-sm text-slate-500">
          © {new Date().getFullYear()} Techning.
          All rights reserved.
        </div>
      </Container>
    </footer>
  );
}