// Central place for everything about you. Edit these values — the whole
// site (hero, about, footer, metadata) reads from here.

export const site = {
  name: "Abdul Mannan",
  role: "AI / ML Engineer",
  tagline: "I ship AI systems to production — not demos.",
  // 2–3 sentence about blurb. Keep it tight.
  about:
    "AI/ML engineer who ships LLM, RAG, and computer-vision systems to production — " +
    "and builds the backends that serve them. I care about the unglamorous parts: " +
    "latency under load, evaluation, failure handling, and code someone else can run. " +
    "Open to remote AI/ML roles with US, EU, and Gulf teams.",

  // Stat chips in the hero — recruiters scan these faster than prose.
  stats: [
    { label: "5,000+ inferences/day in production" },
    { label: "10 RAG assistants · 10k-doc KB" },
    { label: "LLM · RAG · Computer Vision" },
  ],

  // Contact + social. Leave blank ("") to hide a link.
  email: "abdulmannan0347@gmail.com",
  links: {
    github: "https://github.com/abdulmannan002",
    linkedin: "https://www.linkedin.com/in/abdul-mannan-b96307323/",
    resume: "/resume.pdf", // drop your resume at public/resume.pdf
  },
};

// Skills grouped into 3 scannable columns. AI/ML first for the target role.
export const skills: { group: string; items: string[] }[] = [
  {
    group: "AI / ML",
    items: [
      "LLMs",
      "RAG",
      "LangChain",
      "Hugging Face",
      "Embeddings & Vector Search (pgvector)",
      "Prompt Engineering",
      "PyTorch",
      "TensorFlow",
      "Computer Vision",
      "OCR",
      "OpenCV",
    ],
  },
  {
    group: "Backend & Serving",
    items: [
      "FastAPI",
      "Flask",
      "NestJS",
      "Node.js",
      "Express",
      "PostgreSQL / Prisma",
      "REST APIs",
      "WebSockets",
    ],
  },
  {
    group: "Infra & Tooling",
    items: ["Docker", "CI/CD (GitHub Actions)", "AWS S3", "Firebase", "Git", "Vercel"],
  },
];
