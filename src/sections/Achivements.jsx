const achievements = [
  {
    title: "Sahithya Ratna National Award",
    org: "Bahujana Sahithya Academy",
    desc: "National recognition for excellence in writing and literary contribution.",
  },
  {
    title: "Best Writer Award",
    org: "Indira Arts Foundation",
    desc: "Awarded for excellence of writing and creative impact.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold">Achievements</h2>
      <p className="mt-2 text-slate-300">
        Recognitions that reflect my strength in writing and communication.
      </p>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {achievements.map((a) => (
          <div
            key={a.title}
            className="p-5 rounded-2xl border border-white/10 bg-white/5"
          >
            <h3 className="text-lg font-semibold">{a.title}</h3>
            <p className="mt-1 text-sm text-slate-400">{a.org}</p>
            <p className="mt-3 text-sm text-slate-300">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}