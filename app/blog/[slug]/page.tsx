import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import PostThumbnail from "@/components/PostThumbnail";
import ScrollProgress from "@/components/ScrollProgress";
import { ServicesCursorAura, ServicesStickyCTA } from "@/components/ServicesPageInteractive";
import ShareButtons from "@/components/ShareButtons";
import { blogPosts, getPostBySlug } from "@/components/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const url = `https://gkdigitalsolutions.in/blog/${post.slug}`;
  return {
    title: `${post.title} | GK Digital Solutions Blog`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      section: post.category,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    author: {
      "@type": "Organization",
      name: "GK Digital Solutions",
    },
    publisher: {
      "@type": "Organization",
      name: "GK Digital Solutions",
      url: "https://gkdigitalsolutions.in",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://gkdigitalsolutions.in/blog/${post.slug}`,
    },
  };

  return (
    <main className="relative overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgress />
      <ServicesCursorAura />

      <article>
        <section className="relative overflow-hidden border-b border-line pt-28 sm:pt-32 md:pt-40 pb-16">
          <div
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-signal/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl px-6">
            <Reveal>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 font-mono text-[12px] uppercase tracking-wider text-paper/40 transition-colors hover:text-signal"
              >
                <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
                All articles
              </Link>
            </Reveal>

            <Reveal delay={60}>
              <span
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white"
                style={{
                  background: "linear-gradient(90deg, var(--signal), var(--teal))",
                }}
              >
                {post.category}
              </span>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight text-paper md:text-4xl">
                {post.title}
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-sm text-paper/50">
                  <span>{formatDate(post.date)}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" strokeWidth={2} />
                    {post.readTime}
                  </span>
                </div>
                <ShareButtons title={post.title} />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-line py-10">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-line md:h-96">
                <PostThumbnail post={post} />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-line py-16">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <div className="space-y-5">
                {post.content.map((para, i) => (
                  <p key={i} className="leading-relaxed text-paper/70">
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>

            {/* Bottom share row — for readers who scroll all the way through */}
            <Reveal delay={80}>
              <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
                <span className="font-mono text-[11px] uppercase tracking-wider text-paper/40">
                  Found this useful?
                </span>
                <ShareButtons title={post.title} />
              </div>
            </Reveal>
          </div>
        </section>
      </article>

      {related.length > 0 && (
        <section className="border-b border-line py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <h2 className="font-display text-xl font-semibold text-paper">
                More from the blog
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-ink transition-colors hover:bg-ink-panel"
                  >
                    <div className="relative h-32 w-full overflow-hidden bg-ink-panel">
                      <PostThumbnail post={p} className="transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between gap-4 p-6">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-signal">
                          {p.category}
                        </span>
                        <h3 className="mt-2 font-display text-base font-semibold text-paper">
                          {p.title}
                        </h3>
                      </div>
                      <ArrowUpRight
                        className="h-4 w-4 text-paper/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal"
                        strokeWidth={2}
                      />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-line bg-ink-panel p-10 md:p-14">
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-signal/10 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
                  Ready to put this into practice?
                </h2>
                <Link
                  href="/contact"
                  className="group flex shrink-0 items-center gap-2 rounded-full bg-signal px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-ink transition-transform hover:scale-[1.03]"
                >
                  Get a free consultation
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2}
                  />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ServicesStickyCTA label="Ready to put this into practice?" linkText="Get a quote" />
    </main>
  );
}