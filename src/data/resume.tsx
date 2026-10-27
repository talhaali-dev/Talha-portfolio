import { Icons } from "@/components/icons";
import type { ReactNode } from "react";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";

export const DATA = {
  name: "Talha Ali",
  initials: "TA",
  url: "https://github.com/talhaali-dev",
  location: "Karachi, Pakistan",
  locationLink: "https://www.google.com/maps/place/karachi",
  description:
    "Forward Deployed Engineer | AI Integration Engineer. I embed inside real organizations, map how work actually gets done, and ship production AI into those workflows.",
  summary:
    "Forward Deployed Engineer who embeds inside real organizations, maps how work actually gets done, and ships production AI into those workflows without breaking what already works. I replaced paper-based hospital records with a production EHR used by 35 staff, and built WhatsApp-based AI agents and RAG systems for client businesses in the US and EU. I work the full loop: discovery with non-technical stakeholders, design, deployment, staff adoption, and ongoing ownership in production. I also mentor the next generation of Forward Deployed Engineers.",
  avatarUrl: "https://avatars.githubusercontent.com/u/329496976?v=4",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Postgres", icon: Postgresql },
    { name: "Supabase", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "growwithtalhaofficial@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/talhaali-dev",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/growwithtalha-",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/GrowWith_Talha",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:growwithtalhaofficial@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "JPMC, Oncology Department",
      href: "https://jpmc.edu.pk",
      badges: [],
      location: "Karachi, Pakistan",
      title: "IT Expert / Software Engineer",
      logoUrl: "",
      start: "2025",
      end: "Present",
      description:
        "Embedded with clinical and administrative staff, studied the department's paper-based patient record workflows, and replaced them with a full EHR system built from scratch, now used by 35 staff. Ran requirements sessions, demos, and hands-on training with non-technical staff, and shipped feature requests directly from the people using the system every day. Migrated roughly 50,000 legacy patient records with custom scripts, standardizing cancer type classification and patient categorization. Re-architected from a desktop prototype (Electron/SQLite) into a production web stack (Next.js, Neon Postgres, Supabase Storage, Vercel), consolidating roughly 60 legacy tables into 20 Prisma models. Own the system in production end to end: schema, uptime, backups, and data integrity for sensitive medical data.",
    },
    {
      company: "Freelance, Remote (US, EU clients)",
      href: "https://github.com/talhaali-dev",
      badges: [],
      location: "Remote",
      title: "AI Integration & Full Stack Engineer",
      logoUrl: "",
      start: "2024",
      end: "Present",
      description:
        "Integrate AI into client businesses: RAG pipelines, agentic tool-calling workflows, and WhatsApp conversational agents that automate ordering, scheduling, and support. Run discovery with founders and operators first: map the current process, decide what suits AI and what should stay human, then build and deploy. Deliver production MVPs on fixed 15-day cycles, owning architecture, development, deployment, and handoff solo. Deploy and operate on Docker, AWS (EC2), Hetzner VPS, and Vercel.",
    },
    {
      company: "GIAIC (Governor's Initiative for AI and Computing)",
      href: "https://github.com/talhaali-dev",
      badges: [],
      location: "Karachi, Pakistan",
      title: "AI & Startup Mentor",
      logoUrl: "",
      start: "2025",
      end: "Present",
      description:
        "Mentored 1,500 students training for Forward Deployed Engineer roles: the stack, the responsibilities of the role, and how to operate inside real companies. Teach business process extraction (mapping workflows and designing AI-assisted processes and SOPs) and safe AI integration (judging whether a task suits AI, and using AI ethically).",
    },
  ],
  // Intentionally empty for now, typed so the template still type-checks.
  // Add a real entry here when ready, instead of inventing dates.
  education: [] as {
    school: string;
    href: string;
    degree: string;
    logoUrl: string;
    start: string;
    end: string;
  }[],
  projects: [
    {
      title: "Munshi.ai",
      href: "https://github.com/talhaali-dev",
      dates: "2025 - 2026",
      active: true,
      description:
        "WhatsApp-based B2B order intelligence platform for pharma and nutrition distributors. Studied how distributors and stores actually place orders, then encoded those processes into software: real-time order capture over WhatsApp using the Meta WhatsApp Cloud API, reorder suggestions from historical patterns, credit-risk scoring, and per-product bonus and discount rules. Handled 1,000+ orders, with role-based access for distributor admins and store owners and multi-tenant data isolation across distributors.",
      technologies: [
        "Next.js",
        "Typescript",
        "Supabase",
        "PostgreSQL",
        "WhatsApp Cloud API",
        "TailwindCSS",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Tavera AI",
      href: "https://github.com/talhaali-dev",
      dates: "2025",
      active: true,
      description:
        "B2B restaurant supplier compliance platform. Built the compliance-monitoring engine and data-ingestion pipeline for supplier certification and safety data. Traced inconsistent scores to sparse public data for small suppliers and redesigned the data sourcing to handle incomplete inputs reliably.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Data Pipelines",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Ivory Book",
      href: "https://github.com/talhaali-dev",
      dates: "2024 - 2025",
      active: true,
      description:
        "AI salon platform: AI image generation for virtual looks so customers knew their look before booking and salon workers had client background and preference context. Includes salon scheduling with conflict resolution, rebooking nudges, and multi-reminder no-show reduction.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Minute Taste & Lahori Eats",
      href: "https://github.com/talhaali-dev",
      dates: "2024 - 2025",
      active: true,
      description:
        "Multi-tenant restaurant ordering platforms with a deals engine and reservation system, shipped on 15-day cycles on self-managed infrastructure. Solved concurrent order issues, database migration problems, and deployment pipeline failures in production.",
      technologies: [
        "Next.js",
        "Node.js",
        "MySQL",
        "Docker",
        "nginx",
        "Hetzner VPS",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  // Intentionally empty for now, typed so the template still type-checks.
  hackathons: [] as {
    title: string;
    dates: string;
    location: string;
    description: string;
    image: string;
    links: { title: string; icon: ReactNode; href: string }[];
  }[],
} as const;
