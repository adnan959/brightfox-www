import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import BlogIllustration from "@/components/ui/BlogIllustration";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { BLOG_POSTS } from "@/lib/blog";
import { SITE } from "@/lib/constants";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: { images: [post.image] },
  };
}

function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let currentList: string[] = [];
  let key = 0;

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={key++} className="list-disc pl-6 space-y-2 text-text/80 font-body leading-relaxed">
          {currentList.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: processInline(item) }} />
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  const processInline = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-orange hover:underline">$1</a>');
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList();
      continue;
    }

    if (trimmed.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-brown font-display mt-10 mb-4">
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={key++} className="text-xl font-bold text-brown font-display mt-8 mb-3">
          {trimmed.slice(4)}
        </h3>
      );
    } else if (trimmed.startsWith("- ")) {
      currentList.push(trimmed.slice(2));
    } else {
      flushList();
      elements.push(
        <p
          key={key++}
          className="text-text/80 font-body leading-relaxed"
          dangerouslySetInnerHTML={{ __html: processInline(trimmed) }}
        />
      );
    }
  }
  flushList();
  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          image: `${SITE.url}${post.image}`,
          author: { "@type": "Organization", name: SITE.name },
          publisher: { "@type": "Organization", name: SITE.name },
        }}
      />

      <article className="pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="text-orange font-body font-semibold hover:underline mb-6 inline-block"
          >
            &larr; Back to Blog
          </Link>

          <p className="text-sm text-text/50 font-body mb-3">
            {new Date(post.date).toLocaleDateString("en-CA", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold text-brown mb-8">
            {post.title}
          </h1>

          {post.illustration ? (
            <BlogIllustration
              variant={post.illustration}
              className="w-full rounded-xl mb-10 aspect-[2/1]"
            />
          ) : (
            <BlogIllustration
              variant="dayhome-vs-daycare"
              className="w-full rounded-xl mb-10 aspect-[2/1]"
            />
          )}

          <div className="space-y-4">{renderMarkdown(post.content)}</div>

          <div className="mt-16 bg-orange/5 border border-orange/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-brown font-display mb-3">
              Looking for a dayhome in Nolan Hill?
            </h3>
            <p className="text-text/70 font-body mb-6">
              Contact Bright Fox today to learn more or schedule a visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href={`tel:${SITE.phoneRaw}`}
                trackingEvent="phone_call_click"
              >
                <Phone className="h-5 w-5" />
                Call {SITE.phone}
              </Button>
              <Button
                variant="secondary"
                href={`mailto:${SITE.email}`}
                trackingEvent="email_click"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </Button>
            </div>
          </div>

          {/* Author bio */}
          <div className="mt-12 flex items-center gap-4 border-t border-cream-dark pt-8">
            <Image
              src="/images/brightfox-logo-only.png"
              alt="Bright Fox Dayhome"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
            <div>
              <p className="font-semibold text-brown font-body">Bright Fox Dayhome</p>
              <p className="text-sm text-text/60 font-body">
                Alberta Approved Family Day Home in Nolan Hill, Calgary
              </p>
            </div>
          </div>

          {/* More Articles */}
          {BLOG_POSTS.filter((p) => p.slug !== post.slug).length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-brown font-display mb-6">
                More Articles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {BLOG_POSTS.filter((p) => p.slug !== post.slug)
                  .slice(0, 2)
                  .map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="group"
                    >
                      <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <BlogIllustration
                          variant={related.illustration ?? "dayhome-vs-daycare"}
                          className="w-full aspect-[3/2]"
                        />
                        <div className="p-5">
                          <h4 className="font-bold text-brown font-display group-hover:text-orange transition-colors">
                            {related.title}
                          </h4>
                        </div>
                      </article>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
