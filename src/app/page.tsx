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
  Globe,
  Buildings,
  Cpu,
  Terminal,
  RocketLaunch,
  CheckCircle,
  ShieldCheck,
  Sparkle,
  Briefcase,
  Code,
} from "@phosphor-icons/react";

interface Project {
  name: string;
  tagline: string;
  badge: string;
  category: "core" | "google" | "client";
  description: string;
  highlights: string[];
  tech: string[];
  github: string;
  live?: string;
  featured?: boolean;
}

const featuredProjects: Project[] = [
  {
    name: "Nexus AI Terminal Engine",
    tagline: "High-Performance Autonomous AI Terminal Agent Engine in Rust",
    badge: "Systems & Rust",
    category: "core",
    featured: true,
    description:
      "Blazing-fast terminal AI coding agent harness engineered from scratch in Rust. Built on Tokio asynchronous runtime, interactive Ratatui terminal UI (TUI), Rusqlite local session memory, streaming Server-Sent Events (SSE), and Language Server Protocol (LSP) integrations for high-speed local code intelligence.",
    highlights: [
      "Zero-overhead asynchronous event loops powered by Tokio & Ratatui TUI",
      "Embedded SQLite session storage & streaming SSE completion parser",
      "Language Server Protocol (LSP) integration for workspace diagnostics",
    ],
    tech: ["Rust", "Tokio", "Ratatui TUI", "Rusqlite", "SSE Streaming", "LSP"],
    github: "https://github.com/yokunal/nexus",
  },
  {
    name: "BizScout",
    tagline: "AI-Powered SMB Commercial Opportunity Finder & GitHub Intelligence Analyzer",
    badge: "AI & Market Intelligence",
    category: "core",
    featured: true,
    description:
      "Automated repository intelligence platform that scouts open-source repositories via GitHub API, parses codebases, and uses strict multi-model LLM scoring (0–10) to evaluate SMB commercial viability, technical moat, and go-to-market potential. Features automated executive report generation and an interactive Next.js dashboard.",
    highlights: [
      "Strict 0–10 Commercial Viability Scoring (SMB Product-Market Fit)",
      "Automated Executive Markdown Intelligence Reports",
      "Interactive Next.js & TypeScript Analytics Dashboard",
    ],
    tech: ["Next.js", "TypeScript", "Python", "OpenAI / MiniMax", "GitHub API", "Data Mining"],
    github: "https://github.com/yokunal/BizScout",
  },
  {
    name: "Job Aggregator & Intelligence Suite",
    tagline: "Multi-Board Tech Job Extraction, Visa-Aware Filtering & Semantic Resume Matcher",
    badge: "High-Throughput Scraping & NLP",
    category: "core",
    featured: true,
    description:
      "Concurrent job aggregation engine extracting listings across LinkedIn, Indeed, Glassdoor, Google Jobs, and direct ATS platforms (Greenhouse, Lever, Ashby, Workday). Includes specialized visa-sponsorship classifiers (F-1 OPT/CPT, UK Tier 2) and semantic resume matching using vector embeddings with Sentence Transformers.",
    highlights: [
      "Concurrent extraction across 5+ job boards & top 4 modern ATS systems",
      "Specialized visa-sponsorship detection (F-1 OPT/CPT & UK sponsorship)",
      "Semantic resume compatibility matching via Sentence Transformers",
    ],
    tech: ["Python", "Sentence Transformers", "SQLite", "Typer", "Streamlit", "Proxy Rotation"],
    github: "https://github.com/yokunal/Job-Spy-USA-IT-roles",
  },
  {
    name: "AI Real Estate Agent Team",
    tagline: "Autonomous Multi-Agent Property Acquisition & Market Valuation Swarm",
    badge: "Autonomous Multi-Agent Swarms",
    category: "core",
    featured: true,
    description:
      "Coordinated multi-agent pipeline orchestrating specialized agents (Property Search Agent, Market Trends Agent, Valuation & ROI Agent) across Zillow, Realtor.com, Trulia, and Homes.com via Firecrawl extract API. Produces real-time market sentiment, cap rates, rental yield projections, and investment scorecards.",
    highlights: [
      "3-Agent Autonomous Swarm (Search, Market Analysis, Valuation)",
      "Deep structured data extraction via Firecrawl across top 4 US portals",
      "Automated cap rate, buyer/seller sentiment, and ROI calculations",
    ],
    tech: ["Python", "Agno / LangChain", "LangGraph", "Firecrawl Extract", "Streamlit"],
    github: "https://github.com/yokunal/realestate-agent1.0",
  },
  {
    name: "Autonomous Loop",
    tagline: "Unattended, Test-Gated Self-Healing Loop for Google Antigravity CLI",
    badge: "Agent Protocols & DevTools",
    category: "google",
    description:
      "Self-healing execution loop for autonomous coding agents with native support for Google Antigravity CLI (agy), Claude Code, and Codex. Operates on a 9-step execution cycle with an anti-stuck self-repair protocol, safety guardrails, and automated morning handoff reports.",
    highlights: [
      "Native Google Antigravity CLI (agy) skill & headless driver support",
      "9-step execution cycle with anti-stuck backtracking state machine",
      "Zero-human-intervention overnight autonomous build loop",
    ],
    tech: ["Google Antigravity CLI (agy)", "Shell", "Python", "State Machine", "Markdown Protocols"],
    github: "https://github.com/yokunal/autonomous-loop",
  },
  {
    name: "Student Profile Tracker & Tutoring Dashboard",
    tagline: "AI-Powered Educational Analytics & Google Sheets Cloud Sync",
    badge: "Google Workspace & AI",
    category: "google",
    description:
      "Tutoring management dashboard integrating Google Sheets API and Google AI (Gemini) for student tracking, automated performance assessments, attendance analytics, and structured progress reports.",
    highlights: [
      "Two-way live synchronization with Google Sheets API",
      "Automated AI progress summarization and weak-area diagnosis",
      "Clean Streamlit / Python dashboard for educators",
    ],
    tech: ["Python", "Google Sheets API", "Gemini AI", "Streamlit", "Pandas"],
    github: "https://github.com/yokunal/tution_dashboard_new",
  },
];

