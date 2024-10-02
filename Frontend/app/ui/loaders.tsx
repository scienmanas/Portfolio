import { submissionLoaderProps } from "@/app/lib/definitions";
import { motion } from "framer-motion";

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
    { color: "bg-green-500" },
    { color: "bg-red-500" },
    { color: "bg-cyan-500" },
    { color: "bg-yellow-500" },
  ];

  return (
    <div
      className={`loader-container flex items-center justify-center duration-[2000ms] transition-all ${
        mounted ? "-z-10 transform -translate-y-1/2 -translate-x-1/2 opacity-40 fixed w-96 h-96" : "transform translate-y-0 absolute z-20 backdrop-blur-md w-dvw h-dvh"
      }`}
    >
      <div className={`loader-wrapper flex items-center justify-center w-fit h-fit`}>
        <div className="boxes-wrapper grid grid-cols-2 grid-rows-2 animate-rotate">
          {boxes.map((box, index) => (
            <div
              key={index}
              className={`box-rotating ${box.color} w-20 h-20 opacity-80`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
