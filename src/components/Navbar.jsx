import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  // Detect scroll for background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = links.map((l) =>
        document.getElementById(l.id)
      );

      sections.forEach((section) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/40 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="font-semibold tracking-wide text-white hover:opacity-80 transition"
        >
          Sweety
        </a>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`transition relative ${
                active === l.id
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {l.label}

              {/* Active underline */}
              {active === l.id && (
                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white rounded-full"></span>
              )}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
