# Forbes AI Labs

A premium, modern website for **Forbes AI Labs** — a student-led AI and web development agency.

## Tech Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** + shadcn/ui components
- **Framer Motion** for animations
- **Supabase** for dynamic project portfolio
- **Space Grotesk** + **Inter** typography

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

### 3. Set up Supabase

1. Create a free project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run the contents of `supabase/schema.sql`
3. Copy your project URL, anon key, and service role key into `.env.local`

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Admin Panel

Manage portfolio projects at [http://localhost:3000/admin](http://localhost:3000/admin).

- Password is set via `ADMIN_PASSWORD` in `.env.local`
- Add, edit, and delete projects
- Changes appear on the homepage automatically (revalidates every 60s)

## Project Structure

```
src/
├── app/                  # Next.js App Router pages & API routes
│   ├── admin/            # Protected admin dashboard
│   ├── api/              # Contact form & admin APIs
│   └── page.tsx          # Main landing page
├── components/
│   ├── admin/            # Admin dashboard components
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, About, Services, Portfolio, Team, Contact
│   ├── shared/           # Reusable components
│   └── ui/               # shadcn/ui primitives
├── lib/                  # Supabase clients, auth, utilities
└── types/                # TypeScript interfaces
```

## Features

- Fully responsive design (mobile + desktop)
- Dark navy + electric blue premium aesthetic
- Dynamic portfolio from Supabase
- Protected admin CRUD for projects
- Contact form with WhatsApp integration
- Smooth Framer Motion animations
- Fallback demo projects when Supabase is not configured

## Image Sources

Placeholder images use [Unsplash](https://unsplash.com). Replace with your own project screenshots and team photos for production.

## Deploy

Deploy to [Vercel](https://vercel.com) and add your environment variables in the project settings.