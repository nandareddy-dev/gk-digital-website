// app/locations/[slug]/page.tsx
// SEO UPDATE: JSON-LD LocalBusiness schema + internal linking to nearby location pages added.
// Next.js 15/16 lo params Promise ga vastundi — await chesi vadali.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, ArrowUpRight, CheckCircle2, Star } from "lucide-react";
import Reveal from "@/components/Reveal";
import { locations, getLocationBySlug } from "@/components/data/locations";

export async function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: {
      canonical: `https://gkdigitalsolutions.in/locations/${slug}`,
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  // Nearby locations kosam — current location tappa remaining nunchi 4 pick chestunnam
  // internal linking / topical authority build cheyyadaniki
  const nearbyLocations = locations
    .filter((loc) => loc.slug !== slug)
    .slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `GK Digital Solutions - ${location.name}`,
    description: location.metaDescription,
    areaServed: {
      "@type": "City",
      name: location.name,
    },
    url: `https://gkdigitalsolutions.in/locations/${slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.name,
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "GK Digital Solutions",
      url: "https://gkdigitalsolutions.in",
    },
    serviceType: location.services,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-4 py-20 md:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-signal">
              <MapPin className="h-3.5 w-3.5" strokeWidth={2} />
              {location.areaLabel}
            </span>
            <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight text-paper md:text-5xl">
              Digital Marketing Agency in{" "}
              <span className="brand-gradient-text">{location.name}.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-paper/60">
              {location.intro}
            </p>
          </Reveal>

          <Reveal delay={150}>
            <Link
              href="/get-audit"
              className="group mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-white transition-transform hover:scale-[1.02]"
              style={{
                background: "linear-gradient(90deg, var(--signal), var(--teal))",
              }}
            >
              Get a free audit
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Local highlights */}
      <section className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
            Why {location.name} businesses choose us
          </h2>
        </Reveal>
        <div className="mt-8 space-y-3">
          {location.localHighlights.map((point, i) => (
            <Reveal key={point} delay={i * 80}>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-teal"
                  strokeWidth={2}
                />
                <span className="text-sm text-paper/60">{point}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-line bg-ink-panel/20 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
              What we offer {location.name} businesses
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {location.services.map((s, i) => (
              <Reveal key={s} delay={i * 80}>
                <div className="flex items-start gap-3 rounded-xl border border-line bg-ink p-4">
                  <Star className="mt-0.5 h-4 w-4 shrink-0 text-signal" strokeWidth={2} />
                  <span className="text-sm text-paper/60">{s}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Areas served */}
      <section className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
            Areas we serve near {location.name}
          </h2>
          <p className="mt-3 max-w-xl text-sm text-paper/60">
            We work with businesses across {location.name} and the surrounding
            areas, including:
          </p>
        </Reveal>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {location.neighborhoods.map((n, i) => (
            <Reveal key={n} delay={i * 40}>
              <span className="rounded-full border border-line px-4 py-2 text-sm text-paper/60">
                {n}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Nearby locations — internal linking for topical authority */}
      {nearbyLocations.length > 0 && (
        <section className="border-t border-line bg-ink-panel/20 py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-4">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
                We also serve nearby cities
              </h2>
            </Reveal>
            <div className="mt-6 flex flex-wrap gap-3">
              {nearbyLocations.map((loc, i) => (
                <Reveal key={loc.slug} delay={i * 60}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm text-paper/70 transition-colors hover:border-signal hover:text-signal"
                  >
                    <MapPin className="h-3.5 w-3.5" strokeWidth={2} />
                    Digital Marketing in {loc.name}
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 pb-20 md:pb-28">
        <Reveal>
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-line bg-ink-panel/40 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-lg font-semibold text-paper">
                Ready to grow your {location.name} business?
              </h3>
              <p className="mt-1 text-sm text-paper/60">
                Let&apos;s talk — get a free audit of where you stand today.
              </p>
            </div>
            <Link
              href="/get-audit"
              className="group flex shrink-0 items-center gap-2 rounded-full px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-white transition-transform hover:scale-[1.02]"
              style={{
                background: "linear-gradient(90deg, var(--signal), var(--teal))",
              }}
            >
              Get free audit
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}