const models = [
  { name: "JEV by TypeSafe", desc: "System One schema-bound probabilistic decision engine with zero type errors and zero hallucination" },
  { name: "SubQ (Subquadratic)", desc: "Subquadratic Sparse Attention LLM scaling to 12M+ token contexts with ultra-low latency inference" },
  { name: "LangChain & LangGraph", desc: "Cyclic stateful graph workflows, multi-agent coordination, and memory persistence" },
  { name: "Gemini 1.5 & Flash", desc: "Long-context reasoning, multimodal document analysis & high-speed data extraction" },
  { name: "Claude 3.5 Sonnet", desc: "Complex agent reasoning, architectural planning & full-stack code synthesis" },
  { name: "Sentence Transformers", desc: "Local vector embeddings for semantic resume-to-job matching & retrieval" },
];

const stack = [
  { name: "Rust", icon: "RS" },
  { name: "Python", icon: "PY" },
  { name: "TypeScript", icon: "TS" },
  { name: "n8n", icon: "N8N" },
  { name: "AWS", icon: "AWS" },
  { name: "LangChain", icon: "LC" },
  { name: "LangGraph", icon: "LG" },
  { name: "Next.js", icon: "NX" },
  { name: "Tokio", icon: "TK" },
  { name: "Firecrawl", icon: "FC" },
  { name: "Google Cloud", icon: "GCP" },
  { name: "SQLite / Postgres", icon: "SQL" },
  { name: "Docker", icon: "DC" },
  { name: "Tailwind CSS", icon: "TW" },
];

