import PropTypes from "prop-types";

/**
 * A gentle wave that sits at the seam between two sections. `color` should
 * match the background color of the section that comes AFTER the divider,
 * since the wave shape is drawn in that color over whatever is above it.
 * Pass `flip` to mirror the wave vertically.
 */
export default function SectionDivider({
  color = "#ffffff",
  flip = false,
  height = "h-12 md:h-20",
}) {
  return (
    <div
      className={`relative w-full overflow-hidden ${height} ${flip ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <svg
        className="absolute bottom-0 left-0 h-full w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,48 C240,108 480,12 720,42 C960,72 1200,18 1440,54 L1440,120 L0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

SectionDivider.propTypes = {
  color: PropTypes.string,
  flip: PropTypes.bool,
  height: PropTypes.string,
};
