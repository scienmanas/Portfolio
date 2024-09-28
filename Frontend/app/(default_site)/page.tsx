import { Hero } from "@/app/ui/landing/Hero";
import { Skills } from "@/app/ui/landing/Skills";
import { Projects } from "@/app/ui/landing/Projects";
import { Flex } from "@/app/ui/landing/Flex";
import { CommunityWork } from "@/app/ui/landing/CommunityWork";
import { MoreAboutMe } from "@/app/ui/landing/MoreAboutMe";
import { Contact } from "@/app/ui/landing/Contact";
import { CursorLight } from "@/app/ui/components/cursor-light";
// import PhysicsComponent from "../ui/components/physics-compenets";

export default function Home() {
  return (
    <div className="home relative w-full h-fit flex flex-col gap-14">
      <CursorLight />
      <Hero />
      <Skills />
      <Projects />
      <Flex />
      <CommunityWork />
      <MoreAboutMe />
      <Contact />
      {/* <PhysicsComponent /> */}
    </div>
  );
}
