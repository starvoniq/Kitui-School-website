import { motion } from "framer-motion";
import PropTypes from "prop-types";

/**
 * Reveal: animated wrapper that slides + fades children into view.
 *
 * Props:
 *  - direction  {'up'|'down'|'left'|'right'|'none'} slide origin (default 'up')
 *  - delay      {number}  seconds before animation starts
 *  - duration   {number}  animation duration in seconds
 *  - y / x      {number}  custom travel distance override
 *  - className  {string}  extra classes applied to wrapper
 */
const OFFSET = 32;

export default function Reveal({
  children,
  delay = 0,
  duration = 0.65,
  direction = "up",
  y,
  x,
  className = "",
}) {
  const travel = (dir) => {
    switch (dir) {
      case "left":
        return { x: x ?? OFFSET, y: y ?? 0 };
      case "right":
        return { x: x ?? -OFFSET, y: y ?? 0 };
      case "down":
        return { x: x ?? 0, y: y ?? -OFFSET };
      case "none":
        return { x: x ?? 0, y: y ?? 0 };
      default:
        return { x: x ?? 0, y: y ?? OFFSET };
    }
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...travel(direction) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

Reveal.propTypes = {
  children: PropTypes.node,
  delay: PropTypes.number,
  duration: PropTypes.number,
  direction: PropTypes.oneOf(["up", "down", "left", "right", "none"]),
  y: PropTypes.number,
  x: PropTypes.number,
  className: PropTypes.string,
};
