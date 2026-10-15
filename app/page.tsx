"use client";

import { useState } from "react";

const skillGroups = [
  {
    title: "Full-Stack & Frontend",
    skills: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "HTML/CSS",
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      "NestJS",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "JWT Auth",
    ],
  },
  {
    title: "Tools, Architecture & Cloud",
    skills: [
      "Monorepos",
      "Cloudinary",
      "Vercel",
      "Supabase",
      "Git/GitHub",
      "Cursor",
    ],
  },
];

const projects = [
  {
    title: "Buy4low E-Commerce",
    description:
      "A full-stack e-commerce monorepo featuring a Next.js customer storefront, a NestJS backend API, and a React Vite admin dashboard. Implements secure JWT authentication, Cloudinary media management, and MongoDB.",
    tech: ["Next.js", "NestJS", "React Vite", "MongoDB", "JWT"],
    link: "https://buy4low.com",
    type: "Full-Stack SaaS",
  },
  {
    title: "VELAY Platform & Dashboard",
    description:
      "A comprehensive sports venue management system and user booking app. Features include court slot publishing, real-time status monitoring, expense tracking, and role-based access control.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    link: "https://velay.app",
    type: "Web Application",
  },
  {
    title: "Southampton Port Taxi",
    description:
      "A highly optimized taxi booking platform featuring multilingual SEO, dynamic route and fare calculation, secure checkout systems, and live flight tracking integrations.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "External APIs"],
    link: "https://southamptonporttaxi.co.uk",
    type: "Booking Platform",
  },
  {
    title: "zallo.ai Receptionist",
    description:
      "The production marketing website for an AI SaaS platform, showcasing automated phone answering capabilities and seamless booking integrations with modern, high-performance UI.",
    tech: ["Next.js", "React", "Framer/Tailwind"],
    link: "https://zallo.ai",
    type: "Marketing Site",
  },
  {
    title: "S-OIL Corporate",
    description:
      "A high-performance corporate web application developed for a major oil and lubricants brand utilizing Next.js 16 App Router for optimal rendering speed.",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS"],
    link: "https://s-oil-corporate.vercel.app",
    type: "Corporate Portal",
  },
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [weatherCity, setWeatherCity] = useState("");
  const [weatherResult, setWeatherResult] = useState<{
    city: string;
    country: string;
    temperature: number;
    windSpeed: number;
    humidity: number;
  } | null>(null);
  const [weatherStatus, setWeatherStatus] = useState("");
  const [isWeatherLoading, setIsWeatherLoading] = useState(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setFormStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setFormStatus(data.error || "Something went wrong.");
        return;
      }

      setFormStatus(data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setFormStatus("Could not send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleWeatherSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsWeatherLoading(true);
    setWeatherStatus("");
    setWeatherResult(null);

    try {
      const response = await fetch("/api/weather", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ city: weatherCity }),
      });

      const data = await response.json();

      if (!response.ok) {
        setWeatherStatus(data.error || "Could not fetch weather.");
        return;
      }

      setWeatherResult(data);
      setWeatherCity("");
    } catch {
      setWeatherStatus("Could not connect to weather API.");
    } finally {
      setIsWeatherLoading(false);
    }
  }

  return (
    <main className="relative min-h-screen bg-[#050505] text-slate-200 selection:bg-indigo-500/30 overflow-hidden">
      {/* 3D Background Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-600/20 blur-[120px] pointer-events-none" />

      {/* Glass Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#050505]/60 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="#"
            className="text-xl font-extrabold tracking-tighter bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent"
          >
            FASIH.DEV
          </a>

          <div className="hidden gap-8 text-sm font-medium text-slate-400 sm:flex">
            <a href="#about" className="transition-colors hover:text-white">
              About
            </a>
            <a href="#skills" className="transition-colors hover:text-white">
              Skills
            </a>
            <a href="#projects" className="transition-colors hover:text-white">
              Work
            </a>
            <a href="#api-demo" className="transition-colors hover:text-white">
              API
            </a>
            <a href="#contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-20 pt-32">
        <div className="relative z-10 max-w-3xl">
          <div className="mb-6 inline-flex rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300 backdrop-blur-md">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
              Available for new opportunities
            </span>
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
            Building digital <br />
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              experiences.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
            I am a Full-Stack Software Engineer specializing in modern web, mobile,
            and SaaS architectures. I engineer scalable backends with NestJS and
            MongoDB, paired with high-performance frontends using Next.js and Tailwind.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-full bg-white px-8 py-4 font-semibold text-black transition-transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Explore My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-cyan-200 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>

            <a
              href="https://github.com/fasihbabar123"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-6xl px-6 py-24 relative" id="about">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-400">
          01. Background
        </p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight">Engineering the Web</h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <p className="text-lg leading-relaxed text-slate-400">
            With a degree in Computer Science and over a year of hands-on, production-level 
            experience, I have transitioned from building simple frontends to architecting 
            complex, full-stack monorepos. My approach centers on writing clean, maintainable 
            code that scales.
          </p>
          <p className="text-lg leading-relaxed text-slate-400">
            Whether it is developing e-commerce platforms with secure JWT auth pipelines, 
            building role-based dashboards for sports venues, or integrating real-time 
            external APIs, I bridge the gap between complex backend logic and seamless user interfaces.
          </p>
        </div>
      </section>

      {/* Skills Section (3D Glass Cards) */}
      <section className="mx-auto max-w-6xl px-6 py-24 relative" id="skills">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
          02. Expertise
        </p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight">Technical Arsenal</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, idx) => (
            <div
              key={group.title}
              className="group relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <span className="text-5xl font-black text-white/5">{`0${idx + 1}`}</span>
                <h3 className="mt-2 text-2xl font-bold text-white">{group.title}</h3>
                <div className="mt-8 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-300 border border-white/5 transition-colors group-hover:border-white/10 group-hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mx-auto max-w-6xl px-6 py-24 relative" id="projects">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
          03. Selected Work
        </p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight">Production Deployments</h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 transition-all duration-500 hover:border-white/20 hover:bg-[#111]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    {project.type}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-all hover:bg-white hover:text-black hover:scale-110"
                    aria-label={`Visit ${project.title}`}
                  >
                    ↗
                  </a>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-4 text-slate-400 leading-relaxed">{project.description}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* API Demo Section (Glassmorphism Form) */}
      <section className="mx-auto max-w-6xl px-6 py-24 relative" id="api-demo">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-900/20 to-transparent p-1">
          <div className="grid gap-12 rounded-[22px] bg-[#050505]/80 p-8 md:grid-cols-2 md:p-12 backdrop-blur-2xl">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Live API Integration</h2>
              <p className="mt-4 text-lg text-slate-400 leading-relaxed">
                Test a full-stack request cycle. Enter a city below to trigger a Next.js serverless function that securely fetches and formats real-time data from an external weather provider.
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <form onSubmit={handleWeatherSubmit} className="relative">
                <input
                  type="text"
                  value={weatherCity}
                  onChange={(event) => setWeatherCity(event.target.value)}
                  placeholder="Enter a city (e.g., Lahore)"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-lg text-white outline-none transition focus:border-indigo-500 focus:bg-white/10"
                />
                <button
                  type="submit"
                  disabled={isWeatherLoading}
                  className="absolute right-2 top-2 bottom-2 rounded-xl bg-indigo-500 px-6 font-bold text-white transition hover:bg-indigo-400 disabled:opacity-50"
                >
                  {isWeatherLoading ? "..." : "Fetch"}
                </button>
              </form>

              {weatherStatus && (
                <p className="mt-4 text-sm text-red-400">{weatherStatus}</p>
              )}

              {weatherResult && (
                <div className="mt-6 animate-in slide-in-from-bottom-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-400">Current Weather</p>
                      <h3 className="text-2xl font-bold text-white mt-1">
                        {weatherResult.city}, {weatherResult.country}
                      </h3>
                    </div>
                    <span className="text-4xl font-light text-cyan-400">
                      {weatherResult.temperature}°
                    </span>
                  </div>
                  <div className="mt-6 flex gap-6 border-t border-white/10 pt-4 text-sm text-slate-400">
                    <p><span className="text-white font-medium">{weatherResult.humidity}%</span> Humidity</p>
                    <p><span className="text-white font-medium">{weatherResult.windSpeed}km/h</span> Wind</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-6xl px-6 py-24 relative mb-20" id="contact">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="text-5xl font-bold tracking-tight">Let&apos;s talk.</h2>
            <p className="mt-6 text-xl text-slate-400 leading-relaxed max-w-md">
              Targeting full-stack and backend software engineering roles. Reach out to discuss architectures, opportunities, or collaboration.
            </p>
            <div className="mt-12 flex flex-col gap-4">
              <a
                href="mailto:fasihbabar901@gmail.com"
                className="text-2xl font-medium text-white transition hover:text-indigo-400"
              >
                fasihbabar901@gmail.com
              </a>
              <a
                href="https://github.com/fasihbabar123"
                className="text-lg text-slate-500 transition hover:text-white"
              >
                github.com/fasihbabar123
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl"
          >
            <div className="grid gap-6">
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-indigo-500"
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-indigo-500"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                rows={4}
                required
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-indigo-500"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-white px-5 py-4 font-bold text-black transition hover:bg-indigo-400 hover:text-white disabled:opacity-50"
              >
                {isSubmitting ? "Routing..." : "Send Message"}
              </button>
            </div>
            {formStatus && (
              <p className="mt-6 text-center text-sm font-medium text-indigo-400">
                {formStatus}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}