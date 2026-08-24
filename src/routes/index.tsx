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

function DossierReview() {
  return (
    <div className="min-h-screen bg-muted/40 pb-16">
      <header className="border-b bg-background">
        <div className="mx-auto grid max-w-4xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-4 sm:flex sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">DossierBox</p>
            <h1 className="truncate text-xl font-bold sm:text-2xl">My Dossier</h1>
          </div>
          <Button asChild size="sm">
            <Link to="/create">
              <FilePlus2 className="size-4" /> Create a document
            </Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-4xl space-y-4 px-4 py-6">
        <section className="rounded-xl border bg-card p-5">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
            <div className="min-w-0">
              <h2 className="text-lg font-semibold">Your Dossier</h2>
              <p className="text-sm text-muted-foreground">
                {dossier.name} · {dossier.headline}
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <CheckCircle2 className="size-3.5" /> 8 of 8 sections complete
            </span>
          </div>
          <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full w-full rounded-full bg-primary" />
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            This is your saved career information. Documents are generated from it — you never rebuild it.
          </p>
        </section>

        <div className="grid gap-3 sm:grid-cols-2">
          {sections.map((s) => (
            <article key={s.id} className="rounded-xl border bg-card p-4">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                <h3 className="truncate font-semibold">{s.name}</h3>
                <Button asChild variant="ghost" size="sm" className="shrink-0 text-primary">
                  <Link to="/section/$sectionId" params={{ sectionId: s.id }}>
                    <Pencil className="size-3.5" /> Edit
                  </Link>
                </Button>
              </div>
              <ul className="mt-2 space-y-2">
                {s.entries.slice(0, 2).map((e, i) => (
                  <li key={i} className="text-sm">
                    <div className="font-medium">{e.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {[e.subtitle, e.meta].filter(Boolean).join(" • ")}
                    </div>
                  </li>
                ))}
              </ul>
              {s.entries.length > 2 ? (
                <p className="mt-2 text-xs text-muted-foreground">+{s.entries.length - 2} more saved</p>
              ) : null}
            </article>
          ))}
        </div>

        <div className="rounded-xl border border-dashed bg-card p-5 text-center">
          <p className="text-sm text-muted-foreground">Ready to use this information?</p>
          <Button asChild className="mt-3">
            <Link to="/create">
              <FilePlus2 className="size-4" /> Create a document
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
