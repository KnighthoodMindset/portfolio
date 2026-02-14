import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Achivements from "./sections/Achivements";
import Skills from "./sections/Skills";
import Strengths from "./sections/Strengths";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Achivements />
        <Skills />
        <Strengths />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
