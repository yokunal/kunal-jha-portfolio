"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
} from "@phosphor-icons/react";

const projects = [
  {
    name: "Zop Agent",
    description:
      "Natural language data analysis using LLMs. Executes Python code for analysis and visualization with vector DB integration for semantic memory.",
    tech: ["Python", "LLM", "LangChain", "Vector DB"],
    github: "https://github.com/pgalko/BambooAI",
  },
  {
    name: "AI Real Estate Agent Team",
    description:
      "Multi-agent system for property search and analysis. Scrapes Zillow, Realtor.com, Trulia via Firecrawl with real-time market insights.",
    tech: ["Python", "Agno", "Firecrawl", "Streamlit"],
    github: "https://github.com/Shubhamsaboo/awesome-llm-apps",
  },
  {
    name: "SalesIQ",
    description:
      "Sales intelligence tool that takes your product knowledge and any business website, scrapes it, then suggests a tailored sales pitch, cold email to the owner, and identifies which vertical the product can be sold to.",
    tech: ["Python", "Supabase", "Firecrawl", "Streamlit"],
    github: "https://github.com/yokunal/mct-salesiq",
  },
  {
    name: "Research Agent",
    description:
      "Autonomous AI research agent that conducts deep web research and produces beautifully formatted PDF notes via LangGraph pipeline.",
    tech: ["Python", "LangGraph", "FastAPI", "LaTeX"],
    github: "https://github.com/yokunal/research_agent",
  },
  {
    name: "Resume AI",
    description:
      "Full-stack AI resume builder with Next.js frontend and agent-powered resume generation and optimization.",
    tech: ["Next.js", "TypeScript", "AI Agents", "Tailwind"],
    github: "https://github.com/yokunal/reume_ai",
  },
  {
    name: "Scraper 2.0 Agent",
    description:
      "Job scraper for USA F1 visa students targeting tech roles. Searches Greenhouse, Lever, Ashby, Workday with age filters. Displays results on a dashboard with salary data and resume matching.",
    tech: ["Python", "SQLite", "Sentence Transformers", "Typer"],
    github: "https://github.com/yokunal/scraper-2.0-agent",
  },
  {
    name: "Universal Scraper Agent",
    description:
      "Job scraper for UK students on visas. Configurable selectors to scrape all roles from any website with data export and age filtering.",
    tech: ["Python", "Streamlit", "BeautifulSoup", "Selenium"],
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
  { name: "Tailwind", icon: "TW" },
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

function TerminalText({ texts, delay = 2000 }: { texts: string[]; delay?: number }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setVisible(true);
      }, 300);
    }, delay);
    return () => clearInterval(interval);
  }, [texts.length, delay]);

  return (
    <span className={visible ? "opacity-100" : "opacity-0"}>
      <span className="text-[var(--accent)]">$</span> {texts[index]}
    </span>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-[var(--accent)]/20" : ""
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <span className="font-mono font-bold text-sm tracking-widest text-[var(--accent)]">
            {"</>"}
          </span>
          <span className="font-bold tracking-tight">KJ</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-8"
        >
          <a href="#projects" className="font-techno text-xs hover:text-[var(--accent)] transition-colors">
            PROJECTS
          </a>
          <a href="#stack" className="font-techno text-xs hover:text-[var(--accent)] transition-colors">
            STACK
          </a>
          <a href="#contact" className="font-techno text-xs hover:text-[var(--accent)] transition-colors">
            CONTACT
          </a>
          <motion.a
            href="https://github.com/yokunal"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary px-4 py-2 rounded text-sm font-mono"
          >
            GitHub
          </motion.a>
        </motion.div>
      </div>
    </motion.nav>
  );
}

