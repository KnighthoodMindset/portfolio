import { useEffect, useMemo, useState, useRef } from "react";

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
    items: ["AI Chatbots", "Automation Systems"],
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
      "LaTeX",
    ],
  },
];

/* -------- Pill -------- */
function Pill({ children }) {
  return (
    <span className="
      px-3 py-1 rounded-full text-sm border border-white/10 
      bg-white/5 text-slate-200 
      transition-all duration-300 ease-out
      hover:scale-110 hover:-translate-y-1 hover:bg-white/20
    ">
      {children}
    </span>
  );
}

/* -------- Card (SPOTLIGHT + POP) -------- */
function SkillCard({ title, desc, items }) {
  const ref = useRef();

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ref.current.style.setProperty("--x", `${x}px`);
    ref.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className="
        relative overflow-hidden
        p-5 rounded-2xl border border-white/10 
        bg-white/5 
        transition-all duration-300 ease-out
        
        hover:-translate-y-3 hover:scale-105
        hover:shadow-[0_25px_60px_rgba(0,200,255,0.3)]
        
        animate-popIn
      "
    >
      {/* Spotlight */}
      <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition duration-300">
        <div className="w-full h-full bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(0,200,255,0.25),transparent_40%)]"></div>
      </div>

      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm text-slate-300">{desc}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((s) => (
          <Pill key={s}>{s}</Pill>
        ))}
      </div>
    </div>
  );
}

/* -------- Reveal (kept but modified) -------- */
function Reveal({ show, delay = 0, children }) {
  return (
    <div
      style={{ animationDelay: `${delay}ms` }}
      className={`${show ? "animate-popIn" : "opacity-0"}`}
    >
      {children}
    </div>
  );
}

/* -------- Main -------- */
export default function Skills() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const badgeText = useMemo(
    () => "Core Stack: React • MongoDB • Python",
    []
  );

  const step = 120;

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-4 py-14 overflow-hidden">
      
      {/* 🔥 Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-[#0f172a] via-[#020617] to-[#0f172a]"></div>

      {/* Header */}
      <Reveal show={visible} delay={0}>
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl font-semibold">Skills</h2>
            <p className="mt-2 text-slate-300">
              My stack for building modern web apps and trust-focused intelligent systems.
            </p>
          </div>

          <div className="
            px-4 py-2 rounded-full border border-white/10 
            bg-white/5 text-sm text-slate-200
          ">
            {badgeText}
          </div>
        </div>
      </Reveal>

      {/* Cards */}
      <div className="mt-10 grid md:grid-cols-2 gap-4">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} show={visible} delay={step * (i + 1)}>
            <SkillCard title={g.title} desc={g.desc} items={g.items} />
          </Reveal>
        ))}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.8) translateY(40px); }
          60% { opacity: 1; transform: scale(1.05) translateY(-5px); }
          100% { transform: scale(1) translateY(0); }
        }

        .animate-popIn {
          animation: popIn 0.6s ease forwards;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 8s linear infinite;
        }
      `}</style>
    </section>
  );
}