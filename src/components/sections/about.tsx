"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";

const highlights = [
  "Student-led team with industry-grade expertise",
  "Agile development with rapid turnaround",
  "Cutting-edge AI integration in every project",
  "Transparent communication & fair pricing",
];

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-card-glow pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          label="About Us"
          title="Passionate Students Building the Future of Tech"
          description="We're a collective of ambitious student developers and designers who believe great technology shouldn't be reserved for big corporations."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Forbes AI Labs team collaborating"
                width={800}
                height={600}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-electric-500/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-white/70 text-lg leading-relaxed">
              Founded at the intersection of academia and industry, Forbes AI Labs
              was born from a simple belief: students can deliver world-class
              digital products when given the right tools and mentorship.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              From AI-powered applications to stunning web platforms, we partner
              with startups and businesses to turn ambitious ideas into polished,
              production-ready solutions — at a fraction of traditional agency costs.
            </p>

            <ul className="space-y-4 pt-4">
              {highlights.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-electric-400 mt-0.5 shrink-0" />
                  <span className="text-white/80">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}