import { createFileRoute } from "@tanstack/react-router";
import { DestinationCard } from "@/components/DestinationCard";
import { destinations } from "@/lib/data";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — Cabnix" },
      { name: "description", content: "Explore Manali, Shimla, Kasol, Leh, Srinagar, Mussoorie, Nainital, Jaipur and Udaipur with Cabnix." },
    ],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Nine corners of North India, designed to be felt."
        subtitle="Curated escapes from snow-laced Himalayas to sandstone palaces of Rajasthan."
      />
      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => <DestinationCard key={d.name} d={d} />)}
        </div>
      </section>
    </>
  );
}
