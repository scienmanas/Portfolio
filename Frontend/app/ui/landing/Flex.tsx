import Link from "next/link";

interface AchievementsDataType {
  name: string;
  description: string;
  link?: string;
  date?: string;
}

export function Flex(): JSX.Element {
  const achievementsData: AchievementsDataType[] = [
    {
      name: "Top Presentation",
      description:
        "I along with my amazing team was honoured among top presenters for our research work in Indo-Canadian Symposium",
      link: "https://drive.google.com/file/d/1EBWiMrzn2yjQcBKZlYt_Kuxi03wlHgFD/view",
      date: "Feb, 2024",
    },
    {
      name: "1st Prize, Hackbells",
      description:
        "Me and my friend Arpit bagged the first prize in 24 hours hackathon, we worked on a completely different cyber security tool, giving us an edge over other participants.",
      link: "https://devfolio.co/projects/hackbell-bot-c98d",
      date: "Feb 2024",
    },
    {
      name: "Finalist - EyeInvent",
      description:
        "Our team consisting of two doctors, went to finalist in Eye Invent. We developed and printed a CAD model automating the holding of 90 D lens.",
      date: "Feb 2024",
    },
    {
      name: "Top 10% AWS DeepRacer Student",
      description:
        "I was in Top 10% among all the students in India region in monthly AWS DeepRacer Student League in July 2023 race",
      link: "https://drive.google.com/file/d/1jb0IKKwrmqoqxGdv32QFtLa9VUrQyKdx/view",
      date: "July 2023",
    },
    {
      name: "Bronze Medal - Inter IIT 11.0",
      description:
        "Me along with my amazing team worked on formulating and presenting a solution to a real-world problem which involved complex decision-making. Guess what, we were first in the last round among all other IITs.",
      link: "https://drive.google.com/file/d/1wnYmdBfAT-la8h7sTzAsRd1MBIHtrpM4/view",
      date: "Feb 2023",
    },
    {
      name: "2nd Prize - Cosmic Innovation Challenge",
      description:
        "Again, me and my friend Arpit bagged the 2nd prize for our presentation of an innovative idea to deal with the problem of space debris which can be done using gecko technology, robotic arm, and by exploiting cosmic deposition charges.",
      link: "https://drive.google.com/file/d/1ZMlah5ZQJtnLCwvLtuyvo99iAOcYJM7r/view",
      date: "Jan 2023",
    },
  ];

  return (
    <section className="w-full h-fit flex items-center justify-center">
      <div className="wrapper w-full h-fit max-w-screen-xl flex flex-col gap-5 px-5 items-start">
        <div className="heading flex flex-row gap-1 w-fit h-fit items-center text-white dark:text-white text-2xl font-semibold">
          <span className="text-[#c788dd]">$</span>
          <span className="font-mono translate-y-1">flex</span>
        </div>
        <div className="some-words text-white font-mono flex flex-col gap-6">
          <div className="w-fit h-fit">
            The thing I really flex is my{" "}
            <span className="text-[#c778dd]">
              consistency, commitment & straightforwardness
            </span>
            , I give to the task which I take. I always try to do up to the
            level till I am completely exhausted/tired and cannot handle
            anymore. I have a simple policy, I don't give a fcuk to anything
            which comes twisted to me.
          </div>
          <div className="info-plus-data-achievements flex flex-col gap-10 items-start">
            <div className="more-info-2nd-para w-fit h-fit">
              Okay, I said enough, some of my{" "}
              <span className="text-[#c778dd]">on-paper achievements</span>:
            </div>
            <div className="timeline flex flex-col gap-5 border-l-2 py-5 rounded-lg relative">
              {achievementsData.map((achievement, index) => (
                <div
                  key={index}
                  className="timeline-item relative px-5 before:absolute before:w-3 before:h-3 before:bg-white before:-left-[7px] before:border before:border-red-400 before:rounded-full "
                >
                  <div className="timeline-content">
                    <span className="text-[#d4a3e6] dark:text-[#d4a3e6] font-semibold">
                      {achievement.name}:{" "}
                    </span>
                    <span className="text-neutral-300 text-sm">
                      {achievement.description}{" "}
                    </span>
                    {achievement.date && (
                      <span className="text-neutral-500 text-xs">
                        ({achievement.date}){" "}
                      </span>
                    )}
                    {achievement.link && (
                      <Link
                        href={achievement.link}
                        className="text-blue-400 hover:text-blue-300 duration-300 text-xs"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View more
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
