import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().or(z.date()),
    author: z.string(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    layout: z.string().optional(),
  }),
});

export const collections = { blog };
