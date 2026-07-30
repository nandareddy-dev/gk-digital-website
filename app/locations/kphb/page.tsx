import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowUpRight, CheckCircle2, Star } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in KPHB, Hyderabad | GK Digital Solutions",
  description:
    "GK Digital Solutions offers SEO, Google Ads, Meta Ads, and website design for businesses in KPHB, Kukatpally, Hyderabad. Get a free audit today.",
};

const localHighlights = [
  "Based near KPHB — we understand the Kukatpally market directly, not just national trends",
  "Worked with local businesses across interior design, real estate, and D2C in Kukatpally",
  "In-person meetings available for KPHB and Kukatpally-based clients",
  "Local SEO expertise for 'near me' and KPHB-area specific searches",
];

const neighborhoods = [
  "Kukatpally",
  "Miyapur",
  "JNTU",
  "Bachupally",
  "Nizampet",
  "Pragathi Nagar",
  "Hitech City",
  "Madhapur",
];

const services = [
  "Local SEO & Google Business Profile optimization for KPHB searches",
  "Google Ads for KPHB & Kukatpally-based service businesses",
  "Meta Ads targeted to Kukatpally and nearby neighborhoods",
  "Website design for KPHB-based businesses",
];

export default function KphbLocationPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-4 py-20 md:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-signal">
              <MapPin className="h-3.5 w-3.5" strokeWidth={2} />
              KPHB, Kukatpally, Hyderabad
            </span>
            <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight text-paper md:text-5xl">
              Digital Marketing Agency in{" "}
              <span className="brand-gradient-text">KPHB.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-paper/60">
              We&apos;re a Hyderabad-based team helping KPHB and Kukatpally
              businesses get found, get leads, and grow — with the kind of
              local market understanding that only comes from working here.
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
            Why KPHB businesses choose us
          </h2>
        </Reveal>
        <div className="mt-8 space-y-3">
          {localHighlights.map((point, i) => (
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

      {/* Services for KPHB */}
      <section className="border-y border-line bg-ink-panel/20 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
              What we offer KPHB businesses
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {services.map((s, i) => (
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
            Areas we serve near KPHB
          </h2>
          <p className="mt-3 max-w-xl text-sm text-paper/60">
            We work with businesses across KPHB and the surrounding areas,
            including:
          </p>
        </Reveal>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {neighborhoods.map((n, i) => (
            <Reveal key={n} delay={i * 40}>
              <span className="rounded-full border border-line px-4 py-2 text-sm text-paper/60">
                {n}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 pb-20 md:pb-28">
        <Reveal>
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-line bg-ink-panel/40 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-lg font-semibold text-paper">
                Ready to grow your KPHB business?
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