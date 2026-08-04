// Every project + its case study lives here. Add a project = add an object.
// The homepage grid and the /projects/[slug] pages both read from this file.
//
// Fill in the TODO fields with your real details. Anything left as a TODO
// still renders — it just shows the placeholder so you can see what's missing.

export type Project = {
  slug: string; // URL: /projects/<slug>
  title: string;
  // ONE line — the outcome, not a description. "Cut X to Y", not "an app that…".
  outcome: string;
  // 4–5 tags shown on the card.
  tags: string[];
  featured?: boolean; // featured cards render larger, first
  links: {
    github?: string;
    demo?: string;
    loom?: string; // optional 60–90s walkthrough — disproportionately effective
  };

  // ---- Case study fields (the /projects/<slug> page) ----
  problem: string; // 2–3 sentences: the real need this solves
  // Architecture: either an image at /public/... OR an ASCII/text description.
  architectureImage?: string; // e.g. "/architecture/assanpay.png"
  architectureText?: string; // fallback if you don't have a diagram yet
  decisions: { choice: string; why: string }[]; // decisions + tradeoffs
  hardProblem: string; // the most important paragraph — real depth vs tutorials
  metrics?: { label: string; value: string }[];
  stack: string[]; // full tech list for the case study
};

export const projects: Project[] = [
  {
    slug: "ai-document-intelligence",
    title: "AI Document Intelligence",
    outcome:
      "TODO: e.g. 'Answers questions across 1,000+ page document sets in <2s using RAG.'",
    tags: ["RAG", "Embeddings", "FastAPI", "Vector DB", "OpenAI"],
    featured: true,
    links: { github: "", demo: "", loom: "" },
    problem:
      "TODO: What real need does this solve? e.g. Teams drown in long PDFs and can't find " +
      "the one clause that matters; keyword search misses paraphrases.",
    architectureText:
      "TODO: Describe the flow, e.g. Upload → chunk → embed → store in vector DB → " +
      "query embeds → top-k retrieval → LLM answers with citations.",
    decisions: [
      {
        choice: "TODO: e.g. Chunk by semantic sections, not fixed token windows",
        why: "TODO: the tradeoff you weighed and why this won",
      },
    ],
    hardProblem:
      "TODO (most important paragraph on the page): a specific hard problem you hit — " +
      "e.g. retrieval returned confident-but-wrong chunks — how you diagnosed it, what you " +
      "tried, and the fix that worked. Concrete beats polished.",
    metrics: [{ label: "TODO metric", value: "—" }],
    stack: ["FastAPI", "Python", "OpenAI API", "Vector DB", "Docker"],
  },
  {
    slug: "cnic-ocr",
    title: "CNIC OCR",
    outcome:
      "TODO: e.g. 'Extracts ID fields from CNIC scans at 95%+ field accuracy.'",
    tags: ["OCR", "OpenCV", "Python", "Image Processing"],
    links: { github: "", demo: "", loom: "" },
    problem:
      "TODO: e.g. Manual entry of national ID cards is slow and error-prone during onboarding.",
    architectureText:
      "TODO: e.g. Preprocess (deskew, threshold) → detect fields → OCR → validate/parse.",
    decisions: [
      { choice: "TODO", why: "TODO" },
    ],
    hardProblem:
      "TODO: the real hard part — e.g. handling glare/rotation/low-res photos, and how you " +
      "made extraction robust to them.",
    metrics: [{ label: "Field accuracy", value: "TODO" }],
    stack: ["Python", "OpenCV", "Tesseract / OCR engine"],
  },
  {
    slug: "assanpay",
    title: "AssanPay Payment Gateway",
    outcome:
      "TODO: e.g. 'Payment gateway integration handling X flows with idempotent processing.'",
    tags: ["NestJS", "PostgreSQL", "Payments", "REST", "Webhooks"],
    links: { github: "", demo: "", loom: "" },
    problem:
      "TODO: e.g. Merchants needed a reliable way to accept payments with correct handling " +
      "of retries, webhooks, and reconciliation.",
    architectureText:
      "TODO: e.g. API → payment provider → webhook handler → ledger/DB → status updates.",
    decisions: [{ choice: "TODO", why: "TODO" }],
    hardProblem:
      "TODO: e.g. ensuring idempotency so a retried/duplicate webhook never double-charges — " +
      "how you designed keys and DB constraints to guarantee it.",
    metrics: [{ label: "TODO", value: "—" }],
    stack: ["NestJS", "TypeScript", "PostgreSQL"],
  },
  {
    slug: "1stbond",
    title: "1stBond",
    outcome: "TODO: one-line outcome for 1stBond.",
    tags: ["Backend", "REST", "PostgreSQL", "TODO"],
    links: { github: "", demo: "", loom: "" },
    problem: "TODO: what 1stBond does and the need it solves.",
    architectureText: "TODO: high-level architecture.",
    decisions: [{ choice: "TODO", why: "TODO" }],
    hardProblem: "TODO: the hard problem and your solution.",
    metrics: [{ label: "TODO", value: "—" }],
    stack: ["TODO"],
  },
  {
    slug: "image-classifier-pose",
    title: "AI Image Classifier & Pose Estimation",
    outcome:
      "TODO: e.g. 'Real-time pose estimation + image classification demo.'",
    tags: ["PyTorch", "OpenCV", "Computer Vision", "Python"],
    links: { github: "", demo: "", loom: "" },
    problem: "TODO: the CV problem this demonstrates.",
    architectureText: "TODO: model → inference → output.",
    decisions: [{ choice: "TODO", why: "TODO" }],
    hardProblem: "TODO: a hard part — e.g. real-time performance or accuracy on edge cases.",
    metrics: [{ label: "TODO", value: "—" }],
    stack: ["Python", "PyTorch", "OpenCV"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
