import { dossier, sections, type Template } from "@/lib/dossier-data";

type Props = {
  template: Template;
  visible: string[];
  order: string[];
  docTypeName: string;
  purposeName?: string | undefined;
};

export function DocumentPreview({ template: t, visible, order, docTypeName, purposeName }: Props) {
  const ordered = order
    .map((id) => sections.find((s) => s.id === id)!)
    .filter((s) => s && s.id !== "personal" && visible.includes(s.id));

  const heading = (text: string) => (
    <h3
      className={`mb-1.5 text-[10px] font-semibold tracking-[0.12em] ${t.caps ? "uppercase" : ""} ${t.rule ? "border-b pb-1" : ""}`}
      style={{ color: t.accent, borderColor: t.accent + "" }}
    >
      {text}
    </h3>
  );

  const body = (
    <div className="space-y-3">
      {purposeName ? (
        <p className="text-[10px] italic text-muted-foreground">
          Tailored for: {purposeName} · {docTypeName}
        </p>
      ) : null}
      {ordered.map((s) => (
        <section key={s.id}>
          {heading(s.name)}
          <div className="space-y-1.5">
            {s.entries.map((e, i) => (
              <div key={i} className="text-[10px] leading-snug">
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <span className="font-semibold text-foreground">{e.title}</span>
                  {e.meta ? <span className="text-muted-foreground">{e.meta}</span> : null}
                </div>
                {e.subtitle ? <div className="text-foreground/70">{e.subtitle}</div> : null}
                {e.detail ? <div className="text-muted-foreground">{e.detail}</div> : null}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );

  return (
    <div
      className="mx-auto w-full max-w-[520px] overflow-hidden rounded-lg bg-card shadow-[var(--shadow-page)] ring-1 ring-border"
      style={{ fontFamily: t.font }}
    >
      {t.layout === "banner" ? (
        <div className="px-5 py-4" style={{ backgroundColor: t.accent }}>
          <div className="text-base font-bold text-white">{dossier.name}</div>
          <div className="text-[10px] text-white/80">
            {dossier.headline} · {dossier.email}
          </div>
        </div>
      ) : t.layout === "centered" ? (
        <div className="border-b px-5 py-4 text-center">
          <div className={`text-lg font-bold ${t.caps ? "uppercase tracking-[0.18em]" : ""}`} style={{ color: t.accent }}>
            {dossier.name}
          </div>
          <div className="text-[10px] text-muted-foreground">
            {dossier.headline} · {dossier.email} · {dossier.phone}
          </div>
        </div>
      ) : t.layout === "classic" ? (
        <div className="px-5 pt-4">
          <div className="text-lg font-bold text-foreground">{dossier.name}</div>
          <div className="text-[10px] text-muted-foreground">
            {dossier.headline} · {dossier.email} · {dossier.phone}
          </div>
          <div className="mt-3 h-px w-full" style={{ backgroundColor: t.accent, opacity: 0.5 }} />
        </div>
      ) : null}

      {t.layout === "sidebar" ? (
        <div className="grid grid-cols-[34%_minmax(0,1fr)]">
          <aside className="min-w-0 p-4 text-white" style={{ backgroundColor: t.accent }}>
            <div className="text-sm font-bold leading-tight">{dossier.name}</div>
            <div className="mt-1 text-[10px] text-white/80">{dossier.headline}</div>
            <div className="mt-3 space-y-0.5 text-[10px] text-white/85">
              <div>{dossier.email}</div>
              <div>{dossier.phone}</div>
              <div>{dossier.location}</div>
            </div>
          </aside>
          <div className="min-w-0 p-4">{body}</div>
        </div>
      ) : (
        <div className="p-5">{body}</div>
      )}
    </div>
  );
}
