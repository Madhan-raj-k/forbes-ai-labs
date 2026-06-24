"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, Send, Loader2 } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const CONTACT_EMAIL = "teamcodeify@gmail.com";
const CONTACT_PHONE = "+91 81233 30661";
const WHATSAPP_LINK = "https://wa.me/918123330661";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-card-glow pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          label="Contact"
          title="Let's Build Something Amazing"
          description="Ready to start your project? Reach out and we'll get back to you within 24 hours."
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <Card className="glass">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric-500/10 border border-electric-500/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-electric-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email Us</h4>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-white/60 hover:text-electric-400 transition-colors text-sm"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric-500/10 border border-electric-500/20 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-electric-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">WhatsApp</h4>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-electric-400 transition-colors text-sm"
                    >
                      {CONTACT_PHONE}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric-500/10 border border-electric-500/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-electric-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <a
                      href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                      className="text-white/60 hover:text-electric-400 transition-colors text-sm"
                    >
                      {CONTACT_PHONE}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button asChild size="lg" className="w-full">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <Card>
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project inquiry"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>

                  {status === "success" && (
                    <p className="text-green-400 text-sm">
                      Message sent successfully! We&apos;ll be in touch soon.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-red-400 text-sm">
                      Something went wrong. Please try again or reach us on WhatsApp.
                    </p>
                  )}

                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}