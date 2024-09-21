export function MoreAboutMe(): JSX.Element {
  return (
    <section className="more-about-me w-full h-fit flex items-center justify-center">
      <div className="wrapper w-full max-w-screen-xl h-fit flex flex-col items-start px-5 gap-4">
        <div className="heading flex items-center flex-row w-fit h-fit text-xl sm:text-2xl font-semibold gap-1">
          <span className="dark:text-[#c778dd] text-[#6d2f7f]">$</span>
          <span className="font-mono sm:translate-y-1 text-neutral-800 dark:text-white">
            about-me
          </span>
        </div>
        <div className="more-about-me-text w-fit h-fit dark:text-neutral-200 text-neutral-800 text-sm sm:text-base font-mono flex flex-col gap-4">
          <div className="more-about-me-para-1">
            Apart from these tech stuff, I listen to a lot of music, play
            synthesizer 🎹, like to read thriller + romantic novels , and watch
            cartoons and magic shows. Yes, I am a "porter head", Hogwarts is my
            home. Being a JEE student, I think I have always loved Physics , and
            I'm crazy about discussions on Black Holes, Dark Matter, Dark
            Energy, etc. That's why I chose to lead my college Astronomy Club!
          </div>
          <div className="more-about-me-para-2">
            I also do a little bit of poetry; you can read that in the blogs.
            Yeah, that's it! You read quite far. Thanks for sticking around! 🙌
          </div>
        </div>
      </div>
    </section>
  );
}
