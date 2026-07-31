"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Clock,
  ShieldCheck,
  Sparkles,
  Target,
  Search,
  MessageCircle,
  Palette,
  TrendingUp,
  Mail,
  Star,
  Building2,
  Home as HomeIcon,
  ShoppingCart,
  UtensilsCrossed,
  CheckCircle2,
  Layout,
  BarChart3,
  X,
  Check,
  Plus,
  Minus,
  Lock,
  Users,
  FileText,
  ChevronDown,
  ChevronLeft,
  Scissors,
  Quote,
  Rocket,
  Compass,
  Award,
  Heart,
  ThumbsUp,
  GraduationCap,
  Shirt,
  Wrench,
  Car,
  Plane,
  PartyPopper,
  Briefcase,
  Dumbbell,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

const WHATSAPP_LINK =
  "https://wa.me/917569622606?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20GK%20Digital%20Solutions%27%20services.";

const fluid = {
  hero: "text-[clamp(1.6rem,4.6vw,2.9rem)] leading-[1.16]",
  h2: "text-[clamp(1.25rem,3.6vw,2.1rem)] leading-[1.2]",
  h3: "text-[clamp(1rem,2.2vw,1.15rem)] leading-snug",
  lead: "text-[clamp(0.85rem,1.6vw,1rem)] leading-relaxed",
  body: "text-[clamp(0.78rem,1.3vw,0.875rem)] leading-relaxed",
  eyebrow: "text-[clamp(0.6rem,1.1vw,0.7rem)] tracking-[0.16em]",
  bigStat: "text-[clamp(1.6rem,4.2vw,2.1rem)]",
};

// ---------- Global page-level flourishes ----------
function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (scrolled / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed left-0 top-0 z-[60] h-[2px] w-full bg-transparent" aria-hidden="true">
      <div
        className="h-full transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%`, background: "linear-gradient(90deg, var(--signal), var(--teal))" }}
      />
    </div>
  );
}

function CursorAura() {
  const auraRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isCoarse || reduce) return;

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.08;
      pos.current.y += (target.current.y - pos.current.y) * 0.08;
      const el = auraRef.current;
      if (el) {
        el.style.transform = `translate3d(${pos.current.x - 260}px, ${pos.current.y - 260}px, 0)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={auraRef}
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[520px] w-[520px] rounded-full opacity-[0.10] blur-[110px] md:block"
      style={{ background: "radial-gradient(circle, var(--signal), var(--teal) 60%, transparent 75%)" }}
      aria-hidden="true"
    />
  );
}

function StickyCTABar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const io = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      rootMargin: "-10% 0px 0px 0px",
    });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-4 z-50 hidden justify-center px-4 transition-all duration-500 ease-out md:flex ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <div className="flex items-center gap-4 rounded-full border border-line bg-ink-panel/95 py-2 pl-5 pr-2 shadow-[0_8px_30px_rgba(109,58,242,0.18)] backdrop-blur-xl">
        <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-paper/70">
          <span className="h-1.5 w-1.5 rounded-full bg-signal blink-dot" />
          Free audit, 24h turnaround
        </span>
        <Link
          href="/contact"
          className="flex items-center gap-1.5 rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-white shadow-md"
          style={{ background: "linear-gradient(90deg, var(--signal), var(--teal))" }}
        >
          Book now
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
}

function ChevronDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex justify-center ${className}`} aria-hidden="true">
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-line" />
      <svg width="40" height="20" viewBox="0 0 44 22" className="relative bg-ink px-2">
        <defs>
          <linearGradient id="chev-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--signal)" />
            <stop offset="100%" stopColor="var(--teal)" />
          </linearGradient>
        </defs>
        <path d="M4 3 L22 19 L40 3" stroke="url(#chev-grad)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

