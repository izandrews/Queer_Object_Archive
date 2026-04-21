import { z } from 'astro/zod';
import { defineCollection} from 'astro:content';
import { glob } from 'astro/loaders';

const gallery = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gallery' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  gallery,
};