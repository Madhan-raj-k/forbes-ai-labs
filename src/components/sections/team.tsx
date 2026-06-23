"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Link2, AtSign } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { teamMembers } from "@/lib/team";

export function Team() {
  return (
    <section id="team" className="section-padding bg-navy-950/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Our Team"
          title="Meet the Minds Behind Forbes AI Labs"
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
              <Card className="group text-center hover:border-electric-500/30 transition-all duration-300 overflow-hidden">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent" />
                </div>

                <CardContent className="p-6 -mt-8 relative">
                  <h3 className="font-heading text-xl font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-electric-400 text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <button
                      aria-label={`${member.name} LinkedIn`}
                      className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/50 hover:text-electric-400 hover:border-electric-500/30 transition-colors"
                    >
                      <Link2 className="w-4 h-4" />
                    </button>
                    <button
                      aria-label={`${member.name} Twitter`}
                      className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/50 hover:text-electric-400 hover:border-electric-500/30 transition-colors"
                    >
                      <AtSign className="w-4 h-4" />
                    </button>
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