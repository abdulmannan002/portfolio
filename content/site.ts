// Central place for everything about you. Edit these values — the whole
// site (hero, about, footer, metadata) reads from here.

export const site = {
  name: "Abdul Mannan", // TODO: confirm display name
  role: "Backend & AI Engineer",
  tagline: "I build production systems, not demos.",
  // 2–3 sentence about blurb. Keep it tight.
  about:
    "BS AI graduate who builds backend systems with real AI features baked in — " +
    "RAG pipelines, OCR, document intelligence — not toy notebooks. I care about the " +
    "unglamorous parts: latency under load, failure handling, and code someone else can run. " +
    "Looking for a backend or AI-engineering role where systems have to actually work in production.",

  // Stat chips in the hero — recruiters scan these faster than prose.
  stats: [
    { label: "5 production projects" },
    { label: "RAG · OCR · Doc Intelligence" },
    { label: "Node.js · Python · NestJS" },
  ],

  // Contact + social. Leave blank ("") to hide a link.
  email: "paysahulat@gmail.com", // TODO: use a professional address if you have one
  links: {
    github: "https://github.com/abdulmannan002", // TODO: confirm
    linkedin: "", // TODO: add LinkedIn URL
    resume: "/resume.pdf", // drop your resume at public/resume.pdf
  },
};

// Skills grouped into 3 scannable columns.
export const skills: { group: string; items: string[] }[] = [
  {
    group: "Backend",
    items: [
      "NestJS",
      "FastAPI",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "REST APIs",
      "Docker",
    ],
  },
  {
    group: "AI / ML",
    items: [
      "RAG",
      "Embeddings & Vector Search",
      "OCR",
      "OpenAI API",
      "PyTorch",
      "OpenCV",
    ],
  },
  {
    group: "Infra & Tooling",
    items: ["Kafka", "CI/CD", "Git", "Linux", "Vercel", "AWS (basics)"],
  },
];
