"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { testimonials } from "@/lib/testimonials";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + testimonials.length) % testimonials.length);
    },
    []
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, [goNext, isPaused]);

  const active = testimonials[activeIndex];

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-card-glow pointer-events-none" />

      <div
        className="relative max-w-7xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          description="Real feedback from businesses and founders who trusted Codeify to bring their ideas to life."
        />

        {/* Featured testimonial carousel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-2xl p-8 md:p-12 text-center"
            >
              <Quote className="w-10 h-10 text-electric-500/40 mx-auto mb-6" />
              <blockquote className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 text-balance">
                &ldquo;{active.quote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <Image
                  src={active.image}
                  alt={active.clientName}
                  width={56}
                  height={56}
                  className="rounded-full border-2 border-electric-500/30"
                />
                <div className="text-left">
                  <p className="text-white font-semibold">{active.clientName}</p>
                  <p className="text-white/50 text-sm">
                    {active.role}, {active.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-electric-400 hover:border-electric-500/30 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === activeIndex
                      ? "bg-electric-500 w-6"
                      : "bg-white/20 hover:bg-white/40"
                  )}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-electric-400 hover:border-electric-500/30 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl p-6 hover:border-electric-500/30 hover:bg-white/[0.07] transition-all duration-300 group cursor-default"
            >
              <Quote className="w-6 h-6 text-electric-500/30 mb-4 group-hover:text-electric-500/50 transition-colors" />
              <p className="text-white/70 text-sm leading-relaxed mb-6 line-clamp-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.clientName}
                  width={40}
                  height={40}
                  className="rounded-full border border-white/10"
                />
                <div>
                  <p className="text-white text-sm font-medium">{testimonial.clientName}</p>
                  <p className="text-white/40 text-xs">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}