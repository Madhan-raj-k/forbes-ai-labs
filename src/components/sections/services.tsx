"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/services";

export function Services() {
  return (
    <section id="services" className="section-padding bg-navy-950/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Services"
          title="What We Do Best"
          description="We offer end-to-end digital services — from concept to deployment — helping you launch faster and smarter."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:border-electric-500/30 hover:bg-navy-800/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-electric-500/5 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center mb-4 group-hover:bg-electric-500/20 group-hover:scale-110 group-hover:border-electric-500/40 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-electric-400" />
                  </div>
                  <CardTitle className="text-white group-hover:text-electric-400 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/60 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.highlights.map((highlight) => (
                      <Badge key={highlight} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
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