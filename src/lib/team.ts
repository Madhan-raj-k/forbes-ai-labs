export type TeamMember = {
  name: string;
  role: string;
  /** Path under /public or a full URL — e.g. "/team/madhan.jpg" */
  image: string;
  bio: string;
  expertise: string[];
  linkedin?: string;
  github?: string;
  twitter?: string;
};

/**
 * Update names, roles, bios, expertise, social links, and image paths here.
 * Local photos live in public/team/ and are served from /team/<filename>.
 */
export const teamMembers: TeamMember[] = [
  {
    name: "Madhan Raj K",
    role: "Founder & Technical Lead",
    image: "/team/madhan.jpg",
    bio: "Full-stack developer and AI specialist who leads product strategy, client relations, and technical direction. Madhan architects every project from concept to deployment, ensuring solutions are scalable, intelligent, and aligned with client goals.",
    expertise: ["Full-Stack Development", "AI Integration", "Product Strategy", "Client Relations"],
    linkedin: "https://linkedin.com/in/madhan-raj-k",
    github: "https://github.com/madhanraj-k",
    twitter: "https://twitter.com/madhanraj_k",
  },
  {
    name: "Ram G",
    role: "Research & Client Outreach",
    image: "/team/ram.jpg",
    bio: "Drives market research, technical documentation, and client discovery. Ram bridges the gap between client needs and technical solutions — identifying opportunities, crafting proposals, and ensuring every engagement starts with clarity.",
    expertise: ["Market Research", "Technical Writing", "Client Discovery", "Documentation"],
    linkedin: "https://www.linkedin.com/in/ram-g-8811a0388",
    github: "https://github.com/Ram6770",
    twitter: "https://twitter.com/ram_g",
  },
  {
    name: "Ahmed Faraz M",
    role: "Backend Developer",
    image: "/team/faraz.jpg",
    bio: "Backend specialist focused on robust APIs, database architecture, and AI automation pipelines. Faraz builds the infrastructure that powers Codeify's intelligent applications — from data models to deployment-ready server systems.",
    expertise: ["Backend APIs", "Database Design", "AI Automation", "DevOps"],
    linkedin: "https://www.linkedin.com/in/ahmed-faraz-0520803ba",
    github: "https://github.com/Ahmed-faraz281",
    twitter: "https://twitter.com/ahmadfaraz_m",
  },
];