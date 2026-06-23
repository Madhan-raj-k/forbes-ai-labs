"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/types/database";

interface PortfolioProps {
  projects: Project[];
}

export function Portfolio({ projects }: PortfolioProps) {
  return (
    <section id="work" className="section-padding relative">
      <div className="absolute inset-0 bg-hero-glow opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          label="Our Work"
          title="Projects That Speak for Themselves"
          description="Explore our portfolio of AI-powered applications and premium web experiences built for real clients."
        />

        {projects.length === 0 ? (
          <div className="text-center py-16 glass rounded-2xl">
            <p className="text-white/60 text-lg">
              Projects coming soon. Check back shortly!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden h-full hover:border-electric-500/30 transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image_url}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    {project.featured && (
                      <Badge className="absolute top-4 left-4">Featured</Badge>
                    )}
                  </div>

                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-white mb-2 group-hover:text-electric-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech_stack.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                      {project.live_url && (
                        <Button asChild size="sm" className="flex-1">
                          <Link
                            href={project.live_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                      {project.github_url && (
                        <Button asChild variant="outline" size="sm" className="flex-1">
                          <Link
                            href={project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Code2 className="w-4 h-4" />
                            GitHub
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}