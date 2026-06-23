-- Forbes AI Labs — Supabase schema
-- Run this in your Supabase SQL Editor

-- Projects table for dynamic portfolio
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  image_url text not null,
  tech_stack text[] not null default '{}',
  live_url text,
  github_url text,
  featured boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Auto-update updated_at on row changes
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists projects_updated_at on public.projects;
create trigger projects_updated_at
  before update on public.projects
  for each row execute function public.handle_updated_at();

-- Row Level Security
alter table public.projects enable row level security;

-- Public read access for the website
create policy "Projects are viewable by everyone"
  on public.projects for select
  using (true);

-- Writes require service role (admin API routes use service key)
-- No public insert/update/delete policies

-- Seed sample projects (optional — remove if not needed)
insert into public.projects (title, description, image_url, tech_stack, live_url, github_url, featured)
values
  (
    'Nova AI Assistant',
    'An intelligent chatbot platform with real-time responses and custom knowledge bases for businesses.',
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    array['Next.js', 'OpenAI', 'Supabase', 'Tailwind'],
    'https://example.com',
    'https://github.com',
    true
  ),
  (
    'Pulse Analytics Dashboard',
    'A real-time analytics dashboard with interactive charts and automated reporting for startups.',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    array['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    'https://example.com',
    'https://github.com',
    true
  ),
  (
    'Lumina E-Commerce',
    'A premium e-commerce storefront with AI-powered product recommendations and seamless checkout.',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    array['Next.js', 'Stripe', 'Prisma', 'TypeScript'],
    'https://example.com',
    'https://github.com',
    false
  );