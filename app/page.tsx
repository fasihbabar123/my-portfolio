const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "APIs",
];

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website built to showcase my skills, projects, and contact information as I grow as a full-stack developer.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/fasihbabar123/my-portfolio",
    live: "#",
    status: "Completed",
  },
  {
    title: "AI Resume Analyzer",
    description:
      "An upcoming AI-powered web app that will analyze resume content and provide feedback on structure, skills, project descriptions, and job readiness.",
    tech: ["Next.js", "AI API", "Supabase"],
    github: "#",
    live: "#",
    status: "Planned",
  },
  {
    title: "Job Application Tracker",
    description:
      "An upcoming full-stack app for tracking job applications, statuses, notes, and interview progress using authentication and a database.",
    tech: ["Next.js", "Supabase", "Authentication"],
    github: "#",
    live: "#",
    status: "Planned",
  },
];

export default function Home() {
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
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 max-w-3xl leading-8 text-slate-300">
          I have completed a Bachelor&apos;s in Computer Science and I&apos;m
          currently building practical projects to strengthen my development
          skills. My focus is on learning by building real applications using
          Next.js, APIs, databases, and AI tools.
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

      <section className="mx-auto max-w-5xl px-6 py-16" id="contact">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4 text-slate-300">
          I&apos;m open to junior developer roles, internships, freelance
          projects, and learning opportunities.
        </p>

        <div className="mt-6">
          <a
            href="mailto:fasihbabar901@gmail.com"
            className="text-cyan-400 hover:text-cyan-300"
          >
            fasihbabar901@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}