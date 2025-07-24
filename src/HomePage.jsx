import React from "react";

const techStack = [
  { name: "React", icon: (
    <svg className="w-7 h-7 text-cyan-400" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="3.5" fill="currentColor"/><ellipse rx="16" ry="6.5" cx="20" cy="20" stroke="currentColor" strokeWidth="2" fill="none"/><ellipse rx="16" ry="6.5" cx="20" cy="20" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(60 20 20)"/><ellipse rx="16" ry="6.5" cx="20" cy="20" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(120 20 20)"/></svg>
  ) },
  { name: "Tailwind", icon: (
    <svg className="w-7 h-7 text-sky-400" viewBox="0 0 48 48" fill="none"><path fill="currentColor" d="M24 17c-6.627 0-8.627 4.373-9 6.56C16.5 20.06 19.5 19 22 19c3 0 4.5 1.5 6 3.5C29.5 26 27.5 29 24 29c-3.5 0-5.5-2.5-6-4.5C17.373 29.627 19.373 34 26 34c6.627 0 8.627-4.373 9-6.56C31.5 31.94 28.5 33 26 33c-3 0-4.5-1.5-6-3.5C18.5 22 20.5 19 24 19c3.5 0 5.5 2.5 6 4.5C30.627 18.373 28.627 14 22 14c-6.627 0-8.627 4.373-9 6.56C16.5 16.06 19.5 15 22 15c3 0 4.5 1.5 6 3.5C29.5 22 27.5 25 24 25c-3.5 0-5.5-2.5-6-4.5C17.373 25.627 19.373 30 26 30c6.627 0 8.627-4.373 9-6.56C31.5 27.94 28.5 29 26 29c-3 0-4.5-1.5-6-3.5C18.5 18 20.5 15 24 15z"/></svg>
  ) },
  { name: "Supabase", icon: (
    <svg className="w-7 h-7 text-green-500" viewBox="0 0 40 40" fill="none"><path d="M32 29.5c0 1.38-1.12 2.5-2.5 2.5h-19A2.5 2.5 0 018 29.5V10.5C8 9.12 9.12 8 10.5 8h19A2.5 2.5 0 0132 10.5v19z" fill="currentColor"/></svg>
  ) },
  { name: "Vercel", icon: (
    <svg className="w-7 h-7 text-gray-300" viewBox="0 0 40 40" fill="none"><polygon points="20,8 36,32 4,32" fill="currentColor"/></svg>
  ) },
  { name: "GPT", icon: (
    <svg className="w-7 h-7 text-emerald-400" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M20 10v20M10 20h20" stroke="currentColor" strokeWidth="2"/></svg>
  ) },
];

const services = [
  { name: "Full Website Builds", desc: "Vercel/Netlify deployment", icon: "🌐" },
  { name: "Landing Pages & Business Sites", icon: "📄" },
  { name: "AI-Powered Chatbot Integration", desc: "GPT-powered assistants", icon: "🤖" },
  { name: "Trading/Finance Dashboards", icon: "📊" },
  { name: "Portfolio Sites", icon: "🖼️" },
  { name: "Custom Frontend Components", icon: "🧩" },
  { name: "Supabase + Tailwind + React Builds", icon: "⚡" },
];

