import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20",

  secondary:
    "border border-slate-300 bg-white text-slate-800 hover:border-blue-600 hover:text-blue-600",

  dark:
    "bg-slate-900 text-white hover:bg-slate-800",

  ghost:
    "text-slate-700 hover:bg-slate-100",
};

export default function Button({
  children,
  to,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";

  const classes = `
    ${baseStyles}
    ${variants[variant]}
    ${className}
  `;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}