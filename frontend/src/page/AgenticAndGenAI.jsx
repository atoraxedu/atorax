import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight, Check, X, ChevronDown,
  BrainCircuit, Network, Cpu, Code2, ShieldCheck, Workflow,
  Layers, TerminalSquare, Star, Users, Clock, BookOpen,
  Award, Target, Zap, TrendingUp, Briefcase, Globe, Database, GitBranch,
  Sparkles, Box, FileText, CheckCircle2, Search, Lock, ExternalLink,
  Compass, Rocket, ChevronRight, Server, Flame, BarChart3, Cloud
} from "lucide-react";
import AdvancedApplyPopup from "../Components/AdvancedApplyPopup";
import PaymentPlanWidget from "../Components/PaymentPlanWidget";
import MeetYourMentors from "../Components/MeetYourMentors";
import AuthorityMarquee from "../Components/AuthorityMarquee";
import MarketLeaders from "../Components/MarketLeaders";
import ProgramStatsBar from "../Components/ProgramStatsBar";
import PremiumCurriculum from "../Components/PremiumCurriculum";
import SalaryGrowth from "../Components/SalaryGrowth";
import CareerOutcomes from "../Components/CareerOutcomes";
import ApplyNowButton from "./AdvanceCourse/Components/ApplyNowButton";
import cyberTechBg from "../assets/cyber_tech_bg.png";
import cyberTechBg2 from "../assets/cyber_tech_bg_2.png";
import cyberTechBg3 from "../assets/cyber_tech_bg_3.png";
import "./AgenticAndGenAI.css";

const heroImages = [cyberTechBg, cyberTechBg2, cyberTechBg3];

const trustStats = [
  { value: "4 Months", label: "Program Duration" },
  { value: "16 Weeks", label: "Live Intensive Training" },
  { value: "5 Capstones", label: "Enterprise Projects" },
  { value: "30 Calls", label: "Guaranteed Interview Engine" },
  { value: "60 Seats", label: "Strict Cohort Limit" },
];

/* ──────── 4 ARCHITECTURAL PHASES & 15 EXPOSURE NODES ──────── */
const PIPELINE_STAGES = [
  {
    id: "stage-1",
    phase: "PHASE 01",
    month: "MONTH 1",
    duration: "Weeks 1–4",
    title: "Code, APIs & LLM Foundations",
    subtitle: "From clean Python architecture to model-agnostic API inference",
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    accentColor: "text-emerald-400",
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    borderGlow: "group-hover:border-emerald-500/50",
    glowColor: "rgba(16, 185, 129, 0.15)",
    nodes: [
      { num: "01", name: "Production Python", icon: Code2, tech: "OOP · AsyncIO · PyTest · Git", desc: "Modular, typed, asynchronous Python code with unit testing and exception handling." },
      { num: "02", name: "FastAPI & REST APIs", icon: Globe, tech: "Pydantic · Async · Swagger", desc: "High-throughput microservices with strict schema validation and async handling." },
      { num: "03", name: "LLM Tokens & Inference", icon: BrainCircuit, tech: "OpenAI · Gemini · Claude · Llama", desc: "Model-agnostic API engineering, context windows, and temperature tuning." },
      { num: "04", name: "Engineering Prompting", icon: TerminalSquare, tech: "Few-Shot · JSON · Guardrails", desc: "Chain-of-thought, structured schemas, injection defense, and cost-latency optimization." }
    ],
    project: {
      tag: "Month 1 Milestone Project",
      title: "AI Resume Analyzer & Interview Engine",
      desc: "Full-stack API extracting skills, computing ATS gaps against target JDs, and generating tailored interview scenarios.",
      status: "Demonstrable in Interviews by Week 4"
    }
  },
  {
    id: "stage-2",
    phase: "PHASE 02",
    month: "MONTH 2",
    duration: "Weeks 5–8",
    title: "Semantic Retrieval & Knowledge Systems",
    subtitle: "Architecting high-scale vector retrieval and grounded knowledge bases",
    badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    accentColor: "text-cyan-400",
    gradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
    borderGlow: "group-hover:border-cyan-500/50",
    glowColor: "rgba(6, 182, 212, 0.15)",
    nodes: [
      { num: "05", name: "Vector Embeddings", icon: Sparkles, tech: "Cosine Distance · Vector Space", desc: "Transform corporate documents into dense mathematical representations." },
      { num: "06", name: "Hybrid RAG Architecture", icon: Search, tech: "Chunking · Re-ranking · Citations", desc: "Dense semantic search + sparse BM25 indexing for hallucination-free retrieval." },
      { num: "07", name: "Vector DB Engines", icon: Database, tech: "Pinecone · ChromaDB · FAISS", desc: "Millisecond vector search, hybrid metadata filtering, and index management." },
      { num: "08", name: "Application Microservices", icon: Server, tech: "PostgreSQL · Redis · Docker", desc: "Frontend ↔ API ↔ AI Model ↔ Database with high-speed caching." }
    ],
    project: {
      tag: "Major Project #1",
      title: "Enterprise Knowledge Assistant",
      desc: "Multi-document RAG platform with source attribution, conversational memory, and audit logging.",
      status: "Portfolio-Grade RAG Project"
    }
  },
  {
    id: "stage-3",
    phase: "PHASE 03",
    month: "MONTH 3",
    duration: "Weeks 9–12",
    title: "Autonomous Agents & LangGraph",
    subtitle: "Building multi-agent networks that plan, execute tools, and collaborate",
    badgeColor: "bg-violet-500/15 text-violet-300 border-violet-500/30",
    accentColor: "text-violet-400",
    gradient: "from-violet-500/10 via-purple-500/5 to-transparent",
    borderGlow: "group-hover:border-violet-500/50",
    glowColor: "rgba(139, 92, 246, 0.15)",
    nodes: [
      { num: "09", name: "Autonomous AI Agents", icon: Workflow, tech: "Tool Calling · Memory · Planning", desc: "Dynamic tool execution, step-by-step reflection, and state persistence." },
      { num: "10", name: "Multi-Agent LangGraph", icon: Network, tech: "LangGraph · LangChain · CrewAI", desc: "Orchestrate collaborative agent graphs with supervisor routing and conditional edges." },
      { num: "11", name: "Human-in-the-Loop", icon: Zap, tech: "State Checkpoints · Approval Gates", desc: "Approval gates for critical actions and automated error recovery." },
      { num: "12", name: "Multimodal Document AI", icon: Layers, tech: "Vision LLMs · OCR · Schemas", desc: "Parse complex invoices, agreements, and tables into structured JSON records." }
    ],
    project: {
      tag: "Major Project #2",
      title: "Multi-Agent Sales Intelligence Pipeline",
      desc: "5 autonomous agents performing lead enrichment, intent analysis, and automated CRM sync.",
      status: "Enterprise Agentic Differentiator"
    }
  },
  {
    id: "stage-4",
    phase: "PHASE 04",
    month: "MONTH 4",
    duration: "Weeks 13–16",
    title: "Production Infrastructure & LLMOps",
    subtitle: "Dockerizing, deploying, evaluating, and securing enterprise AI at scale",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    accentColor: "text-amber-400",
    gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    borderGlow: "group-hover:border-amber-500/50",
    glowColor: "rgba(245, 158, 11, 0.15)",
    nodes: [
      { num: "13", name: "Docker & Cloud Deploy", icon: Box, tech: "Docker · Compose · AWS/Azure", desc: "Containerize microservices and deploy on scalable cloud compute clusters." },
      { num: "14", name: "LLMOps & Evaluation", icon: BarChart3, tech: "LangSmith · RAGAS · MLflow", desc: "Benchmark retrieval faithfulness, hallucination rate, token costs, and latency." },
      { num: "15", name: "AI Security & Guardrails", icon: ShieldCheck, tech: "Guardrails AI · PII Scrub · RBAC", desc: "Harden against prompt injections, jailbreaks, data leaks, and enforce compliance." },
      { num: "16", name: "Industry Capstone Launch", icon: Rocket, tech: "Live Demo · GitHub · Architecture", desc: "Deploy your choice of 5 enterprise platforms with full public case studies." }
    ],
    project: {
      tag: "Capstone Platform",
      title: "Production Cloud Capstone Deployment",
      desc: "Complete end-to-end cloud platform with CI/CD, evaluation dashboard, and architectural defense.",
      status: "Graduation Employability Asset"
    }
  }
];

