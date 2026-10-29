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
    eyebrow: z.string(),
    title: z.string(),
    description: z.string(),
    primaryCta: z.string(),
    secondaryCta: z.string(),
    featureTitle: z.string(),
    featureDescription: z.string(),
    features: z.array(z.object({
      title: z.string(),
      description: z.string()
    })),
    
    contactTitle: z.string(),
    contactDescription: z.string(),
    contactCta: z.string()
  })
});

export const collections = {
  'wtc': wtc,
  'home': home,
};