function TerminalText({ texts, delay = 2200 }: { texts: string[]; delay?: number }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setVisible(true);
      }, 250);
    }, delay);
    return () => clearInterval(interval);
  }, [texts.length, delay]);

  return (
    <span className={visible ? "opacity-100" : "opacity-0"}>
      <span className="text-[var(--accent)] font-bold">$</span> {texts[index]}
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
        scrolled ? "glass border-b border-[var(--accent)]/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1140px] mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-3 group"
        >
          <div className="w-8 h-8 rounded border border-[var(--accent)]/40 bg-[var(--accent)]/10 flex items-center justify-center font-mono font-bold text-xs text-[var(--accent)] group-hover:border-[var(--accent)] transition-colors">
            KJ
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-sm flex items-center gap-1.5">
              KUNAL JHA
              <span className="text-[10px] font-mono text-[var(--accent)] px-1.5 py-0.5 rounded bg-[var(--accent)]/10 border border-[var(--accent)]/20 hidden sm:inline-block">
                FOUNDER
              </span>
            </span>
            <span className="text-[10px] font-mono text-[var(--text-secondary)]">
              zenvix.solutions
            </span>
          </div>
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-6 md:gap-8"
        >
          <a
            href="#projects"
            className="font-techno text-xs hover:text-[var(--accent)] transition-colors hidden sm:inline-block"
          >
            PROJECTS
          </a>
          <a
            href="#zenvix"
            className="font-techno text-xs hover:text-[var(--accent)] transition-colors hidden md:inline-block"
          >
            ZENVIX
          </a>
          <a
            href="#stack"
            className="font-techno text-xs hover:text-[var(--accent)] transition-colors hidden sm:inline-block"
          >
            ARSENAL
          </a>
          <a
            href="#contact"
            className="font-techno text-xs hover:text-[var(--accent)] transition-colors hidden sm:inline-block"
          >
            CONTACT
          </a>
          <a
            href="https://www.zenvix.solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[var(--accent)]/40 text-xs font-mono hover:border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/5 hover:bg-[var(--accent)]/10 transition-all"
          >
            <Globe size={14} />
            zenvix.solutions
            <ArrowUpRight size={12} />
          </a>
          <motion.a
            href="https://github.com/yokunal"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary px-3.5 py-1.5 rounded text-xs font-mono flex items-center gap-1.5"
          >
            <GithubLogo size={14} weight="bold" />
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
    <section className="min-h-[100dvh] flex items-center pt-24 pb-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 animate-scan pointer-events-none" />

      <div className="max-w-[1140px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : -40 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-7"
          >
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-[var(--accent)]/30 rounded-sm bg-[var(--accent)]/10 shadow-[0_0_15px_var(--accent-dim)]">
                <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse-dot" />
                <span className="font-techno text-xs text-[var(--accent)] font-semibold tracking-wider">
                  FOUNDER @ ZENVIX SOLUTIONS
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-[var(--border)] rounded-sm bg-[var(--bg-card)] text-[var(--text-secondary)] font-mono text-xs">
                <Sparkle size={13} weight="fill" className="text-[var(--accent)]" />
                <span>Google DevFest Candidate 2026</span>
              </div>
            </div>

            {/* Name & Title */}
            <div className="space-y-3">
              <p className="font-techno text-xs text-[var(--accent)] tracking-widest font-semibold">
                AI SYSTEMS ENGINEER • SYSTEMS ARCHITECT • ENTREPRENEUR
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[0.95]">
                KUNAL <span className="text-gradient">JHA</span>
              </h1>
            </div>

            {/* Terminal Live Simulation */}
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded p-4 font-mono text-xs sm:text-sm shadow-inner relative overflow-hidden">
              <div className="flex items-center gap-1.5 pb-2.5 mb-2.5 border-b border-[var(--border)] text-[var(--text-secondary)] text-[11px]">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 font-mono">bash ~/yokunal/terminal-session</span>
              </div>
              <TerminalText
                texts={[
                  "nexus: high-performance terminal ai harness engineered in rust...",
                  "founder @ zenvix.solutions (siliguri) — building automated client pipelines...",
                  "bizscout: mining smb commercial opportunities across github...",
                  "jobspy & scraper 2.0: multi-board concurrent job aggregation...",
                  "ai-real-estate: orchestrating autonomous 3-agent property swarms...",
                  "n8n & aws: event-driven serverless cloud workflows...",
                  "langchain & langgraph: cyclic multi-agent graph workflows...",
                  "jev by typesafe & subq (ssa): next-gen schema-bound decision models...",
                  "ready to build, demo, and connect at google devfest 2026...",
                ]}
              />
            </div>

            {/* Bio */}
            <p className="text-[var(--text-secondary)] text-base max-w-[620px] leading-relaxed">
              Founder of{" "}
              <a
                href="https://www.zenvix.solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-primary)] font-semibold underline decoration-[var(--accent)] underline-offset-4 hover:text-[var(--accent)] transition-colors"
              >
                Zenvix Solutions (zenvix.solutions)
              </a>
              , based in Siliguri. I architect autonomous multi-agent swarms, high-performance systems in Rust, and enterprise-grade Google Workspace & Cloud automation workflows that power real businesses.
            </p>

            {/* Location & Tags */}
            <div className="flex items-center gap-2 text-[var(--text-secondary)]">
              <MapPin size={16} weight="fill" className="text-[var(--accent)]" />
              <span className="font-techno text-xs tracking-wider">
                SILIGURI, WEST BENGAL, INDIA • DEV FEST TOWN
              </span>
            </div>

            {/* Quick Skills Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                "Nexus (Rust)",
                "BizScout",
                "n8n & AWS",
                "LangChain & LangGraph",
                "JEV by TypeSafe",
                "SubQ (SSA)",
                "Multi-Board Scraping",
                "Next.js / TypeScript",
              ].map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 10 }}
                  transition={{ delay: 0.3 + i * 0.04 }}
                  className="px-3 py-1 border border-[var(--border)] rounded-sm text-xs font-mono bg-[var(--bg-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="btn-primary px-5 py-2.5 rounded font-mono text-sm inline-flex items-center gap-2 shadow-sm"
              >
                <RocketLaunch size={16} weight="bold" />
                Explore Projects
              </a>
              <a
                href="https://www.zenvix.solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded font-mono text-sm border border-[var(--accent)]/40 hover:border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/5 hover:bg-[var(--accent)]/15 inline-flex items-center gap-2 transition-all"
              >
                <Globe size={16} />
                Visit zenvix.solutions
                <ArrowUpRight size={14} />
              </a>
              <a
                href="https://github.com/yokunal"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded font-mono text-sm border border-[var(--border)] hover:border-[var(--text-primary)] inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
              >
                <GithubLogo size={18} weight="fill" />
                github.com/yokunal
              </a>
            </div>
          </motion.div>

          {/* Right Hero Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: mounted ? 1 : 0, scale: mounted ? 1 : 0.85 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-center gap-4"
          >
            <div className="relative w-full">
              <div className="absolute inset-0 bg-[var(--accent)]/20 blur-3xl rounded-full animate-glow" />
              <div className="relative rounded-xl bg-[var(--bg-card)] border border-[var(--accent)]/40 p-6 glow-border space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse-dot" />
                    <span className="font-mono text-xs font-bold text-[var(--accent)]">
                      FOUNDER STATUS
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[var(--text-secondary)]">
                    ONLINE
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-2xl font-bold font-mono text-[var(--text-primary)]">
                    Zenvix Solutions
                  </div>
                  <div className="text-xs font-mono text-[var(--accent)]">
                    www.zenvix.solutions
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] pt-2 leading-relaxed">
                    Delivering custom AI systems, autonomous web scrapers, and enterprise automation pipelines.
                  </p>
                </div>

                <div className="pt-2 border-t border-[var(--border)] grid grid-cols-2 gap-2 text-center font-mono">
                  <div className="p-2 rounded bg-[var(--bg-secondary)] border border-[var(--border)]">
                    <div className="text-xs text-[var(--accent)] font-bold">100%</div>
                    <div className="text-[10px] text-[var(--text-secondary)]">Production Uptime</div>
                  </div>
                  <div className="p-2 rounded bg-[var(--bg-secondary)] border border-[var(--border)]">
                    <div className="text-xs text-[var(--accent)] font-bold">Rust / Py / JS</div>
                    <div className="text-[10px] text-[var(--text-secondary)]">Polyglot Stack</div>
                  </div>
                </div>

                <a
                  href="https://www.zenvix.solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary py-2 rounded text-xs font-mono font-bold flex items-center justify-center gap-1.5"
                >
                  <Globe size={14} />
                  Launch zenvix.solutions
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FounderSection() {
  return (
    <section id="zenvix" className="py-20 px-6 relative">
      <div className="max-w-[1140px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-10 rounded-xl bg-gradient-to-br from-[var(--bg-card)] via-[var(--bg-secondary)] to-[var(--bg-card)] border border-[var(--accent)]/30 glow-border relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Buildings size={180} weight="duotone" className="text-[var(--accent)]" />
          </div>

          <div className="relative z-10 max-w-[800px] space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--accent)]/15 border border-[var(--accent)]/30 text-[var(--accent)] font-mono text-xs">
              <Briefcase size={14} weight="bold" />
              <span>VENTURE & LEADERSHIP SPOTLIGHT</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Founder at <span className="text-gradient">Zenvix Solutions</span>
              </h2>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.zenvix.solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-mono text-[var(--accent)] hover:underline inline-flex items-center gap-1.5"
                >
                  www.zenvix.solutions <ArrowUpRight size={18} />
                </a>
                <span className="text-xs font-mono text-[var(--text-secondary)] px-2 py-0.5 rounded bg-[var(--bg-primary)] border border-[var(--border)]">
                  Based in Siliguri, West Bengal
                </span>
              </div>
            </div>

            <p className="text-[var(--text-secondary)] leading-relaxed">
              As the founder of Zenvix Solutions based in Siliguri, I help modern businesses and enterprises deploy autonomous AI agents, resilient web scraping engines, and high-concurrency cloud automations. From designing bespoke multi-agent workflows to commercial software prototypes, Zenvix translates complex AI paradigms into production revenue.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded bg-[var(--bg-primary)] border border-[var(--border)]">
                <div className="text-[var(--accent)] font-mono font-bold text-sm mb-1">01. AI Agent Swarms</div>
                <div className="text-xs text-[var(--text-secondary)]">Multi-agent decision systems tailored for market search, research, and data synthesis.</div>
              </div>
              <div className="p-4 rounded bg-[var(--bg-primary)] border border-[var(--border)]">
                <div className="text-[var(--accent)] font-mono font-bold text-sm mb-1">02. Automated Scraping</div>
                <div className="text-xs text-[var(--text-secondary)]">Anti-bot bypassing, proxy rotation, and structured JSON extraction from complex portals.</div>
              </div>
              <div className="p-4 rounded bg-[var(--bg-primary)] border border-[var(--border)]">
                <div className="text-[var(--accent)] font-mono font-bold text-sm mb-1">03. High-Uptime Cloud</div>
                <div className="text-xs text-[var(--text-secondary)]">Concurrency-safe pipelines on Google Workspace, Netlify, and high-performance backends.</div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://www.zenvix.solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-6 py-3 rounded text-sm font-mono inline-flex items-center gap-2"
              >
                <Globe size={18} />
                Explore Client Solutions at zenvix.solutions
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className={`card-hover p-6 sm:p-7 bg-[var(--bg-card)] border rounded-lg flex flex-col justify-between ${
        project.featured
          ? "border-[var(--accent)]/40 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
          : "border-[var(--border)]"
      }`}
    >
      <div>
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30 uppercase tracking-wider">
              {project.badge}
            </span>
            {project.featured && (
              <span className="px-2 py-0.5 rounded text-[10px] font-mono text-[var(--accent)] bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center gap-1">
                <Sparkle size={11} weight="fill" />
                KEY HIGHLIGHT
              </span>
            )}
          </div>

          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 border border-[var(--border)] rounded hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors text-[var(--text-secondary)]"
            title="View GitHub Repository"
          >
            <GithubLogo size={18} weight="bold" />
          </motion.a>
        </div>

        {/* Project Title & Tagline */}
        <div className="mb-3">
          <h3 className="font-bold font-mono text-lg text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
              {project.name}
              <ArrowUpRight size={14} className="opacity-70" />
            </a>
          </h3>
          <p className="text-xs font-mono text-[var(--accent)] mt-0.5">{project.tagline}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Key Achievements / Bullet Points */}
        <div className="space-y-1.5 mb-5 p-3 rounded bg-[var(--bg-secondary)]/70 border border-[var(--border)]">
          {project.highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-primary)]">
              <CheckCircle size={14} weight="fill" className="text-[var(--accent)] shrink-0 mt-0.5" />
              <span>{h}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border)]">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 bg-[var(--bg-primary)] border border-[var(--border)] rounded-sm text-[11px] font-mono text-[var(--text-secondary)]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Quick Links */}
        <div className="flex items-center justify-between pt-4 mt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[var(--accent)] hover:underline inline-flex items-center gap-1 font-semibold"
          >
            Inspect Source Code <ArrowUpRight size={12} />
          </a>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[11px] font-techno text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            {expanded ? "[- LESS]" : "[+ TECH DETAILS]"}
          </button>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 pt-3 border-t border-[var(--border)] text-xs text-[var(--text-secondary)] font-mono space-y-1"
            >
              <div>Repo URL: <span className="text-[var(--text-primary)]">{project.github}</span></div>
              <div>Category: <span className="text-[var(--accent)]">{project.category.toUpperCase()}</span></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function Projects() {
  const [filter, setFilter] = useState<"all" | "core">("all");

  const filteredProjects =
    filter === "all"
      ? featuredProjects
      : featuredProjects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-[1140px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <p className="font-techno text-xs text-[var(--accent)] tracking-widest mb-3 font-semibold">
              ENGINEERING ARSENAL
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
              Featured Projects
            </h2>
            <p className="text-[var(--text-secondary)] max-w-[620px]">
              Spotlighting high-performance Rust terminal harnesses, autonomous AI agent swarms, and intelligent scraping pipelines.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 p-1 bg-[var(--bg-card)] border border-[var(--border)] rounded-md self-start md:self-auto">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
                filter === "all"
                  ? "bg-[var(--accent)] text-[var(--bg-primary)] font-bold"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              All Projects ({featuredProjects.length})
            </button>
            <button
              onClick={() => setFilter("core")}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
                filter === "core"
                  ? "bg-[var(--accent)] text-[var(--bg-primary)] font-bold"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              Core 4 Spotlight
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="py-24 px-6">
      <div className="max-w-[1140px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="font-techno text-xs text-[var(--accent)] tracking-widest mb-3 font-semibold">
            TOOLING & INFRASTRUCTURE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Core Tech Stack
          </h2>
          <p className="text-[var(--text-secondary)] max-w-[600px]">
            Battle-tested technologies powering high-throughput scrapers, Rust engines, and client web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-16">
          {stack.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
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

        {/* Model Arsenal */}
        <div>
          <h3 className="text-xl font-bold font-mono mb-4 text-[var(--text-primary)] flex items-center gap-2">
            <Brain size={20} weight="duotone" className="text-[var(--accent)]" />
            AI Model Arsenal & Task Routing
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {models.map((model, i) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ borderColor: "var(--accent)" }}
                className="border-glow p-5 bg-[var(--bg-card)] rounded"
              >
                <h4 className="font-mono text-sm font-semibold mb-1 text-[var(--accent)]">
                  {model.name}
                </h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {model.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="py-20 px-6 bg-[var(--bg-card)]/30 border-t border-[var(--border)]">
      <div className="max-w-[1140px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-techno text-xs text-[var(--accent)] tracking-widest mb-3 font-semibold">
            ACADEMIC FOUNDATION
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Education & Background
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ borderColor: "var(--accent)" }}
            className="border-glow p-6 bg-[var(--bg-card)] rounded"
          >
            <div className="font-mono text-xs text-[var(--accent)] mb-2 font-semibold">2021 – 2024</div>
            <h3 className="font-semibold text-base mb-1">Bachelor of Arts, English Honours</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Kalipada Ghosh Tarai Mahavidyalaya, Siliguri
            </p>
            <p className="text-xs text-[var(--text-secondary)] mt-2 font-mono">
              Advanced critical reading, synthesis, prompt reasoning & narrative structure
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ borderColor: "var(--accent)" }}
            className="border-glow p-6 bg-[var(--bg-card)] rounded"
          >
            <div className="font-mono text-xs text-[var(--accent)] mb-2 font-semibold">2019 – 2021</div>
            <h3 className="font-semibold text-base mb-1">Class 12, Commerce</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              BSF Senior Secondary Residential School
            </p>
            <p className="text-xs text-[var(--text-secondary)] mt-2 font-mono">
              Accounts • Business Studies • Economics • Financial Systems
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-[1140px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="font-techno text-xs text-[var(--accent)] tracking-widest mb-3 font-semibold">
            LET&apos;S CONNECT
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Connect & Collaborate
          </h2>
          <p className="text-[var(--text-secondary)] max-w-[620px] leading-relaxed">
            Excited to connect with organizers, fellow developers, and speakers at Google DevFest in town. Available for AI systems consulting, open-source projects, and client automation through Zenvix Solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              href: "https://www.zenvix.solutions",
              icon: Globe,
              label: "Company Website",
              value: "zenvix.solutions",
              note: "Founder & Solutions",
            },
            {
              href: "mailto:jhakunal471@gmail.com",
              icon: EnvelopeSimple,
              label: "Direct Email",
              value: "jhakunal471@gmail.com",
              note: "Get in touch directly",
            },
            {
              href: "https://github.com/yokunal",
              icon: GithubLogo,
              label: "GitHub",
              value: "github.com/yokunal",
              note: "Open-source repos & code",
            },
            {
              href: "https://linkedin.com/in/kunaljha",
              icon: LinkedinLogo,
              label: "LinkedIn",
              value: "in/kunaljha",
              note: "Professional network",
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
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, borderColor: "var(--accent)" }}
              className="border-glow card-hover p-6 bg-[var(--bg-card)] rounded-lg flex flex-col justify-between"
            >
              <div>
                <item.icon size={30} weight="duotone" className="text-[var(--accent)] mb-3" />
                <h3 className="font-semibold text-sm mb-1">{item.label}</h3>
                <p className="text-sm text-[var(--text-primary)] font-mono font-medium truncate">
                  {item.value}
                </p>
              </div>
              <p className="text-[11px] text-[var(--text-secondary)] mt-4 font-mono">
                {item.note} →
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-[var(--border)] bg-[var(--bg-secondary)]/50">
      <div className="max-w-[1140px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-secondary)]">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[var(--text-primary)]">KUNAL JHA</span>
          <span>•</span>
          <span>Founder @ <a href="https://www.zenvix.solutions" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">Zenvix Solutions</a> (Siliguri)</span>
        </div>
        <p className="font-mono text-xs text-[var(--text-secondary)]">
          Siliguri, West Bengal
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
      <FounderSection />
      <Projects />
      <Stack />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