const CIRCUIT_STEPS = [
  { step: "01", name: "Python", icon: Code2, tag: "OOP & Async" },
  { step: "02", name: "FastAPI", icon: Globe, tag: "REST & Validation" },
  { step: "03", name: "LLMs", icon: BrainCircuit, tag: "Tokens & Inference" },
  { step: "04", name: "Prompt Eng", icon: TerminalSquare, tag: "JSON Schemas" },
  { step: "05", name: "Embeddings", icon: Sparkles, tag: "Semantic Vectors" },
  { step: "06", name: "RAG", icon: Search, tag: "Hybrid Search" },
  { step: "07", name: "Vector DB", icon: Database, tag: "Pinecone & Chroma" },
  { step: "08", name: "AI Agents", icon: Workflow, tag: "Planning & Memory" },
  { step: "09", name: "Tool Calling", icon: Zap, tag: "Function Calling" },
  { step: "10", name: "LangGraph", icon: Network, tag: "Multi-Agent Graphs" },
  { step: "11", name: "Doc AI", icon: Layers, tag: "Vision & OCR" },
  { step: "12", name: "Evaluation", icon: BarChart3, tag: "RAGAS & LangSmith" },
  { step: "13", name: "Docker", icon: Box, tag: "Containers & Compose" },
  { step: "14", name: "Cloud AI", icon: Cloud, tag: "AWS & Azure AI" },
  { step: "15", name: "Production AI", icon: ShieldCheck, tag: "SLAs & Security" },
];

/* ──────── CURRICULUM MODULES (4-MONTH ARCHITECTURE) ──────── */
const CURRICULUM = [
  {
    id: "M1",
    tag: "MONTH 1",
    dur: "Weeks 1–4",
    title: "AI Engineering Foundation & LLM Fundamentals",
    topics: [
      "Module 1: Production Python for AI Engineering (OOP, Functions, Modules, Exception & File Handling, JSON, Virtual Envs, Type Hints, Async Basics, Logging, PyTest, Git & GitHub)",
      "Employment Project: AI Resume Analyzer API (Information extraction, skill gap analysis against target JDs, actionable scoring)",
      "Module 2: Generative AI Foundations (AI vs ML vs Deep Learning vs GenAI, LLM Architecture, Tokens, Context Windows, Temperature, Inference, Embeddings, Transformers, Open-Source vs Proprietary)",
      "Model-Agnostic Ecosystem: Hands-on API integration with OpenAI, Google Gemini, Anthropic Claude, Meta Llama, and Azure OpenAI",
      "Engineering Prompt Engineering: System & User prompts, Few-shot prompting, Structured JSON outputs, Prompt versioning, Chain-of-thought, Prompt injection defense, Cost/latency trade-offs",
      "Hands-On Project: AI Interview Preparation Assistant (JD → Skill Extraction → Question Gen → Candidate Response → AI Evaluation & Feedback)"
    ],
    project: "Employment Project: AI Resume Analyzer API & AI Interview Assistant — ready for interview demos from Week 4."
  },
  {
    id: "M2",
    tag: "MONTH 2",
    dur: "Weeks 5–8",
    title: "RAG Engineering & AI Application Development",
    topics: [
      "Module 3: Retrieval-Augmented Generation (What & Why RAG, Chunks & Chunking Strategies, Metadata, Embeddings, Similarity Search, Semantic Search, Re-Ranking, Grounding, Hallucination Reduction, Citation/Attribution, Hybrid Search, RAG Evaluation)",
      "Vector Databases at Scale: Hands-on mastery with FAISS, ChromaDB, Pinecone (Managed Vector DB); Intro to Weaviate & Azure AI Search",
      "Major Project #1: Enterprise Knowledge Assistant (PDF/DOCs/Web → Ingestion → Chunking → Embeddings → Vector DB → Retrieval → LLM → Answer + Citations, Auth, Filtering & Evaluation Dashboard)",
      "Module 4: Building Scalable AI APIs (FastAPI, RESTful patterns, GET/POST, Request validation with Pydantic, Authentication basics, Error handling, Swagger/OpenAPI docs, Async endpoints, Flask & microservice concepts)",
      "Database & System Integration: PostgreSQL, SQL fundamentals, Redis caching basics; End-to-end flow: Frontend → API → AI Model → Database → Response"
    ],
    project: "Major Project #1: Enterprise Knowledge Assistant — a production-grade multi-tenant RAG platform with live evaluation metrics."
  },
  {
    id: "M3",
    tag: "MONTH 3",
    dur: "Weeks 9–12",
    title: "Agentic AI & Advanced GenAI",
    topics: [
      "Module 5: Autonomous AI Agents (What is an AI Agent?, LLM Workflow vs Agent, Tool Calling, Function Calling, Memory, Planning, Routing, Reflection, Structured Outputs, Agent Orchestration, Human-in-the-Loop, Multi-Agent Systems, Security & Failure Handling)",
      "Agent Frameworks: Deep-dive LangChain + LangGraph; Exposure to CrewAI, AutoGen, LlamaIndex, Model-provider agent tooling",
      "Major Project #2: Multi-Agent Business Automation System (AI Sales Intelligence System: Agent 1 Lead Researcher → Agent 2 Company Researcher → Agent 3 Intent Analyzer → Agent 4 Email Generator → Agent 5 Follow-up Agent → Human Approval → CRM/API)",
      "Module 6: Advanced LLM Engineering (Function calling, structured generation, fine-tuning concepts, LoRA / PEFT, open-source LLMs, model quantization, context engineering, long-context apps)",
      "Multimodal AI Project: AI Document Intelligence System (Invoice/Resume/Agreement → OCR/Vision → Information extraction → LLM reasoning → Structured JSON → DB → Dashboard)"
    ],
    project: "Major Project #2: Multi-Agent Sales Intelligence System & Multimodal Doc AI — autonomous agent network with human-in-the-loop validation."
  },
  {
    id: "M4",
    tag: "MONTH 4",
    dur: "Weeks 13–16",
    title: "Production AI Engineering, LLMOps & Security",
    topics: [
      "Module 7: AI Application Deployment (Docker, Containers, Dockerfile, Docker Compose, Environment Variables, Image Management; Cloud deep dive on AWS & Azure: Compute, Storage, IAM, Networking, Secrets, AI/LLM Services, Deployment & Monitoring)",
      "Module 8: Production AI & LLMOps (Model/version management, prompt versioning, dataset management, CI/CD with GitHub Actions, Docker deployment, Kubernetes concepts)",
      "Enterprise LLM Evaluation (Accuracy, Relevance, Faithfulness, Groundedness, Hallucination detection, Retrieval quality, Response quality, Latency & Cost tracking with LangSmith, RAGAS, MLflow)",
      "Module 9: Responsible & Secure AI (Prompt injection, jailbreaking, data leakage, PII protection, access control, auth/authorization, secure API keys, Guardrails AI, AI governance, responsible AI)",
      "Industry Capstone Platforms: Choice of 5 mega projects with live cloud deployment, architecture diagrams, GitHub repositories, and LinkedIn case studies"
    ],
    project: "Production Capstone Deployment: Cloud deployment with Docker, CI/CD, LangSmith observability, RAGAS evaluation, and public case study."
  },
  {
    id: "CAREER",
    tag: "PARALLEL TRACK",
    dur: "Weeks 1–16",
    title: "The Employment Layer & Technical Interview Engine",
    topics: [
      "Week 1: Career Foundation (Target role selection, AI career roadmap, LinkedIn optimization, GitHub setup, Resume structure)",
      "Week 4: Technical Profile & Artifacts (GitHub profile, Project documentation, Developer portfolio, LinkedIn project posts)",
      "Week 8: ATS Resume Engineering (Built around Skills + Projects + Outcomes + Technologies: e.g. RAG assistant achieving 94% faithfulness)",
      "Weeks 9–12: Interview Engine & AI System Design (Coding challenges: Python, OOP, SQL, APIs, Debugging; AI System Design: 'Design an enterprise chatbot for 100,000 internal documents')",
      "Weeks 13–16: Job Launch & Mock Interviews (Technical mock interviews, AI/GenAI architectural defense, HR rounds, salary negotiation, direct recruiter outreach into 200+ partner companies)"
    ],
    project: "10 Mandatory Employability Assets: Top 1% developer portfolio, deployed projects, ATS resume, and guaranteed interview opportunities."
  }
];

