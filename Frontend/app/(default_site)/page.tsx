import { Hero } from "@/app/ui/landing/Hero";
import { Skills } from "@/app/ui/landing/Skills";
import { Projects } from "@/app/ui/landing/Projects";
import { Flex } from "@/app/ui/landing/Flex";
import { CommunityWork } from "@/app/ui/landing/CommunityWork";
import { MoreAboutMe } from "@/app/ui/landing/MoreAboutMe";
import { Contact } from "@/app/ui/landing/Contact";

export default function Home() {
  return (
    <div className="home w-full h-fit flex flex-col gap-14">
      <Hero />
      <Skills />
      <Projects />
      <Flex />
      <CommunityWork />
      <MoreAboutMe />
      {/* <Contact /> */}
    </div>
  );
}
