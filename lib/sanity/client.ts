import { createClient } from "@sanity/client";

export const isSanityConfigured =
  Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) && Boolean(process.env.NEXT_PUBLIC_SANITY_DATASET);

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
      apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01",
      useCdn: true,
    })
  : null;
