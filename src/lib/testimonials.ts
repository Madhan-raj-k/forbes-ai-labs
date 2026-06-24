export type Testimonial = {
  id: string;
  quote: string;
  clientName: string;
  company: string;
  role: string;
  image: string;
};

/**
 * Replace placeholder testimonials with real client quotes as they come in.
 * Client images can be local paths (/testimonials/name.jpg) or URLs.
 */
export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Codeify delivered our MVP in record time. Their AI integration expertise saved us months of development and the quality exceeded our expectations.",
    clientName: "Sarah Mitchell",
    company: "TechStart Inc.",
    role: "CEO",
    image: "https://ui-avatars.com/api/?name=Sarah+Mitchell&background=3b82f6&color=fff&size=128",
  },
  {
    id: "2",
    quote:
      "Working with a student team was refreshing — they're hungry, creative, and incredibly responsive. Our dashboard project was completed on budget and ahead of schedule.",
    clientName: "James Chen",
    company: "DataFlow Solutions",
    role: "Product Manager",
    image: "https://ui-avatars.com/api/?name=James+Chen&background=2563eb&color=fff&size=128",
  },
  {
    id: "3",
    quote:
      "The chatbot they built handles 80% of our customer inquiries automatically. Professional work at a fraction of what traditional agencies quoted us.",
    clientName: "Priya Sharma",
    company: "RetailHub",
    role: "Operations Director",
    image: "https://ui-avatars.com/api/?name=Priya+Sharma&background=1d4ed8&color=fff&size=128",
  },
  {
    id: "4",
    quote:
      "From concept to launch in three weeks. Codeify understood our vision immediately and translated it into a polished, production-ready web application.",
    clientName: "Marcus Williams",
    company: "Innovate Labs",
    role: "Founder",
    image: "https://ui-avatars.com/api/?name=Marcus+Williams&background=60a5fa&color=fff&size=128",
  },
  {
    id: "5",
    quote:
      "Transparent communication throughout the project. They kept us in the loop at every stage and delivered exactly what we needed — no surprises.",
    clientName: "Elena Rodriguez",
    company: "GreenPath Co.",
    role: "Marketing Lead",
    image: "https://ui-avatars.com/api/?name=Elena+Rodriguez&background=3b82f6&color=fff&size=128",
  },
];