const projects = [
  {
    title: "Knighthood Mindset",
    desc: "An educational platform (LMS-style) built and hosted on GitHub Pages.",
    link: "https://knighthoodmindset.github.io/Knighthood_Mindset-Explore_The_Educational_World/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Scypher Noxis",
    desc: "Encryption & decryption platform with 7 unique cryptographic techniques.",
    link: "https://scyphernoxis.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript", "Cryptography"],
  },
  {
    title: "SkillKernal",
    desc: "A learning support website with NPTEL notes and quizzes.",
    link: "https://knighthoodmindset.github.io/SkillKernal/",
    tags: ["HTML", "CSS", "JavaScript"],
  },

  
  {
    title:
      "Restoring Trust in Social Media Commerce by Distinguishing Original and Replica Brands",
    desc: "Detects original vs replica brand promotions to reduce fake ads and restore trust in social media commerce.",
    link: "https://og-badge-insta.netlify.app/", // keep empty
    tags: ["React", "MongoDB", "Python", "AI"],
  },

  {
    title: "AI Chatbot (Grok API)",
    desc: "A smart chatbot with AI-generated responses using Grok API.",
    link: "https://esita-chatbot.netlify.app/", // ✅ no link now
    tags: ["React", "AI", "Grok API", "Python"],
  },
  {
    title: "LiveKit AI Agent (Slicy)",
    desc: "Real-time AI assistant with web search, weather, email automation, and voice interaction.",
    link: "", // ✅ no link now
    tags: ["Python", "LiveKit", "AI Agents"],
  },
  {
    title: "Resume Builder Website",
    desc: "A dynamic web app that helps users create professional resumes easily.",
    link: "", // ✅ no link now
    tags: ["Web App", "UI/UX"],
  },
  {
    title: "QR Code Reader App",
    desc: "A web-based QR code scanner for instant reading and decoding.",
    link: "https://bespoke-donut-cee7c6.netlify.app/",
    tags: ["React"],
  },
  {
  title: "Roast My Code",
  desc: "A VS Code extension that humorously reviews and roasts code while providing useful feedback on code quality, style, and potential improvements.",
  link: "", // Add extension marketplace link later if available
  tags: ["VS Code Extension", "JavaScript"],
  },
];

function Tag({ children }) {
  return (
    <span className="px-2 py-1 rounded-full text-xs border border-white/10 bg-white/5 text-slate-200">
      {children}
    </span>
  );
}

function isRealLink(link = "") {
  return typeof link === "string" && link.trim() !== "" && link.trim() !== "#";
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <p className="mt-2 text-slate-300">
        A curated collection of my major and real-world projects.
      </p>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {projects.map((p) => {
          const hasLink = isRealLink(p.link);
          const external = hasLink && p.link.startsWith("http");

          // ✅ Card content (shared)
          const CardInner = (
            <>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              {/* ✅ Show Open only if link exists */}
              {hasLink ? (
                <p className="mt-4 text-sm opacity-80">Open ↗</p>
              ) : null}
            </>
          );

          // ✅ If no link → non-clickable card (no "coming soon")
          if (!hasLink) {
            return (
              <div
                key={p.title}
                className="p-5 rounded-2xl border border-white/10 bg-white/5"
              >
                {CardInner}
              </div>
            );
          }

          // ✅ If link exists → clickable card
          return (
            <a
              key={p.title}
              href={p.link}
              target={external ? "_blank" : "_self"}
              rel="noreferrer"
              className="p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              {CardInner}
            </a>
          );
        })}
      </div>
    </section>
  );
}
