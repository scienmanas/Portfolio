"use client";

import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";
import { SubmissionLoader } from "@/app/ui/loaders";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { MdOutlineResetTv } from "react-icons/md";
import { RiChatSmileLine } from "react-icons/ri";

const scienGPTUri =
  "https://kyczueqpgk.execute-api.us-east-1.amazonaws.com/Production/scienGPT";

interface chatHostoryType {
  user: string;
  gpt: string;
}

export function ScienGPT(): JSX.Element {
  // variable to save chat history
  const [userQuery, setUserQuery] = useState<string>("");
  const [isResponding, setIsResponding] = useState<boolean>(false);
  const [chatHistory, setChatHistory] = useState<chatHostoryType[] | null>(
    null
  );
  const [isChatOpened, setIsChatOpened] = useState<boolean>(false);

  // function to send message to GPT
  const handleUserQuery = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Fetching response from GPT");
    console.log("User: Hi");

    // Chhange the state to loading
    setIsResponding(true);

    const prompt = "Hi";

    // fetch the response from GPT
    try {
      const response = await fetch(scienGPTUri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        // Update the chat history
      } else {
        console.error("Failed to fetch response from GPT");
        // Update the chat history with error message, and warning the user for exiplicit content
      }
    } catch (error) {
      console.error(error);
      // Update chat historu with error message
    } finally {
      setIsResponding(false);
    }
  };

  return (
    <section className="scienGPT fixed bottom-2 z-50 right-2 w-fit h-fit font-mono">
      <motion.button
        onClick={() => setIsChatOpened(!isChatOpened)}
        disabled={isChatOpened}
        className="opener-icons relative z-20 p-3 rounded-3xl bg-[#7726d9]"
        animate={{
          y: isChatOpened ? 20 : 0,
          opacity: isChatOpened ? 0 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.1,
        }}
      >
        <AIChatSVG />
      </motion.button>
      <motion.div
        initial={{
          opacity: 0,
        }}
        className="ai-chat-container absolute z-10 bottom-2 right-2 w-96 h-96 rounded-2xl shadow-lg flex flex-col justify-between overflow-hidden"
        animate={{
          y: isChatOpened ? -10 : 0,
          opacity: isChatOpened ? 1 : 0,
        }}
      >
        <div className="top-header w-full border-gray-300 h-fit flex flex-row justify-between py-3 px-3 bg-transparent bg-gradient-to-b from-pink-900 to-neutral-800 rounded">
          <div className="about-content-ai-bot">
            <h1 className="font-bold text-white">scienGPT</h1>
            <p className="w-fit h-fit text-neutral-100 text-xs sm:text-sm">
              Talk to my AI version 😎
            </p>
          </div>
          <div className="close-and-reset flex flex-row gap-1 items-center">
            <button
              className="p-2 bg-red-800 rounded-lg hover:bg-red-900 duration-200 border border-pink-800"
              onClick={() => setChatHistory(null)}
            >
              <MdOutlineResetTv className="text-xl text-white" />
            </button>
            <button
              className="p-2 bg-cyan-700 rounded-lg hover:bg-cyan-800 duration-200 border border-neutral-600"
              onClick={() => setIsChatOpened(false)}
            >
              <IoMdArrowDropdown className="text-xl text-white" />
            </button>
          </div>
        </div>
        <div className="chats h-full backdrop-blur-sm "></div>
        <div className="input-box absolute bottom-0 w-full h-[3.3rem] p-2 flex items-center justify-center">
          <form
            onSubmit={handleUserQuery}
            className="input-box flex flex-row items-center w-full h-full rounded-xl gap-1 focus:outline-1  duration-300"
          >
            <div className="group w-full flex">
              <div className="all-input w-full flex flex-row items-center justify-between dark:bg-[#1e1e20] bg-neutral-300 p-[6px] rounded-3xl group border border-transparent group-focus-within:border-pink-400 group-focus-within:border-opacity-60 transition-colors duration-300">
                <input
                  type="text"
                  value={userQuery}
                  disabled={isResponding}
                  onChange={(e) => setUserQuery(e.target.value)}
                  className="w-full h-full dark:bg-[#1e1e20] bg-neutral-300 dark:text-neutral-300 text-neutral-800 rounded-md  outline-none dark:placeholder:text-neutral-400 placeholder:text-neutral-600 px-2 py-1 text-xs sm:text-sm"
                  placeholder="Type your message"
                />
                <button
                  disabled={isResponding}
                  className="p-1 hover:bg-neutral-400 dark:hover:bg-neutral-700 rounded-2xl duration-200"
                >
                  <MdOutlineKeyboardVoice className="text-xl text-neutral-800 dark:text-neutral-200" />
                </button>
              </div>
            </div>
            <button
              disabled={isResponding}
              type="submit"
              className="bg-green-700 hover:bg-green-800 duration-200 p-2 rounded-2xl w-fit h-fit"
            >
              <FiSend className="text-base text-neutral-200" />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

function UserQuery(): JSX.Element {
  return (
    <div className="user-query w-full h-fit flex flex-row gap-3">
      <div className="query-box w-fit h-fit bg-gradient-to-br from-pink-800 to-pink-900 rounded-lg p-3">
        <p className="text-white">Hi</p>
      </div>
    </div>
  );
}

function BotResponse(): JSX.Element {
  return (
    <div className="bot-response w-full h-fit flex flex-row justify-end gap-3">
      <div className="response-box w-fit h-fit bg-gradient-to-br from-pink-800 to-pink-900 rounded-lg p-3">
        <p className="text-white">Hello, I am scienGPT. How can I help you?</p>
      </div>
    </div>
  );
}

function AIChatSVG(): JSX.Element {
  return (
    <svg
      className="text-white w-6 h-6"
      fill="currentColor"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 28 32"
    >
      <path d="M28,32 C28,32 23.2863266,30.1450667 19.4727818,28.6592 L3.43749107,28.6592 C1.53921989,28.6592 0,27.0272 0,25.0144 L0,3.6448 C0,1.632 1.53921989,0 3.43749107,0 L24.5615088,0 C26.45978,0 27.9989999,1.632 27.9989999,3.6448 L27.9989999,22.0490667 L28,22.0490667 L28,32 Z M23.8614088,20.0181333 C23.5309223,19.6105242 22.9540812,19.5633836 22.5692242,19.9125333 C22.5392199,19.9392 19.5537934,22.5941333 13.9989999,22.5941333 C8.51321617,22.5941333 5.48178311,19.9584 5.4277754,19.9104 C5.04295119,19.5629428 4.46760991,19.6105095 4.13759108,20.0170667 C3.97913051,20.2124916 3.9004494,20.4673395 3.91904357,20.7249415 C3.93763774,20.9825435 4.05196575,21.2215447 4.23660523,21.3888 C4.37862552,21.5168 7.77411059,24.5386667 13.9989999,24.5386667 C20.2248893,24.5386667 23.6203743,21.5168 23.7623946,21.3888 C23.9467342,21.2215726 24.0608642,20.9827905 24.0794539,20.7254507 C24.0980436,20.4681109 24.0195551,20.2135019 23.8614088,20.0181333 Z"></path>
    </svg>
  );
}