// ---------- Magnetic CTA button ----------
function MagneticLink({
  href,
  children,
  className = "",
  style,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.12}px, ${y * 0.25}px)`;
  };
  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0px, 0px)";
  };

  return (
    <Link
      href={href}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={style}
    >
      {children}
    </Link>
  );
}

// ---------- Floating badge (gradient orb hero) ----------
function FloatBadge({
  icon: Icon,
  style,
  color,
  delay,
}: {
  icon: React.ElementType;
  style: React.CSSProperties;
  color: string;
  delay: number;
}) {
  return (
    <div
      className="absolute flex h-11 w-11 items-center justify-center rounded-full shadow-lg"
      style={{ ...style, background: color, animation: `float 4.5s ease-in-out ${delay}s infinite` }}
    >
      <Icon className="h-5 w-5 text-white" strokeWidth={2} />
    </div>
  );
}

// ---------- Doodle squiggle accent (hand-drawn feel near headlines) ----------
function DoodleAccent({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={`pointer-events-none absolute h-8 w-12 ${className}`}
      style={{ animation: "float 3.8s ease-in-out infinite" }}
      aria-hidden="true"
    >
      <path d="M6 30 Q2 20 10 16 Q18 12 14 4" stroke="var(--signal)" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.55" />
      <path d="M40 8 L48 4 M40 8 L46 14" stroke="var(--teal)" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}

// ---------- Pin marker that pops in with a bounce (map / location style) ----------
function PopPin({ icon: Icon, style, delay }: { icon: React.ElementType; style: React.CSSProperties; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="absolute flex h-9 w-9 items-center justify-center rounded-full bg-ink-panel shadow-[0_4px_16px_rgba(109,58,242,0.25)] transition-all duration-500"
      style={{
        ...style,
        transform: visible ? "scale(1) translateY(0)" : "scale(0.3) translateY(8px)",
        opacity: visible ? 1 : 0,
        transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      <Icon className="h-4 w-4 text-signal" strokeWidth={2} />
    </div>
  );
}

// ---------- Hero image carousel (5 slides, auto-rotating, crossfade + scale) ----------
const heroSlides = [
  { icon: Target, label: "Meta & Google Ads", metric: "3.2x ROAS", gradient: "linear-gradient(135deg, #6D3AF2, #A78BFA)" },
  { icon: Search, label: "Local SEO", metric: "Top 3 rank", gradient: "linear-gradient(135deg, #3D6FF2, #6D3AF2)" },
  { icon: MessageCircle, label: "WhatsApp & CRM Automation", metric: "<5min response", gradient: "linear-gradient(135deg, #FF5C8A, #6D3AF2)" },
  { icon: Palette, label: "Creative & Content", metric: "12+ assets / mo", gradient: "linear-gradient(135deg, #F2A93A, #FF5C8A)" },
  { icon: BarChart3, label: "100% CRM-Tracked Leads", metric: "Zero leads lost", gradient: "linear-gradient(135deg, #22B07D, #3D6FF2)" },
];

function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % heroSlides.length), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative mx-auto flex h-[280px] w-[280px] items-center justify-center sm:h-[360px] sm:w-[360px]">
      <div className="spin-slow absolute inset-0 rounded-full border-2 border-dashed border-signal/25" />

      <div className="relative h-[230px] w-[230px] overflow-hidden rounded-full shadow-2xl sm:h-[300px] sm:w-[300px]">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.label}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center transition-all duration-700 ease-out"
            style={{
              background: slide.gradient,
              opacity: active === i ? 1 : 0,
              transform: active === i ? "scale(1) rotate(0deg)" : "scale(1.15) rotate(6deg)",
              pointerEvents: active === i ? "auto" : "none",
            }}
          >
            <slide.icon className="h-11 w-11 text-white" strokeWidth={1.5} />
            <span className="text-[13px] font-bold leading-snug text-white">{slide.label}</span>
            <span className="text-lg font-extrabold text-white/90">{slide.metric}</span>
          </div>
        ))}
      </div>

      {/* dot indicators — larger invisible tap area, visible dot stays small */}
      <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-0.5">
        {heroSlides.map((s, i) => (
          <button
            key={s.label}
            onClick={() => setActive(i)}
            aria-label={`Show ${s.label}`}
            className="flex h-8 w-8 items-center justify-center"
          >
            <span
              className="block h-1.5 rounded-full transition-all duration-300"
              style={{ width: active === i ? "20px" : "6px", background: active === i ? "var(--signal)" : "var(--line)" }}
            />
          </button>
        ))}
      </div>

      <FloatBadge icon={Heart} color="#FF5C8A" style={{ top: "2%", left: "-4%" }} delay={0} />
      <FloatBadge icon={MessageCircle} color="var(--teal)" style={{ top: "10%", right: "-8%" }} delay={0.6} />
      <FloatBadge icon={ThumbsUp} color="#22B07D" style={{ bottom: "14%", left: "-10%" }} delay={1.2} />
      <FloatBadge icon={Sparkles} color="#F2A93A" style={{ bottom: "2%", right: "2%" }} delay={1.8} />
    </div>
  );
}

/* ============================================================================
   HERO — gradient orb illustration, floating icon badges, light theme.
   ============================================================================ */
function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-16 pt-20 sm:pb-16 md:pt-24"
    >
      <div
        className="pointer-events-none absolute -top-20 -left-20 h-[420px] w-[420px] rounded-full opacity-50 blur-[100px]"
        style={{ background: "radial-gradient(circle, #C9B6FF, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute top-40 -right-32 h-[420px] w-[420px] rounded-full opacity-50 blur-[100px]"
        style={{ background: "radial-gradient(circle, #A9C6FF, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl min-w-0 grid-cols-1 items-center gap-10 px-5 sm:px-6 md:grid-cols-2">
        <div>
          <Reveal direction="left">
            <span
              className={`inline-flex items-center gap-2 rounded-full bg-ink-panel px-4 py-1.5 font-mono uppercase text-signal shadow-[0_2px_12px_rgba(109,58,242,0.15)] ${fluid.eyebrow}`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-signal blink-dot" />
              Live across 40+ campaigns · Hyderabad
            </span>
          </Reveal>

          <Reveal delay={80} direction="left">
            <div className="relative">
              <DoodleAccent className="-top-6 left-[40%] hidden sm:block" />
              <h1 className={`mt-6 max-w-xl break-words font-display font-extrabold tracking-tight text-paper ${fluid.hero}`}>
                Your ad spend, tracked like a pipeline —{" "}
                <span className="brand-gradient-text">not a vanity metric.</span>
              </h1>
            </div>
          </Reveal>

          <Reveal delay={160} direction="left">
            <p className={`mt-5 max-w-md text-paper/65 ${fluid.lead}`}>
              GK Digital Solutions is a Hyderabad-based digital marketing
              agency running Meta, Google and WhatsApp campaigns for
              interior design, real estate, hospitality and skin &amp; hair
              clinics — wiring every lead straight into your CRM.
            </p>
          </Reveal>

          <Reveal delay={240} direction="up">
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticLink
                href="/contact"
                className="flex min-h-[48px] items-center gap-2 rounded-full px-6 font-mono text-[13px] font-medium uppercase tracking-wider text-white shadow-lg"
                style={{
                  background: "linear-gradient(90deg, var(--signal), var(--teal))",
                  boxShadow: "0 12px 28px -8px rgba(109,58,242,0.5)",
                }}
              >
                Book a free audit
                <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
              </MagneticLink>
              <MagneticLink
                href="#results"
                className="flex min-h-[48px] items-center gap-1 rounded-full bg-ink-panel px-6 font-mono text-[13px] font-medium uppercase tracking-wider text-paper shadow-[0_2px_12px_rgba(109,58,242,0.1)] hover:text-signal"
              >
                See results
              </MagneticLink>
            </div>
          </Reveal>

          <div className="mt-10 flex md:hidden">
            <div className="flex flex-col items-center gap-1">
              <span className="font-mono text-[9px] uppercase tracking-wider text-paper/40">Scroll</span>
              <ChevronDown className="h-3.5 w-3.5 text-signal" strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* gradient orb illustration */}
        <Reveal delay={200} direction="right">
          <HeroCarousel />
        </Reveal>
      </div>
    </section>
  );
}

// ---------- Industries strip (wide image-background carousel) ----------
const industrySlides = [
  {
    icon: HomeIcon,
    title: "Interior Design",
    subtitle: "Spaces that sell themselves",
    desc: "Lead capture tuned to renovation timelines and budget signals, not just page likes.",
    cta: "View live demo",
    image: "/Interior_Design.png",
    gradient: "linear-gradient(135deg, #2A2350, #6D3AF2 60%, #3D6FF2)",
  },
  {
    icon: Building2,
    title: "Real Estate",
    subtitle: "From click to site visit",
    desc: "Meta and Google leads routed straight to your sales team, tagged by project and budget.",
    cta: "Explore results",
    image: "/Real_Estate.png",
    gradient: "linear-gradient(135deg, #1E2A4A, #3D6FF2 60%, #22B07D)",
  },
  {
    icon: UtensilsCrossed,
    title: "Hospitality",
    subtitle: "Bookings, not just likes",
    desc: "Campaigns built around table reservations and event enquiries that actually convert.",
    cta: "See patterns",
    gradient: "linear-gradient(135deg, #3A1E3A, #FF5C8A 60%, #6D3AF2)",
  },
  {
    icon: Scissors,
    title: "Skin & Hair Clinics",
    subtitle: "Bookings + WhatsApp",
    desc: "Appointment-focused Meta and Google campaigns with WhatsApp follow-up, so enquiries convert to bookings.",
    cta: "Explore reels",
    gradient: "linear-gradient(135deg, #3A2A1E, #F2A93A 60%, #FF5C8A)",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Retail",
    subtitle: "Performance ads",
    desc: "Performance ads and SEO built for online sales, tuned against real cart-to-checkout data.",
    cta: "View live demo",
    gradient: "linear-gradient(135deg, #1E3A32, #22B07D 60%, #3D6FF2)",
  },
  {
    icon: GraduationCap,
    title: "Education & Coaching",
    subtitle: "Enrollment funnels",
    desc: "Enrollment-focused campaigns and content marketing that fill batches, not just inboxes.",
    cta: "See funnels",
    gradient: "linear-gradient(135deg, #1E2A4A, #6D3AF2 60%, #A78BFA)",
  },
  {
    icon: Shirt,
    title: "Fashion & Lifestyle Brands",
    subtitle: "Brand + social",
    desc: "Branding, influencer-style content and social ads built around your visual identity.",
    cta: "See lookbook",
    gradient: "linear-gradient(135deg, #3A1E3A, #A78BFA 60%, #FF5C8A)",
  },
  {
    icon: Wrench,
    title: "Home Services",
    subtitle: "Local leads",
    desc: "Local lead generation and Google Business optimization that keeps your calendar full.",
    cta: "Get local leads",
    gradient: "linear-gradient(135deg, #2A2A1E, #F2A93A 60%, #22B07D)",
  },
  {
    icon: Car,
    title: "Automotive",
    subtitle: "Footfall + bookings",
    desc: "Showroom footfall and service-booking campaigns backed by local search and social proof.",
    cta: "See results",
    gradient: "linear-gradient(135deg, #1E2436, #3D6FF2 60%, #6D3AF2)",
  },
  {
    icon: Plane,
    title: "Travel & Tourism",
    subtitle: "Bookings + content",
    desc: "Destination-focused content, seasonal campaigns and booking-funnel optimization.",
    cta: "Explore campaigns",
    gradient: "linear-gradient(135deg, #1E3A46, #3D6FF2 60%, #9ef7d2)",
  },
  {
    icon: PartyPopper,
    title: "Weddings & Events",
    subtitle: "Inquiries + portfolio",
    desc: "Portfolio-led social growth and inquiry funnels built around visual storytelling.",
    cta: "View portfolio",
    gradient: "linear-gradient(135deg, #3A1E2E, #FF5C8A 60%, #A78BFA)",
  },
  {
    icon: Briefcase,
    title: "B2B & SaaS",
    subtitle: "LinkedIn + content",
    desc: "LinkedIn strategy, content marketing and lead nurturing funnels for longer sales cycles.",
    cta: "See strategy",
    gradient: "linear-gradient(135deg, #1E2436, #3D6FF2 60%, #171833)",
  },
  {
    icon: Dumbbell,
    title: "Fitness & Wellness",
    subtitle: "Membership growth",
    desc: "Membership-driven social campaigns and local SEO that keep classes full.",
    cta: "Grow membership",
    gradient: "linear-gradient(135deg, #1E3A2A, #22B07D 60%, #9ef7d2)",
  },
];

function IndustryStrip() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const n = industrySlides.length;

  useEffect(() => {
    const start = performance.now();
    const duration = 5000;
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setActive((i) => (i + 1) % n);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, n]);

  const go = (dir: number) => setActive((i) => (i + dir + n) % n);

  return (
    <section className="relative overflow-hidden bg-[#0B0B14] py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <span className="mb-8 block text-center font-mono text-[10px] uppercase tracking-wider text-white/40 sm:text-[11px]">
            Trusted across
          </span>
        </Reveal>

        <div className="relative">
          <button
            onClick={() => go(-1)}
            aria-label="Previous"
            className="absolute left-0 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2} />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next"
            className="absolute right-0 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
          >
            <ArrowRight className="h-5 w-5" strokeWidth={2} />
          </button>

          <div
            className="relative mx-auto h-[220px] overflow-hidden sm:h-[260px] md:h-[300px]"
            style={{ perspective: "1400px" }}
          >
            {industrySlides.map((s, i) => {
              let d = i - active;
              if (d > n / 2) d -= n;
              if (d < -n / 2) d += n;
              const abs = Math.abs(d);
              const isActive = d === 0;

              const tx = d * 60;
              const rot = -d * 30;
              const depth = -abs * 140;
              const scale = Math.max(1 - abs * 0.1, 0.6);
              const blur = Math.min(abs * 1.4, 3);

              return (
                <div
                  key={s.title}
                  className="absolute top-1/2 h-full overflow-hidden rounded-[20px] will-change-transform"
                  style={{
                    left: "50%",
                    width: "min(520px, 42vw)",
                    minWidth: "260px",
                    transform: `translate3d(calc(-50% + ${tx}%), -50%, ${depth}px) rotateY(${rot}deg) scale(${scale})`,
                    filter: abs > 0 ? `blur(${blur}px)` : "none",
                    opacity: abs > 2 ? 0 : 1,
                    zIndex: 100 - Math.round(abs),
                    pointerEvents: isActive ? "auto" : "none",
                    background: s.image ? undefined : s.gradient,
                    transition: "transform 800ms cubic-bezier(0.2,0.7,0,1), filter 800ms cubic-bezier(0.2,0.7,0,1)",
                    boxShadow: isActive
                      ? "0 30px 70px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.15) inset"
                      : "0 20px 50px rgba(0,0,0,0.45)",
                  }}
                >
                  {/* Optimized image via next/image — only the active + immediate neighbors load eagerly */}
                  {s.image && (
                    <Image
  src={s.image}
  alt={`${s.title} — ${s.subtitle}`}
  fill
  sizes="(max-width: 640px) 260px, 42vw"
  className="object-cover"
  {...(i === 0 ? { priority: true } : { loading: abs <= 1 ? "eager" : "lazy" })}
/>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 to-black/25" />
                  <div className="relative flex h-full flex-col justify-between p-4 sm:p-5">
                    <div>
                      <h3 className="font-display text-base font-extrabold text-white sm:text-lg" style={{ textShadow: "2px 2px 15px rgba(0,0,0,0.6)" }}>
                        {s.title}
                      </h3>
                      <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#9ef7d2] sm:text-[11px]">{s.subtitle}</p>
                    </div>
                    <div>
                      <p className="hidden max-w-sm rounded-[10px] bg-black/40 p-2.5 text-[11px] leading-relaxed text-white/85 backdrop-blur-sm sm:block sm:text-[12px]">
                        {s.desc}
                      </p>
                      <button className="mt-2 inline-flex items-center gap-1.5 rounded-[12px] border border-[#9ef7d2]/60 bg-gradient-to-b from-[#9ef7d2] to-[#588874] px-3.5 py-2 text-[10px] font-bold uppercase tracking-wider text-[#0b0e13] shadow-[0_3px_15px_rgba(130,160,255,0.75)] transition-transform active:translate-y-0.5">
                        {s.cta}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* dot indicators — larger invisible tap area, visible dot stays small */}
        <div className="mt-8 flex items-center justify-center gap-0.5">
          {industrySlides.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setActive(i)}
              aria-label={`Show ${s.title}`}
              className="flex h-8 w-8 items-center justify-center"
            >
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: active === i ? "16px" : "12px",
                  height: "12px",
                  background: active === i ? "linear-gradient(180deg, #82a0ff, #9ef7d2)" : "rgba(255,255,255,0.25)",
                  transform: active === i ? "scale(1.1)" : "scale(1)",
                }}
              />
            </button>
          ))}
        </div>

        <div className="mx-auto mt-4 h-[3px] max-w-xs overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full"
            style={{
              width: `${progress * 100}%`,
              background: "linear-gradient(90deg, #9ef7d2, #82a0ff)",
              transition: progress === 0 ? "none" : "width 100ms linear",
            }}
          />
        </div>
      </div>
    </section>
  );
}

// ---------- Mini animated bar chart (dashboard flourish) ----------
function MiniBars({ color, seed = 1, active = false }: { color: string; seed?: number; active?: boolean }) {
  const bars = [40, 65, 45, 80, 55, 90, 70].map((v) => ((v + seed * 7) % 100) + 25);
  return (
    <div className="flex items-end gap-1" style={{ height: 32 }}>
      {bars.map((h, i) => (
        <div
          key={i}
          style={{
            width: 4,
            borderRadius: 3,
            background: active ? color : "#D8D6E8",
            height: active ? `${Math.min(h, 100)}%` : `${Math.min(h, 100) * 0.55}%`,
            opacity: active ? 0.85 - i * 0.06 : 0.7,
            transition: `height 500ms cubic-bezier(0.34,1.56,0.64,1) ${i * 40}ms, background 300ms ease`,
          }}
        />
      ))}
    </div>
  );
}

// ---------- Services: bento-style grid, one wide highlighted card ----------
const services = [
  { icon: Target, title: "Meta & Google Ads", desc: "Full-funnel campaigns built around your actual sales stages, not just impressions — tuned weekly against real close rates.", metric: "3.2x", metricLabel: "avg. ROAS", color: "#3D6FF2", slug: "meta-google-ads" },
  { icon: Search, title: "Local SEO", desc: "Google Business Profile, local landing pages and review systems that put you at the top when Hyderabad searches for what you sell.", metric: "1–3", metricLabel: "map pack rank", color: "#22B07D", slug: "local-seo" },
  { icon: MessageCircle, title: "WhatsApp & CRM Automation", desc: "Every lead auto-tagged, followed up and dropped into your pipeline within minutes of coming in.", metric: "<5min", metricLabel: "response time", color: "#FF5C8A", slug: "whatsapp-crm-automation" },
  { icon: Palette, title: "Creative & Content", desc: "Reels, carousels and ad creative shot and edited for categories that actually convert, not just look good.", metric: "12+", metricLabel: "assets / month", color: "#F2A93A", slug: "creative-content" },
  { icon: Layout, title: "Website & Landing Pages", desc: "Fast, conversion-focused pages built to match the offer in your ad, so the click doesn't die on arrival.", metric: "<2s", metricLabel: "avg. load time", color: "#3D6FF2", slug: "website-landing-pages" },
  { icon: Mail, title: "Email & Retargeting", desc: "Automated sequences that bring back the visitors who didn't convert on the first visit, at a fraction of new-lead cost.", metric: "4x", metricLabel: "cheaper than cold ads", color: "#6D3AF2", slug: "email-retargeting" },
  { icon: ShieldCheck, title: "Brand & Review Management", desc: "We monitor and respond to reviews across Google, Meta and Justdial so a bad week never becomes a bad reputation.", metric: "4.8★", metricLabel: "avg. client rating", color: "#22B07D", slug: "brand-review-management" },
  { icon: BarChart3, title: "100% CRM-Tracked Leads", desc: "Every single lead — from every channel — lands in one pipeline. No spreadsheet reconciliation, no lost enquiries, ever.", metric: "100%", metricLabel: "leads tracked", color: "#6D3AF2", highlighted: true, slug: "crm-tracked-leads" },
];

function ServiceCard({ s, i }: { s: (typeof services)[number]; i: number }) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={`/services/${s.slug}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative flex h-full min-h-[200px] cursor-pointer flex-col justify-between overflow-hidden rounded-[20px] p-5 transition-all duration-300 ease-out"
      style={{
        background: "#ffffff",
        border: `1.5px solid ${hover ? `${s.color}55` : s.highlighted ? "rgba(109,58,242,0.35)" : "rgba(23,24,51,0.10)"}`,
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hover ? `0 20px 40px -14px ${s.color}40` : "0 2px 12px rgba(23,24,51,0.05)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: hover ? 0.5 : 0,
          backgroundImage: `radial-gradient(${s.color}22 1px, transparent 1px)`,
          backgroundSize: "16px 16px",
          maskImage: "radial-gradient(circle at top right, black, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at top right, black, transparent 70%)",
        }}
      />

      <div className="relative flex items-start justify-between">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-xl transition-colors duration-300"
          style={{ background: hover ? `${s.color}1A` : "rgba(23,24,51,0.05)" }}
        >
          <s.icon
            className="h-[18px] w-[18px] transition-colors duration-300"
            style={{ color: hover ? s.color : "#8B8AA3" }}
            strokeWidth={1.75}
          />
        </div>
        <MiniBars color={s.color} seed={i} active={hover} />
      </div>

      <div className="relative">
        {s.highlighted && (
          <span
            className="mb-2 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider transition-colors duration-300"
            style={{
              background: hover ? "rgba(109,58,242,0.18)" : "rgba(23,24,51,0.06)",
              color: hover ? "#6D3AF2" : "#8B8AA3",
            }}
          >
            Our guarantee
          </span>
        )}
        <h3 className="font-display text-[15.5px] font-extrabold leading-snug text-[#171833]">{s.title}</h3>
        <p className="mt-2 text-[12.5px] leading-relaxed text-[#5D5F7A]">{s.desc}</p>

        <div className="mt-3.5 flex items-center justify-between">
          <div>
            <span
              className="font-display text-lg font-extrabold transition-colors duration-300"
              style={{ color: hover ? s.color : "#171833" }}
            >
              {s.metric}
            </span>
            <span className="ml-2 text-[10px] uppercase tracking-wider text-[#8B8AA3]">{s.metricLabel}</span>
          </div>
          <ArrowUpRight
            className="h-4 w-4 transition-all duration-300"
            style={{ color: s.color, opacity: hover ? 1 : 0, transform: hover ? "translate(0,0)" : "translate(-4px,4px)" }}
          />
        </div>
      </div>
    </Link>
  );
}

