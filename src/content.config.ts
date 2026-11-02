import { defineCollection } from 'astro:content';
import { z } from 'astro/zod'
import { glob } from "astro/loaders";

const wtc = defineCollection({
  loader: glob({
    pattern: "wtc/**/*.yml",
    base: "./src/content"
  }),

  schema: z.object({  // z.object() defines the shape of our frontmatter
    name: z.string(),
    title: z.string(),
    description: z.string().optional(),
    phone: z.string().optional()
  })
});

const home = defineCollection({
  loader: glob({
    pattern: "home/**/*.yml",
    base: "./src/content"
  }),

  schema: z.object({
    siteName: z.string(),
    heading: z.string(),
    description: z.string().optional(),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string()
    }))
  })
});

export const collections = {
  'wtc': wtc,
  'home': home,
};