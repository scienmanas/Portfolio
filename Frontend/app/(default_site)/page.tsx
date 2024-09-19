import { Hero } from "@/app/ui/landing/Hero";
import { Skills } from "@/app/ui/landing/Skills";
import { Projects } from "@/app/ui/landing/Projects";

export default function Home() {
  return (
    <div className="home w-full h-fit flex flex-col gap-14">
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}
