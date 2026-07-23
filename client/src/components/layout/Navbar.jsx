import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";

import Container from "../common/Container";
import Button from "../common/Button";

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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-white"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}

        <NavLink
          to="/"
          className="text-2xl font-bold tracking-tight text-slate-900"
        >
          Tech<span className="text-blue-600">ning</span>
        </NavLink>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-blue-600"
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}

          <Button to="/contact">
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}

        <button
          type="button"
          onClick={() =>
            setIsOpen((prev) => !prev)
          }
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <HiOutlineX size={28} />
          ) : (
            <HiOutlineMenuAlt3 size={28} />
          )}
        </button>
      </Container>

      {/* Mobile Navigation */}

      {isOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <Container className="py-6">
            <nav className="flex flex-col gap-5">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() =>
                    setIsOpen(false)
                  }
                  className={({ isActive }) =>
                    `font-semibold ${
                      isActive
                        ? "text-blue-600"
                        : "text-slate-700"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              ))}

              <Button
                to="/contact"
                className="w-full"
                onClick={() =>
                  setIsOpen(false)
                }
              >
                Get Started
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}