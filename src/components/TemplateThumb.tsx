import type { Template } from "@/lib/dossier-data";

export function TemplateThumb({ t }: { t: Template }) {
  const bar = (w: string, h = "h-1", key?: number) => (
    <div key={key} className={`${h} ${w} rounded-full bg-foreground/12`} />
  );

  return (
    <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-background p-2.5 ring-1 ring-border/60">
      {t.layout === "sidebar" ? (
        <div className="flex h-full gap-1.5">
          <div className="h-full w-1/3 rounded-md" style={{ backgroundColor: t.accent, opacity: 0.9 }} />
          <div className="flex flex-1 flex-col gap-1.5 pt-1">
            {bar("w-4/5", "h-1.5")}
            {bar("w-3/5")}
            <div className="mt-1.5 space-y-1.5">{[1, 2, 3, 4].map((i) => bar(i % 2 ? "w-full" : "w-4/5", "h-1", i))}</div>
          </div>
        </div>
      ) : t.layout === "banner" ? (
        <div className="flex h-full flex-col gap-1.5">
          <div className="h-6 rounded-md" style={{ backgroundColor: t.accent, opacity: 0.9 }} />
          <div className="space-y-1.5 pt-0.5">{[1, 2, 3, 4, 5, 6].map((i) => bar(i % 3 ? "w-full" : "w-2/3", "h-1", i))}</div>
        </div>
      ) : t.layout === "centered" ? (
        <div className="flex h-full flex-col items-center gap-1.5 pt-2.5">
          <div className="h-1.5 w-1/2 rounded-full" style={{ backgroundColor: t.accent }} />
          {bar("w-1/3")}
          <div className="mt-1.5 w-full space-y-1.5">{[1, 2, 3, 4, 5].map((i) => bar(i % 2 ? "w-full" : "w-5/6", "h-1", i))}</div>
        </div>
      ) : (
        <div className="flex h-full flex-col gap-1.5 pt-1.5">
          <div className="h-1.5 w-3/5 rounded-full" style={{ backgroundColor: t.accent }} />
          {bar("w-2/5")}
          <div className="mt-1.5 space-y-1.5">{[1, 2, 3, 4, 5, 6].map((i) => bar(i % 3 ? "w-full" : "w-3/4", "h-1", i))}</div>
        </div>
      )}
    </div>
  );
}