const agenticPhases = CURRICULUM.map((c, i) => ({
  id: `agentic-phase-${i}`,
  phase: c.tag,
  duration: c.dur,
  title: c.title,
  focusLabel: "CURRICULUM BREAKDOWN",
  focus: c.topics,
  application: c.project
}));

/* ──────── 5 CAPSTONE PLATFORMS (MONTH 4 CHOICES) ──────── */
const CAPSTONE_CHOICES = [
  {
    id: "A",
    tag: "Project A",
    title: "AI Customer Support Platform",
    tech: ["RAG", "Multi-Modal Agents", "FastAPI", "Analytics"],
    desc: "Autonomous omnichannel customer support platform handling multi-modal queries (text, docs, images) with persistent memory, sentiment scoring, and automated escalation.",
    deliverables: "GitHub Repo · Live Cloud Demo · Architecture Diagram · LinkedIn Case Study"
  },
  {
    id: "B",
    tag: "Project B",
    title: "AI Recruitment Intelligence Platform",
    tech: ["Resume Parsing", "JD Matching", "RAG", "Interview AI"],
    desc: "End-to-end talent intelligence platform parsing thousands of resumes, ranking against complex JDs, generating technical interview questions, and scoring candidate answers.",
    deliverables: "GitHub Repo · Live Cloud Demo · Architecture Diagram · LinkedIn Case Study"
  },
  {
    id: "C",
    tag: "Project C",
    title: "AI Sales Automation Platform",
    tech: ["Lead Research", "Company Intel", "CrewAI", "CRM API"],
    desc: "Multi-agent autonomous sales pipeline performing web research on leads, analyzing buying signals, writing personalized pitch decks, and routing to CRM with human approval.",
    deliverables: "GitHub Repo · Live Cloud Demo · Architecture Diagram · LinkedIn Case Study"
  },
  {
    id: "D",
    tag: "Project D",
    title: "AI Financial Document Intelligence",
    tech: ["Vision LLM", "Table Extraction", "RAG", "Risk Engine"],
    desc: "Enterprise financial engine extracting complex balance sheets, quarterly 10-K filings, computing financial metrics, detecting risks, and providing verifiable sourced summaries.",
    deliverables: "GitHub Repo · Live Cloud Demo · Architecture Diagram · LinkedIn Case Study"
  },
  {
    id: "E",
    tag: "Project E",
    title: "Enterprise Knowledge Management Platform",
    tech: ["Multi-Doc RAG", "LangGraph", "Source Citations", "RBAC"],
    desc: "Secure multi-tenant knowledge base ingesting corporate documents with granular role-based access control, hallucination-free citations, and evaluation dashboards.",
    deliverables: "GitHub Repo · Live Cloud Demo · Architecture Diagram · LinkedIn Case Study"
  }
];

/* ──────── 10 EMPLOYABILITY ASSETS (TOP 1% DIFFERENTIATOR) ──────── */
const EMPLOYABILITY_ASSETS = [
  { num: "01", icon: TerminalSquare, title: "GitHub Profile", desc: "Professional, commit-rich repository with structured READMEs, CI/CD configs, and production code standards." },
  { num: "02", icon: Layers, title: "AI Portfolio", desc: "At least 3 substantial production projects solving real enterprise pain points with verifiable outcomes." },
  { num: "03", icon: Cloud, title: "Live Deployments", desc: "Dockerized, cloud-hosted microservices and dashboards with active URLs — not just Jupyter notebooks." },
  { num: "04", icon: Workflow, title: "Architecture Diagrams", desc: "Learner can clearly defend system flows: ingestion, embeddings, vector search, LLM, security, and monitoring." },
  { num: "05", icon: FileText, title: "Technical Documentation", desc: "Comprehensive READMEs, setup instructions, architecture trade-offs, and scalability bottlenecks documented." },
  { num: "06", icon: Award, title: "AI Engineer Resume", desc: "Project-driven, ATS-engineered resume highlighting technologies, architectures, and measurable benchmarks." },
  { num: "07", icon: Globe, title: "LinkedIn Profile", desc: "Optimized to rank for AI Engineer, GenAI Developer, and LLM Engineer search queries with active case studies." },
  { num: "08", icon: BookOpen, title: "Interview Question Bank", desc: "Exhaustive coverage of Python, OOP, SQL, RAG, Agents, LangGraph, and enterprise AI system design." },
  { num: "09", icon: Users, title: "Mock Interviews", desc: "Multiple 1:1 live interview simulations with working AI engineers covering coding, architecture, and behavioral." },
  { num: "10", icon: Rocket, title: "Job Application Strategy", desc: "Target company mapping, referral playbooks, recruiter outreach scripts, and active interview pipeline tracking." }
];

