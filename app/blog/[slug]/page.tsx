import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "@/lib/blog";
import { BlogPostArticle } from "./_components";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site-config";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [...siteConfig.blogPostPage.breadcrumbs, { label: post.title }];

  return (
    <>
      <PageHero title={post.title} breadcrumbs={breadcrumbs} />
      <BlogPostArticle post={post} />
    </>
  );
}
