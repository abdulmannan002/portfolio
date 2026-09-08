// Résumé content — the single source of truth for the /resume page.
// Edit here and the on-site resume (and its printed PDF) both update.
// Header identity (name, role, email, links) is reused from site.ts.

export const resume = {
  location: "Karachi, Pakistan · Open to Remote · US/EU Time-Zone Overlap",
  phone: "+92 309 5703201",
  portfolioUrl: "portfolio-one-pi-12.vercel.app",

  summary:
    "AI/ML engineer who ships LLM, RAG, and computer-vision systems to production — and builds " +
    "the backend that serves them. Delivered RAG assistants and document-intelligence pipelines " +
    "handling 5,000+ inference requests/day over a 10,000+ document knowledge base, plus the async " +
    "FastAPI/Node services, monitoring, and CI/CD around them. Strong at turning model prototypes " +
    "into reliable, evaluated, low-latency APIs.",

  skills: [
    {
      group: "AI / ML",
      items:
        "LLMs, RAG, LangChain, Hugging Face, OpenAI / GPT-4o Vision, embeddings & vector search " +
        "(pgvector), prompt engineering, model evaluation, Computer Vision, OCR, PyTorch, TensorFlow, OpenCV",
    },
    { group: "Languages", items: "Python, TypeScript, JavaScript (ES6), SQL" },
    {
      group: "Backend & Serving",
      items: "FastAPI, Flask, Node.js, NestJS, Express, REST APIs, WebSockets (Socket.IO)",
    },
    {
      group: "Data & Infra",
      items: "PostgreSQL (Prisma ORM), pgvector, Docker, AWS S3, Firebase, Google Cloud Storage",
    },
    {
      group: "Practices",
      items:
        "Async services, unit & e2e testing (Jest / pytest), CI/CD (GitHub Actions), modular architecture, code review",
    },
  ],

  experience: [
    {
      role: "AI Engineer",
      company: "SingX Solutions",
      location: "Karachi, Pakistan",
      period: "Aug 2025 – Present",
      bullets: [
        {
          text:
            "Designed 10 RAG assistants (LangChain, Hugging Face) delivering document-grounded Q&A over a " +
            "10,000+ document knowledge base for internal and customer-facing users.",
        },
        {
          text:
            "Built OCR and document-intelligence pipelines (RapidOCR, OpenCV, PyTorch, GPT-4o Vision) that " +
            "auto-extract structured fields from identity documents in ~1.3s — down from ~3 minutes of manual entry.",
        },
        {
          text:
            "Shipped ML/LLM features as async FastAPI/Flask microservices serving 5,000+ real-time inference " +
            "requests/day, monitored for uptime and latency and released via GitHub Actions CI/CD.",
        },
      ],
    },
    {
      role: "Full Stack Engineer",
      company: "Devtects",
      location: "Karachi, Pakistan",
      period: "Aug 2024 – Aug 2025",
      bullets: [
        {
          lead: "1stBond (social + marketplace):",
          text:
            "Engineered a modular NestJS backend (19+ modules, PostgreSQL/Prisma, Socket.IO) for real-time chat, " +
            "location sharing, and panic alerts, with Jest unit and e2e coverage.",
        },
        {
          lead: "AssanPay (fintech payments):",
          text:
            "Built the core backend (Node.js, TypeScript, Express, PostgreSQL/Prisma) for merchant onboarding, " +
            "payments, and settlements — auth, KYC, wallet ledger, and QR payments.",
        },
      ],
    },
    {
      role: "Freelance AI Developer",
      company: "Remote",
      location: "",
      period: "2022 – Present",
      bullets: [
        {
          text:
            "Delivered end-to-end computer-vision, NLP, and generative-AI projects, taking models from prototype " +
            "to deployed API (Python, FastAPI, Flask, Streamlit), including LLM and Telegram-bot integrations for external clients.",
        },
      ],
    },
  ],

  projects: [
    {
      name: "CNIC OCR & Document Extraction",
      text:
        "OCR pipeline (RapidOCR, OpenCV, GPT-4o Vision) extracting structured fields from Pakistani CNICs via a " +
        "Flask API, with custom preprocessing for low-quality scans.",
    },
    {
      name: "EclatAI — AI-vs-Real Image Classifier",
      text:
        "ResNet50 + SVM with a Streamlit dashboard and SHAP explainability that shows why an image was flagged AI-generated.",
    },
    {
      name: "AgentForge — Multi-tenant RAG Platform (in progress)",
      text:
        "Config-driven AI agent platform: FastAPI, PostgreSQL + pgvector, tenant-isolated document Q&A with [n] citations.",
    },
    {
      name: "Human Pose Estimation",
      text: "YOLO-based real-time human keypoint detection for live video input.",
    },
  ],

  education: [
    {
      degree: "BSc in Artificial Intelligence",
      school: "Sindh Madressa-tul-Islam University, Karachi",
      period: "Sep 2020 – Sep 2024",
    },
  ],
};
