// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content', // Markdownなどのコンテンツ
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string().default('Anonymous'),
    tags: z.array(z.string()),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }).optional() // 画像は任意（なくてもOK）
  }),
});

const worksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('Anonymous'),
    image: z.string().optional(), // 作品のスクショ画像のパス
    tags: z.array(z.string()),   // 使用技術 (例: ["Astro", "p5.js"])
    link: z.string().url().optional(), // 公開URL
  }),
});

export const collections = {
  'blog': blogCollection,
  'works': worksCollection,
};