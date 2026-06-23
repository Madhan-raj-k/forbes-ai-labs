"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Globe,
  Smartphone,
  BarChart3,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "Custom AI integrations, chatbots, automation workflows, and machine learning models tailored to your business needs.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Premium, responsive websites and web applications built with modern frameworks like Next.js, React, and TypeScript.",
  },
  {
    icon: Smartphone,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed with user research, wireframing, and pixel-perfect visual design.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description:
      "Interactive dashboards, data pipelines, and analytics platforms that turn raw data into actionable insights.",
  },
];

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
              <Card className="h-full group hover:border-electric-500/30 hover:bg-navy-800/60 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center mb-4 group-hover:bg-electric-500/20 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-electric-400" />
                  </div>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/60 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}