/* ──────── TARGET JOB ROLES ──────── */
const TARGET_ROLES = {
  early: [
    { title: "AI Engineer", desc: "Build & integrate model workflows" },
    { title: "Generative AI Engineer", desc: "LLM apps & multimodal pipelines" },
    { title: "GenAI Developer", desc: "FastAPI + prompt orchestration" },
    { title: "AI Application Developer", desc: "Full-cycle AI product builder" },
    { title: "LLM Engineer", desc: "Model selection, prompting & evaluation" },
    { title: "RAG Engineer", desc: "Embeddings, vector DBs & hybrid retrieval" },
    { title: "Python AI Developer", desc: "Backend AI microservices & APIs" },
    { title: "AI Automation Developer", desc: "Workflow automation with AI" },
    { title: "Junior ML/AI Engineer", desc: "Applied machine learning & GenAI" },
    { title: "AI Solutions Engineer", desc: "Enterprise AI integrations" },
  ],
  experienced: [
    { title: "AI Software Engineer", desc: "Production-scale software with AI" },
    { title: "AI Platform Engineer", desc: "Enterprise AI infrastructure & serving" },
    { title: "Agentic AI Engineer", desc: "Multi-agent LangGraph systems" },
    { title: "LLM Application Engineer", desc: "Advanced RAG, fine-tuning & LoRA" },
    { title: "AI/ML Engineer", desc: "End-to-end model & app lifecycle" },
    { title: "MLOps / LLMOps Engineer", desc: "Monitoring, CI/CD, cost & latency" },
  ]
};

