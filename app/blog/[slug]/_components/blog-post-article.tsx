import { PortableText } from "@portabletext/react";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog";

type BlogPostArticleProps = {
  post: BlogPost;
};

type PortableTextImageValue = {
  alt?: string;
  imageUrl?: string;
  dimensions?: {
    width?: number;
    height?: number;
  };
  asset?: {
    _ref?: string;
    url?: string;
    metadata?: {
      dimensions?: {
        width?: number;
        height?: number;
      };
    };
  };
};

function resolveSanityImageUrl(value: PortableTextImageValue): string | null {
  if (value.imageUrl) {
    return value.imageUrl;
  }

  if (value.asset?.url) {
    return value.asset.url;
  }

  const ref = value.asset?._ref;
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

  if (!ref || !projectId || !dataset || !ref.startsWith("image-")) {
    return null;
  }

  const parsed = /^image-(.+)-(\d+x\d+)-([a-z0-9]+)$/i.exec(ref);

  if (!parsed) {
    return null;
  }

  const [, assetId, size, format] = parsed;

  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${assetId}-${size}.${format}`;
}

function resolveSanityImageSize(value: PortableTextImageValue): { width: number; height: number } {
  const widthFromMetadata = value.dimensions?.width || value.asset?.metadata?.dimensions?.width;
  const heightFromMetadata = value.dimensions?.height || value.asset?.metadata?.dimensions?.height;

  if (widthFromMetadata && heightFromMetadata) {
    return { width: widthFromMetadata, height: heightFromMetadata };
  }

  const ref = value.asset?._ref;
  if (ref?.startsWith("image-")) {
    const parsed = /^image-(.+)-(\d+x\d+)-([a-z0-9]+)$/i.exec(ref);
    const sizePart = parsed?.[2];
    if (sizePart && sizePart.includes("x")) {
      const [width, height] = sizePart.split("x").map((segment) => Number(segment));
      if (Number.isFinite(width) && Number.isFinite(height)) {
        return { width, height };
      }
    }
  }

  return { width: 1200, height: 675 };
}

const portableTextComponents = {
  types: {
    image: ({ value }: { value: PortableTextImageValue }) => {
      const imageUrl = resolveSanityImageUrl(value);

      if (!imageUrl) {
        return null;
      }

      const { width, height } = resolveSanityImageSize(value);

      return (
        <figure className="my-8 overflow-hidden rounded-xl border border-white/10 bg-black/20">
          <Image
            src={imageUrl}
            alt={value.alt || "Blog image"}
            width={width}
            height={height}
            unoptimized
            className="h-auto w-full object-cover"
          />
        </figure>
      );
    },
  },
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
            <PortableText value={post.body} components={portableTextComponents} />
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
