import { Brain, Globe, Smartphone, BarChart3, type LucideIcon } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
};

/**
 * Add or edit services here. Each entry powers the Services section.
 */
export const services: Service[] = [
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "Custom AI integrations, chatbots, automation workflows, and machine learning models tailored to your business needs.",
    highlights: ["Chatbots & Assistants", "Workflow Automation", "Custom ML Models"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Premium, responsive websites and web applications built with modern frameworks like Next.js, React, and TypeScript.",
    highlights: ["Next.js & React", "Full-Stack Apps", "Performance Optimized"],
  },
  {
    icon: Smartphone,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed with user research, wireframing, and pixel-perfect visual design.",
    highlights: ["User Research", "Wireframing", "Visual Design"],
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description:
      "Interactive dashboards, data pipelines, and analytics platforms that turn raw data into actionable insights.",
    highlights: ["Dashboards", "Data Pipelines", "Business Intelligence"],
  },
];