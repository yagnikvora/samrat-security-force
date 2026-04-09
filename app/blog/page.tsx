import { getBlogPosts } from "@/lib/blog";
import { BlogListSection } from "./_components";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: siteConfig.pageHeroes.blog.title,
};

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <PageHero title={siteConfig.pageHeroes.blog.title} breadcrumbs={siteConfig.pageHeroes.blog.breadcrumbs} />

      <div className="page-container py-14 sm:py-20">
        <BlogListSection posts={posts} />
      </div>
    </>
  );
}
