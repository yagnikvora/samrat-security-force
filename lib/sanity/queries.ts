export const blogPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
  "id": _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  "category": coalesce(category->title, "General")
}`;

export const blogPostBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  "id": _id,
  title,
  "slug": slug.current,
  excerpt,
  body,
  publishedAt,
  "category": coalesce(category->title, "General")
}`;
