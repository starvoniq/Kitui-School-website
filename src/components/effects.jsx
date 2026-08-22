import { useRef } from "react";
import PropTypes from "prop-types";

// ─── Tilt wrapper: subtle 3D tilt + light sheen that follows the cursor.
//     Relies on the `.tilt-card` / `.sheen` classes defined in
//     studentLife.css — make sure that stylesheet is imported. ────────────
export function TiltWrap({ children, className, maxTilt }) {
  const ref = useRef(null);

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotY = (px - 0.5) * (maxTilt * 2);
    const rotX = (0.5 - py) * (maxTilt * 2);
    el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  }
  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`tilt-card relative ${className}`}
    >
      <div className="sheen rounded-2xl" />
      {children}
    </div>
  );
}

TiltWrap.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  maxTilt: PropTypes.number,
};

TiltWrap.defaultProps = {
  className: "",
  maxTilt: 6,
};
