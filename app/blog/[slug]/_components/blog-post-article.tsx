import { PortableText } from "@portabletext/react";
import type { BlogPost } from "@/lib/blog";

type BlogPostArticleProps = {
  post: BlogPost;
};

export function BlogPostArticle({ post }: BlogPostArticleProps) {
  return (
    <article className="page-container py-14 sm:py-20">
      <p className="text-xs uppercase tracking-[0.2em] text-brand">{post.category}</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-white sm:text-5xl">{post.title}</h1>
      <p className="mt-4 text-sm text-slate-400">{new Date(post.publishedAt).toLocaleDateString()}</p>

      <div className="mt-10 rounded-2xl border border-white/10 bg-zinc-900/50 p-6 sm:p-8">
        {post.body ? (
          <div className="space-y-4 text-slate-200">
            <PortableText value={post.body} />
          </div>
        ) : (
          <p className="leading-8 text-slate-200">
            {post.excerpt} This page is Sanity-ready and currently shows placeholder content until your CMS posts are
            connected.
          </p>
        )}
      </div>
    </article>
  );
}
