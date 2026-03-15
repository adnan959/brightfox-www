import type { Metadata } from "next";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import BlogIllustration from "@/components/ui/BlogIllustration";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Parent Resources & Blog | Bright Fox Dayhome Calgary",
  description:
    "Helpful articles for parents in Calgary. Dayhome guides, childcare tips, Alberta subsidy information, and more from Bright Fox Dayhome.",
  openGraph: { images: ["/images/social.png"] },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ])}
      />

      <section className="pt-32 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge variant="cream" className="mb-4">
            Parent Resources
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-brown mb-4">
            Blog
          </h1>
          <p className="text-lg text-text/80 font-body max-w-2xl">
            Helpful guides, tips, and resources for parents in Calgary.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  {post.illustration ? (
                    <BlogIllustration
                      variant={post.illustration}
                      className="w-full aspect-[3/2]"
                    />
                  ) : (
                    <div className="relative overflow-hidden">
                      <BlogIllustration
                        variant="dayhome-vs-daycare"
                        className="w-full aspect-[3/2]"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-sm text-text/50 font-body mb-2">
                      {new Date(post.date).toLocaleDateString("en-CA", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <h2 className="text-lg font-bold text-brown font-display mb-2 group-hover:text-orange transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-text/70 font-body text-sm line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
