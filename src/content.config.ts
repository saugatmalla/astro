import { defineCollection } from 'astro:content';
import { z } from 'astro/zod'
import { glob } from "astro/loaders";

const wtc = defineCollection({
  loader: glob({
    pattern: "**/*.yml",
    base: "./src/content"
  }),

  schema: z.object({  // z.object() defines the shape of our frontmatter
    name: z.string(),
    title: z.string(),
    description: z.string().optional(),
    phone: z.string().optional()
  })
});

export const collections = {
  'wtc': wtc,
};