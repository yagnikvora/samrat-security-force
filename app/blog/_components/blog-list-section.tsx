import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import type { BlogPost } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

type BlogListSectionProps = {
  posts: BlogPost[];
};

export function BlogListSection({ posts }: BlogListSectionProps) {
  const section = siteConfig.sections.blogList;

  return (
    <section>
      <SectionTitle
        eyebrow={section.eyebrow}
        title={section.title}
        highlight={section.highlight}
        description={section.description}
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="glass-card rounded-2xl p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-brand">{post.category}</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{post.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{post.excerpt}</p>
            <p className="mt-4 text-xs text-slate-400">{new Date(post.publishedAt).toLocaleDateString()}</p>
            <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-primary">
              {section.readMoreLabel}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