/* ──────── TECH STACK LIST ──────── */
const toolsList = [
  { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "FastAPI", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "OpenAI", img: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", invert: true },
  { name: "Gemini", img: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" },
  { name: "Claude", img: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg", invert: true },
  { name: "LangChain", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Pinecone", img: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>' },
  { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Redis", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "PyTorch", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "Azure AI", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
];

/* ──────── COMPARISON TABLE ──────── */
const COMPARE = [
  { f: "Positioning: Build, Integrate, Deploy & Evaluate (Not toy chats)", a: true, o: false },
  { f: "4-Month Hands-On Cohort (16 Weeks Production AI Engineering)", a: true, o: false },
  { f: "Model-Agnostic Ecosystem: OpenAI, Gemini, Claude, Llama & Azure", a: true, o: false },
  { f: "Deep-Dive LangGraph + CrewAI Agentic Systems with Human-in-the-Loop", a: true, o: false },
  { f: "Production RAG with Hybrid Search, Re-Ranking & Vector DBs (FAISS, Pinecone)", a: true, o: false },
  { f: "Enterprise LLMOps & Evaluation (LangSmith, RAGAS, MLflow, Docker)", a: true, o: false },
  { f: "5 Production-Grade Capstones with Cloud Deployment & Case Studies", a: true, o: false },
  { f: "Parallel Employment Layer & AI System Design Interview Prep", a: true, o: false },
  { f: "10 Mandatory Employability Assets (Top 1% Career Portfolio)", a: true, o: false },
  { f: "Direct Placement Engine + 200+ Hiring Partners (Infosys, PwC, etc.)", a: true, o: false },
];

/* ──────── CAREER TRACKS (EXPERIENCE LEVEL) ──────── */
const TRACKS = [
  {
    exp: "0 – 2 Yrs", icon: Code2,
    title: "Entry-Level / Early Career Engineers",
    roles: ["AI Engineer", "GenAI Developer", "LLM Engineer", "RAG Engineer", "Python AI Developer", "AI Automation Developer"],
    before: "₹4–8 LPA", after: "₹14–24 LPA", hike: "~3×",
    wins: [
      "Master Python → APIs → LLMs → Prompt Engineering → RAG → Vector DBs",
      "Build demonstrative APIs like AI Resume Analyzer & Interview Prep Assistant",
      "Deploy production AI services with Docker, FastAPI, and Cloud CI/CD",
    ],
  },
  {
    exp: "2 – 6 Yrs", icon: BrainCircuit,
    title: "Mid-Level Software Engineers & Tech Leads",
    roles: ["AI Software Engineer", "Agentic AI Engineer", "AI Platform Engineer", "LLM Application Engineer", "MLOps / LLMOps Engineer"],
    before: "₹10–20 LPA", after: "₹26–45 LPA", hike: "~2.5×",
    wins: [
      "Architect autonomous multi-agent pipelines with LangGraph & persistent memory",
      "Master enterprise RAG, evaluation metrics (RAGAS/LangSmith), and Guardrails AI",
      "Lead AI system design interviews (e.g. 100k internal documents RAG platform)",
    ],
  },
  {
    exp: "6+ Yrs", icon: Network,
    title: "Senior Developers, Tech Leads & Engineering Managers",
    roles: ["Principal AI Architect", "Head of AI Engineering", "AI Solutions Architect", "Engineering Manager (AI)"],
    before: "₹25–45 LPA", after: "₹55–90+ LPA", hike: "~2×",
    wins: [
      "End-to-end enterprise AI governance, SLA benchmarks, and model risk mitigation",
      "Architect cross-department autonomous agent workflows for 1000+ concurrent users",
      "Build and lead high-performing AI engineering teams across cloud and on-prem",
    ],
  },
];

/* ──────── FAQS ──────── */
const FAQS = [
  {
    q: "How is this program different from typical Generative AI courses?",
    a: "Most GenAI courses only teach how to use AI tools (ChatGPT prompts or toy scripts). Atorax trains you to BUILD, INTEGRATE, DEPLOY, and EVALUATE production AI applications. You master Python, FastAPI, RAG pipelines, vector databases, LangGraph agent workflows, Docker, AWS/Azure, LLMOps, and AI security. You graduate saying: 'I can build an AI application from an idea to a deployed product.'"
  },
  {
    q: "What is the duration and weekly time commitment?",
    a: "It is a 4-Month (16-Week) comprehensive career launch program. Expect 8–12 hours per week: live weekend interactive sessions with working AI engineers, weekday hands-on labs, and asynchronous project work. All live sessions are recorded for permanent review."
  },
  {
    q: "What are the 10 Employability Assets I will graduate with?",
    a: "Every learner completes: 01. Populated GitHub Profile, 02. Production AI Portfolio (3+ deployed apps), 03. Live Cloud Deployments, 04. System Architecture Diagrams, 05. Technical Documentation, 06. ATS-Engineered AI Resume, 07. Positioned LinkedIn Profile, 08. Exhaustive Interview Question Bank, 09. Multiple 1:1 Mock Technical Interviews, 10. Job Search & Outreach Strategy."
  },
  {
    q: "What kind of projects will I build?",
    a: "You build 5 production projects: Month 1: AI Resume Analyzer API & AI Interview Prep Assistant. Month 2: Enterprise Knowledge Assistant (Multi-doc RAG). Month 3: Multi-Agent Sales Intelligence System & Multimodal Doc AI. Month 4: Industry Capstone (Pick from AI Customer Support, Recruitment Intelligence, Sales Automation, Financial Doc Intelligence, or Enterprise Knowledge Management)."
  },
  {
    q: "Do I need deep Machine Learning or Math background to join?",
    a: "No. The modern AI engineering wave focuses on software engineering around foundation models, API orchestration, vector retrieval, and agent architectures. Familiarity with basic programming is all you need — Month 1 starts with Python for AI Engineering, OOP, async, and APIs before stepping into LLMs."
  },
  {
    q: "What companies are hiring for these roles?",
    a: "Current active mandates explicitly request Python, Agentic AI, LangGraph, RAG, and LLMOps — including companies like Infosys, PwC India, Microsoft, Google, Razorpay, Swiggy, and enterprise cloud providers. We prepare you across the full spectrum of entry to experienced AI roles."
  },
  {
    q: "Is placement assistance included?",
    a: "Yes! Placement preparation runs in parallel with technical training from Week 1 to Week 16. You receive ATS resume engineering, GitHub & LinkedIn reviews, AI system design mock rounds, coding interviews, and up to 30 curated interview call opportunities with 200+ hiring partners."
  },
  {
    q: "Is EMI available?",
    a: "Yes — 0% interest, flexible monthly EMI options are available with instant approvals and no hidden charges."
  }
];

/* ──────── COMPONENT ──────── */
const AgenticAndGenAI = () => {
  const [open, setOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [track, setTrack] = useState(0);
  const [faq, setFaq] = useState(null);
  const [roleTab, setRoleTab] = useState("early");
  const [pathwayView, setPathwayView] = useState("stages");
  const [activeStageFilter, setActiveStageFilter] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const apply = () => setOpen(true);

  return (
    <div className="ato-page">
      <Helmet>
        <title>AI Engineering & Generative AI — 4-Month Career Launch Program | Atorax</title>
        <meta
          name="description"
          content="Don't just learn how to use AI. Learn how to BUILD, INTEGRATE, DEPLOY and EVALUATE AI APPLICATIONS. 4-Month production AI engineering program with real-world projects and placement engine."
        />
      </Helmet>

      {/* ── FLOATING NAV ── */}
      <nav className="ato-floatnav hidden md:flex">
        {["Overview", "Pathway", "Curriculum", "Capstones", "Employment", "Pricing"].map((label, i) => {
          const ids = ["overview", "pathway", "curriculum", "capstones", "employment", "pricing"];
          return (
            <button
              key={i}
              onClick={() => document.getElementById(ids[i])?.scrollIntoView({ behavior: "smooth", block: "start" })}
              style={{
                padding: "9px 18px",
                borderRadius: 40,
                fontSize: 13,
                fontWeight: 600,
                color: "var(--txt-main)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                transition: "color 0.15s"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--green)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--txt-main)")}
            >
              {label}
            </button>
          );
        })}
        <button
          onClick={apply}
          style={{
            marginLeft: 6,
            padding: "9px 22px",
            borderRadius: 40,
            fontSize: 13,
            fontWeight: 700,
            color: "white",
            background: "var(--green)",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 2px 12px rgba(5,150,105,0.3)"
          }}
        >
          Apply Now
        </button>
      </nav>

      {/* ══════════════════════════════════════════
          HERO (IMMERSIVE TECH)
          ══════════════════════════════════════════ */}
      <section id="overview" className="relative min-h-[95vh] flex flex-col items-center justify-center pt-28 pb-20 px-6 overflow-hidden bg-[#020408]">
        {/* Background glow & mesh */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1100px] aspect-square bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 w-[60vw] max-w-[800px] aspect-square bg-teal-600/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,4,8,0.2)_0%,rgba(2,4,8,0.95)_100%)] pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-[1240px] mx-auto flex flex-col items-center text-center">
          {/* Glass Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 inline-flex items-center gap-3 px-6 py-2.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-2xl text-emerald-300 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            4-MONTH CAREER LAUNCH PROGRAM · 16 WEEKS
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black sd-font-outfit mb-6 leading-[1.08] tracking-tight max-w-5xl"
            style={{ fontSize: "clamp(42px, 7vw, 92px)" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-400">
              AI Engineering &amp; Generative AI
            </span>
            <span className="relative inline-block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 drop-shadow-[0_0_50px_rgba(16,185,129,0.5)]">
                Build, Integrate, Deploy &amp; Evaluate
              </span>
            </span>
          </motion.h1>

          {/* Positioning statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-[22px] text-gray-300 mb-12 max-w-4xl leading-relaxed font-normal px-4"
          >
            Don't just learn how to use AI. Learn how to <strong className="text-white font-bold">BUILD, INTEGRATE, DEPLOY and EVALUATE AI APPLICATIONS</strong> from scratch to scale.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-5 mb-14"
          >
            <div className="relative group rounded-full p-[2px] overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.7)] transition-shadow duration-500">
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_240deg,rgba(16,185,129,1)_360deg)] animate-[spin_3s_linear_infinite]" />
              <div className="relative">
                <ApplyNowButton
                  courseValue="AI Engineering and Generative AI"
                  className="!px-10 !py-4 !text-[16px] !rounded-full !bg-[#05070a]/90 hover:!bg-[#05070a]/70 transition-colors backdrop-blur-2xl text-white font-bold tracking-wide"
                  label="Apply Now — Free"
                />
              </div>
            </div>

            <button
              onClick={() => document.getElementById("curriculum")?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className="px-10 py-4 text-[16px] font-bold tracking-wide rounded-full border border-white/20 bg-white/5 backdrop-blur-2xl text-gray-200 hover:bg-white/15 hover:border-white/40 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-2"
            >
              Explore 4-Month Curriculum <ChevronDown size={18} />
            </button>
          </motion.div>

          {/* ── CORE MANIFESTO BOX ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="ato-manifesto w-full max-w-4xl p-8 md:p-10 text-left relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-emerald-400" size={24} />
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">
                The Program Distinction
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-snug">
              What you will be able to say in 4 months:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-5 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={18} strokeWidth={3} />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                    Your Outcome:
                  </span>
                  <p className="text-white font-semibold text-base md:text-lg leading-relaxed">
                    “I can build an AI application from an idea to a deployed product.”
                  </p>
                </div>
              </div>

              <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-5 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                  <X size={18} strokeWidth={3} />
                </div>
                <div>
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-1">
                    Not Just:
                  </span>
                  <p className="text-gray-400 font-medium text-base md:text-lg leading-relaxed">
                    “I completed a Generative AI course.”
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-5 leading-relaxed">
              That distinction is at the heart of our curriculum. You will not memorize chat prompts. You will master engineering pipelines, vector retrieval, multi-agent networks, evaluation benchmarks, and cloud deployment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <ProgramStatsBar stats={trustStats} labelColor="text-[#10b981]" />

      {/* COLLABORATION COMPANY MARQUEE */}
      <AuthorityMarquee theme="dark" />

      {/* ══════════════════════════════════════════
          THE 14-STEP EXPOSURE PATHWAY (HIGH-TECH PIPELINE STUDIO)
          ══════════════════════════════════════════ */}
      <section id="pathway" className="py-24 px-6 bg-[#05070c] border-t border-white/5 relative overflow-hidden">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-extrabold text-[11px] uppercase tracking-[2px] px-5 py-2 rounded-full mb-4 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              END-TO-END EXPOSURE PATHWAY
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              From Raw Code to Production AI
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Every graduate develops deep, practical exposure across the 4 core architecture phases — evolving from foundational software logic to multi-agent networks and enterprise cloud LLMOps.
            </p>

            {/* View Mode Switcher */}
            <div className="flex flex-wrap justify-center items-center gap-3 mt-8">
              <button
                onClick={() => setPathwayView("stages")}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  pathwayView === "stages"
                    ? "bg-emerald-500 text-white shadow-[0_0_25px_rgba(16,185,129,0.4)]"
                    : "bg-white/5 text-gray-400 hover:text-white border border-white/10"
                }`}
              >
                <Layers size={14} />
                4-Stage Architecture Pipeline
              </button>
              <button
                onClick={() => setPathwayView("circuit")}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  pathwayView === "circuit"
                    ? "bg-emerald-500 text-white shadow-[0_0_25px_rgba(16,185,129,0.4)]"
                    : "bg-white/5 text-gray-400 hover:text-white border border-white/10"
                }`}
              >
                <Workflow size={14} />
                15-Step Circuit Stream
              </button>
            </div>
          </div>

          {/* VIEW MODE 1: 4-STAGE ARCHITECTURE PIPELINE */}
          {pathwayView === "stages" && (
            <div className="flex flex-col gap-8">
              {/* Optional Quick Phase Filter */}
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  { id: "all", label: "View All 4 Months" },
                  { id: "stage-1", label: "Month 1 · Code & LLMs" },
                  { id: "stage-2", label: "Month 2 · RAG & APIs" },
                  { id: "stage-3", label: "Month 3 · Agents & LangGraph" },
                  { id: "stage-4", label: "Month 4 · Cloud & LLMOps" },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setActiveStageFilter(f.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                      activeStageFilter === f.id
                        ? "bg-white/15 text-white border border-white/20 shadow-md"
                        : "bg-white/[0.03] text-gray-400 hover:text-gray-200 border border-white/5"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              {/* Stage Cards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
                {PIPELINE_STAGES.filter((s) => activeStageFilter === "all" || s.id === activeStageFilter).map((stage, sIdx) => (
                  <div
                    key={stage.id}
                    className={`ato-pipeline-stage p-8 flex flex-col justify-between group overflow-hidden border ${stage.borderGlow}`}
                  >
                    {/* Top ambient stage gradient */}
                    <div className={`absolute top-0 left-0 right-0 h-40 bg-gradient-to-b ${stage.gradient} pointer-events-none`} />

                    <div className="relative z-10">
                      {/* Stage Header */}
                      <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
                        <div className="flex items-center gap-3">
                          <span className={`text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${stage.badgeColor}`}>
                            {stage.phase}
                          </span>
                          <span className="text-xs font-bold text-gray-400">
                            {stage.duration}
                          </span>
                        </div>
                        <span className={`text-xs font-extrabold tracking-wider uppercase ${stage.accentColor}`}>
                          {stage.month}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-2xl font-black text-white mb-2 leading-tight">
                        {stage.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                        {stage.subtitle}
                      </p>

                      {/* 4 Micro-Nodes in 2x2 Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {stage.nodes.map((node) => (
                          <div
                            key={node.num}
                            className="ato-circuit-node p-4 flex flex-col justify-between"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[10px] font-mono font-bold text-gray-500">
                                #{node.num}
                              </span>
                              <div className={`w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center ${stage.accentColor}`}>
                                {React.createElement(node.icon, { size: 15 })}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-white mb-1">
                                {node.name}
                              </h4>
                              <div className="text-[10px] font-semibold text-emerald-400/90 mb-1.5 font-mono">
                                {node.tech}
                              </div>
                              <p className="text-xs text-gray-400 leading-normal">
                                {node.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Live Milestone Project Box */}
                    <div className="relative z-10 ato-artifact-badge p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                          <Flame size={12} className="text-amber-400" />
                          {stage.project.tag}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                          {stage.project.status}
                        </span>
                      </div>
                      <h5 className="text-base font-bold text-white mb-1">
                        {stage.project.title}
                      </h5>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        {stage.project.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VIEW MODE 2: LINEAR 15-STEP CIRCUIT STREAM */}
          {pathwayView === "circuit" && (
            <div className="bg-[#0b101d] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <Network className="text-emerald-400" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-white">Full Sequential Execution Circuit</h3>
                  <p className="text-xs text-gray-400">Step-by-step technical progression from raw syntax to high-availability AI systems</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {CIRCUIT_STEPS.map((s, idx) => (
                  <div
                    key={idx}
                    className="bg-[#121929] border border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:border-emerald-500/50 hover:bg-[#162137] transition-all group"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-mono font-extrabold text-emerald-400/90 bg-emerald-500/10 px-2.5 py-1 rounded">
                        {s.step}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-white/5 text-gray-400 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 flex items-center justify-center transition-colors">
                        {React.createElement(s.icon, { size: 16 })}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                        {s.name}
                      </h4>
                      <span className="text-[11px] text-gray-400 font-medium">
                        {s.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PARALLEL EMPLOYMENT LAYER INTEGRATION BAR */}
          <div className="mt-14 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-[#0e1626] to-cyan-950/40 border border-emerald-500/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="flex items-center gap-4 text-center lg:text-left">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shrink-0">
                <Briefcase size={22} />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-400 block mb-1">
                  Parallel Employment Layer · Weeks 1 to 16
                </span>
                <h4 className="text-white font-bold text-lg md:text-xl">
                  Job Readiness Runs Concurrently With Technical Training
                </h4>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs font-semibold">
              <span className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300">
                W1–4: GitHub &amp; Profile Setup
              </span>
              <ChevronRight size={14} className="text-emerald-400 hidden sm:block" />
              <span className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300">
                W5–8: ATS Resume Engineering
              </span>
              <ChevronRight size={14} className="text-emerald-400 hidden sm:block" />
              <span className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300">
                W9–12: AI System Design &amp; Coding
              </span>
              <ChevronRight size={14} className="text-emerald-400 hidden sm:block" />
              <span className="px-3.5 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                W13–16: 30 Interview Calls
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TECH STACK (MODEL-AGNOSTIC & MODERN)
          ══════════════════════════════════════════ */}
      <section id="tools" className="py-20 px-6 bg-[#0b0d14] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-teal-500/15 text-teal-300 font-extrabold text-[11px] uppercase tracking-[1.5px] px-5 py-2 rounded-full mb-3">
              Model-Agnostic Ecosystem
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
              The Enterprise AI Tech Stack
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto">
              Master the actual toolchains, vector engines, and orchestrators requested in top tech job postings.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {toolsList.map((tool, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-4 bg-[#111622] rounded-2xl border border-white/5 hover:border-emerald-500/40 hover:bg-[#151c2c] transition-all group"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-2">
                  {tool.img ? (
                    <img src={tool.img} alt={tool.name} className={`w-8 h-8 object-contain ${tool.invert ? "invert opacity-80" : ""}`} />
                  ) : (
                    <span className="text-sm font-bold text-gray-400">{tool.name.substring(0, 2)}</span>
                  )}
                </div>
                <span className="text-xs font-bold text-gray-300 group-hover:text-emerald-400 transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CURRICULUM (PREMIUM STYLE ROADMAP)
          ══════════════════════════════════════════ */}
      <div id="curriculum">
        <PremiumCurriculum
          phases={agenticPhases}
          title="The 4-Month AI Engineering Curriculum"
          accentColor="text-[#10b981]"
          bgColor="bg-[#04060a]"
          cardBgColor="bg-[#0b101b]"
        />
      </div>

      {/* ══════════════════════════════════════════
          5 ENTERPRISE CAPSTONE PLATFORMS (MONTH 4)
          ══════════════════════════════════════════ */}
      <section id="capstones" className="py-24 px-6 bg-[#090d16] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-emerald-500/15 text-emerald-400 font-extrabold text-[11px] uppercase tracking-[2px] px-5 py-2 rounded-full mb-3">
              Month 4 Capstone Choices
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              5 Industry-Grade Capstone Platforms
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Instead of cookie-cutter tutorials, pick a capstone platform matching your dream industry. Every project is deployed live with documentation and architecture diagrams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPSTONE_CHOICES.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#0f172a] border border-white/10 rounded-2xl p-7 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 group"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      {p.tag}
                    </span>
                    <Flame size={18} className="text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-4 border-t border-white/5">
                    {p.tech.map((t, idx) => (
                      <span key={idx} className="text-[11px] font-semibold text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-[11px] text-emerald-400 font-semibold flex items-center gap-2">
                    <CheckCircle2 size={14} className="shrink-0" />
                    <span>{p.deliverables}</span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Custom CTA Card */}
            <div
              onClick={apply}
              className="bg-gradient-to-br from-emerald-950/40 to-[#0f172a] border border-emerald-500/30 rounded-2xl p-7 flex flex-col justify-center items-center text-center cursor-pointer hover:border-emerald-500/60 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Rocket size={26} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Build Your Dream Capstone</h3>
              <p className="text-gray-400 text-sm mb-6 max-w-xs">
                Bring your own enterprise problem or work on live partner briefs under 1:1 mentorship.
              </p>
              <button className="ato-btn-p !py-3 !px-6 !text-sm">
                Apply for Next Cohort <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          THE "TOP 1%" DIFFERENTIATOR (10 ASSETS)
          ══════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#04070d] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-amber-500/15 text-amber-300 font-extrabold text-[11px] uppercase tracking-[2px] px-5 py-2 rounded-full mb-3">
              Employability Blueprint
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              The "Top 1%" Differentiator
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Every learner graduates with these 10 mandatory employability assets — creating proof of skill that recruiters cannot ignore:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {EMPLOYABILITY_ASSETS.map((a, i) => (
              <div
                key={i}
                className="ato-asset-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-black font-mono text-emerald-400">
                      {a.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                      {React.createElement(a.icon, { size: 18 })}
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {a.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {a.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          THE EMPLOYMENT LAYER (WEEKS 1–16)
          ══════════════════════════════════════════ */}
      <section id="employment" className="py-24 px-6 bg-[#080d17] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-emerald-500/15 text-emerald-400 font-extrabold text-[11px] uppercase tracking-[2px] px-5 py-2 rounded-full mb-3">
              Placement Prep Parallel Track
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              Don't Wait Until Week 16 for Placement
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Our employment layer runs alongside technical training from Day 1. By the time you finish your capstone, your profile and interview readiness are fully forged.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <Code2 size={20} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Coding Interview Engine</h4>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Python algorithmic challenges: Arrays, Strings, Dictionaries, OOP, Async handling, and API debugging problems.
              </p>
              <span className="text-xs font-semibold text-emerald-400">150+ Curated Problems</span>
            </div>

            <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-4">
                <Server size={20} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">AI System Design Scenarios</h4>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Real interview scenarios: “Design a RAG system for 100,000 internal documents” — from ingestion and embeddings to latency, security, and SLAs.
              </p>
              <span className="text-xs font-semibold text-teal-400">PwC &amp; FAANG Architect Standard</span>
            </div>

            <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                <Target size={20} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Job Search &amp; Referrals</h4>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Target Company → Target Role → Resume Version → Application → Direct Referral → Recruiter Outreach → Technical Interview.
              </p>
              <span className="text-xs font-semibold text-cyan-400">200+ Active Hiring Partners</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TARGET JOB ROLES (MARKET-VALIDATED)
          ══════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#04060b] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-indigo-500/15 text-indigo-300 font-extrabold text-[11px] uppercase tracking-[1.5px] px-5 py-2 rounded-full mb-3">
              Roles You Can Target
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
              We Train You for a Family of High-Demand Roles
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto">
              Companies like Infosys, PwC India, Microsoft, and high-growth AI startups hire under diverse engineering titles:
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setRoleTab("early")}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                roleTab === "early"
                  ? "bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                  : "bg-white/5 text-gray-400 hover:text-white"
              }`}
            >
              Entry-Level / Early Career
            </button>
            <button
              onClick={() => setRoleTab("experienced")}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                roleTab === "experienced"
                  ? "bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                  : "bg-white/5 text-gray-400 hover:text-white"
              }`}
            >
              With Prior Dev Experience
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {TARGET_ROLES[roleTab].map((r, i) => (
              <div
                key={i}
                className="bg-[#0b101c] border border-white/10 rounded-2xl p-5 hover:border-emerald-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <h4 className="text-base font-bold text-white">{r.title}</h4>
                </div>
                <p className="text-xs text-gray-400">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COMPARE TABLE
          ══════════════════════════════════════════ */}
      <section className="ato-sec border-t border-white/5">
        <div className="ato-wrap-s">
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div className="ato-badge" style={{ marginBottom: 18 }}>Why Atorax</div>
            <h2 className="ato-h2" style={{ marginBottom: 14, marginTop: 16 }}>Atorax vs. Generic GenAI Courses</h2>
            <p className="ato-lead" style={{ maxWidth: 500, margin: "0 auto" }}>
              See why our engineering-first, 4-month curriculum stands apart from basic chatbot tutorials.
            </p>
          </div>

          <div style={{ background: "var(--bg-white)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
            <div className="ato-table-header">
              <p className="ato-label">Feature</p>
              <p className="ato-label" style={{ textAlign: "center", color: "var(--green)" }}>Atorax 4-Month</p>
              <p className="ato-label" style={{ textAlign: "center" }}>Generic Courses</p>
            </div>
            {COMPARE.map((row, i) => (
              <div key={i} className="ato-row">
                <p style={{ fontSize: 14, color: "var(--txt-main)", fontWeight: 600 }}>{row.f}</p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--green-bg)", border: "1px solid var(--green-brd)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Check size={14} color="var(--green)" strokeWidth={3} />
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {row.o ? (
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--bg-subtle)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Check size={14} color="var(--txt-light)" strokeWidth={2.5} />
                    </div>
                  ) : (
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.14)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <X size={14} color="#ef4444" strokeWidth={2.5} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 36 }}>
            <button onClick={apply} className="ato-btn-p" style={{ fontSize: 16, padding: "16px 44px" }}>
              Join the Next Cohort <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          EXPERIENCE LEVEL TRACKS
          ══════════════════════════════════════════ */}
      <section id="paths" className="ato-sec-alt">
        <div className="ato-wrap">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="ato-badge" style={{ marginBottom: 18 }}>Career Trajectory</div>
            <h2 className="ato-h2" style={{ marginBottom: 14, marginTop: 16 }}>Tailored to Your Experience Level</h2>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 36, flexWrap: "wrap" }}>
            {TRACKS.map((t, i) => (
              <button key={i} onClick={() => setTrack(i)} className={`ato-track-btn ${track === i ? "on" : ""}`}>{t.exp}</button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={track}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              style={{ background: "var(--bg-white)", border: "1px solid var(--border)", borderRadius: 12, padding: 40, boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* LEFT */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
                    <div className="ato-icon" style={{ margin: 0 }}>
                      {React.createElement(TRACKS[track].icon, { size: 20, color: "var(--green)", strokeWidth: 2 })}
                    </div>
                    <div>
                      <p className="ato-label" style={{ marginBottom: 4 }}>{TRACKS[track].exp}</p>
                      <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--txt-main)" }}>{TRACKS[track].title}</h3>
                    </div>
                  </div>

                  <p className="ato-label" style={{ marginBottom: 12 }}>Target Roles After 4 Months</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
                    {TRACKS[track].roles.map((r, i) => <span key={i} className="ato-role-tag">{r}</span>)}
                  </div>

                  <p className="ato-label" style={{ marginBottom: 12 }}>Key Competencies Mastered</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {TRACKS[track].wins.map((w, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                        <div className="ato-check" style={{ marginTop: 3, width: 22, height: 22 }}>
                          <Check size={12} color="var(--green)" strokeWidth={3} />
                        </div>
                        <span style={{ fontSize: 15, color: "var(--txt-main)", lineHeight: 1.65, fontWeight: 500 }}>{w}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT */}
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)", borderRadius: 10, padding: 30 }}>
                    <p className="ato-label" style={{ marginBottom: 24 }}>Market Compensation Surge</p>
                    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                      <div style={{ flex: 1, textAlign: "center" }}>
                        <p style={{ fontSize: 12, color: "var(--txt-mut)", marginBottom: 8, fontWeight: 600 }}>Before</p>
                        <p className="ato-display" style={{ fontSize: 28, fontWeight: 800, color: "var(--txt-main)" }}>{TRACKS[track].before}</p>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <ArrowRight size={22} color="var(--green)" />
                        <p style={{ fontSize: 12, fontWeight: 800, color: "var(--green)", marginTop: 4 }}>{TRACKS[track].hike}</p>
                      </div>
                      <div style={{ flex: 1, textAlign: "center" }}>
                        <p style={{ fontSize: 12, color: "var(--txt-mut)", marginBottom: 8, fontWeight: 600 }}>After</p>
                        <p className="ato-display" style={{ fontSize: 28, fontWeight: 800, color: "var(--green)" }}>{TRACKS[track].after}</p>
                      </div>
                    </div>
                  </div>

                  <div style={{ background: "var(--green-bg)", border: "1px solid var(--green-brd)", borderRadius: 10, padding: 28 }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "var(--green)", marginBottom: 8 }}>🎯 Limited Cohort — 60 Seats Max</p>
                    <p style={{ fontSize: 14, color: "var(--txt-main)", lineHeight: 1.7, marginBottom: 20, fontWeight: 500 }}>
                      Admissions operate on rolling assessment. Early applications receive priority 1:1 mentor allocation.
                    </p>
                    <button
                      onClick={apply}
                      style={{
                        width: "100%",
                        background: "var(--green)",
                        color: "white",
                        fontWeight: 700,
                        fontSize: 15,
                        padding: "16px 24px",
                        borderRadius: 8,
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8
                      }}
                    >
                      Apply Now <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* MENTORS + COMPANIES */}
      <div style={{ borderTop: "1px solid var(--border)" }}><MeetYourMentors /></div>
      <div style={{ borderTop: "1px solid var(--border)" }}><MarketLeaders /></div>

      {/* ══════════════════════════════════════════
          PRICING
          ══════════════════════════════════════════ */}
      <section id="pricing" className="ato-sec bg-[#0b0b0f] border-t border-white/10" style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="text-center mb-12">
            <h2 className="ato-h2 text-white" style={{ marginBottom: 14, marginTop: 16 }}>Transparent Investment. Proven ROI.</h2>
            <p className="ato-sub text-gray-400">Complete 4-month curriculum, 5 capstones, 1:1 mentors, and guaranteed interview engine.</p>
          </div>
          <PaymentPlanWidget basePrice={96000} durationMonths={4} courseName="AI Engineering & Generative AI" themeColor="#10b981" />
        </div>
      </section>

      {/* SALARY GROWTH */}
      <SalaryGrowth domain="AgenticAndGenAI" />

      {/* CAREER OUTCOMES */}
      <CareerOutcomes domain="AgenticAndGenAI" />

      {/* ══════════════════════════════════════════
          FAQ
          ══════════════════════════════════════════ */}
      <section className="ato-sec-alt">
        <div className="ato-wrap-s">
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div className="ato-badge" style={{ marginBottom: 18 }}>FAQ</div>
            <h2 className="ato-h2" style={{ marginTop: 16 }}>Frequently Asked Questions</h2>
          </div>
          <div style={{ background: "var(--bg-white)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
            {FAQS.map((f, i) => (
              <div key={i} className="ato-faq-row" onClick={() => setFaq(faq === i ? null : i)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "22px 28px", cursor: "pointer" }}>
                  <h4 style={{ fontSize: 16, fontWeight: 600, color: "var(--txt-main)", margin: 0 }}>{f.q}</h4>
                  <ChevronDown
                    size={20}
                    color={faq === i ? "var(--green)" : "var(--txt-light)"}
                    style={{ flexShrink: 0, transform: faq === i ? "rotate(180deg)" : "none", transition: "transform 0.28s" }}
                  />
                </div>
                <AnimatePresence>
                  {faq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} style={{ overflow: "hidden" }}>
                      <p style={{ padding: "0 28px 24px", fontSize: 15, color: "var(--txt-mut)", lineHeight: 1.7, borderTop: "1px solid var(--border)", paddingTop: 18 }}>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA (DARK NAVY)
          ══════════════════════════════════════════ */}
      <section style={{ background: "var(--navy)", padding: "100px 28px", borderTop: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle,rgba(5,150,105,0.08) 0%,transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div className="ato-badge" style={{ marginBottom: 24, display: "inline-flex", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#10b981" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
            4-MONTH CAREER LAUNCH PROGRAM
          </div>
          <h2 className="ato-h1" style={{ color: "#ffffff", marginBottom: 20 }}>
            Ready to Build Real AI Applications?{" "}
            <span style={{ color: "#10b981" }}>
              Join the Next Cohort.
            </span>
          </h2>
          <p style={{ fontSize: 18, color: "#94a3b8", marginBottom: 40, lineHeight: 1.75, maxWidth: 520, margin: "0 auto 40px" }}>
            Say goodbye to surface-level chatbot courses. Master Python, RAG, LangGraph agents, and LLMOps with direct job referrals.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <button onClick={apply} className="ato-btn-p" style={{ fontSize: 17, padding: "18px 46px" }}>
              Apply Now — Free <ArrowRight size={20} />
            </button>
            <button
              onClick={apply}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                background: "rgba(255,255,255,0.05)",
                color: "white",
                fontSize: 17,
                fontWeight: 600,
                padding: "18px 46px",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.1)",
                cursor: "pointer"
              }}
            >
              Download Brochure
            </button>
          </div>
          <p style={{ fontSize: 13, color: "#64748b", marginTop: 20, fontWeight: 500 }}>
            No application fee · Limited to 60 seats · Assessment results in 48 hours
          </p>
        </div>
      </section>

      {open && <AdvancedApplyPopup onClose={() => setOpen(false)} />}
    </div>
  );
};

export default AgenticAndGenAI;
