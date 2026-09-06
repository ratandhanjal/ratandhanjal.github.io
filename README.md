# Ratan Dhanjal - Personal Website

This is the source code for my personal website, digital journal, and portfolio, built with [Astro](https://astro.build).

## Features
- **Astro & TypeScript:** Fast, static site generation.
- **Content Collections:** Markdown-driven content for blogs, books, travel, and more with strict Zod validation.
- **Premium Design:** Apple-inspired, minimalist styling with custom CSS and a sophisticated dark mode.
- **High Performance:** 100% static output for perfect Lighthouse scores.

## Project Structure
```text
├── src/
│   ├── components/     # UI components (Header, Footer, Cards)
│   ├── content/        # Markdown content (Blog, Travel, Books, etc.)
│   ├── data/           # Static JSON configuration (Profile, Habits)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Astro pages (Home, About, Work, etc.)
│   └── styles/         # Global CSS and Animations
├── public/             # Static assets (Images, Fonts)
└── astro.config.mjs    # Astro configuration
```

## How to Manage Content

This website is designed so you can maintain it entirely by adding or editing static files, without touching UI code.

### Editing Your Profile
Update `src/data/profile.json` to change your bio, current role, or social links.
Update `src/data/habits.json` or `src/data/consistency.json` for the Now page and Heatmap.

### Adding a Blog Post
Create a new Markdown file in `src/content/blog/` (e.g., `my-new-post.md`):
```md
---
title: "My New Article"
date: 2026-09-06
category: "DevOps"
tags: ["Azure", "Terraform"]
readingTime: "5 min"
---
Your article content goes here...
```

### Adding a Certification
Create a Markdown file in `src/content/certifications/`:
```md
---
name: "Microsoft Certified: Azure Administrator Associate"
organization: "Microsoft"
date: 2023-01-15
credentialUrl: "https://learn.microsoft.com/..."
skills: ["Azure", "Networking", "Storage"]
---
```

*(Similar structures exist for books, travel, learning, and projects. Check `src/content/config.ts` for frontmatter requirements.)*

## Local Development

```bash
# Install dependencies
npm install

# Start the dev server at localhost:4321
npm run dev

# Build for production
npm run build
```

## Deployment

This site is statically exported. Any commits pushed to the `main` branch will automatically be built and deployed via GitHub Actions to GitHub Pages.
