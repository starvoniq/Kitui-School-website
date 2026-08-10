import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

/**
 * Animated count inside a <span> for inline use in stat badges/cards.
 * Uses direct DOM text updates during RAF to ensure 60fps buttery smooth performance without React re-renders.
 */
export function AnimatedCountSpan({
  to,
  from = 0,
  prefix = "",
  suffix = "",
  duration = 2400,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      node.textContent = `${prefix}${to.toLocaleString()}${suffix}`;
      return undefined;
    }

    let raf;
    let startTime = null;

    const tick = (now) => {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4); // ease-out quart for fast digit spinning easing into finish
      const currentVal = Math.round(from + (to - from) * eased);

      if (node) {
        node.textContent = `${prefix}${currentVal.toLocaleString()}${suffix}`;
      }

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          raf = requestAnimationFrame(tick);
          observer.unobserve(node);
        }
      },
      { threshold: 0 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [to, from, prefix, suffix, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {to.toLocaleString()}
      {suffix}
    </span>
  );
}

AnimatedCountSpan.propTypes = {
  to: PropTypes.number.isRequired,
  from: PropTypes.number,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  duration: PropTypes.number,
};

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
  duration = 2400,
}) {
  return (
    <div className="text-center">
      <p className="font-serif text-3xl font-bold text-forest md:text-4xl">
        <AnimatedCountSpan
          to={to}
          from={from}
          prefix={prefix}
          suffix={suffix}
          duration={duration}
        />
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

