import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Pencil, Plus, Save } from "lucide-react";
import { sections } from "@/lib/dossier-data";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/section/$sectionId")({
  head: () => ({
    meta: [
      { title: "Edit Dossier Section — DossierBox Prototype" },
      { name: "description", content: "Edit the saved entries in one Dossier section, such as certifications or education." },
      { property: "og:title", content: "Edit Dossier Section — DossierBox Prototype" },
      { property: "og:description", content: "Persistent, reusable career entries you edit once and reuse everywhere." },
    ],
  }),
  component: SectionEditor,
});

function SectionEditor() {
  const { sectionId } = Route.useParams();
  const section = sections.find((s) => s.id === sectionId);
  if (!section) throw notFound();

  return (
    <div className="min-h-screen bg-background pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[image:var(--gradient-page)]"
      />
      <header className="relative border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-2xl items-center gap-3 px-5 py-5">
          <Button asChild variant="ghost" size="sm" className="shrink-0">
            <Link to="/">
              <ArrowLeft className="size-4" /> Back
            </Link>
          </Button>
          <h1 className="min-w-0 truncate text-xl font-semibold tracking-tight">{section.name}</h1>
        </div>
      </header>

      <main className="relative mx-auto max-w-2xl space-y-5 px-5 py-8">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {section.entries.length} saved {section.entries.length === 1 ? "entry" : "entries"} · reused automatically in
          every document you create.
        </p>

        <div className="space-y-3">
          {section.entries.map((e, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border/70 bg-card p-5 shadow-[var(--shadow-card)] transition-all duration-200 hover:border-primary/25 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                <div className="min-w-0">
                  <div className="font-semibold tracking-tight">
                    {e.title}
                    {e.subtitle ? <span className="font-normal text-muted-foreground"> — {e.subtitle}</span> : null}
                  </div>
                  {e.meta ? <div className="mt-0.5 text-xs text-muted-foreground">{e.meta}</div> : null}
                  {e.detail ? <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.detail}</p> : null}
                </div>
                <Button variant="outline" size="sm" className="shrink-0">
                  <Pencil className="size-3.5" /> Edit
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Button variant="outline" className="w-full border-dashed py-6 text-muted-foreground hover:text-primary">
          <Plus className="size-4" /> Add entry
        </Button>

        <div className="flex flex-wrap gap-2 border-t border-border/60 pt-5">
          <Button>
            <Save className="size-4" /> Save changes
          </Button>
          <Button asChild variant="ghost">
            <Link to="/">Back to Dossier</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
