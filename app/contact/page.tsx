import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import LiveStatusBadge from "@/components/LiveStatusBadge";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollProgress from "@/components/ScrollProgress";
import { ServicesCursorAura } from "@/components/ServicesPageInteractive";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Zap,
  ShieldCheck,
  Search,
  ClipboardList,
  Rocket,
  Target,
  BarChart3,
  Megaphone,
  Sparkles,
} from "lucide-react";

function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.07c-.24.68-1.4 1.32-1.94 1.4-.5.08-1.12.11-1.8-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36l.55.01c.18 0 .41-.07.64.49.24.58.81 2 .88 2.15.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.61-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.63-.14.26.09 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
    </svg>
  );
}

export const metadata = {
  title: "Contact GK Digital Solutions | Get a Free Consultation",
  description:
    "Get in touch with GK Digital Solutions for a free digital marketing consultation. Let's discuss SEO, ads, branding, and web design for your business.",
};

/* Fluid type scale — continuous clamp() scaling, matches the rest of the site */
const fluid = {
  hero: "text-[clamp(2rem,6vw,3.6rem)] leading-[1.12]",
  h2: "text-[clamp(1.4rem,4vw,2.25rem)] leading-[1.2]",
  lead: "text-[clamp(0.95rem,1.8vw,1.125rem)] leading-relaxed",
  eyebrow: "text-[clamp(0.625rem,1.3vw,0.75rem)] tracking-[0.18em]",
};

const WHATSAPP_LINK =
  "https://wa.me/917569622606?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20GK%20Digital%20Solutions%27%20services.";

const trustPoints = [
  { icon: Zap, label: "Reply within 24 hours" },
  { icon: ShieldCheck, label: "No spam, no obligation" },
  { icon: MessageCircle, label: "Free 15-min strategy call" },
];

const contactChannels = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7569622606",
    href: "tel:+917569622606",
  },
  {
    icon: WhatsappIcon,
    label: "WhatsApp",
    value: "Chat instantly",
    href: WHATSAPP_LINK,
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@gkdigitalsolutions.in",
    href: "mailto:hello@gkdigitalsolutions.in",
  },
  {
    icon: MapPin,
    label: "Our office",
    value: "Alluri Trade Centre, Hyderabad",
    href: "#map",
  },
];

const nextSteps = [
  {
    icon: Search,
    n: "01",
    title: "We review your submission",
    desc: "Within a few hours, our team looks at your business, website and current marketing setup.",
  },
  {
    icon: ClipboardList,
    n: "02",
    title: "We prep a short audit",
    desc: "A quick, honest look at what's working, what isn't, and where the opportunity is.",
  },
  {
    icon: Rocket,
    n: "03",
    title: "We call you",
    desc: "A free 15-minute call to walk through the audit and answer your questions — no pressure, no pitch deck.",
  },
];

const miniFaqs = [
  {
    q: "How fast will I hear back?",
    a: "Within 24 hours on business days — often sooner.",
  },
  {
    q: "Is the initial audit really free?",
    a: "Yes, no cost and no obligation to sign up afterward.",
  },
  {
    q: "Can I just message on WhatsApp instead?",
    a: "Of course — the WhatsApp button below connects you directly to our team.",
  },
];

