"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Link2, AtSign } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { teamMembers } from "@/lib/team";
import { cn } from "@/lib/utils";

const socialLinks = [
  { key: "linkedin" as const, icon: Link2, label: "LinkedIn" },
  { key: "github" as const, icon: Code2, label: "GitHub" },
  { key: "twitter" as const, icon: AtSign, label: "Twitter" },
];

export function Team() {
  return (
    <section id="team" className="section-padding bg-navy-950/50 relative">
      <div className="absolute inset-0 bg-hero-glow opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          label="Our Team"
          title="Meet the Minds Behind Codeify"
          description="A talented group of student innovators united by a shared passion for technology and excellence."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden hover:border-electric-500/30 hover:shadow-lg hover:shadow-electric-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent" />

                  {/* Social links overlay on hover */}
                  <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {socialLinks.map(({ key, icon: Icon, label }) => {
                      const href = member[key];
                      if (!href) return null;
                      return (
                        <Link
                          key={key}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} ${label}`}
                          className="w-9 h-9 rounded-lg bg-navy-900/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-electric-400 hover:border-electric-500/30 transition-colors"
                        >
                          <Icon className="w-4 h-4" />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-white mb-1 group-hover:text-electric-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-electric-400 text-sm font-medium">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-white/60 text-sm leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs group-hover:border-electric-500/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Mobile-visible social links */}
                  <div className="flex items-center gap-2 pt-2 sm:hidden">
                    {socialLinks.map(({ key, icon: Icon, label }) => {
                      const href = member[key];
                      if (!href) return null;
                      return (
                        <Link
                          key={key}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} ${label}`}
                          className={cn(
                            "w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center",
                            "text-white/50 hover:text-electric-400 hover:border-electric-500/30 transition-colors"
                          )}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </Link>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}