const process = [
  { step: "Quick Chat", icon: "💬" },
  { step: "Design Mockup (optional)", icon: "🎨" },
  { step: "Fast Development (AI + modern tools)", icon: "⚡" },
  { step: "Deploy under your Vercel/Netlify", icon: "🚀" },
  { step: "Ongoing Support (optional)", icon: "🔄" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-800 text-gray-100 flex flex-col items-center px-4 py-8 font-sans">
      {/* Header */}
      <header className="w-full max-w-2xl flex flex-col items-center mb-8 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent mb-2">Ronald Jimena</h1>
        <p className="text-xl sm:text-2xl font-medium text-gray-300 mb-2">Web Dev Powered by AI. <span className="font-bold text-emerald-400">Speed.</span> <span className="font-bold text-cyan-400">Scale.</span> <span className="font-bold text-sky-400">Style.</span></p>
      </header>

      {/* About */}
      <section className="max-w-xl text-center mb-8 animate-fade-in-up">
        <p className="text-lg text-gray-300">
          I’m a web developer leveraging <span className="text-emerald-400 font-semibold">AI</span> to build full-stack sites <span className="text-cyan-400 font-semibold">fast</span>.<br/>
          Focused on <span className="text-sky-400 font-semibold">efficiency</span>, <span className="text-emerald-400 font-semibold">affordability</span>, and <span className="text-cyan-400 font-semibold">clean UX</span>.
        </p>
      </section>

      {/* Services */}
      <section className="w-full max-w-2xl mb-8 animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-4 text-gray-100">Services</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((s) => (
            <li key={s.name} className="flex items-center gap-3 bg-gray-800/80 rounded-lg p-4 shadow hover:scale-105 hover:bg-gray-700/90 transition-transform duration-150">
              <span className="text-2xl">{s.icon}</span>
              <div>
                <span className="font-semibold text-gray-100">{s.name}</span>
                {s.desc && <span className="block text-xs text-gray-400">{s.desc}</span>}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* How I Work */}
      <section className="w-full max-w-2xl mb-8 animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-4 text-gray-100">How I Work</h2>
        <ol className="relative border-l border-gray-700 ml-4">
          {process.map((p, i) => (
            <li key={p.step} className="mb-6 ml-6">
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full ring-4 ring-gray-700 text-xl">
                {p.icon}
              </span>
              <span className="font-semibold text-gray-100">{p.step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Tech Stack */}
      <section className="w-full max-w-2xl mb-8 animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-4 text-gray-100">Tech Stack</h2>
        <div className="flex flex-wrap gap-6 items-center justify-center">
          {techStack.map((t) => (
            <div key={t.name} className="flex flex-col items-center group">
              {t.icon}
              <span className="text-xs mt-1 text-gray-400 group-hover:text-emerald-400 transition-colors">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="w-full max-w-2xl mb-8 animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-4 text-gray-100">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {/* Example projects, replace with your real ones! */}
          <div className="bg-gray-800/80 rounded-lg p-5 shadow hover:scale-105 hover:bg-gray-700/90 transition-transform duration-150 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-1">AI Portfolio Generator</h3>
              <p className="text-sm text-gray-300 mb-2">A tool that creates beautiful portfolio sites using AI prompts. Built with React, Tailwind, and GPT APIs.</p>
            </div>
            <a href="https://github.com/RonJimena-Dev/ai-portfolio-generator" target="_blank" rel="noopener noreferrer" className="mt-auto text-emerald-400 underline text-xs">View Repo</a>
          </div>
          <div className="bg-gray-800/80 rounded-lg p-5 shadow hover:scale-105 hover:bg-gray-700/90 transition-transform duration-150 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-1">Trading Dashboard</h3>
              <p className="text-sm text-gray-300 mb-2">Real-time dashboard for stocks and crypto, with custom widgets and charting. Built with Supabase and Tailwind.</p>
            </div>
            <a href="https://github.com/RonJimena-Dev/trading-dashboard" target="_blank" rel="noopener noreferrer" className="mt-auto text-emerald-400 underline text-xs">View Repo</a>
          </div>
        </div>
        <a href="https://github.com/RonJimena-Dev/ronaldjimena.github.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 hover:bg-gray-800 text-gray-100 font-bold shadow-lg transition-colors border border-gray-700 group">
          <svg className="w-5 h-5 text-white group-hover:text-emerald-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.371 0 0 5.371 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577 0-.285-.011-1.04-.017-2.042-3.338.726-4.042-1.611-4.042-1.611-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.419-1.304.762-1.604-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.51 11.51 0 013.004-.404c1.018.005 2.045.138 3.004.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.903-.014 3.293 0 .319.192.694.801.576C20.565 21.796 24 17.299 24 12c0-6.629-5.371-12-12-12z"/></svg>
          <span>See All Projects on GitHub</span>
        </a>
      </section>

      {/* Contact */}
      <section className="w-full max-w-2xl mb-6 animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-4 text-gray-100">Contact</h2>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a href="mailto:ronald.jimena0420@gmail.com" className="underline text-emerald-400 text-lg font-semibold">ronald.jimena0420@gmail.com</a>
        </div>
        <p className="mt-4 text-center text-gray-400">Need a fast, no-BS website? <span className="text-emerald-400 font-semibold">Let’s talk.</span></p>
      </section>

      {/* Footer */}
      <footer className="mt-auto text-xs text-gray-600 pt-4 opacity-70">
        &copy; {new Date().getFullYear()} Ronald Jimena. Built with AI + React + Tailwind.
      </footer>

      {/* Animations */}
      <style>{`
        .animate-fade-in { animation: fadeIn 1s ease; }
        .animate-fade-in-up { animation: fadeInUp 1s ease; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
}
