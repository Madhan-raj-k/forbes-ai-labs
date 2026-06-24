"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Phone,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  HelpCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validations/contact";
import { cn } from "@/lib/utils";

const CONTACT_EMAIL = "teamcodeify@gmail.com";
const CONTACT_PHONE = "+91 81233 30661";
const WHATSAPP_LINK = "https://wa.me/918123330661";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      inquiryType: "project",
    },
  });

  const inquiryType = watch("inquiryType");

  async function onSubmit(data: ContactFormData) {
    setStatus("idle");
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus("success");
        reset({ inquiryType: "project" });
      } else {
        setStatus("error");
        setServerError(result.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setServerError("Network error. Please check your connection and try again.");
    }
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-card-glow pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-electric-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          label="Contact"
          title="Let's Build Something Amazing"
          description="Ready to start your project? Reach out and we'll get back to you within 24 hours."
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <Card className="glass border-electric-500/10">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-electric-500/10 border border-electric-500/20 flex items-center justify-center shrink-0 group-hover:bg-electric-500/20 transition-colors">
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

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-electric-500/10 border border-electric-500/20 flex items-center justify-center shrink-0 group-hover:bg-electric-500/20 transition-colors">
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

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-electric-500/10 border border-electric-500/20 flex items-center justify-center shrink-0 group-hover:bg-electric-500/20 transition-colors">
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

            <div className="glass rounded-xl p-6 border border-electric-500/10">
              <h4 className="text-white font-medium mb-2">Why work with us?</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-electric-400 shrink-0" />
                  Free initial consultation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-electric-400 shrink-0" />
                  Response within 24 hours
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-electric-400 shrink-0" />
                  Student-friendly pricing
                </li>
              </ul>
            </div>

            <Button asChild size="lg" className="w-full">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <Card className="border-electric-500/10 shadow-xl shadow-electric-500/5">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                  {/* Inquiry type toggle */}
                  <div className="space-y-3">
                    <Label>How can we help?</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {(
                        [
                          { value: "project", label: "Project Request", icon: Briefcase },
                          { value: "inquiry", label: "General Inquiry", icon: HelpCircle },
                        ] as const
                      ).map(({ value, label, icon: Icon }) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setValue("inquiryType", value, { shouldValidate: true })}
                          className={cn(
                            "flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-200",
                            inquiryType === value
                              ? "border-electric-500/50 bg-electric-500/10 text-white"
                              : "border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:bg-white/[0.07]"
                          )}
                        >
                          <Icon className="w-5 h-5 shrink-0" />
                          <span className="text-sm font-medium">{label}</span>
                        </button>
                      ))}
                    </div>
                    {errors.inquiryType && (
                      <p className="text-red-400 text-sm">{errors.inquiryType.message}</p>
                    )}
                    <input type="hidden" {...register("inquiryType")} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        aria-invalid={!!errors.name}
                        className={cn(errors.name && "border-red-500/50")}
                        {...register("name")}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        aria-invalid={!!errors.email}
                        className={cn(errors.email && "border-red-500/50")}
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder={
                        inquiryType === "project"
                          ? "E-commerce website with AI recommendations"
                          : "Partnership opportunity"
                      }
                      aria-invalid={!!errors.subject}
                      className={cn(errors.subject && "border-red-500/50")}
                      {...register("subject")}
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-sm">{errors.subject.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project, timeline, and budget..."
                      aria-invalid={!!errors.message}
                      className={cn(errors.message && "border-red-500/50")}
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm">{errors.message.message}</p>
                    )}
                  </div>

                  {status === "success" && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                      <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-green-400 text-sm font-medium">
                          Message sent successfully!
                        </p>
                        <p className="text-green-400/70 text-sm">
                          We&apos;ll be in touch within 24 hours. Check your inbox for a confirmation email.
                        </p>
                      </div>
                    </div>
                  )}
                  {status === "error" && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-red-400 text-sm font-medium">
                          {serverError}
                        </p>
                        <p className="text-red-400/70 text-sm">
                          You can also reach us on WhatsApp for a faster response.
                        </p>
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                  >
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