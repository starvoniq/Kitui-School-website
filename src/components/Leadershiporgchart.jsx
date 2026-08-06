import PropTypes from "prop-types";

function OrgJoint() {
  return (
    <div className="relative flex h-3 w-3 items-center justify-center">
      <span className="absolute h-3 w-3 rounded-full bg-gold/20" />
      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
    </div>
  );
}

/* ─── Thin gold connector line between tiers ─── */
function OrgLink({ h }) {
  return (
    <div
      className={`w-px bg-gradient-to-b from-gold/60 via-gold/30 to-gold/10 ${h}`}
    />
  );
}

OrgLink.propTypes = {
  h: PropTypes.string,
};

OrgLink.defaultProps = {
  h: "h-6",
};

/* ─── Shared shape for a single person ─── */
const personShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
});

/* ─── Single node: box + optional hover photo card ─── */
function OrgNode({ label, tone, person, size }) {
  const tones = {
    forest: "bg-forest text-white",
    forestLight: "bg-forest/80 text-white",
    gold: "bg-gradient-to-br from-gold to-gold/80 text-forest",
  };
  const sizes = {
    lg: "px-7 py-3.5 text-sm font-bold tracking-wide",
    md: "px-5 py-2.5 text-xs font-semibold",
    sm: "px-3.5 py-1.5 text-[11px] font-medium",
  };
  const isGroup = Array.isArray(person);

  return (
    <div className="group relative">
      <div
        className={`rounded-lg text-center whitespace-nowrap select-none
          shadow-[0_2px_8px_rgba(0,0,0,0.12)]
          transition-all duration-300 ease-out
          ${tones[tone]} ${sizes[size]}
          ${person ? "cursor-pointer group-hover:shadow-[0_10px_30px_-6px_rgba(180,140,40,0.45)] group-hover:-translate-y-1" : ""}`}
      >
        {label}
      </div>

      {person && (
        <div
          className="pointer-events-none absolute left-1/2 bottom-full z-30 mb-3 w-44
            -translate-x-1/2 translate-y-1 scale-95 opacity-0
            transition-all duration-200 ease-out
            group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"
        >
          <div className="relative rounded-xl border border-gold/25 bg-white p-4 shadow-2xl">
            {isGroup ? (
              <>
                <div className="mb-2 flex justify-center -space-x-3">
                  {person.slice(0, 5).map((p, i) => (
                    <img
                      key={p.name}
                      src={p.image}
                      alt={p.name}
                      style={{ zIndex: 10 - i }}
                      className="h-10 w-10 rounded-full border-2 border-white object-cover shadow"
                    />
                  ))}
                </div>
                <p className="text-center font-serif text-xs font-bold text-forest leading-tight">
                  {person.length} Department Heads
                </p>
                <p className="mt-0.5 text-center font-sans text-[10px] text-slate-400">
                  See full list below
                </p>
              </>
            ) : (
              <>
                <img
                  src={person.image}
                  alt={person.name}
                  className="mx-auto mb-2 h-16 w-16 rounded-full border-2 border-gold/40 object-cover shadow"
                />
                <p className="text-center font-serif text-xs font-bold text-forest leading-tight">
                  {person.name}
                </p>
                {person.title && (
                  <p className="mt-0.5 text-center font-sans text-[10px] font-medium text-gold">
                    {person.title}
                  </p>
                )}
              </>
            )}
            {/* pointer arrow */}
            <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-gold/25 bg-white" />
          </div>
        </div>
      )}
    </div>
  );
}

OrgNode.propTypes = {
  label: PropTypes.string.isRequired,
  tone: PropTypes.oneOf(["forest", "forestLight", "gold"]),
  size: PropTypes.oneOf(["lg", "md", "sm"]),
  person: PropTypes.oneOfType([personShape, PropTypes.arrayOf(personShape)]),
};

OrgNode.defaultProps = {
  tone: "forest",
  size: "md",
  person: null,
};

/* ─── Full chart ─── */
export default function LeadershipOrgChart({
  principal,
  deputies,
  board,
  deptHeads,
}) {
  return (
    <div className="relative flex flex-col items-center gap-0 font-sans py-4">
      {/* ambient gold glow behind the whole tree */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(closest-side, rgba(197,160,66,0.10), transparent 70%)",
        }}
      />

      <OrgNode
        label="Board of Management (BOM)"
        tone="forest"
        size="lg"
        person={board}
      />
      <OrgLink />
      <OrgJoint />
      <OrgLink />

      <OrgNode
        label="Chief Principal"
        tone="gold"
        size="lg"
        person={principal}
      />
      <OrgLink />
      <OrgJoint />
      <OrgLink h="h-4" />

      <div className="flex gap-8">
        <div className="flex flex-col items-center gap-0">
          <OrgNode
            label="Deputy Principal (Academics)"
            tone="forest"
            size="md"
            person={{
              name: deputies[0].name,
              image: deputies[0].image,
              title: "Deputy Principal, Academics",
            }}
          />
          <OrgLink h="h-4" />
          <OrgNode label="Senior Master" tone="forestLight" size="sm" />
        </div>

        <div className="flex flex-col items-center gap-0">
          <OrgNode
            label="Deputy Principal (Discipline)"
            tone="forest"
            size="md"
            person={{
              name: deputies[1].name,
              image: deputies[1].image,
              title: "Deputy Principal, Discipline",
            }}
          />
          <OrgLink h="h-4" />
          <OrgNode label="Boarding Master" tone="forestLight" size="sm" />
        </div>
      </div>

      <OrgLink h="h-6" />
      <OrgJoint />
      <OrgLink h="h-6" />

      <div className="flex gap-4">
        <OrgNode
          label="Heads of Departments"
          tone="forest"
          size="sm"
          person={deptHeads}
        />
        <OrgNode label="Teaching Faculty" tone="forest" size="sm" />
      </div>

      <OrgLink h="h-6" />
      <OrgJoint />
      <OrgLink h="h-6" />

      <OrgNode label="Student Body & Prefects Council" tone="gold" size="md" />
    </div>
  );
}

LeadershipOrgChart.propTypes = {
  principal: personShape.isRequired,
  deputies: PropTypes.arrayOf(personShape).isRequired,
  board: PropTypes.arrayOf(personShape).isRequired,
  deptHeads: PropTypes.arrayOf(personShape).isRequired,
};
