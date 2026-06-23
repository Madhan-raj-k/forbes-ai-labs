import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Team } from "@/components/sections/team";
import { Contact } from "@/components/sections/contact";
import { getProjects } from "@/lib/projects";

export const revalidate = 60; // Revalidate portfolio every 60 seconds

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio projects={projects} />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}