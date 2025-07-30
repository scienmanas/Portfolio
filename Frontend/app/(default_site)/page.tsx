import { Hero } from "@/app/ui/landing/Hero";
import { Skills } from "@/app/ui/landing/Skills";
// import { Projects } from "@/app/ui/landing/Projects";
import { Flex } from "@/app/ui/landing/Flex";
import { CommunityWork } from "@/app/ui/landing/CommunityWork";
import { MoreAboutMe } from "@/app/ui/landing/MoreAboutMe";
import { Contact } from "@/app/ui/landing/Contact";
// import { GithubMap } from "@/app/ui/components/github-map";
// import { UserInfo } from "@/app/ui/landing/UserInfo";

export default function Home() {
  return (
    <div className="home relative w-full h-fit flex flex-col gap-14 lg:gap-28 overflow-hidden py-4">
      <div className="contents-all w-full h-fit flex items-center justify-center flex-col gap-10">
        <div className="wrapper relative w-full max-w-screen-xl h-fit flex flex-col gap-14 lg:gap-28 overflow-hidden py-4 px-5 items-center justify-center">
          <Hero />
          <Skills />
          {/* <Projects /> */}
          <Flex />
          <CommunityWork />
          <MoreAboutMe />
          <Contact />
          {/* <GithubMap /> */}
        </div>
        {/* For less space at bottom */}
        <div className="wrapper relative w-full max-w-screen-xl h-fit flex overflow-hidden px-5 items-center justify-center">
          {/* <UserInfo /> */}
        </div>
      </div>
    </div>
  );
}
