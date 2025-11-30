# Zaid Shaikh Portfolio

Animated portfolio for **Zaid Shaikh — Salesforce Developer & Future Product Manager** built with React, Vite, TailwindCSS, Framer Motion, and a lightweight shadcn-inspired UI kit.

## Features
- Hero with gradient heading, typing loop, and parallax waves
- Journey timeline, skill grid, projects with modal case studies, certifications carousel
- Floating AI chat bubble backed by OpenAI GPT-4o mini with JSON knowledge base fallback
- Dark AMOLED aesthetic, responsive layout, Tailwind utility design system

## Getting Started
```bash
npm install
npm run dev
```

Create a `.env` file at the project root with your OpenAI key to unlock live answers:
```
VITE_OPENAI_API_KEY=sk-...
```

## Deploying on Vercel
1. Push the repo to GitHub.
2. Create a new Vercel project from the repo.
3. Add `VITE_OPENAI_API_KEY` to Vercel project environment variables.
4. Trigger a production deploy.

## Project Structure
```
├── src
│   ├── sections (Hero, Journey, Skills, Projects, Certifications, ChatAssistant, Footer)
│   ├── components/ui (Card + Modal inspired by shadcn/ui)
│   ├── data/profile.json (chatbot knowledge base)
│   ├── lib (chat + utility helpers)
│   └── styles / index.css (Tailwind + custom animations)
```
