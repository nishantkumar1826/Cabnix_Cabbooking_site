import { createFileRoute, Link } from "@tanstack/react-router";
import { routes } from "@/lib/data";
import { PageHero } from "@/components/PageHero";
import { ArrowRight, Clock, MapPin } from "lucide-react";

export const Route = createFileRoute("/routes")({
  head: () => ({
    meta: [
      { title: "Popular Routes — Cabnix" },
      { name: "description", content: "Comfortable private cab routes from Delhi & Chandigarh to Manali, Leh, Srinagar, Jaipur and more." },
    ],
  }),
  component: RoutesPage,
});

function RoutesPage() {
  return (
    <>
      <PageHero
        eyebrow="Routes"
        title="Premium cabs across North India."
        subtitle="Comfortable, sanitized vehicles with experienced drivers — fixed transparent prices."
      />
      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
          <div className="grid grid-cols-12 border-b border-border bg-secondary/60 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <div className="col-span-5 md:col-span-4">Route</div>
            <div className="col-span-3 hidden md:block">Distance</div>
            <div className="col-span-3 md:col-span-2">Duration</div>
            <div className="col-span-4 md:col-span-2">From</div>
            <div className="col-span-0 md:col-span-1"></div>
          </div>
          {routes.map((r, i) => (
            <div key={i} className="grid grid-cols-12 items-center gap-2 border-b border-border px-6 py-5 last:border-b-0 hover:bg-secondary/40">
              <div className="col-span-5 md:col-span-4">
                <p className="font-display text-lg font-semibold text-foreground">{r.from} → {r.to}</p>
                <p className="text-xs text-muted-foreground inline-flex items-center gap-1"><MapPin size={12} /> Private sedan / SUV</p>
              </div>
              <div className="col-span-3 hidden text-sm text-foreground md:block">{r.distance}</div>
              <div className="col-span-3 text-sm text-foreground md:col-span-2 inline-flex items-center gap-1"><Clock size={14} className="text-primary" /> {r.duration}</div>
              <div className="col-span-4 md:col-span-2 font-display text-xl font-semibold text-primary">{r.price}</div>
              <div className="col-span-12 md:col-span-1 md:text-right">
                <Link to="/plan" className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90">
                  Book <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
