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

export function WebsiteLoader(): JSX.Element {
  const boxes: { color: string }[] = [
    { color: "bg-green-500" },
    { color: "bg-red-500" },
    { color: "bg-cyan-500" },
    { color: "bg-yellow-500" },
  ];

  return (
    <div className="loader-container w-screen h-screen flex items-center justify-center absolute">
      <div className="loader-wrapper flex items-center justify-center">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 0.70, 1],
            borderRadius: ["0%", "50%", "0%"], // Square to round and back to square
          }} // Rotate 360 degrees
          transition={{
            repeat: Infinity, // Correct spelling for infinite
            duration: 2, // Adjust duration for the rotation speed
            ease: "linear", // Smooth rotation
          }}
          className="boxes-wrapper grid grid-cols-2 grid-rows-2 gap-4"
        >
          {boxes.map((box, index) => (
            <motion.div
              key={index}
              className={`box ${box.color} w-20 h-20 opacity-80 rounded-lg`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
