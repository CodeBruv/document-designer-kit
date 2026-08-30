import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, FilePlus2, Pencil } from "lucide-react";
import { dossier, sections } from "@/lib/dossier-data";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "My Dossier — DossierBox Prototype" },
      { name: "description", content: "Review your saved career information: education, experience, certifications and more, ready to reuse in any document." },
      { property: "og:title", content: "My Dossier — DossierBox Prototype" },
      { property: "og:description", content: "Your reusable career information, ready to become a CV, cover letter or profile." },
    ],
  }),
  component: DossierReview,
});

const initials = dossier.name
  .split(" ")
  .filter((w) => /^[A-Z]/.test(w))
  .map((w) => w[0])
  .slice(0, 2)
  .join("");

function DossierReview() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[image:var(--gradient-page)]"
      />
      <header className="relative border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto grid max-w-4xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 sm:flex sm:justify-between">
          <div className="min-w-0">
            <p className="font-display text-sm italic tracking-wide text-primary">DossierBox</p>
            <h1 className="truncate text-2xl font-semibold tracking-tight sm:text-3xl">My Dossier</h1>
          </div>
          <Button asChild>
            <Link to="/create">
              <FilePlus2 className="size-4" /> Create a document
            </Link>
          </Button>
        </div>
      </header>

      <main className="relative mx-auto max-w-4xl space-y-6 px-5 py-8">
        <section className="rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-card)]">
          <div className="flex items-start gap-4">
            <div className="grid size-12 shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
              {initials}
            </div>
            <div className="grid min-w-0 flex-1 grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
              <div className="min-w-0">
                <h2 className="text-lg font-semibold tracking-tight">Your Dossier</h2>
                <p className="truncate text-sm text-muted-foreground">
                  {dossier.name} · {dossier.headline}
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <CheckCircle2 className="size-3.5" /> 8 of 8 sections
              </span>
            </div>
          </div>
          <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-primary to-primary/60" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            This is your saved career information. Documents are generated from it — you never rebuild it.
          </p>
        </section>

        <div className="grid gap-4 sm:grid-cols-2">
          {sections.map((s, i) => (
            <article
              key={s.id}
              className="group rounded-2xl border border-border/70 bg-card p-5 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                <div className="flex min-w-0 items-center gap-2.5">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-muted text-[10px] font-semibold text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="truncate font-semibold tracking-tight">{s.name}</h3>
                </div>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="shrink-0 text-primary opacity-80 transition-opacity group-hover:opacity-100"
                >
                  <Link to="/section/$sectionId" params={{ sectionId: s.id }}>
                    <Pencil className="size-3.5" /> Edit
                  </Link>
                </Button>
              </div>
              <ul className="mt-3 space-y-2.5">
                {s.entries.slice(0, 2).map((e, j) => (
                  <li key={j} className="text-sm">
                    <div className="font-medium">{e.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {[e.subtitle, e.meta].filter(Boolean).join(" • ")}
                    </div>
                  </li>
                ))}
              </ul>
              {s.entries.length > 2 ? (
                <p className="mt-3 text-xs text-muted-foreground">+{s.entries.length - 2} more saved</p>
              ) : null}
            </article>
          ))}
        </div>

        <div className="rounded-2xl border border-dashed border-primary/25 bg-primary/[0.03] p-8 text-center">
          <p className="font-display text-lg italic text-foreground/80">Ready to use this information?</p>
          <Button asChild className="mt-4">
            <Link to="/create">
              <FilePlus2 className="size-4" /> Create a document
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
