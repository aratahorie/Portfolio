import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const linkSchema = z.object({
  label: z.string(),
  url: z.string(),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().default(''),
    date: z.string(),
    category: z.string().default('Research'),
    image: z.string().default(''),
    citations: z.array(z.string()).default([]),
    awards: z.array(z.string()).optional(),
    collaborators: z.array(z.string()).optional(),
    links: z.array(linkSchema).default([]),
  }),
});

const challenge = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/challenge' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().default(''),
    date: z.string(),
    category: z.string().default('Student Challenge'),
    image: z.string().default(''),
    citations: z.array(z.string()).default([]),
    links: z.array(linkSchema).default([]),
  }),
});

const column = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/column' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().default(''),
    date: z.string(),
    category: z.string().default('Column'),
    image: z.string().default(''),
    citations: z.array(z.string()).default([]),
    links: z.array(linkSchema).default([]),
  }),
});

export const collections = { research, challenge, column };
