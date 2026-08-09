import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

/**
 * A single stat that counts up from `from` to `to` once it scrolls into
 * view, then holds. Use `prefix`/`suffix` for things like "Top " or "+".
 */
export default function AnimatedCounter({
  to,
  from = 0,
  prefix = "",
  suffix = "",
  label,
  duration = 1600,
}) {
  const ref = useRef(null);
  const [value, setValue] = useState(from);
  const [started, setStarted] = useState(false);

  // Trigger once the stat scrolls into view.
  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Run the count-up.
  useEffect(() => {
    if (!started) return undefined;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setValue(to);
      return undefined;
    }

    let raf;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.round(from + (to - from) * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, from, to, duration]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-serif text-3xl font-bold text-forest md:text-4xl">
        {prefix}
        {value.toLocaleString()}
        {suffix}
      </p>
      {label && (
        <p className="mt-1 font-sans text-xs text-slate-500 md:text-sm">
          {label}
        </p>
      )}
    </div>
  );
}

AnimatedCounter.propTypes = {
  to: PropTypes.number.isRequired,
  from: PropTypes.number,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  label: PropTypes.string,
  duration: PropTypes.number,
};

export function AnimatedCountSpan({
  to,
  from = 0,
  prefix = "",
  suffix = "",
  duration = 1600,
}) {
  const ref = useRef(null);
  const [value, setValue] = useState(from);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return undefined;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setValue(to);
      return undefined;
    }

    let raf;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(from + (to - from) * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, from, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

