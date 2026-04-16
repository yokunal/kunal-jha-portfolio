"use client";

import { useState, useEffect } from "react";
import {
  GithubLogo,
  LinkedinLogo,
  EnvelopeSimple,
  MapPin,
  ArrowUpRight,
  Brain,
  Database,
  MagnifyingGlass,
  Cube,
  FileText,
  Circle,
} from "@phosphor-icons/react";

const projects = [
  {
    name: "Zop Agent",
    description:
      "Natural language data analysis using LLMs. Executes Python code for analysis and visualization with vector DB integration for semantic memory.",
    tech: ["Python", "LLM", "LangChain", "Vector DB"],
    status: "live" as const,
    github: "https://github.com/pgalko/BambooAI",
  },
  {
    name: "AI Real Estate Agent Team",
    description:
      "Multi-agent system for property search and analysis. Scrapes Zillow, Realtor.com, Trulia via Firecrawl with real-time market insights.",
    tech: ["Python", "Agno", "Firecrawl", "Streamlit"],
    status: "live" as const,
    github: "https://github.com/Shubhamsaboo/awesome-llm-apps",
  },
  {
    name: "MCT SalesIQ",
    description:
      "Sales intelligence platform with Supabase backend. Prospect management, web scraping, and AI-powered call scripting.",
    tech: ["Python", "Supabase", "Firecrawl", "Streamlit"],
    status: "live" as const,
    github: "https://github.com/yokunal/mct-salesiq",
  },
  {
    name: "Research Agent",
    description:
      "Autonomous AI research agent that conducts deep web research and produces beautifully formatted PDF notes via LangGraph pipeline.",
    tech: ["Python", "LangGraph", "FastAPI", "LaTeX"],
    status: "live" as const,
    github: "https://github.com/yokunal/research_agent",
  },
  {
    name: "Resume AI",
    description:
      "Full-stack AI resume builder with Next.js frontend and agent-powered resume generation and optimization.",
    tech: ["Next.js", "TypeScript", "AI Agents", "Tailwind"],
    status: "live" as const,
    github: "https://github.com/yokunal/reume_ai",
  },
  {
    name: "Scraper 2.0 Agent",
    description:
      "Multi-ATS job scraper for Greenhouse, Lever, Ashby, Workday. Enriches with skills and salary data, scores against resume.",
    tech: ["Python", "SQLite", "Sentence Transformers", "Typer"],
    status: "live" as const,
    github: "https://github.com/yokunal/scraper-2.0-agent",
  },
  {
    name: "Universal Scraper Agent",
    description:
      "Universal web scraping agent with dashboard. Scrapes any website with configurable selectors and data export.",
    tech: ["Python", "Streamlit", "BeautifulSoup", "Selenium"],
    status: "live" as const,
    github: "https://github.com/yokunal/universal-scraper-agent",
  },
];

const models = [
  { name: "Claude Sonnet", desc: "Code generation & reasoning" },
  { name: "Claude Haiku", desc: "Fast lightweight tasks" },
  { name: "GPT-4o Mini", desc: "Quick completions" },
  { name: "Gemini Flash", desc: "Real-time data" },
  { name: "XGBoost", desc: "Structured prediction" },
  { name: "Sentence Transformers", desc: "Semantic similarity" },
];

const stack = [
  { name: "Python", icon: "PY" },
  { name: "LangChain", icon: "LC" },
  { name: "LangGraph", icon: "LG" },
  { name: "Next.js", icon: "NX" },
  { name: "Supabase", icon: "SB" },
  { name: "FastAPI", icon: "FA" },
  { name: "Streamlit", icon: "ST" },
  { name: "Tailwind CSS", icon: "TW" },
  { name: "Firecrawl", icon: "FC" },
  { name: "SQLite", icon: "SQ" },
  { name: "Docker", icon: "DC" },
];

