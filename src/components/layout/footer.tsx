import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-electric-500/20 border border-electric-500/30">
              <Sparkles className="w-4 h-4 text-electric-400" />
            </div>
            <span className="font-heading font-bold text-white">
              Code<span className="text-electric-400">ify</span>
            </span>
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
            <Link href="#about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="#services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#work" className="hover:text-white transition-colors">
              Work
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          <p className="text-sm text-white/40">
            © {currentYear} Codeify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}