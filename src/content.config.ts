import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.string(),
    subCategory: z.string().optional(),
    tags: z.array(z.string()).optional(),
    readingTime: z.string().optional(),
    coverImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const travelCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/travel" }),
  schema: z.object({
    location: z.string(),
    country: z.string(),
    date: z.date(),
    coverImage: z.string().optional(),
    rating: z.number().min(1).max(5).optional(),
  }),
});

const booksCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/books" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    status: z.enum(['Reading', 'Finished', 'Want to Read']),
    rating: z.number().min(1).max(5).optional(),
    dateFinished: z.date().optional(),
    coverImage: z.string().optional(),
  }),
});

const certificationsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/certifications" }),
  schema: z.object({
    name: z.string(),
    organization: z.string(),
    date: z.date(),
    credentialUrl: z.string().url().optional(),
    skills: z.array(z.string()).optional(),
  }),
});

const learningCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/learning" }),
  schema: z.object({
    topic: z.string(),
    progress: z.number().min(0).max(100),
    category: z.string(),
    nextMilestone: z.string().optional(),
  }),
});

const timelineCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/timeline" }),
  schema: z.object({
    title: z.string(),
    year: z.string(),
    type: z.enum(['Career', 'Education', 'Project', 'Life', 'Certification']),
    company: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    techStack: z.array(z.string()),
    link: z.string().url().optional(),
    github: z.string().url().optional(),
    date: z.date(),
    problem: z.string().optional(),
    solution: z.string().optional(),
    myContribution: z.string().optional(),
    status: z.enum(['Active', 'Completed', 'In Progress']).optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
  travel: travelCollection,
  books: booksCollection,
  certifications: certificationsCollection,
  learning: learningCollection,
  timeline: timelineCollection,
  projects: projectsCollection,
};
