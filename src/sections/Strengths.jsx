const strengths = [
  {
    title: "Trust-Focused Systems",
    desc: "I build solutions that prioritize authenticity and reliability, especially in areas like promotions, ads, and digital commerce.",
  },
  {
    title: "End-to-End Development",
    desc: "From UI to backend logic and databases, I can take ownership of full stack development and deliver complete working systems.",
  },
  {
    title: "Analytical Problem Solving",
    desc: "I approach problems with structured thinking—breaking down complex issues into clear steps and practical engineering solutions.",
  },
  {
    title: "Strong Communication",
    desc: "Award-winning writing helps me explain ideas clearly, document projects well, and communicate effectively in teams and presentations.",
  },
];

export default function Strengths() {
  return (
    <section id="strengths" className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-2xl font-semibold">Core Strengths</h2>
      <p className="mt-2 text-slate-300">
        The qualities that shape my work and the way I build projects.
      </p>

      <div className="mt-7 grid md:grid-cols-2 gap-4">
        {strengths.map((s) => (
          <div
            key={s.title}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
