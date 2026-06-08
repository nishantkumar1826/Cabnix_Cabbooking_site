import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { InquiryForm } from "@/components/InquiryForm";
import { Sparkles, MessageCircle, MapPinned, CalendarDays } from "lucide-react";

export const Route = createFileRoute("/plan")({
  head: () => ({
    meta: [
      { title: "Plan My Trip — Cabnix" },
      { name: "description", content: "Share your travel preferences and a Cabnix curator will design your perfect North India itinerary." },
    ],
  }),
  component: PlanPage,
});

function PlanPage() {
  return (
    <>
      <PageHero
        eyebrow="Plan My Trip"
        title="Let's design something unforgettable."
        subtitle="Tell us a little about your travel plans. A senior curator will reach out within 24 hours with a tailored itinerary."
      />
      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="rounded-3xl bg-card p-8 shadow-card lg:col-span-3">
            <h2 className="font-display text-2xl font-semibold text-foreground">Trip details</h2>
            <p className="mt-1 text-sm text-muted-foreground">All fields below help us craft your perfect journey.</p>
            <div className="mt-6"><InquiryForm /></div>
          </div>
          <aside className="space-y-4 lg:col-span-2">
            {[
              { icon: Sparkles, t: "Tailored, not templated", d: "Every itinerary built around your interests and pace." },
              { icon: MapPinned, t: "Boots-on-ground knowledge", d: "Our team has personally traveled every route we suggest." },
              { icon: CalendarDays, t: "Flexible bookings", d: "Free changes up to 14 days before departure." },
              { icon: MessageCircle, t: "Always a real human", d: "Speak to your curator anytime on call or WhatsApp." },
            ].map((b) => (
              <div key={b.t} className="rounded-3xl bg-card p-6 shadow-card">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-soft text-primary"><b.icon size={18} /></div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{b.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </>
  );
}
