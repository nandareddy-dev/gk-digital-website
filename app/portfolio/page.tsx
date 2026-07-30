import Link from "next/link";
import { ArrowUpRight, Sparkles, Target, Lightbulb, TrendingUp, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import ScrollProgress from "@/components/ScrollProgress";
import PortfolioFilterBar from "@/components/PortfolioFilterBar";
import { ServicesCursorAura, ServicesStickyCTA } from "@/components/ServicesPageInteractive";

export const metadata = {
  title: "Our Work & Case Studies | GK Digital Solutions Results",
  description:
    "See real results from GK Digital Solutions' SEO, ads, and branding campaigns — case studies showing measurable growth across industries.",
};

/* Fluid type scale — continuous clamp() scaling, matches the rest of the site */
const fluid = {
  hero: "text-[clamp(1.85rem,5.6vw,3.25rem)] leading-[1.18]",
  h2: "text-[clamp(1.4rem,4vw,2.25rem)] leading-[1.2]",
  lead: "text-[clamp(0.95rem,1.8vw,1.125rem)] leading-relaxed",
  eyebrow: "text-[clamp(0.625rem,1.3vw,0.75rem)] tracking-[0.18em]",
};

/* Added a Skin & Hair Clinic entry, consistent with the industry added
   elsewhere on the site. All entries are still placeholders — swap in
   real challenge/strategy/results copy and metrics once client data and
   permission are available. No numbers are fabricated here on purpose.
   `tag` doubles as the filter value for PortfolioFilterBar. */
const caseStudies = [
  { title: "Real Estate Brand", tag: "Real Estate", desc: "Local SEO & Lead Generation", glow: "#6D3AF2" },
  { title: "E-Commerce Store", tag: "E-Commerce", desc: "Google Ads & Meta Ads ROI", glow: "#22B07D" },
  { title: "Healthcare Clinic", tag: "Healthcare", desc: "Website Redesign & Local SEO", glow: "#3D6FF2" },
  { title: "Restaurant Chain", tag: "Hospitality", desc: "Social Media Growth", glow: "#F2A93A" },
  { title: "Skin & Hair Clinic", tag: "Skin & Hair", desc: "Meta Ads & WhatsApp Booking", glow: "#FF5C8A" },
];

const filterTags = [...new Set(caseStudies.map((cs) => cs.tag))];

const previewStructure = [
  { icon: Target, label: "The Challenge" },
  { icon: Lightbulb, label: "The Strategy" },
  { icon: TrendingUp, label: "The Results" },
];

export default function PortfolioPage() {
  return (
    <main className="relative overflow-x-hidden">
      <ScrollProgress />
      <ServicesCursorAura />
      <style>{`
        @keyframes mesh-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-4%, 3%) scale(1.08); }
        }
        .mesh-blob { animation: mesh-drift 14s ease-in-out infinite; }
        @keyframes icon-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .icon-float { animation: icon-float 3.4s ease-in-out infinite; }
        @keyframes border-glow { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
        .cta-border-glow { animation: border-glow 4s ease-in-out infinite; }
        @keyframes shimmer-sweep {
          0% { transform: translateX(-120%) skewX(-15deg); }
          100% { transform: translateX(220%) skewX(-15deg); }
        }
        .shimmer-btn::after {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 30%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
          animation: shimmer-sweep 3.2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .mesh-blob, .icon-float, .cta-border-glow, .shimmer-btn::after { animation: none !important; }
        }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-20">
        <div
          className="mesh-blob pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl sm:-right-32 sm:-top-32 sm:h-96 sm:w-96"
          style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <span className={`inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono uppercase text-paper/50 ${fluid.eyebrow}`}>
              <Sparkles className="icon-float h-3 w-3" strokeWidth={2} />
              Portfolio
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={`mt-5 break-words font-display font-semibold tracking-tight text-paper ${fluid.hero}`}>
              Real businesses. Real growth. Real numbers.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className={`mt-4 max-w-xl text-paper/60 sm:mt-5 ${fluid.lead}`}>
              Full write-ups are on the way as client campaigns wrap and
              we get sign-off to publish the numbers. Here&apos;s what
              each case study will cover.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter bar — narrows the cards below by industry */}
      <section className="border-b border-line py-6 sm:py-8">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <PortfolioFilterBar tags={filterTags} />
        </div>
      </section>

      {/* Case study cards */}
      <section className="border-b border-line py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl min-w-0 px-5 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.title} delay={i * 70}>
                <div className="portfolio-card h-full" data-tag={cs.tag}>
                <SpotlightCard className="relative h-full overflow-hidden rounded-2xl border border-dashed border-line bg-ink-panel/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 sm:p-8">
                  {/* colour fade — soft glow unique per card, sits behind the content */}
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full opacity-[0.16] blur-3xl transition-opacity duration-300 group-hover:opacity-25"
                    style={{ background: cs.glow }}
                    aria-hidden="true"
                  />
                  <div
                    className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full opacity-[0.08] blur-3xl"
                    style={{ background: cs.glow }}
                    aria-hidden="true"
                  />

                  <div className="relative flex items-start justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-paper/40 sm:text-[11px]">
                      {cs.desc}
                    </span>
                    <span className="flex shrink-0 items-center gap-1 rounded-full border border-line px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-paper/40">
                      <Clock className="h-2.5 w-2.5" strokeWidth={2} />
                      Coming soon
                    </span>
                  </div>
                  <h3 className="relative mt-3 font-display text-lg font-semibold text-paper sm:text-xl">
                    {cs.title}
                  </h3>

                  {/* Preview structure — sets expectations without fabricating numbers */}
                  <div className="relative mt-5 flex items-center gap-4 sm:mt-6 sm:gap-5">
                    {previewStructure.map((p) => (
                      <div key={p.label} className="flex flex-1 flex-col items-center gap-1.5 text-center">
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-full sm:h-9 sm:w-9"
                          style={{ background: `${cs.glow}22` }}
                        >
                          <p.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.75} style={{ color: cs.glow }} />
                        </div>
                        <span className="text-[9.5px] leading-tight text-paper/40 sm:text-[10px]">{p.label}</span>
                      </div>
                    ))}
                  </div>

                  <p className="relative mt-4 text-[12.5px] leading-relaxed text-paper/40 sm:text-sm">
                    Case study coming soon — challenge, strategy and
                    real results will be published here once client data
                    and permission are available.
                  </p>
                </SpotlightCard>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <div
              className="cta-border-glow relative overflow-hidden rounded-2xl border p-6 backdrop-blur-sm sm:p-10"
              style={{ borderImage: "linear-gradient(135deg, var(--signal), var(--teal)) 1", background: "var(--ink-panel)" }}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-20 blur-3xl sm:-right-24 sm:-top-24 sm:h-72 sm:w-72"
                style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
                aria-hidden="true"
              />
              <div className="relative flex flex-col items-start justify-between gap-5 md:flex-row md:items-center md:gap-6">
                <h2 className={`font-display font-semibold text-paper ${fluid.h2}`}>
                  Your success story could be next.
                </h2>
                <Link
                  href="/contact"
                  className="shimmer-btn group relative flex min-h-[46px] w-full shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full px-6 font-mono text-[12px] uppercase tracking-wider text-white transition-transform hover:scale-[1.03] sm:w-auto sm:text-[13px]"
                  style={{ background: "linear-gradient(90deg, var(--signal), var(--teal))" }}
                >
                  <span className="relative">Start your project</span>
                  <ArrowUpRight
                    className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2}
                  />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ServicesStickyCTA label="Your success story could be next" linkText="Start now" />
    </main>
  );
}