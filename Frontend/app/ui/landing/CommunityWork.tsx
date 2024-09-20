export function CommunityWork(): JSX.Element {
  return (
    <section className="community-work w-full h-fit flex items-center justify-center">
      <div className="wrapper w-full max-w-screen-xl h-fit flex flex-col gap-6 items-start px-5">
        <div className="heading w-fit h-fit text-2xl flex items-center gap-1 font-semibold">
          <span className="text-[#c788dd]">$</span>
          <span className="font-mono text-white translate-y-1">
            community work
          </span>
        </div>
        <div className="gyan-dena font-mono text-neutral-200 dark:text-neutral-100 flex flex-col gap-4 ">
          <div className="flex-work-item-1">
            To flex, I have some of the stuff, I coordinated my college{" "}
            <span className="text-[#c778dd]">
              [Indian Institute of Technology(IIT) Tiruapti]
            </span>
            , astronomy club - Gagan Vedhi for continously 2 years dealing with
            <span className="text-[#c778dd]">
              {" "}
              oragnization and team mamagement stuff
            </span>
            . From incresing the reputation to making it one of the top
            community loved club in my college, I made it do. to some I did put
            lot of effort in doing this and now I think it's already on right
            way to building.
          </div>
          <div className="flex-work-item-2">
            I have also done work which i don't think it's which I should flex,
            but here it goes: "I have conducted gen-ai bot building workshops,
            unoffically helping other club's team -{" "}
            <span className="text-[#c778dd]">gyan fekhna</span>, etc." Also I
            active in raising an{" "}
            <span className="text-[#c778dd]">issue on github</span> coz bugs
            gets attached to many times.
          </div>
        </div>
      </div>
    </section>
  );
}
