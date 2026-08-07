import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PropTypes from "prop-types";

/**
 * CtaBanner: full-width call-to-action strip.
 *
 * Props:
 *  - title           {string}
 *  - subtitle        {string}
 *  - primaryLabel    {string}
 *  - primaryTo       {string}  route (default /contact)
 *  - secondaryLabel  {string}
 *  - secondaryTo     {string}  route (default /about)
 *  - dark            {boolean} Use the deeper forest-dark variant instead of the gradient
 *  - transparent     {boolean} Make background transparent
 *  - className       {string}  Additional class names
 */
export default function CtaBanner({
  title,
  subtitle,
  primaryLabel,
  primaryTo = "/contact",
  secondaryLabel,
  secondaryTo = "/about",
  dark = false,
  transparent = false,
  className = "",
}) {
  const backgroundClass = transparent
    ? "bg-transparent"
    : dark
      ? "bg-forest-dark"
      : "bg-forest-gradient";

  return (
    <section
      className={`relative overflow-hidden ${backgroundClass} ${className}`}
    >
      {/* Large decorative quote mark */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 text-white/5 font-serif text-[180px] leading-none pointer-events-none select-none">
        &ldquo;
      </div>

      <div className="container-page relative z-10 py-12 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-white font-serif font-bold text-2xl md:text-3xl leading-snug">
            {title}
          </h2>
          {subtitle && (
            <p className="text-white/65 mt-2 font-sans text-sm md:text-base max-w-lg">
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-3 shrink-0">
          {primaryLabel && (
            <Link to={primaryTo} className="btn-primary">
              {primaryLabel}
              <ArrowRight size={16} />
            </Link>
          )}
          {secondaryLabel && (
            <Link to={secondaryTo} className="btn-outline">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

CtaBanner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  primaryLabel: PropTypes.string,
  primaryTo: PropTypes.string,
  secondaryLabel: PropTypes.string,
  secondaryTo: PropTypes.string,
  dark: PropTypes.bool,
  transparent: PropTypes.bool,
  className: PropTypes.string,
};
