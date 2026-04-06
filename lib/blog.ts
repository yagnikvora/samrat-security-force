import { siteConfig, type BlogPreview } from "@/lib/site-config";
import { isSanityConfigured, sanityClient } from "@/lib/sanity/client";
import { blogPostBySlugQuery, blogPostsQuery } from "@/lib/sanity/queries";
import type { PortableTextBlock } from "@portabletext/types";

export type BlogPost = BlogPreview & {
  body?: PortableTextBlock[];
};

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!isSanityConfigured || !sanityClient) {
    return siteConfig.blogPlaceholders;
  }

  try {
    return await sanityClient.fetch<BlogPost[]>(blogPostsQuery);
  } catch {
    return siteConfig.blogPlaceholders;
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!isSanityConfigured || !sanityClient) {
    return siteConfig.blogPlaceholders.find((post) => post.slug === slug) || null;
  }

  try {
    const post = await sanityClient.fetch<BlogPost | null>(blogPostBySlugQuery, { slug });
    if (!post) {
      return null;
    }
    return post;
  } catch {
    return siteConfig.blogPlaceholders.find((post) => post.slug === slug) || null;
  }
}
