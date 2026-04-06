import { getBlogPosts } from "@/lib/blog";
import { BlogListSection } from "./_components";

export const metadata = {
  title: "Blog",
};

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="page-container py-14 sm:py-20">
      <BlogListSection posts={posts} />
    </div>
  );
}
