"use client";

import { useState } from "react";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "REST APIs",
  "JSON",
  "Frontend Development",
  "Backend Routes",
  "Vercel Deployment",
];

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website built to showcase my skills, projects, and contact information as I grow as a full-stack developer.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/fasihbabar123/my-portfolio",
    live: "https://my-portfolio-blue-beta-29.vercel.app",
    status: "Completed",
  },

 

  {
    title: "AI Resume Analyzer",
    description:
      "A resume feedback web app that analyzes resume text and returns a score, strengths, improvements, missing skills, and suggested project bullet points.",
    tech: ["Next.js", "TypeScript", "API Routes", "Tailwind CSS"],
    github: "https://github.com/fasihbabar123/ai-resume-analyzer",
    live: "https://ai-resume-analyzer-murex-nine.vercel.app",
    status: "In Progress",
  },

  {
    title: "Job Application Tracker",
    description:
      "A job tracking dashboard that lets users add, filter, and delete job applications while viewing application status statistics.",
    tech: ["Next.js", "TypeScript", "React State", "Tailwind CSS"],
    github: "https://github.com/fasihbabar123/job-application-tracker",
    live: "https://job-application-tracker-rouge-nu.vercel.app",
    status: "In Progress",
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

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setFormStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setFormStatus(data.error || "Something went wrong.");
        return;
      }

      setFormStatus(data.message);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
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
        headers: {
          "Content-Type": "application/json",
        },
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
    <main className="min-h-screen bg-slate-950 text-white">
            <header className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold tracking-tight">
            Fasih Babar
          </a>

          <div className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>
            <a href="#skills" className="transition hover:text-cyan-400">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-cyan-400">
              Projects
            </a>
            <a href="#api-demo" className="transition hover:text-cyan-400">
              API Demo
            </a>
            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </div>
        </nav>
      </header>
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 pb-20 pt-32">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Computer Science Graduate
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Hi, I&apos;m Fasih Babar.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I&apos;m building my portfolio as an aspiring full-stack developer,
          focusing on modern web apps, APIs, AI-powered tools, and clean
          user-friendly interfaces.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Contact Me
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16" id="about">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          About
        </p>

        <h2 className="mt-3 text-3xl font-bold">About Me</h2>

        <p className="mt-4 max-w-3xl leading-8 text-slate-300">
          I have completed a Bachelor&apos;s in Computer Science and I&apos;m
          currently building practical full-stack projects to strengthen my
          development skills. My focus is on creating useful web applications
          with Next.js, APIs, databases, authentication, and AI-powered
          features.
        </p>

        <p className="mt-4 max-w-3xl leading-8 text-slate-300">
          I&apos;m using this portfolio to document my progress, showcase my
          projects, and build real examples that demonstrate how I work with
          frontend interfaces, backend routes, external APIs, and deployment.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16" id="skills">
        <h2 className="text-3xl font-bold">Skills I&apos;m Building</h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16" id="projects">
  <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
        My Work
      </p>
      <h2 className="mt-3 text-3xl font-bold">Projects</h2>
    </div>

    <p className="max-w-xl text-sm leading-6 text-slate-400">
      These projects show my progress as I build practical full-stack apps,
      work with APIs, and learn modern development tools.
    </p>
  </div>

  <div className="mt-8 grid gap-6 md:grid-cols-3">
    {projects.map((project) => (
      <article
        key={project.title}
        className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400/60"
      >
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold">{project.title}</h3>

          <span className="rounded-full border border-cyan-400/40 px-3 py-1 text-xs text-cyan-300">
            {project.status}
          </span>
        </div>

        <p className="mt-4 flex-1 text-sm leading-6 text-slate-300">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-slate-800 px-3 py-1 text-xs text-cyan-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Live Demo
          </a>
        </div>
      </article>
    ))}
  </div>
</section>

<section className="mx-auto max-w-5xl px-6 py-16" id="api-demo">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              API Practice
            </p>

            <h2 className="mt-3 text-3xl font-bold">Weather API Demo</h2>

            <p className="mt-4 leading-8 text-slate-300">
             This feature demonstrates a full API flow: the user enters a city,
             the frontend sends the city to a custom Next.js API route, the backend
             calls an external weather API, and the result is returned as JSON and
             displayed on the page.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <form onSubmit={handleWeatherSubmit}>
              <label
                htmlFor="weatherCity"
                className="text-sm font-medium text-slate-200"
              >
                City
              </label>

              <div className="mt-2 flex gap-3">
                <input
                  id="weatherCity"
                  type="text"
                  value={weatherCity}
                  onChange={(event) => setWeatherCity(event.target.value)}
                  placeholder="Example: Lahore"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                />

                <button
                  type="submit"
                  disabled={isWeatherLoading}
                  className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isWeatherLoading ? "Loading..." : "Search"}
                </button>
              </div>
            </form>

            {weatherStatus && (
              <p className="mt-4 text-sm text-red-300">{weatherStatus}</p>
            )}

            {weatherResult && (
              <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-5">
                <h3 className="text-xl font-semibold">
                  {weatherResult.city}, {weatherResult.country}
                </h3>

                <div className="mt-4 grid gap-3 text-sm text-slate-300">
                  <p>Temperature: {weatherResult.temperature}°C</p>
                  <p>Humidity: {weatherResult.humidity}%</p>
                  <p>Wind Speed: {weatherResult.windSpeed} km/h</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

<section className="mx-auto max-w-5xl px-6 py-16" id="contact">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Contact
            </p>

            <h2 className="mt-3 text-3xl font-bold">Let&apos;s Connect</h2>

            <p className="mt-4 leading-8 text-slate-300">
              I&apos;m open to junior developer roles, internships, freelance
              projects, and learning opportunities. Send me a message and
              I&apos;ll get back to you.
            </p>

            <div className="mt-6">
              <a
                href="mailto:fasihbabar901@gmail.com"
                className="text-cyan-400 hover:text-cyan-300"
              >
                fasihbabar901@gmail.com
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-slate-200"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-slate-200"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="text-sm font-medium text-slate-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows={5}
                className="mt-2 w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 w-full rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {formStatus && (
              <p className="mt-4 text-sm text-cyan-300">{formStatus}</p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}