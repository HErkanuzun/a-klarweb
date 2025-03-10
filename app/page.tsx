import { HeroSection } from "@/components/hero-section";
import { Timeline } from "@/components/timeline";
import { Projects } from "@/components/projects";
import { FutureProjects } from "@/components/future-projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-16">
      <HeroSection />
      <Timeline />
      <Projects />
      <FutureProjects />
    </main>
  );
}