function Services() {
  return (
    <section id="services" className="relative bg-ink py-14 sm:py-16 md:py-24">
      <ChevronDivider className="absolute -top-[11px] left-1/2 -translate-x-1/2" />
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <Reveal direction="left">
            <div>
              <span className={`font-mono uppercase text-signal ${fluid.eyebrow}`}>What we run</span>
              <h2 className={`mt-2 font-display font-extrabold tracking-tight text-paper sm:mt-3 ${fluid.h2}`}>
                Eight systems. One pipeline.
              </h2>
            </div>
          </Reveal>
          <Reveal direction="right">
            <p className={`max-w-sm text-paper/60 ${fluid.body}`}>
              Live metrics, not sales copy — each card feeds the same CRM,
              so nothing you pay for disappears into a report nobody reads.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 md:mt-14">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 90} direction={i % 3 === 0 ? "left" : i % 3 === 1 ? "up" : "right"}>
              <ServiceCard s={s} i={i} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 text-center sm:mt-10">
            <Link href="/services" className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-teal hover:underline sm:text-[12px]">
              View all 11 services
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- Process ----------
const steps = [
  {
    n: "1",
    title: "Audit",
    desc: "We pull your last 90 days of ad and lead data and show you exactly where budget is leaking before we touch a single campaign.",
    icon: Search,
  },
  {
    n: "2",
    title: "Build",
    desc: "Campaigns, landing pages and CRM pipeline stages get built together — so every lead has somewhere to go the moment it comes in.",
    icon: Wrench,
  },
  {
    n: "3",
    title: "Launch",
    desc: "We go live with a tracked baseline, so from day one you can see cost-per-lead and cost-per-close side by side.",
    icon: Rocket,
  },
  {
    n: "4",
    title: "Optimize",
    desc: "Weekly review against pipeline data, not platform dashboards — we cut what doesn't close, and scale what does.",
    icon: TrendingUp,
  },
];

function Process() {
  return (
    <section id="process" className="relative py-14 sm:py-16 md:py-24">
      <ChevronDivider className="absolute -top-[11px] left-1/2 -translate-x-1/2" />
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <Reveal>
          <div className="max-w-2xl text-center mx-auto">
            <h2 className={`font-display font-extrabold tracking-tight text-paper ${fluid.h2}`}>How we work</h2>
            <p className={`mt-3 text-paper/60 ${fluid.body}`}>
              No black-box retainers. Four stages, each one handed off with
              data you can check yourself.
            </p>
          </div>
        </Reveal>

        {/* Vertical alternating steps with dotted connector */}
        <div className="relative mt-14 sm:mt-16">
          {/* dotted connector line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 sm:block"
            style={{
              backgroundImage: "linear-gradient(var(--line) 50%, transparent 50%)",
              backgroundSize: "2px 12px",
              backgroundRepeat: "repeat-y",
            }}
            aria-hidden="true"
          />

          <div className="space-y-10 sm:space-y-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const flip = i % 2 === 1;
              return (
                <Reveal key={step.n} delay={i * 100} direction={flip ? "right" : "left"}>
                  <div
                    className={`relative flex flex-col items-center gap-5 sm:flex-row sm:gap-8 ${
                      flip ? "sm:flex-row-reverse" : ""
                    }`}
                  >
                    {/* number badge, centered on the connector for sm+ */}
                    <div
                      className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-sm font-extrabold text-white shadow-md sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2"
                      style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
                    >
                      {step.n}
                    </div>

                    {/* illustration (blob shape) + card, alternating sides */}
                    <div className={`flex w-full items-center gap-5 sm:w-1/2 ${flip ? "sm:flex-row-reverse sm:pl-10" : "sm:pr-10"}`}>
                      <div
                        className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden sm:h-28 sm:w-28"
                        style={{
                          background: i % 2 === 0 ? "rgba(109,58,242,0.12)" : "rgba(61,111,242,0.12)",
                          borderRadius: i % 2 === 0 ? "60% 40% 30% 70% / 60% 30% 70% 40%" : "40% 60% 70% 30% / 30% 60% 40% 70%",
                        }}
                      >
                        {/* Drop your downloaded Storyset SVG at public/illustrations/step-{n}.svg — falls back to an icon if missing */}
                        <img
                          src={`/illustrations/step-${step.n}.svg`}
                          alt={`${step.title} illustration`}
                          className="relative z-10 h-16 w-16 object-contain sm:h-20 sm:w-20"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            e.currentTarget.nextElementSibling?.classList.remove("hidden");
                          }}
                        />
                        <Icon className="relative z-10 hidden h-8 w-8 text-signal" strokeWidth={1.5} />
                      </div>
                      <div className={flip ? "sm:text-right" : ""}>
                        <h3 className="font-display text-lg font-bold text-paper sm:text-xl">{step.title}</h3>
                        <p className="mt-1.5 text-[13px] leading-relaxed text-paper/60 sm:text-sm">{step.desc}</p>
                      </div>
                    </div>

                    {/* empty spacer for the opposite column on sm+ */}
                    <div className="hidden sm:block sm:w-1/2" aria-hidden="true" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Why Choose Us teaser ----------
const whyPoints = [
  "Strategy before execution, always",
  "Full-service under one roof",
  "Transparent, jargon-free reporting",
  "Real team, not a ticket number",
];

function WhyChooseTeaser() {
  return (
    <section className="relative bg-ink-panel/60 py-14 sm:py-16 md:py-24">
      <ChevronDivider className="absolute -top-[11px] left-1/2 -translate-x-1/2" />
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 md:grid-cols-2 md:items-center md:gap-12">
        <Reveal direction="left">
          <span className={`font-mono uppercase text-signal ${fluid.eyebrow}`}>Why us</span>
          <h2 className={`mt-2 font-display font-extrabold tracking-tight text-paper sm:mt-3 ${fluid.h2}`}>
            We don&apos;t just run campaigns — we build growth systems.
          </h2>
          <p className={`mt-3 text-paper/60 sm:mt-4 ${fluid.body}`}>
            Every engagement starts with an honest audit, not a sales
            pitch. If we don&apos;t think we can move the needle for you,
            we&apos;ll tell you that too.
          </p>
          <Link href="/why-choose-us" className="mt-5 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-signal hover:underline sm:mt-6 sm:text-[12px]">
            See the full difference
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
          </Link>
        </Reveal>

        <Reveal delay={100} direction="right">
          <div className="space-y-2.5 sm:space-y-3">
            {whyPoints.map((p, i) => (
              <div
                key={p}
                className="flex items-center gap-3 rounded-xl bg-ink-panel p-3.5 shadow-[0_2px_16px_rgba(109,58,242,0.06)] transition-transform duration-200 hover:-translate-y-0.5 sm:p-4"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0" strokeWidth={2} style={{ color: i % 2 === 0 ? "var(--signal)" : "var(--teal)" }} />
                <span className="text-[13px] text-paper/70 sm:text-sm">{p}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- Comparison ----------
const comparisonRows: { label: string; typical: string; us: string }[] = [
  { label: "Lead attribution", typical: "Platform dashboards only", us: "Tracked end-to-end in your CRM" },
  { label: "Reporting", typical: "Monthly PDF, after the fact", us: "Live pipeline, checked weekly together" },
  { label: "Follow-up speed", typical: "Whenever someone gets to it", us: "Auto-tagged and routed in minutes" },
  { label: "Contracts", typical: "12-month lock-in", us: "Month-to-month, earn the renewal" },
  { label: "Creative", typical: "Recycled templates", us: "Shot for your category, refreshed monthly" },
  { label: "Who you talk to", typical: "A rotating account exec", us: "The same strategist, every time" },
];

function ComparisonSection() {
  return (
    <section id="comparison" className="relative py-14 sm:py-16 md:py-24">
      <ChevronDivider className="absolute -top-[11px] left-1/2 -translate-x-1/2" />
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal direction="left">
          <span className={`font-mono uppercase text-signal ${fluid.eyebrow}`}>The difference, side by side</span>
          <h2 className={`mt-2 max-w-xl font-display font-extrabold tracking-tight text-paper sm:mt-3 ${fluid.h2}`}>
            What changes when your ad spend has a pipeline behind it
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 space-y-3 sm:hidden">
            {comparisonRows.map((row) => (
              <div key={row.label} className="rounded-xl bg-ink-panel p-4 shadow-[0_2px_16px_rgba(109,58,242,0.06)]">
                <div className="text-[13px] font-semibold text-paper">{row.label}</div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="flex items-start gap-1.5 min-w-0">
                    <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-paper/30" strokeWidth={2} />
                    <span className="text-[12px] leading-snug text-paper/50">{row.typical}</span>
                  </div>
                  <div
                    className="flex min-w-0 items-start gap-1.5 rounded-lg p-2 -m-2"
                    style={{ background: "linear-gradient(180deg, rgba(109,58,242,0.08), rgba(61,111,242,0.05))" }}
                  >
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal" strokeWidth={2.5} />
                    <span className="text-[12px] leading-snug text-paper">{row.us}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 hidden overflow-hidden rounded-[22px] bg-ink-panel shadow-[0_2px_20px_rgba(109,58,242,0.08)] sm:block">
            <div className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-line">
              <div className="p-5 font-mono text-[11px] uppercase tracking-wider text-paper/40">&nbsp;</div>
              <div className="border-l border-line p-5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-paper/40">Typical agency</span>
              </div>
              <div
                className="relative border-l border-line p-5"
                style={{ background: "linear-gradient(180deg, rgba(109,58,242,0.08), rgba(61,111,242,0.05))" }}
              >
                <span className="font-mono text-[11px] uppercase tracking-wider text-signal">GK Digital Solutions</span>
              </div>
            </div>

            {comparisonRows.map((row, i) => (
              <div key={row.label} className={`grid grid-cols-[1.1fr_1fr_1fr] ${i % 2 === 0 ? "bg-ink-panel" : "bg-ink"}`}>
                <div className="flex items-center p-5 text-sm font-medium text-paper/80">{row.label}</div>
                <div className="flex items-center gap-2 border-l border-line p-5 text-sm text-paper/50">
                  <X className="h-3.5 w-3.5 shrink-0 text-paper/30" strokeWidth={2} />
                  {row.typical}
                </div>
                <div className="flex items-center gap-2 border-l border-line p-5 text-sm text-paper">
                  <Check className="h-3.5 w-3.5 shrink-0 text-signal" strokeWidth={2.5} />
                  {row.us}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- Trust / guarantee strip ----------
const trustPoints = [
  { icon: Lock, title: "You own the data", desc: "Ad accounts, CRM and creative assets stay in your name, always." },
  { icon: FileText, title: "No lock-in contracts", desc: "Month-to-month by default — we keep the work because it performs." },
  { icon: Users, title: "One dedicated strategist", desc: "The person who audits your account is the one who runs it." },
  { icon: ShieldCheck, title: "Weekly, plain-language reports", desc: "Cost-per-lead and cost-per-close, no jargon to translate." },
];

function TrustStrip() {
  return (
    <section className="relative bg-ink-panel/60 py-10 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {trustPoints.map((t, i) => (
            <Reveal key={t.title} delay={i * 70} direction={i % 2 === 0 ? "up" : "down"}>
              <div className="flex min-w-0 gap-2.5 sm:gap-3">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg sm:h-9 sm:w-9"
                  style={{ background: "linear-gradient(135deg, rgba(109,58,242,0.12), rgba(61,111,242,0.12))" }}
                >
                  <t.icon className="h-3.5 w-3.5 text-signal sm:h-4 sm:w-4" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-[12.5px] font-bold leading-snug text-paper sm:text-sm">{t.title}</h3>
                  <p className="mt-1 hidden text-xs leading-relaxed text-paper/55 sm:block">{t.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Results ----------
const resultStats = [
  { end: 42, prefix: "₹", suffix: "L+", label: "pipeline value tracked / month" },
  { end: 3.2, decimals: 1, suffix: "x", label: "average return on ad spend" },
  { end: 68, suffix: "%", label: "leads auto-qualified before handoff" },
  { end: 18, suffix: "", label: "Hyderabad brands live right now" },
];

function Results() {
  return (
    <section id="results" className="relative py-14 sm:py-16 md:py-24">
      <ChevronDivider className="absolute -top-[11px] left-1/2 -translate-x-1/2" />
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <div className={`flex items-center gap-2 font-mono uppercase text-signal ${fluid.eyebrow}`}>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal blink-dot" />
            <span>Numbers, not testimonials</span>
          </div>
          <h2 className={`mt-3 max-w-xl font-display font-extrabold tracking-tight text-paper sm:mt-4 ${fluid.h2}`}>
            What&apos;s actually in the pipeline right now
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4 sm:mt-14">
          {resultStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70} direction={i % 2 === 0 ? "up" : "down"}>
              <div className="group relative h-full min-w-0 rounded-[20px] bg-ink-panel p-4 shadow-[0_2px_20px_rgba(109,58,242,0.08)] transition-shadow hover:shadow-[0_12px_30px_rgba(109,58,242,0.15)] sm:p-8">
                <TrendingUp className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.75} style={{ color: i % 2 === 0 ? "var(--signal)" : "var(--teal)" }} />
                <div className={`mt-2.5 font-display font-extrabold text-paper sm:mt-4 ${fluid.bigStat}`}>
                  <CountUp end={s.end} decimals={s.decimals ?? 0} prefix={s.prefix ?? ""} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-[12px] leading-snug text-paper/60 sm:mt-3 sm:text-sm">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-5 text-xs text-paper/40 sm:mt-6">
            Figures reflect active client campaigns and update as new brands come on board.
          </p>
        </Reveal>
      </div>
    </section>
  );
}


// ---------- Engagement models ----------
const engagementModels = [
  {
    icon: Compass,
    title: "Audit Only",
    tagline: "Not ready to commit yet",
    desc: "A one-time, 90-day deep dive into your ad accounts and lead data. You keep the findings whether or not we work together after.",
    bullets: ["Full ad account review", "Lead-to-close gap analysis", "Written action plan"],
  },
  {
    icon: Rocket,
    title: "Full-Service",
    tagline: "Most Hyderabad clients start here",
    desc: "We run your campaigns, creative and CRM pipeline end-to-end, with weekly reviews against real close rates, not platform metrics.",
    bullets: ["Meta, Google & WhatsApp managed", "CRM pipeline built & maintained", "Weekly strategist check-in"],
    featured: true,
  },
  {
    icon: Award,
    title: "Growth Partner",
    tagline: "For brands scaling fast",
    desc: "An embedded extension of your team — creative, automation and reporting cadence built around your growth targets, not a fixed retainer scope.",
    bullets: ["Dedicated pod, not a single strategist", "Custom automation builds", "Monthly strategy sessions"],
  },
];

function EngagementModels() {
  return (
    <section id="engagement" className="relative bg-ink-panel/60 py-14 sm:py-16 md:py-24">
      <ChevronDivider className="absolute -top-[11px] left-1/2 -translate-x-1/2" />
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <span className={`font-mono uppercase text-signal ${fluid.eyebrow}`}>Ways to work together</span>
          <h2 className={`mt-2 max-w-xl font-display font-extrabold tracking-tight text-paper sm:mt-3 ${fluid.h2}`}>
            Pick the model that matches where you are
          </h2>
          <p className={`mt-3 max-w-xl text-paper/60 ${fluid.body}`}>
            Every engagement is scoped after the audit, based on your ad
            spend and category — ask us for exact numbers on a call.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5 md:mt-14">
          {engagementModels.map((m, i) => (
            <Reveal key={m.title} delay={i * 90} direction={i === 0 ? "left" : i === 1 ? "up" : "right"}>
              <div
                className={`relative flex h-full flex-col rounded-[22px] p-5 sm:p-6 ${
                  m.featured ? "text-white shadow-2xl" : "bg-ink-panel shadow-[0_2px_20px_rgba(109,58,242,0.08)]"
                }`}
                style={m.featured ? { background: "linear-gradient(135deg, var(--signal), var(--teal))" } : undefined}
              >
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-xl"
                  style={{
                    background: m.featured ? "rgba(255,255,255,0.2)" : "linear-gradient(135deg, rgba(109,58,242,0.12), rgba(61,111,242,0.12))",
                  }}
                >
                  <m.icon className={`h-4 w-4 ${m.featured ? "text-white" : "text-signal"}`} strokeWidth={1.75} />
                </div>

                <h3 className={`mt-4 font-display text-lg font-bold ${m.featured ? "text-white" : "text-paper"}`}>{m.title}</h3>
                <span className={`mt-0.5 font-mono text-[10px] uppercase tracking-wider ${m.featured ? "text-white/80" : "text-teal"}`}>{m.tagline}</span>
                <p className={`mt-3 flex-1 text-[13px] leading-relaxed ${m.featured ? "text-white/85" : "text-paper/60"}`}>{m.desc}</p>

                <ul className={`mt-4 space-y-2 border-t pt-4 ${m.featured ? "border-white/20" : "border-line"}`}>
                  {m.bullets.map((b) => (
                    <li key={b} className={`flex items-start gap-2 text-[12.5px] ${m.featured ? "text-white/90" : "text-paper/70"}`}>
                      <Check className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${m.featured ? "text-white" : "text-signal"}`} strokeWidth={2.5} />
                      {b}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-5 flex items-center justify-center gap-1.5 rounded-full py-2.5 font-mono text-[11px] uppercase tracking-wider transition-transform hover:scale-[1.02] ${
                    m.featured ? "bg-white text-signal" : "bg-ink text-paper/80"
                  }`}
                >
                  Talk to us
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Testimonial carousel ----------
const testimonials = [
  {
    quote:
      "They didn't just run ads — they understood our business and built a strategy around it. The results speak for themselves.",
    attribution: "Client, Real Estate, Hyderabad",
  },
  {
    quote:
      "For the first time we could actually see which campaign paid for itself and which one was just noise. That changed how we spend.",
    attribution: "Client, Interior Design, Hyderabad",
  },
  {
    quote:
      "Response time to new enquiries went from hours to minutes once the WhatsApp automation went live. Bookings followed.",
    attribution: "Client, Skin & Hair Clinic, Hyderabad",
  },
];

function TestimonialTeaser() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);
  const active = testimonials[index];

  return (
    <section className="relative py-14 sm:py-20">
      <ChevronDivider className="absolute -top-[11px] left-1/2 -translate-x-1/2" />
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
        <Reveal>
          <div className="rounded-[28px] bg-ink-panel p-8 shadow-[0_4px_30px_rgba(109,58,242,0.1)] sm:p-10">
            <Quote className="mx-auto h-6 w-6 text-signal/40" strokeWidth={1.5} />
            <div className="mt-3 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={0} style={{ fill: i % 2 === 0 ? "var(--signal)" : "#F2A93A" }} />
              ))}
            </div>

            <div className="relative mt-4 min-h-[110px] sm:mt-5 sm:min-h-[90px]">
              <p key={index} className={`fade-in-quote font-display font-semibold leading-relaxed text-paper ${fluid.h2}`}>
                &ldquo;{active.quote}&rdquo;
              </p>
            </div>
            <style>{`
              @keyframes fade-in-quote { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
              .fade-in-quote { animation: fade-in-quote 0.5s ease-out; }
              @media (prefers-reduced-motion: reduce) { .fade-in-quote { animation: none !important; } }
            `}</style>

            <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-paper/40 sm:mt-4 sm:text-[12px]">
              — {active.attribution}
            </p>

            <div className="mt-5 flex items-center justify-center gap-4 sm:mt-6">
              <button
                onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
                aria-label="Previous testimonial"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-paper/50 transition-colors hover:border-signal/50 hover:text-signal"
              >
                <ChevronLeft className="h-4 w-4" strokeWidth={2} />
              </button>
              <div className="flex items-center gap-0.5">
                {testimonials.map((t, i) => (
                  <button
                    key={t.attribution}
                    onClick={() => setIndex(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    className="flex h-8 w-8 items-center justify-center"
                  >
                    <span
                      className="block h-1.5 rounded-full transition-all duration-300"
                      style={{ width: i === index ? "20px" : "6px", background: i === index ? "var(--signal)" : "var(--line)" }}
                    />
                  </button>
                ))}
              </div>
              <button
                onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
                aria-label="Next testimonial"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-paper/50 transition-colors hover:border-signal/50 hover:text-signal"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>

            <Link href="/testimonials" className="mt-6 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-signal hover:underline sm:mt-7 sm:text-[12px]">
              Read more stories
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- Founder strip ----------
function FounderStrip() {
  return (
    <section className="relative py-14 sm:py-16 md:py-24">
      <ChevronDivider className="absolute -top-[11px] left-1/2 -translate-x-1/2" />
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <div className="flex flex-col items-center gap-6 rounded-[24px] bg-ink-panel p-6 text-center shadow-[0_2px_20px_rgba(109,58,242,0.08)] sm:p-10 md:flex-row md:gap-8 md:text-left">
          <Reveal direction="left">
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl font-display text-xl font-extrabold text-white shadow-lg sm:h-20 sm:w-20 sm:text-2xl"
              style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
            >
              GK
            </div>
          </Reveal>
          <Reveal delay={100} direction="right">
            <div>
              <span className={`font-mono uppercase text-signal ${fluid.eyebrow}`}>Who you&apos;re working with</span>
              <h2 className={`mt-2 font-display font-extrabold tracking-tight text-paper ${fluid.h3}`}>
                Founder-led, not agency-by-committee
              </h2>
              <p className={`mt-2 max-w-xl text-paper/60 ${fluid.body}`}>
                GK Digital Solutions is run under GKA1 Enterprises alongside
                GK Home Interiors — so every campaign strategy is informed
                by what actually converts on the ground in Hyderabad, not
                just what performs in a slide deck.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ---------- FAQ ----------
const faqs = [
  { q: "What's the minimum ad spend to work with you?", a: "Most Hyderabad clients start between ₹30,000–₹60,000/month in ad spend across Meta and Google. We'll tell you upfront in the audit if your budget is too thin to get a reliable read." },
  { q: "How long is the contract?", a: "Month-to-month. We don't hold clients in with a 12-month term — if the pipeline numbers aren't moving, you can walk away with 30 days' notice." },
  { q: "Do you only work with interior design and real estate brands?", a: "Those are where we have the deepest playbooks, but we also run campaigns for hospitality, skin & hair clinics, and e-commerce brands. The audit will tell you if your category is a fit." },
  { q: "Do you work with skin and hair clinics specifically?", a: "Yes — we run Meta and Google campaigns built around appointment bookings rather than just page likes, with WhatsApp follow-up so enquiries turn into consultations instead of going cold." },
  { q: "How does the CRM integration actually work?", a: "Every lead — from a Meta form, a Google call extension, or a WhatsApp message — gets written into your CRM pipeline automatically, tagged with source and campaign, within minutes of coming in." },
  { q: "What do I need to have ready before the audit?", a: "Just read-access to your last 90 days of ad accounts and whatever lead records you currently keep, even if that's a spreadsheet. We'll handle the rest." },
  { q: "How is pricing structured?", a: "There's no fixed public rate card because scope depends on ad spend and category. The audit call ends with a clear, written quote — no surprises after you sign." },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-line">
      <button onClick={onToggle} className="flex min-h-[52px] w-full items-center justify-between gap-4 py-4 text-left sm:py-6" aria-expanded={isOpen}>
        <span className="font-display text-[14.5px] font-semibold text-paper sm:text-base md:text-lg">{q}</span>
        <span
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line transition-colors sm:h-7 sm:w-7"
          style={isOpen ? { borderColor: "var(--signal)" } : undefined}
        >
          {isOpen ? <Minus className="h-3.5 w-3.5 text-signal" strokeWidth={2} /> : <Plus className="h-3.5 w-3.5 text-paper/50" strokeWidth={2} />}
        </span>
      </button>
      <div className="grid overflow-hidden transition-all duration-300 ease-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
        <div className="overflow-hidden">
          <p className="pb-4 text-[13px] leading-relaxed text-paper/60 sm:pb-6 sm:text-sm md:max-w-2xl">{a}</p>
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-14 sm:py-16 md:py-24">
      <ChevronDivider className="absolute -top-[11px] left-1/2 -translate-x-1/2" />
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <Reveal direction="left">
          <span className={`font-mono uppercase text-signal ${fluid.eyebrow}`}>Questions</span>
          <h2 className={`mt-2 font-display font-extrabold tracking-tight text-paper sm:mt-3 ${fluid.h2}`}>Before you book the audit</h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-6 sm:mt-10">
            {faqs.map((f, i) => (
              <FAQItem key={f.q} q={f.q} a={f.a} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- CTA ----------
const miniStats = [
  { value: "24h", label: "Avg. response time" },
  { value: "40+", label: "Audits sent so far" },
  { value: "18+", label: "Brands trust us" },
];

const avatarInitials = ["RK", "MS", "AP", "JD"];

function CTA() {
  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-28">
      <ChevronDivider className="absolute -top-[11px] left-1/2 -translate-x-1/2" />
      <style>{`
        @keyframes shimmer-sweep {
          0% { transform: translateX(-120%) skewX(-15deg); }
          100% { transform: translateX(220%) skewX(-15deg); }
        }
        .shimmer-btn::after {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 30%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: shimmer-sweep 3.2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .shimmer-btn::after { animation: none !important; }
        }
      `}</style>
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div
          className="relative overflow-hidden rounded-[28px] p-5 text-white shadow-2xl sm:p-10 md:p-14"
          style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#FF5C8A]/25 blur-3xl" aria-hidden="true" />

          <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-end md:gap-10">
            <Reveal direction="left">
              <div className="max-w-lg min-w-0">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-wider sm:text-[11px]">
                  <Sparkles className="h-3 w-3" strokeWidth={2} />
                  Free 15-min audit
                </span>

                <h2 className={`mt-4 font-display font-extrabold tracking-tight sm:mt-5 ${fluid.h2}`}>
                  Let&apos;s see where your budget is actually going.
                </h2>

                <p className={`mt-3 text-white/85 sm:mt-4 ${fluid.body}`}>
                  Send us your last month of ad spend and lead numbers.
                  We&apos;ll map it against your close rate and tell you,
                  free, whether the problem is targeting, follow-up, or
                  something else entirely.
                </p>

                <div className="mt-5 flex items-center gap-3 sm:mt-6">
                  <div className="flex -space-x-2">
                    {avatarInitials.map((initials, i) => (
                      <div
                        key={initials}
                        className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white/40 bg-white/20 text-[9px] font-semibold sm:h-8 sm:w-8 sm:text-[10px]"
                      >
                        {initials}
                      </div>
                    ))}
                  </div>
                  <span className="text-[11px] text-white/75 sm:text-xs">Joined by 18+ Hyderabad brands this year</span>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[11px] text-white/75 sm:mt-6 sm:text-xs">
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5" strokeWidth={2} />
                    Reply within 24 hours
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2} />
                    No spam, no obligation
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-3 gap-3 border-t border-white/20 pt-5 sm:mt-8 sm:gap-4 sm:pt-6">
                  {miniStats.map((s) => (
                    <div key={s.label}>
                      <div className="font-display text-base font-bold sm:text-xl">{s.value}</div>
                      <div className="mt-0.5 text-[9.5px] leading-snug text-white/70 sm:text-[11px]">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={100}>
              <div className="flex w-full min-w-0 flex-col gap-3 md:w-auto md:min-w-[280px]">
                
               <a   href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-btn group relative flex min-h-[48px] items-center justify-between gap-4 overflow-hidden rounded-full bg-white px-5 font-mono text-[12px] font-semibold uppercase tracking-wider text-signal shadow-lg transition-transform hover:scale-[1.02] sm:px-6 sm:text-[13px]"
                >
                  <span className="relative flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" strokeWidth={2} />
                    WhatsApp us
                  </span>
                  <ArrowUpRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
                </a>

                <a
                  href="mailto:hello@gkdigitalsolutions.in"
                  className="group flex min-h-[48px] items-center justify-between gap-4 rounded-full border border-white/40 px-5 font-mono text-[12px] uppercase tracking-wider text-white transition-colors hover:bg-white/10 sm:px-6 sm:text-[13px]"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="h-4 w-4" strokeWidth={2} />
                    Email us
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Home Page ----------
export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <ScrollProgress />
      <CursorAura />
      <Hero />
      <IndustryStrip />
      <Services />
      <Process />
      <WhyChooseTeaser />
      <ComparisonSection />
      <TrustStrip />
      <Results />
      <EngagementModels />
      <TestimonialTeaser />
      <FounderStrip />
      <FAQSection />
      <CTA />
      <StickyCTABar />
    </main>
  );
}