import { personalInfo } from ".//data/personal";
import { FaGithub, FaLinkedinIn,FaVoicemail } from "react-icons/fa";
export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-6 pt-24"
    >
      <div className="mx-auto w-full max-w-5xl text-center">

        {/* Small Badge */}
        <div className="mb-6 flex justify-center">
          <div className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Available for opportunities
          </div>
        </div>

        {/* Intro */}
        <p className="mb-4 text-lg text-slate-400">
          Hi, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Gourav{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Pavankar
          </span>
        </h1>

        {/* Role */}
        <h2 className="mt-6 text-2xl font-semibold text-slate-200 sm:text-3xl md:text-4xl">
          Full Stack Developer{" "}
          <span className="text-cyan-400">→</span>{" "}
          AI/ML Engineer
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          I build scalable web applications and intelligent
          AI-powered solutions using modern technologies.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="w-full rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 sm:w-auto"
          >
            View Projects
          </a>

          <a
            href="#"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan-400/30 hover:bg-white/10 sm:w-auto"
          >
            Download Resume
          </a>
        </div>

        {/* Social */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-400 hover:text-white"
          >
            GitHub 
            
          </a>

          <a
           href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-400 hover:text-white"
          >
            LinkedIn
          </a>

          <a
          href={`mailto:${personalInfo.email}`}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-400 hover:text-white"
          >
            Email
          </a>
        </div>

        {/* Scroll */}
        <div className="mt-14 text-sm text-slate-500">
          Scroll to explore ↓
        </div>

      </div>
    </section>
  );
}