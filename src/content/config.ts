import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    director: z.string(),
    producer: z.string(),
    distributor: z.string().optional(),
    releaseYear: z.number(),
    author: z.string(),
    publishDate: z.string(),
    updateDate: z.string().optional(),
    drawing: z.string(),
    description: z.string(),
  }),
});

export const collections = { posts };