const stats = [
  { value: "7+", label: "AI Projects Built" },
  { value: "5+", label: "Data Sources Scraped" },
  { value: "4+", label: "AI Agents Deployed" },
  { value: "10k+", label: "Records Processed" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-[var(--border)]" : ""
      }`}
    >
      <div className="max-w-[960px] mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-bold text-lg tracking-tight">KJ</span>
        <div className="flex items-center gap-6">
          <a href="#projects" className="text-sm hover:text-[var(--accent)] transition-colors">
            Projects
          </a>
          <a href="#stack" className="text-sm hover:text-[var(--accent)] transition-colors">
            Stack
          </a>
          <a href="#contact" className="text-sm hover:text-[var(--accent)] transition-colors">
            Contact
          </a>
          <a
            href="https://github.com/yokunal"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[var(--accent)] text-white rounded-[var(--radius-sm)] text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-[100dvh] flex items-center pt-20 pb-12 px-6">
      <div className="max-w-[960px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-[var(--success)] rounded-full animate-pulse-dot" />
              Available for work
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              Kunal Jha
            </h1>

            <p className="text-xl text-[var(--text-secondary)]">
              AI Engineer and Data Scientist building intelligent agents,
              scrapers, and data pipelines.
            </p>

            <div className="flex items-center gap-2 text-[var(--text-secondary)]">
              <MapPin size={18} weight="fill" />
              <span className="text-sm">Siliguri, West Bengal, India</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Python", "AI Agents", "LLM", "Web Scraping", "Data Analysis", "Next.js"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[var(--card-bg)] border border-[var(--border)] rounded-full text-sm"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/yokunal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-[var(--accent)] transition-colors"
              >
                <GithubLogo size={20} weight="fill" />
                yokunal
              </a>
              <a
                href="mailto:jhakunal471@gmail.com"
                className="flex items-center gap-2 text-sm hover:text-[var(--accent)] transition-colors"
              >
                <EnvelopeSimple size={20} weight="fill" />
                jhakunal471
              </a>
            </div>
          </div>

          <div className="hidden md:flex">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] flex items-center justify-center text-white text-4xl font-bold">
              KJ
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-12 px-6 border-y border-[var(--border)]">
      <div className="max-w-[960px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--text-secondary)] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  const steps = [
    { title: "Sense", desc: "Gather data from multiple sources", icon: MagnifyingGlass },
    { title: "Reason", desc: "Analyze with AI models", icon: Brain },
    { title: "Orchestrate", desc: "Coordinate multi-agent workflows", icon: Database },
    { title: "Optimize", desc: "Iterate and improve results", icon: Cube },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-[960px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Design Philosophy
        </h2>
        <p className="text-[var(--text-secondary)] mb-12 max-w-[600px]">
          Every project follows a systematic approach from data ingestion to
          actionable insights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="p-6 bg-[var(--card-bg)] border border-[var(--border)] rounded-[var(--radius)] hover:-translate-y-1 transition-transform cursor-default"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <step.icon
                size={32}
                weight="duotone"
                className="text-[var(--accent)] mb-4"
              />
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-[var(--text-secondary)]">
                  0{i + 1}
                </span>
                <h3 className="font-semibold">{step.title}</h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Models() {
  return (
    <section className="py-20 px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-[960px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Model Selection
        </h2>
        <p className="text-[var(--text-secondary)] mb-12 max-w-[600px]">
          Choosing the right model for each task based on speed, cost, and
          capability requirements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {models.map((model) => (
            <div
              key={model.name}
              className="p-5 bg-[var(--bg-primary)] border border-[var(--border)] rounded-[var(--radius)] hover:border-[var(--accent)] transition-colors"
            >
              <h3 className="font-mono text-sm font-semibold mb-1">{model.name}</h3>
              <p className="text-xs text-[var(--text-secondary)]">{model.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="group p-6 bg-[var(--card-bg)] border border-[var(--border)] rounded-[var(--radius)] hover:-translate-y-1 transition-all duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--accent)]/10 flex items-center justify-center">
            <FileText size={20} weight="duotone" className="text-[var(--accent)]" />
          </div>
          <div>
            <h3 className="font-semibold">{project.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span
                className={`inline-flex items-center gap-1 text-xs ${
                  project.status === "live"
                    ? "text-[var(--success)]"
                    : "text-yellow-500"
                }`}
              >
                <Circle size={8} weight="fill" className="animate-pulse-dot" />
                {project.status}
              </span>
            </div>
          </div>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-[var(--border)] rounded-[var(--radius-sm)]"
        >
          <ArrowUpRight size={18} />
        </a>
      </div>

      <p className="text-sm text-[var(--text-secondary)] mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 bg-[var(--bg-primary)] rounded text-xs font-mono"
          >
            {t}
          </span>
        ))}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 text-xs text-[var(--accent)] hover:underline"
      >
        {expanded ? "Show less" : "Read more"}
      </button>

      {expanded && (
        <div className="mt-4 pt-4 border-t border-[var(--border)]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-[var(--accent)] transition-colors"
          >
            View on GitHub
            <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-[960px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Featured Projects
        </h2>
        <p className="text-[var(--text-secondary)] mb-12 max-w-[600px]">
          AI agents, scrapers, and data tools built to solve real problems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="py-20 px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-[960px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Core Stack
        </h2>
        <p className="text-[var(--text-secondary)] mb-12 max-w-[600px]">
          Technologies used across projects for building AI systems.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {stack.map((item) => (
            <div
              key={item.name}
              className="p-4 bg-[var(--bg-primary)] border border-[var(--border)] rounded-[var(--radius)] text-center hover:border-[var(--accent)] transition-colors"
            >
              <div className="text-lg font-mono font-bold text-[var(--accent)] mb-2">
                {item.icon}
              </div>
              <div className="text-sm font-medium">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[960px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[var(--card-bg)] border border-[var(--border)] rounded-[var(--radius)]">
            <div className="text-sm text-[var(--text-secondary)] mb-2">2021 - 2024</div>
            <h3 className="font-semibold mb-1">Bachelor of Arts, English Honours</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Kalipada Ghosh Tarai Mahavidyalaya, Siliguri
            </p>
          </div>

          <div className="p-6 bg-[var(--card-bg)] border border-[var(--border)] rounded-[var(--radius)]">
            <div className="text-sm text-[var(--text-secondary)] mb-2">2019 - 2021</div>
            <h3 className="font-semibold mb-1">Class 12, Commerce</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              BSF Senior Secondary Residential School
            </p>
            <p className="text-xs text-[var(--text-secondary)] mt-1">
              Accounts, Business Studies, Economics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-[960px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Get in Touch
        </h2>
        <p className="text-[var(--text-secondary)] mb-12 max-w-[600px]">
          Building AI systems and data tools. Open to collaborations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="mailto:jhakunal471@gmail.com"
            className="p-6 bg-[var(--card-bg)] border border-[var(--border)] rounded-[var(--radius)] hover:border-[var(--accent)] transition-colors group"
          >
            <EnvelopeSimple
              size={32}
              weight="duotone"
              className="text-[var(--accent)] mb-4"
            />
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-sm text-[var(--text-secondary)]">jhakunal471@gmail.com</p>
          </a>

          <a
            href="https://github.com/yokunal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-[var(--card-bg)] border border-[var(--border)] rounded-[var(--radius)] hover:border-[var(--accent)] transition-colors group"
          >
            <GithubLogo
              size={32}
              weight="duotone"
              className="text-[var(--accent)] mb-4"
            />
            <h3 className="font-semibold mb-1">GitHub</h3>
            <p className="text-sm text-[var(--text-secondary)]">github.com/yokunal</p>
          </a>

          <a
            href="https://linkedin.com/in/kunaljha"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-[var(--card-bg)] border border-[var(--border)] rounded-[var(--radius)] hover:border-[var(--accent)] transition-colors group"
          >
            <LinkedinLogo
              size={32}
              weight="duotone"
              className="text-[var(--accent)] mb-4"
            />
            <h3 className="font-semibold mb-1">LinkedIn</h3>
            <p className="text-sm text-[var(--text-secondary)]">linkedin.com/in/kunaljha</p>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[var(--border)]">
      <div className="max-w-[960px] mx-auto flex items-center justify-between text-sm text-[var(--text-secondary)]">
        <p>Built with Python, Next.js, and Tailwind CSS</p>
        <p className="font-mono text-xs">v1.0.0</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Philosophy />
      <Models />
      <Projects />
      <Stack />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
