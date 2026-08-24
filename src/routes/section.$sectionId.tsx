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
    <div className="min-h-screen bg-muted/40 pb-16">
      <header className="border-b bg-background">
        <div className="mx-auto flex max-w-2xl items-center gap-3 px-4 py-4">
          <Button asChild variant="ghost" size="sm" className="shrink-0">
            <Link to="/">
              <ArrowLeft className="size-4" /> Back to Dossier
            </Link>
          </Button>
          <h1 className="min-w-0 truncate text-lg font-bold">{section.name}</h1>
        </div>
      </header>

      <main className="mx-auto max-w-2xl space-y-4 px-4 py-6">
        <p className="text-sm text-muted-foreground">
          {section.entries.length} saved {section.entries.length === 1 ? "entry" : "entries"} · reused automatically in
          every document you create.
        </p>

        <div className="space-y-3">
          {section.entries.map((e, i) => (
            <div key={i} className="rounded-xl border bg-card p-4">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                <div className="min-w-0">
                  <div className="font-semibold">
                    {e.title}
                    {e.subtitle ? <span className="font-normal text-muted-foreground"> — {e.subtitle}</span> : null}
                  </div>
                  {e.meta ? <div className="text-xs text-muted-foreground">{e.meta}</div> : null}
                  {e.detail ? <p className="mt-1 text-sm text-muted-foreground">{e.detail}</p> : null}
                </div>
                <Button variant="outline" size="sm" className="shrink-0">
                  <Pencil className="size-3.5" /> Edit
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Button variant="outline" className="w-full border-dashed">
          <Plus className="size-4" /> Add entry
        </Button>

        <div className="flex flex-wrap gap-2 border-t pt-4">
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
