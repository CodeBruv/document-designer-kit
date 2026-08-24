import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUp, Check, Eye, EyeOff } from "lucide-react";
import {
  documentTypes,
  purposes,
  sections,
  templates,
  type Template,
} from "@/lib/dossier-data";
import { DocumentPreview } from "@/components/DocumentPreview";
import { TemplateThumb } from "@/components/TemplateThumb";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/create")({
  head: () => ({
    meta: [
      { title: "Create a Document — DossierBox Prototype" },
      { name: "description", content: "Pick a document type, purpose and template, then watch a live document build itself from your Dossier." },
      { property: "og:title", content: "Create a Document — DossierBox Prototype" },
      { property: "og:description", content: "Document type, purpose, template and a live preview generated from your Dossier." },
    ],
  }),
  component: CreateDocument,
});

const contentSections = sections.filter((s) => s.id !== "personal");

function CreateDocument() {
  const [docType, setDocType] = useState("cv");
  const [purpose, setPurpose] = useState<string | null>("job");
  const [templateId, setTemplateId] = useState("modern");
  const [order, setOrder] = useState(contentSections.map((s) => s.id));
  const [visible, setVisible] = useState(contentSections.map((s) => s.id));

  const template = templates.find((t) => t.id === templateId) as Template;
  const docTypeName = documentTypes.find((d) => d.id === docType)!.name;
  const purposeName = purposes.find((p) => p.id === purpose)?.name;

  const toggle = (id: string) =>
    setVisible((v) => (v.includes(id) ? v.filter((x) => x !== id) : [...v, id]));

  const moveUp = (id: string) =>
    setOrder((o) => {
      const i = o.indexOf(id);
      if (i <= 0) return o;
      const next = [...o];
      [next[i - 1], next[i]] = [next[i], next[i - 1]];
      return next;
    });

  const preview = (
    <DocumentPreview
      template={template}
      visible={visible}
      order={order}
      docTypeName={docTypeName}
      purposeName={purposeName}
    />
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-muted/40">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3">
          <div className="flex min-w-0 items-center gap-2">
            <Button asChild variant="ghost" size="icon" className="shrink-0">
              <Link to="/" aria-label="Back to Dossier">
                <ArrowLeft className="size-4" />
              </Link>
            </Button>
            <h1 className="truncate text-base font-bold sm:text-lg">Create document</h1>
          </div>
          <Button size="sm" className="shrink-0">
            Create document
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl gap-6 px-4 py-5 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
        <div className="min-w-0 space-y-5">
          <Step n={1} label="What are you creating?" hint="Document type">
            <div className="grid gap-2 sm:grid-cols-2">
              {documentTypes.map((d) => (
                <Choice
                  key={d.id}
                  selected={docType === d.id}
                  onClick={() => setDocType(d.id)}
                  title={d.name}
                  desc={d.desc}
                />
              ))}
            </div>
          </Step>

          <Step n={2} label="Purpose" hint="Optional — why you're creating it">
            <div className="flex flex-wrap gap-2">
              {purposes.map((p) => (
                <Pill key={p.id} selected={purpose === p.id} onClick={() => setPurpose(p.id)}>
                  {p.name}
                </Pill>
              ))}
              <Pill selected={purpose === null} onClick={() => setPurpose(null)}>
                Skip for now
              </Pill>
            </div>
          </Step>

          {/* Mobile-first template selector: compact horizontal scroller */}
          <Step n={3} label="Choose a template" hint={`${templates.length} visual styles · preview updates instantly`}>
            <div className="-mx-4 overflow-x-auto px-4 pb-1 lg:mx-0 lg:overflow-visible lg:px-0">
              <div className="flex w-max gap-3 lg:grid lg:w-full lg:grid-cols-5 lg:gap-3">
                {templates.map((t) => {
                  const active = t.id === templateId;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTemplateId(t.id)}
                      aria-pressed={active}
                      className={`w-24 shrink-0 rounded-lg border p-1.5 text-left transition lg:w-auto ${
                        active ? "border-primary ring-2 ring-primary/30" : "border-border hover:border-primary/50"
                      } bg-background`}
                    >
                      <TemplateThumb t={t} />
                      <div className="mt-1.5 flex items-center gap-1 px-0.5">
                        <span className="truncate text-xs font-medium">{t.name}</span>
                        {active ? <Check className="size-3 shrink-0 text-primary" /> : null}
                      </div>
                      <p className="hidden truncate px-0.5 text-[10px] text-muted-foreground lg:block">{t.vibe}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </Step>

          {/* Mobile live preview sits right after templates */}
          <div className="lg:hidden">
            <Step n={4} label="Live preview" hint="Generated from your Dossier — nothing to save first">
              <div className="rounded-xl bg-muted p-3">{preview}</div>
            </Step>
          </div>

          <Step n={5} label="Customize" hint="Sections, visibility and order">
            <div className="divide-y rounded-xl border bg-card">
              {order.map((id, i) => {
                const s = contentSections.find((x) => x.id === id)!;
                const on = visible.includes(id);
                return (
                  <div key={id} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 p-3">
                    <div className="min-w-0">
                      <div className={`truncate text-sm font-medium ${on ? "" : "text-muted-foreground line-through"}`}>
                        {s.name}
                      </div>
                      <div className="text-xs text-muted-foreground">{s.entries.length} entries from Dossier</div>
                    </div>
                    <div className="flex shrink-0 items-center gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label={`Move ${s.name} up`}
                        disabled={i === 0}
                        onClick={() => moveUp(id)}
                      >
                        <ArrowUp className="size-4" />
                      </Button>
                      <span className="text-muted-foreground">{on ? <Eye className="size-4" /> : <EyeOff className="size-4" />}</span>
                      <Switch checked={on} onCheckedChange={() => toggle(id)} aria-label={`Show ${s.name}`} />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-4 rounded-xl border bg-card p-3 text-sm">
              <label className="flex items-center gap-2">
                <Switch defaultChecked aria-label="Include contact details" />
                Contact details
              </label>
              <label className="flex items-center gap-2">
                <Switch aria-label="One page only" />
                One page only
              </label>
            </div>
            <Button className="mt-4 w-full lg:w-auto">Create document</Button>
          </Step>
        </div>

        {/* Desktop sticky live preview */}
        <aside className="hidden lg:block">
          <div className="sticky top-20 space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold">Live preview</h2>
              <span className="text-xs text-muted-foreground">
                {docTypeName} · {template.name}
              </span>
            </div>
            <div className="rounded-xl bg-muted p-4">{preview}</div>
            <p className="text-xs text-muted-foreground">
              Built from your Dossier. No saving required to preview.
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
}

function Step({ n, label, hint, children }: { n: number; label: string; hint?: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="mb-2 flex min-w-0 items-baseline gap-2">
        <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
          STEP {n}
        </span>
        <h2 className="truncate text-sm font-semibold uppercase tracking-wide">{label}</h2>
      </div>
      {hint ? <p className="mb-3 text-xs text-muted-foreground">{hint}</p> : null}
      {children}
    </section>
  );
}

function Choice({ selected, onClick, title, desc }: { selected: boolean; onClick: () => void; title: string; desc: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`rounded-xl border bg-card p-3 text-left transition ${
        selected ? "border-primary ring-2 ring-primary/25" : "hover:border-primary/50"
      }`}
    >
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
        <span className="truncate text-sm font-medium">{title}</span>
        {selected ? <Check className="size-4 shrink-0 text-primary" /> : null}
      </div>
      <p className="text-xs text-muted-foreground">{desc}</p>
    </button>
  );
}

function Pill({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`rounded-full border px-3 py-1.5 text-sm transition ${
        selected ? "border-primary bg-primary/10 text-primary" : "bg-card hover:border-primary/50"
      }`}
    >
      {children}
    </button>
  );
}
