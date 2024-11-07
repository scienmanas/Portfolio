import { submissionLoaderProps } from "@/app/lib/definitions";

export function SubmissionLoader({
  width,
  height,
  color,
}: submissionLoaderProps): JSX.Element {
  return (
    <div className="flex justify-center items-center w-fit h-fit">
      {/* Spinner element with dynamic styles */}
      <div
        style={{
          width: width, // Width of the spinner
          height: height, // Height of the spinner
          borderColor: color, // Color of the spinner border
        }}
        className="animate-spin rounded-full border-b-2"
      ></div>
    </div>
  );
}

export function WebsiteLoader({ mounted }: { mounted: boolean }): JSX.Element {
  const boxes: { color: string }[] = [
    { color: "bg-purple-500" },
    { color: "bg-orange-500" },
    { color: "bg-blue-500" },
    { color: "bg-pink-500" },
  ];

  return (
    <div
      className={`loader-container flex items-center justify-center duration-[2000ms] transition-all ${
        mounted
          ? "-z-10 transform -translate-y-1/2 -translate-x-1/2 opacity-40 fixed w-[176px] h-[176px]"
          : "transform translate-y-0 fixed z-20 backdrop-blur-md w-dvw h-dvh"
      }`}
    >
      <div
        className={`loader-wrapper flex flex-col gap-6 items-center justify-center flex-wrap w-fit h-fit`}
      >
        <div className="boxes-wrapper grid grid-cols-2 grid-rows-2 animate-rotate">
          {boxes.map((box, index) => (
            <div
              key={index}
              className={`box-rotating ${box.color} w-20 h-20 opacity-80`}
            />
          ))}
        </div>
        {!mounted && (
          <div className="text font-mono dark:text-yellow-500 text-green-900 font-bold text-center text-wrap">
            Just a moment buddy...
          </div>
        )}
      </div>
    </div>
  );
}

export function GPTResponseLoader({
  width,
  height,
  color,
}: submissionLoaderProps): JSX.Element {
  return (
    <div className="flex justify-center items-center w-fit h-fit">
      <div
        style={{
          width: width,
          height: height,
          backgroundColor: color,
        }}
        className="animate-spin"
      ></div>
    </div>
  );
}
