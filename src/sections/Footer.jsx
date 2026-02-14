export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto max-w-6xl px-4 text-sm text-slate-400">
        © {new Date().getFullYear()} Sweety. All rights reserved.
      </div>
    </footer>
  );
}
