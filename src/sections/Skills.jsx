import { useEffect, useMemo, useRef, useState } from "react";

const coreStack = [
  { name: "React.js", note: "Frontend" },
  { name: "MongoDB", note: "Database" },
  { name: "Python", note: "Backend/AI" },
  { name: "FastAPI", note: "APIs" },
];

const skillGroups = [
  {
    title: "Frontend",
    desc: "Modern UI development and responsive design.",
    items: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    desc: "APIs, logic, and server-side systems.",
    items: ["Python", "FastAPI", "Node.js", "REST APIs"],
  },
  {
    title: "Database",
    desc: "Data modeling and storage for apps.",
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "AI & Systems",
    desc: "AI-driven experiences and trust-focused systems.",
    items: ["AI Chatbots", "Automation Systems", "Fraud Detection Logic", "API Integration"],
  },
  {
  title: "Tools & Documentation",
  desc: "Development workflow, deployment, and technical documentation.",
  items: [
    "Git",
    "GitHub",
    "VS Code",
    "Netlify",
    "GitHub Pages",
    "Microsoft Word",
    "LaTeX"
  ],
},

];

function Pill({ children }) {
  return (
    <span className="px-3 py-1 rounded-full text-sm border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 transition">
      {children}
    </span>
  );
}

function CoreChip({ name, note }) {
  return (
    <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
      <div className="text-white font-medium">{name}</div>
      <div className="text-xs text-slate-400">{note}</div>
    </div>
  );
}

function SkillCard({ title, desc, items }) {
  return (
    <div className="p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-slate-300">{desc}</p>
        </div>
        <div className="text-xs text-slate-400 whitespace-nowrap">{items.length} skills</div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((s) => (
          <Pill key={s}>{s}</Pill>
        ))}
      </div>
    </div>
  );
}

/* ---- reveal once ---- */
function useRevealOnce(threshold = 0.18) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ---- Tailwind-only animated wrapper with delay ---- */
function Reveal({ show, delay = 0, children }) {
  const base = "transition-all duration-700 ease-out will-change-transform";
  const hidden = "opacity-0 translate-y-3 blur-sm";
  const shown = "opacity-100 translate-y-0 blur-0";

  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`${base} ${show ? shown : hidden}`}
    >
      {children}
    </div>
  );
}

export default function Skills() {
  const { ref, visible } = useRevealOnce();
  const badgeText = useMemo(() => "Core Stack: React • MongoDB • Python", []);

  // Stagger timings
  const d0 = 0;
  const step = 90; // change to 70 if you want faster

  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-14" ref={ref}>
      {/* Header */}
      <Reveal show={visible} delay={d0}>
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl font-semibold">Skills</h2>
            <p className="mt-2 text-slate-300">
              My stack for building modern web apps and trust-focused intelligent systems.
            </p>
          </div>

          <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-200">
            {badgeText}
          </div>
        </div>
      </Reveal>

      {/* Core Stack */}
      <div className="mt-7">
        <Reveal show={visible} delay={d0 + step}>
          <h3 className="text-lg font-semibold text-white">Core Stack</h3>
        </Reveal>

        <Reveal show={visible} delay={d0 + step * 2}>
          <p className="mt-1 text-sm text-slate-300">The technologies I use most often.</p>
        </Reveal>

        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {coreStack.map((c, i) => (
            <Reveal key={c.name} show={visible} delay={d0 + step * (3 + i)}>
              <CoreChip name={c.name} note={c.note} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Skill Cards */}
      <div className="mt-10 grid md:grid-cols-2 gap-4">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} show={visible} delay={d0 + step * (8 + i)}>
            <SkillCard title={g.title} desc={g.desc} items={g.items} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
