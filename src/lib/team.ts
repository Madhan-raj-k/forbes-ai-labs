export type TeamMember = {
  name: string;
  role: string;
  /** Path under /public or a full URL — e.g. "/team/madhan.jpg" */
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
};

/**
 * Update names, roles, bios, and image paths here.
 * Local photos live in public/team/ and are served from /team/<filename>.
 */
export const teamMembers: TeamMember[] = [
  {
    name: "Madhan Raj K",
    role: "Founder & Technical Lead",
    image: "/team/madhan.jpg",
    bio: "Leads the team, handles development, and manages client projects.",
  },
  {
    name: "Ram G",
    role: "Research & Client Outreach",
    image: "/team/ram.jpg",
    bio: "Handles research, documentation, and finding potential clients.",
  },
  {
    name: "Ahmad Faraz M",
    role: "Backend Developer",
    image: "/team/faraz.jpg",
    bio: "Works on backend development and AI automation tools.",
  },
];