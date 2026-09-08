"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
    >
      Download / Print PDF
    </button>
  );
}
