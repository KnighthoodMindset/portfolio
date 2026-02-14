export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-2 text-slate-300">
        Feel free to reach out through email or connect with me on social platforms.
      </p>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
        {/* Email */}
        <div className="text-slate-200">
          <p className="text-sm uppercase tracking-wide opacity-80">Email</p>
          <a
            href="mailto:sweetyseleena@gmail.com"
            className="mt-2 inline-block text-lg text-sky-300 hover:underline"
          >
            sweetyseleena@gmail.com
          </a>
        </div>

        {/* Socials */}
        <div className="mt-6">
          <p className="text-sm uppercase tracking-wide opacity-80 text-slate-200">
            Social Links
          </p>

          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/sweety-seleena-3810a9283/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/KnighthoodMindset"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.instagram.com/sweetyseleena7/?__pwa=1"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Note */}
        <p className="mt-6 text-sm text-slate-400">
          I usually respond within 24–48 hours.
        </p>
      </div>
    </section>
  );
}
