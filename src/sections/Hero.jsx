import Scene from "../three/Scene";
import profileImg from "../assets/pfp.png";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">

      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(800px 400px at 20% 20%, rgba(99,102,241,0.25), transparent 60%), radial-gradient(700px 350px at 80% 30%, rgba(16,185,129,0.18), transparent 55%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-14 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE CONTENT */}
        <div>

          {/* Profile Header */}
          <div className="flex items-center gap-4">
          <img
  src={profileImg}
  alt="Sweety"
  className="h-32 w-32 md:h-40 md:w-40 rounded-[28px] object-cover object-top border border-white/20 shadow-lg"
/>



            <div>
              <div className="text-xl font-semibold text-white">
                Sweety
              </div>
              <div className="text-slate-400 text-sm">
                Full Stack Developer • Writer
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
            Coding with Heart,
            <br />
            Writing with Soul
          </h1>

          {/* Description */}
          <p className="mt-4 text-slate-300 leading-relaxed max-w-xl">
            I’m Sweety — a developer building modern web experiences and AI-powered projects.
            I specialize in React, MongoDB, and Python-based systems that solve real-world problems.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-5 py-2 rounded-xl bg-white text-slate-950 font-medium hover:opacity-90 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-5 py-2 rounded-xl border border-white/15 hover:bg-white/5 transition"
            >
              Contact
            </a>

            {/* Resume Button */}
            <a
              href="/Sweety_AI_Engineer_resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-xl border border-white/15 hover:bg-white/5 transition"
            >
              Resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE – Smaller 3D Box */}
        <div className="h-[200px] sm:h-[230px] md:h-[260px] lg:h-[280px] rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-lg">
          <Scene />
        </div>

      </div>
    </section>
  );
}