export default function ContactPage() {
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
        @keyframes underline-draw { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .eyebrow-underline { position: relative; display: inline-flex; }
        .eyebrow-underline::after {
          content: "";
          position: absolute;
          left: 0; bottom: -4px;
          height: 1.5px;
          width: 100%;
          background: linear-gradient(90deg, var(--signal), var(--teal));
          transform: scaleX(0);
          transform-origin: left;
          animation: underline-draw 0.9s ease-out 0.3s forwards;
        }
        @keyframes icon-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .icon-float { animation: icon-float 3.4s ease-in-out infinite; }
        @keyframes banner-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(4deg); }
        }
        .banner-icon { animation: banner-float 5s ease-in-out infinite; }
        @keyframes draw-line { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .step-line { animation: draw-line 1.4s ease-out forwards; transform-origin: left; }
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
        .gc-card { transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease; }
        .gc-card:hover { transform: translateY(-4px); box-shadow: 0 16px 34px rgba(0,0,0,0.22); }
        @media (prefers-reduced-motion: reduce) {
          .mesh-blob, .eyebrow-underline::after, .icon-float, .banner-icon, .step-line, .shimmer-btn::after {
            animation: none !important;
          }
          .gc-card:hover { transform: none; }
        }
      `}</style>

      {/* Banner hero — brand gradient with floating digital-marketing icons */}
      <section className="relative overflow-hidden">
        <div
          className="relative flex min-h-[280px] flex-col items-center justify-center px-5 py-24 text-center sm:min-h-[320px] sm:py-28"
          style={{ background: "linear-gradient(120deg, #123b4f 0%, #1c2b52 50%, #3c1f57 100%)" }}
        >
          <Image
  src="/images/contact-banner.png"
  alt=""
  fill
  className="object-cover opacity-40"
  priority
/>
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(120deg, rgba(18,59,79,0.75) 0%, rgba(28,43,82,0.75) 50%, rgba(60,31,87,0.75) 100%)" }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-10 top-6 h-40 w-40 rounded-full opacity-25 blur-3xl sm:h-56 sm:w-56"
            style={{ background: "var(--signal)" }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 rounded-full opacity-25 blur-3xl sm:h-56 sm:w-56"
            style={{ background: "var(--teal)" }}
            aria-hidden="true"
          />

          <div className="banner-icon pointer-events-none absolute left-[8%] top-[22%] hidden h-11 w-11 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm sm:flex">
            <Target className="h-5 w-5 text-white/80" strokeWidth={1.75} />
          </div>
          <div
            className="banner-icon pointer-events-none absolute right-[10%] top-[18%] hidden h-11 w-11 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm sm:flex"
            style={{ animationDelay: "1.2s" }}
          >
            <BarChart3 className="h-5 w-5 text-white/80" strokeWidth={1.75} />
          </div>
          <div
            className="banner-icon pointer-events-none absolute left-[14%] bottom-[16%] hidden h-11 w-11 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm sm:flex"
            style={{ animationDelay: "2.4s" }}
          >
            <Megaphone className="h-5 w-5 text-white/80" strokeWidth={1.75} />
          </div>
          <div
            className="banner-icon pointer-events-none absolute right-[16%] bottom-[20%] hidden h-11 w-11 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm sm:flex"
            style={{ animationDelay: "0.6s" }}
          >
            <Sparkles className="h-5 w-5 text-white/80" strokeWidth={1.75} />
          </div>

          <Reveal>
            <span className={`inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-mono uppercase text-white/70 backdrop-blur-sm ${fluid.eyebrow}`}>
              <MessageCircle className="icon-float h-3 w-3" strokeWidth={2} />
              Contact
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={`relative z-10 mt-4 max-w-2xl break-words font-display font-semibold tracking-tight text-white ${fluid.hero}`}>
              Let&apos;s start growing your business today.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className={`relative z-10 mx-auto mt-4 max-w-xl text-white/70 sm:mt-5 ${fluid.lead}`}>
              Fill out the form below or reach out directly — our team
              typically responds within 24 hours.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="relative z-10 mt-6">
              <LiveStatusBadge />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Get in touch — 2x2 contact cards + map on the left, form on the right */}
      <section className="border-b border-line py-14 sm:py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl min-w-0 gap-8 px-5 sm:px-6 md:grid-cols-[1fr_1.2fr] md:gap-12">
          {/* left: contact cards + map */}
          <div className="min-w-0 space-y-5 sm:space-y-6">
            <Reveal>
              <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
                {contactChannels.map((c, i) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="gc-card group flex min-w-0 flex-col items-center gap-2.5 rounded-2xl border border-line bg-ink-panel/40 p-5 text-center sm:p-6"
                  >
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                      style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
                    >
                      <c.icon className="h-4.5 w-4.5 text-white" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-display text-[13px] font-semibold text-paper sm:text-sm">
                        {c.label}
                      </div>
                      <div className="mt-0.5 truncate text-[11px] text-paper/55 sm:text-xs">
                        {c.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div id="map" className="relative overflow-hidden rounded-2xl border border-line">
                <div
                  className="absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-white shadow-lg sm:right-4 sm:top-4 sm:gap-2 sm:px-4 sm:py-2 sm:text-[11px]"
                  style={{ background: "linear-gradient(90deg, var(--signal), var(--teal))" }}
                >
                  <MapPin className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" strokeWidth={2} />
                  <span className="hidden sm:inline">Office Address</span>
                  <span className="sm:hidden">Office</span>
                </div>
                <iframe
                  title="GK Digital Solutions — Alluri Trade Centre, Hyderabad"
                  src="https://maps.google.com/maps?q=Alluri%20Trade%20Centre%2C%20Bhagya%20Nagar%20Colony%20Rd%2C%20Bhagya%20Nagar%20Colony%2C%20Venkat%20Nagar%20Colony%2C%20Hyderabad%2C%20Telangana%20500072&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="260"
                  className="sm:h-[300px]"
                  style={{ border: 0, filter: "grayscale(0.3) contrast(1.05)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 rounded-2xl border border-dashed border-line p-4 text-[11px] text-paper/50 sm:text-xs">
                {trustPoints.map((t) => (
                  <div key={t.label} className="flex items-center gap-1.5">
                    <t.icon className="h-3.5 w-3.5 shrink-0 text-signal" strokeWidth={2} />
                    {t.label}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* right: get in touch form */}
          <Reveal delay={100}>
            <div className="min-w-0 rounded-[24px] border border-line bg-ink-panel/40 p-6 sm:p-8 md:p-10">
              <span className={`font-mono uppercase text-signal ${fluid.eyebrow}`}>Get in touch</span>
              <h2 className={`mt-2 font-display font-semibold tracking-tight text-paper ${fluid.h2}`}>
                Tell us about your business
              </h2>
              <p className="mt-3 text-[13px] leading-relaxed text-paper/60 sm:text-sm">
                Share a few details and we&apos;ll come back with a clear,
                honest read on where your marketing stands — no jargon,
                no obligation.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>

              <div className="mt-6 border-t border-line pt-5">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-btn group relative flex min-h-[48px] items-center justify-center gap-2 overflow-hidden rounded-full px-6 font-mono text-[12px] uppercase tracking-wider text-white transition-transform hover:scale-[1.02] sm:text-[13px]"
                  style={{ background: "linear-gradient(90deg, var(--signal), var(--teal))" }}
                >
                  <WhatsappIcon className="relative h-4 w-4" />
                  <span className="relative">Chat on WhatsApp instead</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What happens next */}
      <section className="border-b border-line py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <span className={`eyebrow-underline font-mono uppercase text-teal ${fluid.eyebrow}`}>The process</span>
            <h2 className={`mt-2 font-display font-semibold text-paper ${fluid.h2}`}>
              What happens after you reach out
            </h2>
          </Reveal>

          <div className="relative mt-10 sm:mt-14">
            <div className="absolute left-4 top-1 bottom-1 w-px bg-line sm:hidden" aria-hidden="true" />
            <div
              className="step-line absolute left-0 right-0 top-[calc(1.4rem)] hidden h-px md:block"
              style={{ background: "linear-gradient(90deg, var(--signal), var(--teal))" }}
              aria-hidden="true"
            />
            <div className="grid gap-8 sm:gap-10 md:grid-cols-3 md:gap-8">
              {nextSteps.map((step, i) => (
                <Reveal key={step.n} delay={i * 90}>
                  <div className="group relative flex gap-4 sm:block sm:gap-0">
                    <div
                      className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11"
                      style={{
                        background: "linear-gradient(135deg, var(--signal), var(--teal))",
                      }}
                    >
                      <step.icon className="h-4.5 w-4.5 text-white sm:h-5 sm:w-5" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0 sm:mt-4">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-paper/40 sm:text-[11px]">
                        Step {step.n}
                      </div>
                      <h3 className="mt-1 font-display text-base font-semibold text-paper sm:text-lg">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-paper/60 sm:mt-2 sm:text-sm">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <h2 className={`text-center font-display font-semibold text-paper ${fluid.h2}`}>
              Quick questions
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-6">
            {miniFaqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 90}>
                <div className="h-full min-w-0 rounded-2xl border border-line bg-ink-panel/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-signal/30 sm:p-6">
                  <h3 className="font-display text-[13.5px] font-semibold text-paper sm:text-sm">
                    {f.q}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-paper/60 sm:text-sm">
                    {f.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </main>
  );
}