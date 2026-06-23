import { createClient } from "@/lib/supabase/server";
import type { Project } from "@/types/database";

// Fallback projects when Supabase is not configured
const FALLBACK_PROJECTS: Project[] = [
  {
    id: "1",
    title: "Nova AI Assistant",
    description:
      "An intelligent chatbot platform with real-time responses and custom knowledge bases for businesses.",
    image_url:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tech_stack: ["Next.js", "OpenAI", "Supabase", "Tailwind"],
    live_url: "https://example.com",
    github_url: "https://github.com",
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Pulse Analytics Dashboard",
    description:
      "A real-time analytics dashboard with interactive charts and automated reporting for startups.",
    image_url:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tech_stack: ["React", "D3.js", "Node.js", "PostgreSQL"],
    live_url: "https://example.com",
    github_url: "https://github.com",
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Lumina E-Commerce",
    description:
      "A premium e-commerce storefront with AI-powered product recommendations and seamless checkout.",
    image_url:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tech_stack: ["Next.js", "Stripe", "Prisma", "TypeScript"],
    live_url: "https://example.com",
    github_url: "https://github.com",
    featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export async function getProjects(): Promise<Project[]> {
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    return FALLBACK_PROJECTS;
  }

  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching projects:", error.message);
      return FALLBACK_PROJECTS;
    }

    return data ?? FALLBACK_PROJECTS;
  } catch (error) {
    console.error("Supabase connection error:", error);
    return FALLBACK_PROJECTS;
  }
}