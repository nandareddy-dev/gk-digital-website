"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Briefcase,
  Newspaper,
  Workflow,
  Award,
  MessageSquare,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

type MoreLink = {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
};

const moreLinks: MoreLink[] = [
  {
    label: "Portfolio",
    href: "/portfolio",
    description: "See the projects we've shipped for clients like you.",
    icon: Briefcase,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    label: "Blog",
    href: "/blog",
    description: "Insights and updates from our team, straight from the source.",
    icon: Newspaper,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    label: "Process",
    href: "/process",
    description: "How we take a project from kickoff to launch, step by step.",
    icon: Workflow,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    label: "Why Choose Us",
    href: "/why-choose-us",
    description: "What sets our approach apart from other agencies.",
    icon: Award,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    label: "Testimonials",
    href: "/testimonials",
    description: "Real feedback from teams we've partnered with.",
    icon: MessageSquare,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    label: "FAQ",
    href: "/faq",
    description: "Quick answers to the questions we hear most often.",
    icon: HelpCircle,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  const isMoreActive = moreLinks.some((link) => isActive(link.href));

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMoreOpen(false);
    setOpen(false);
    setMobileMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 flex justify-center pt-3`}
    >
      <nav
        className={`relative flex w-full max-w-5xl items-center justify-between gap-3 rounded-full border border-slate-200 bg-white/95 px-4 py-2 shadow-[0_4px_20px_rgba(15,23,42,0.08)] backdrop-blur-md transition-all duration-300 sm:px-5 ${
          scrolled ? "py-1.5" : "py-2"
        }`}
      >
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={() => setOpen(false)}
        >
          <div className="relative h-8 w-[105px] transition-all duration-300 sm:h-9 sm:w-[125px]">
            <Image
              src="/GK_Digital_Logo.jpg"
              alt="GK Digital Solutions"
              fill
              sizes="125px"
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex xl:gap-1">
          {primaryLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href} className="shrink-0">
                <Link
                  href={link.href}
                  className={`whitespace-nowrap rounded-full px-3 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] transition-colors xl:px-3.5 xl:text-[13px] ${
                    active
                      ? "bg-slate-900 text-white"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}

          <li ref={dropdownRef} className="relative shrink-0">
            <button
              type="button"
              onClick={() => setMoreOpen((prev) => !prev)}
              aria-expanded={moreOpen}
              className={`flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] transition-colors xl:px-3.5 xl:text-[13px] ${
                isMoreActive
                  ? "bg-slate-900 text-white"
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              More
              <ChevronDown
                className={`h-3 w-3 transition-transform ${
                  moreOpen ? "rotate-180" : ""
                }`}
                strokeWidth={2}
              />
            </button>

            {moreOpen && (
              <div className="absolute left-1/2 top-full mt-3 w-[560px] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_12px_40px_rgba(15,23,42,0.12)]">
                <div className="grid grid-cols-2 gap-1">
                  {moreLinks.map((link) => {
                    const Icon = link.icon;
                    const active = isActive(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMoreOpen(false)}
                        className={`flex items-start gap-3 rounded-xl p-3 transition-colors ${
                          active ? "bg-slate-100" : "hover:bg-slate-50"
                        }`}
                      >
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${link.iconBg}`}
                        >
                          <Icon
                            className={`h-4 w-4 ${link.iconColor}`}
                            strokeWidth={2}
                          />
                        </span>
                        <span className="min-w-0">
                          <span className="block font-sans text-[13.5px] font-medium text-slate-900">
                            {link.label}
                          </span>
                          <span className="mt-0.5 block text-[12px] leading-snug text-slate-500">
                            {link.description}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </li>
        </ul>

        <div className="flex shrink-0 items-center justify-end gap-2.5">
          <Link
            href="/contact"
            className="hidden shrink-0 whitespace-nowrap rounded-full bg-slate-900 px-3.5 py-1.5 font-mono text-[12px] font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#4C8F2A] lg:block xl:px-4 xl:text-[13px]"
          >
            Get audit
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
          >
            {open ? (
              <X className="h-3.5 w-3.5" strokeWidth={1.75} />
            ) : (
              <Menu className="h-3.5 w-3.5" strokeWidth={1.75} />
            )}
          </button>
        </div>

        {open && (
          <div className="absolute left-0 right-0 top-full mt-3 max-h-[calc(100vh-120px)] overflow-y-auto rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-[0_12px_40px_rgba(15,23,42,0.12)] lg:hidden">
            <ul className="flex flex-col gap-1">
              {primaryLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-3 py-2 font-mono text-[12px] uppercase tracking-[0.12em] transition-colors ${
                        active
                          ? "bg-slate-900 text-white"
                          : "text-slate-500 hover:bg-slate-100"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}

              <li>
                <button
                  type="button"
                  onClick={() => setMobileMoreOpen((prev) => !prev)}
                  aria-expanded={mobileMoreOpen}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 font-mono text-[12px] uppercase tracking-[0.12em] transition-colors ${
                    isMoreActive
                      ? "bg-slate-900 text-white"
                      : "text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  More
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${
                      mobileMoreOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={2}
                  />
                </button>

                {mobileMoreOpen && (
                  <ul className="mt-1 flex flex-col gap-1 pl-1">
                    {moreLinks.map((link) => {
                      const Icon = link.icon;
                      const active = isActive(link.href);
                      return (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={`flex items-start gap-3 rounded-lg px-2 py-2 transition-colors ${
                              active
                                ? "bg-slate-100"
                                : "hover:bg-slate-50"
                            }`}
                          >
                            <span
                              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${link.iconBg}`}
                            >
                              <Icon
                                className={`h-3.5 w-3.5 ${link.iconColor}`}
                                strokeWidth={2}
                              />
                            </span>
                            <span className="min-w-0">
                              <span className="block font-sans text-[12.5px] font-medium text-slate-900">
                                {link.label}
                              </span>
                              <span className="mt-0.5 block text-[11px] leading-snug text-slate-500">
                                {link.description}
                              </span>
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            </ul>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-5 block rounded-full bg-slate-900 px-4 py-2 text-center font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-white"
            >
              Get audit
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}