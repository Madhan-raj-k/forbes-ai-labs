import { createClient } from "@/lib/supabase/server";
import type { Project } from "@/types/database";

/**
 * Portfolio projects data structure.
 *
 * To add a new project, copy the template below and fill in the details:
 *
 * {
 *   id: "unique-id",
 *   title: "Project Name",
 *   description: "Brief description of what the project does.",
 *   image_url: "/projects/screenshot.jpg",  // or an external URL
 *   tech_stack: ["Next.js", "TypeScript", "Tailwind CSS"],
 *   live_url: "https://your-demo.com",      // null if not available
 *   github_url: "https://github.com/org/repo", // null if private
 *   featured: true,
 *   created_at: new Date().toISOString(),
 *   updated_at: new Date().toISOString(),
 * }
 */
export const portfolioProjects: Project[] = [
  {
    id: "codiefy-portfolio",
    title: "Codeify Agency Website",
    description:
      "A premium portfolio and lead-generation site for our student-run AI and web development agency, built with Next.js and deployed on Vercel.",
    image_url:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tech_stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    live_url: "https://codiefy.vercel.app",
    github_url: null,
    featured: true,
    created_at: "2025-01-15T00:00:00.000Z",
    updated_at: "2025-01-15T00:00:00.000Z",
  },
  {
    id: "nova-ai-assistant",
    title: "Nova AI Assistant",
    description:
      "An intelligent chatbot platform with real-time responses and custom knowledge bases for businesses looking to automate customer support.",
    image_url:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tech_stack: ["Next.js", "OpenAI", "Supabase", "Tailwind CSS"],
    live_url: null,
    github_url: null,
    featured: true,
    created_at: "2024-11-01T00:00:00.000Z",
    updated_at: "2024-11-01T00:00:00.000Z",
  },
  {
    id: "pulse-analytics",
    title: "Pulse Analytics Dashboard",
    description:
      "A real-time analytics dashboard with interactive charts and automated reporting designed for startup teams tracking key growth metrics.",
    image_url:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tech_stack: ["React", "D3.js", "Node.js", "PostgreSQL"],
    live_url: null,
    github_url: null,
    featured: false,
    created_at: "2024-09-15T00:00:00.000Z",
    updated_at: "2024-09-15T00:00:00.000Z",
  },
];

export async function getProjects(): Promise<Project[]> {
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    return portfolioProjects;
  }

  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching projects:", error.message);
      return portfolioProjects;
    }

    return data?.length ? data : portfolioProjects;
  } catch (error) {
    console.error("Supabase connection error:", error);
    return portfolioProjects;
  }
}