"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-electric-600/10 rounded-full blur-3xl" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric-500/30 bg-electric-500/10 text-electric-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-electric-400 animate-pulse" />
                AI & Web Agency
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 text-balance"
            >
              We Build{" "}
              <span className="gradient-text">Intelligent</span>{" "}
              Digital Experiences
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-white/60 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Codeify crafts cutting-edge AI solutions and premium web
              experiences for startups, businesses, and innovators ready to lead
              the future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button asChild size="lg">
                <Link href="#contact">
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#work">
                  <Play className="w-4 h-4" />
                  View Our Work
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-white/10"
            >
              {[
                { value: "25+", label: "Projects Delivered" },
                { value: "15+", label: "Happy Clients" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-electric-500/20 to-transparent blur-2xl" />

              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-electric-500/10">
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                  alt="AI and technology visualization"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
              </div>

              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 glass rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-electric-500/20 flex items-center justify-center">
                    <span className="text-electric-400 text-lg">⚡</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">AI-Powered</div>
                    <div className="text-white/50 text-xs">Next-gen solutions</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass rounded-xl p-4 shadow-xl"
              >
                <div className="text-electric-400 font-bold text-2xl">98%</div>
                <div className="text-white/50 text-xs">Uptime SLA</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}