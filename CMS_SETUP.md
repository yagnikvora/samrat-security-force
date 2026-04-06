# Sanity CMS Setup (Blog v1)

This project uses Sanity for blog content.

## 1. Environment Variables

Create a .env.local file and set:

- NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
- NEXT_PUBLIC_SANITY_DATASET=production
- NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
- SANITY_STUDIO_PROJECT_ID=your_project_id
- SANITY_STUDIO_DATASET=production

You can use .env.example as the template.

## 2. Start App and Studio

Run the website:

npm run dev

Run Sanity Studio (same repo):

npm run sanity:dev

Studio usually starts on localhost:3333.

## 3. Create Content Types

Schemas are already defined in:

- sanity/schemaTypes/postType.ts
- sanity/schemaTypes/authorType.ts
- sanity/schemaTypes/categoryType.ts

## 4. Publish First Blog Post

1. Create a category
2. Create an author
3. Create a post with title, slug, excerpt, cover image, and body
4. Set Published At and publish

The blog list and blog detail pages will then pull from Sanity.

## 4.1 Production Behavior

- Blog pages are configured as dynamic server-rendered routes.
- New posts and edits appear in production without redeploying the Next.js app.
- Ensure your production environment has correct Sanity env values.

## 5. Fallback Behavior

If Sanity env vars are missing, the app uses placeholder blog posts from:

- lib/site-config.ts

This keeps local and build environments stable.

## Notes

- next-sanity package is intentionally not used due Next 16 peer compatibility.
- Frontend data fetch uses @sanity/client.
- Sanity client uses fresh reads (CDN disabled) for immediate blog updates.
