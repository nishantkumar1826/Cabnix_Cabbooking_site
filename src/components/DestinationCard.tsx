import type { Destination } from "@/lib/data";
import { MapPin, Calendar } from "lucide-react";

export function DestinationCard({ d }: { d: Destination }) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-card shadow-card transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={d.image}
          alt={`${d.name}, ${d.region}`}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
          {d.region}
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
          from {d.from}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-2xl font-semibold text-foreground">{d.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{d.tagline}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1"><Calendar size={14} className="text-primary" /> {d.days}</span>
          <span className="inline-flex items-center gap-1"><MapPin size={14} className="text-primary" /> North India</span>
        </div>
      </div>
    </article>
  );
}