function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-[100dvh] flex items-center pt-20 pb-12 px-6 relative overflow-hidden">
      <div className="absolute inset-0 animate-scan pointer-events-none" />

      <div className="max-w-[1100px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : -50 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[var(--accent)]/30 rounded-sm bg-[var(--accent)]/5">
              <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse-dot" />
              <span className="font-techno text-xs text-[var(--accent)]">AVAILABLE FOR WORK</span>
            </div>

            <div className="space-y-4">
              <p className="font-techno text-xs text-[var(--accent)] tracking-widest">AI ENGINEER & DATA SCIENTIST</p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
                KUNAL<span className="text-gradient">.JHA</span>
              </h1>
            </div>

            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded p-4 font-mono text-sm">
              <TerminalText
                texts={[
                  "building ai agents...",
                  "scraping data...",
                  "analyzing patterns...",
                  "deploying models...",
                ]}
              />
            </div>

            <p className="text-[var(--text-secondary)] max-w-[500px] leading-relaxed">
              Building intelligent systems that scrape, analyze, and automate.
              Focused on AI agents, LLM pipelines, and data-driven solutions.
            </p>

            <div className="flex items-center gap-3 text-[var(--text-secondary)]">
              <MapPin size={16} weight="fill" className="text-[var(--accent)]" />
              <span className="font-techno text-xs">SILIGURI, WEST BENGAL, INDIA</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Python", "AI Agents", "LLM", "Web Scraping", "Data Analysis", "Next.js"].map(
                (skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 10 }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className="px-3 py-1 border border-[var(--border)] rounded-sm text-xs font-mono hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                  >
                    {skill}
                  </motion.span>
                )
              )}
            </div>

            <div className="flex items-center gap-6 pt-2">
              <a
                href="https://github.com/yokunal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-sm hover:text-[var(--accent)] transition-colors"
              >
                <GithubLogo size={20} weight="fill" />
                yokunal
              </a>
              <a
                href="mailto:jhakunal471@gmail.com"
                className="flex items-center gap-2 font-mono text-sm hover:text-[var(--accent)] transition-colors"
              >
                <EnvelopeSimple size={20} weight="fill" />
                jhakunal471
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: mounted ? 1 : 0, scale: mounted ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--accent)]/20 blur-3xl rounded-full animate-glow" />
              <div className="relative w-48 h-48 rounded-lg bg-[var(--bg-card)] border border-[var(--accent)]/30 flex items-center justify-center glow-border">
                <span className="text-6xl font-mono font-bold text-gradient">KJ</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-16 px-6 border-y border-[var(--border)] bg-[var(--bg-card)]/50">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-[var(--accent)] font-mono">
                {stat.value}
              </div>
              <div className="font-techno text-xs text-[var(--text-secondary)] mt-2 tracking-wider">
                {stat.label.toUpperCase()}
              </div>
            </motion.div>
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
    <section className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-techno text-xs text-[var(--accent)] tracking-widest mb-4">APPROACH</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Design Philosophy
          </h2>
          <p className="text-[var(--text-secondary)] max-w-[600px]">
            Every project follows a systematic approach from data ingestion to actionable insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="card-hover p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded"
            >
              <div className="flex items-center gap-3 mb-4">
                <step.icon size={24} weight="duotone" className="text-[var(--accent)]" />
                <span className="font-mono text-xs text-[var(--text-secondary)]">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-[var(--text-secondary)]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Models() {
  return (
    <section className="py-24 px-6 bg-[var(--bg-card)]/30">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-techno text-xs text-[var(--accent)] tracking-widest mb-4">MODEL SELECTION</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Choosing the Right Tool
          </h2>
          <p className="text-[var(--text-secondary)] max-w-[600px]">
            Task-specific model selection based on speed, cost, and capability requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {models.map((model, i) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ borderColor: "var(--accent)" }}
              className="border-glow p-5 bg-[var(--bg-card)] rounded"
            >
              <h3 className="font-mono text-sm font-semibold mb-1">{model.name}</h3>
              <p className="text-xs text-[var(--text-secondary)]">{model.desc}</p>
            </motion.div>
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="card-hover p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded border border-[var(--accent)]/30 flex items-center justify-center">
            <FileText size={18} weight="duotone" className="text-[var(--accent)]" />
          </div>
          <div>
            <h3 className="font-semibold font-mono text-sm">{project.name}</h3>
          </div>
        </div>
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 border border-[var(--border)] rounded hover:border-[var(--accent)] transition-colors"
        >
          <ArrowUpRight size={16} />
        </motion.a>
      </div>

      <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 bg-[var(--bg-primary)] border border-[var(--border)] rounded-sm text-xs font-mono text-[var(--text-secondary)]"
          >
            {t}
          </span>
        ))}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 font-techno text-xs text-[var(--accent)] hover:underline"
      >
        {expanded ? "[Show less]" : "[Read more]"}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t border-[var(--border)]"
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm hover:text-[var(--accent)] transition-colors"
            >
              View on GitHub <ArrowUpRight size={12} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-techno text-xs text-[var(--accent)] tracking-widest mb-4">PORTFOLIO</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-[var(--text-secondary)] max-w-[600px]">
            AI agents, scrapers, and data tools built to solve real problems.
          </p>
        </motion.div>

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
    <section id="stack" className="py-24 px-6 bg-[var(--bg-card)]/30">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-techno text-xs text-[var(--accent)] tracking-widest mb-4">TECHNOLOGIES</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Core Stack
          </h2>
          <p className="text-[var(--text-secondary)] max-w-[600px]">
            Technologies used across projects for building AI systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {stack.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ y: -2, borderColor: "var(--accent)" }}
              className="border-glow p-4 bg-[var(--bg-card)] rounded text-center cursor-default"
            >
              <div className="font-mono font-bold text-lg text-[var(--accent)] mb-1">
                {item.icon}
              </div>
              <div className="text-xs font-medium">{item.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-techno text-xs text-[var(--accent)] tracking-widest mb-4">BACKGROUND</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Education</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ borderColor: "var(--accent)" }}
            className="border-glow p-6 bg-[var(--bg-card)] rounded"
          >
            <div className="font-mono text-xs text-[var(--text-secondary)] mb-3">2021 - 2024</div>
            <h3 className="font-semibold mb-1">Bachelor of Arts, English Honours</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Kalipada Ghosh Tarai Mahavidyalaya, Siliguri
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ borderColor: "var(--accent)" }}
            className="border-glow p-6 bg-[var(--bg-card)] rounded"
          >
            <div className="font-mono text-xs text-[var(--text-secondary)] mb-3">2019 - 2021</div>
            <h3 className="font-semibold mb-1">Class 12, Commerce</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              BSF Senior Secondary Residential School
            </p>
            <p className="text-xs text-[var(--text-secondary)] mt-1 font-mono">
              ACCOUNTS / BUSINESS STUDIES / ECONOMICS
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[var(--bg-card)]/30">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-techno text-xs text-[var(--accent)] tracking-widest mb-4">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Contact
          </h2>
          <p className="text-[var(--text-secondary)] max-w-[600px]">
            Building AI systems and data tools. Open to collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              href: "mailto:jhakunal471@gmail.com",
              icon: EnvelopeSimple,
              label: "Email",
              value: "jhakunal471@gmail.com",
            },
            {
              href: "https://github.com/yokunal",
              icon: GithubLogo,
              label: "GitHub",
              value: "github.com/yokunal",
            },
            {
              href: "https://linkedin.com/in/kunaljha",
              icon: LinkedinLogo,
              label: "LinkedIn",
              value: "linkedin.com/in/kunaljha",
            },
          ].map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, borderColor: "var(--accent)" }}
              className="border-glow card-hover p-6 bg-[var(--bg-card)] rounded flex flex-col items-start"
            >
              <item.icon size={28} weight="duotone" className="text-[var(--accent)] mb-4" />
              <h3 className="font-semibold mb-1">{item.label}</h3>
              <p className="text-sm text-[var(--text-secondary)] font-mono">{item.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[var(--border)]">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between text-sm">
        <p className="font-mono text-xs text-[var(--text-secondary)]">
          Built with Next.js and Tailwind CSS
        </p>
        <p className="font-mono text-xs text-[var(--text-secondary)]">
          v1.0.0
        </p>
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
