"use client";

import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import markdownit from "markdown-it";
import { GPTResponseLoader } from "@/app/ui/loaders";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { MdOutlineResetTv } from "react-icons/md";
import logoImg from "@/public/assets/logo/logo.png";

// Initialize markdown-it
const md = new markdownit();

// Testing
const scienGPTUri = "https://cupm2jmod1.execute-api.us-east-1.amazonaws.com/Production/scienGPT";

// Production
// const scienGPTUri =
//   "https://kyczueqpgk.execute-api.us-east-1.amazonaws.com/Production/scienGPT";

interface chatHistoryType {
  role: "user" | "model";
  parts: { text: string }[];
}

// Declare a global interface to add the webkitSpeechRecognition property to the Window object
declare global {
  interface window {
    webkitSpeechRecognition: any;
  }
}

export function ScienGPT(): JSX.Element {
  // Refence variables
  const conversationAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);

  // variable to save chat history
  const [userQuery, setUserQuery] = useState<string>("");
  const [isResponding, setIsResponding] = useState<boolean>(false);
  const [chatHistory, setChatHistory] = useState<chatHistoryType[]>([]);
  const [isChatOpened, setIsChatOpened] = useState<boolean>(false);
  const [isResponseBlocked, setIsResponseBlocked] = useState<boolean>(false);
  const [screenSize, setScreenSize] = useState<number>(0);
  const [isSpeechRecognitionAvailable, setIsSpeechRecognitionAvailable] =
    useState<boolean | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);

  // Function to start recording
  const startRecording = () => {
    setIsRecording(true);

    // Create a new SpeechRecognition instance and configure it
    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;

    // let accumulatedTranscription = transcription;

    recognitionRef.current.onresult = (event: any) => {
      const { transcript } = event.results[event.results.length - 1][0];
      // Log the recognition results and update the transcript state
      console.log(event.results);
      setUserQuery(transcript);
    };

    // Start the speech recognition
    recognitionRef.current.start();
  };

  // function to send message to GPT
  const handleUserQuery = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Change the state to loading
    setIsResponding(true);

    // Get the form data
    const formData = new FormData(e.currentTarget);
    const userQuery: string = formData.get("query") as string;
    setUserQuery("");

    // update chat history with user query
    setChatHistory((prevChats) => [
      ...prevChats,
      {
        role: "user",
        parts: [{ text: userQuery }],
      },
    ]);

    // fetch the response from GPT
    try {
      const response = await fetch(scienGPTUri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chatHistory: chatHistory,
          prompt: userQuery,
        }),
      });

      const data = await response.json();
      if (response.status === 200 || data.statusCode === 200) {
        // now parse the body
        const parsedBody = JSON.parse(data.body);
        if (parsedBody.message === "blocked") {
          setIsResponseBlocked(true);
          // Update chat history with error message
          setChatHistory((prevChats) => [
            ...prevChats,
            {
              role: "model",
              parts: [{ text: "Sorry, I'm not able to respond at the moment" }],
            },
          ]);
        } else {
          setChatHistory((prevChats) => [
            ...prevChats,
            {
              role: "model",
              parts: [{ text: parsedBody.message }],
            },
          ]);
        }
      } else {
        console.error("Failed to fetch response from GPT");
        // Update the chat history with error message, and warning the user for exiplicit content
        setIsResponding(true);
        // Update chat historu with error message
        setChatHistory((prevChats) => [
          ...prevChats,
          {
            role: "model",
            parts: [{ text: "Sorry, I'm not able to respond at the moment" }],
          },
        ]);
      }
    } catch (error) {
      console.error(error);
      setIsResponding(true);
      // Update chat historu with error message
      setChatHistory((prevChats) => [
        ...prevChats,
        {
          role: "model",
          parts: [{ text: "Sorry, I'm not able to respond at the moment" }],
        },
      ]);
    } finally {
      setIsResponding(false);
    }
  };

  // AutoScrolling
  useEffect(() => {
    const chatContainer = conversationAreaRef.current;
    if (chatContainer) {
      // set smooth scrolling
      chatContainer.style.scrollBehavior = "smooth";
      // Create a MutationObserver to detect changes in the chat container
      const observer = new MutationObserver(() => {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      });

      // Start observing the chat container for child list changes
      observer.observe(chatContainer, { childList: true, subtree: true });

      // Cleanup the observer on component unmount
      return () => observer.disconnect();
    }
  }, []);

  // Focus on input field
  useEffect(() => {
    if ((isResponding || isChatOpened) && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isResponding, isChatOpened]);

  // Change the screen size
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cleanup effect when the component unmounts
  useEffect(() => {
    typeof window.webkitSpeechRecognition !== "undefined"
      ? setIsSpeechRecognitionAvailable(true)
      : setIsSpeechRecognitionAvailable(false);

    return () => {
      // Stop the speech recognition if it's active
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  return (
    <section className="scienGPT fixed bottom-2 z-50 right-2 w-fit h-fit">
      <motion.button
        onClick={() => setIsChatOpened(!isChatOpened)}
        disabled={isChatOpened}
        className="opener-icons absolute bottom-0 right-0 z-20 p-3 bg-[#7726d9]"
        initial={{
          borderRadius: "1.5rem",
        }}
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
          backdropFilter: "blur(5px)",
        }}
        animate={{
          width: isChatOpened ? (screenSize >= 640 ? "24rem" : "20rem") : "0",
          height: isChatOpened ? (screenSize >= 640 ? "27rem" : "23rem") : "0",
          y: isChatOpened ? -10 : 0,
          opacity: isChatOpened ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="ai-chat-container z-10 rounded-2xl shadow-lg flex flex-col justify-between overflow-hidden"
      >
        <div className="top-header w-full border-gray-300 h-fit flex flex-row justify-between py-3 px-3 bg-transparent bg-gradient-to-b from-pink-900 to-neutral-800 rounded font-mono">
          <div className="about-content-ai-bot">
            <h1 className="font-bold text-white">scienGPT</h1>
            <p className="w-fit h-fit text-neutral-100 text-xs sm:text-sm">
              Talk to my AI version 😎
            </p>
          </div>
          <div className="close-and-reset flex flex-row gap-1 items-center">
            <button
              className={`p-2 bg-red-800 rounded-lg ${
                chatHistory.length > 0
                  ? "hover:bg-red-900"
                  : "cursor-not-allowed opacity-45"
              }  duration-200 border border-pink-800`}
              onClick={() => {
                setChatHistory([]);
                setIsResponseBlocked(false);
              }}
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
        <div
          ref={conversationAreaRef}
          className="chats h-full w-full flex flex-col gap-2 overflow-y-auto px-2 pt-4 pb-20 hide-scrollbar"
        >
          {chatHistory.length === 0 && (
            <div
              className="no-conversation-screen w-full h-full items-center justify-center p-4 flex flex-col gap-1
            "
            >
              <div className="say-hi text-base sm:text-lg font-semibold w-fit h-fit text-center ">
                <ReactTyped
                  typeSpeed={20}
                  startDelay={100}
                  strings={["Say Hi 👋"]}
                />
              </div>
              <div className="welcome-text w-fit h-fit text-center text-wrap text-xs sm:text-sm">
                <ReactTyped
                  typeSpeed={20}
                  startDelay={120}
                  strings={["I'm scienGPT, lets start the conversation"]}
                  showCursor={false}
                />
              </div>
            </div>
          )}
          {chatHistory?.map((chat, index) => (
            <div
              key={index}
              className="chat-box-set w-full h-fit flex flex-col gap-1"
            >
              {chat.role === "user" ? (
                <UserQuery query={chat.parts[0].text} />
              ) : (
                <BotResponse response={chat.parts[0].text} />
              )}
            </div>
          ))}
        </div>
        {!isResponseBlocked && (
          <div className="input-box absolute bottom-0 w-full h-fit pb-1 px-2 flex flex-col items-center justify-center backdrop-blur-sm gap-[2px]">
            <form
              onSubmit={handleUserQuery}
              className="input-box flex flex-row items-center w-full h-fit rounded-xl gap-1 focus:outline-1  duration-300"
            >
              <div className="group w-full flex">
                <div
                  className="all-input w-full flex flex-row items-center justify-between dark:bg-[#1e1e20] bg-neutral-300 p-[6px] rounded-3xl group border border-transparent group-focus-within:border-pink-400 group-focus-within:border-opacity-60 transition duration-200"
                  style={{
                    transitionProperty: "border-color",
                  }}
                >
                  <input
                    required
                    autoComplete="off"
                    ref={inputRef}
                    name="query"
                    type="text"
                    minLength={2}
                    value={userQuery}
                    disabled={isResponding}
                    onChange={(e) => setUserQuery(e.target.value)}
                    className={`w-full h-full dark:bg-[#1e1e20] bg-neutral-300 dark:text-neutral-300 text-neutral-800 rounded-md  outline-none dark:placeholder:text-neutral-400 placeholder:text-neutral-600 px-2 py-1 text-xs sm:text-sm ${
                      isResponding ? "cursor-not-allowed" : ""
                    }`}
                    placeholder="Type your message"
                  />
                  {isSpeechRecognitionAvailable && (
                    <motion.button
                      onClick={() => {
                        if (!isRecording) {
                          setIsRecording(true);
                          startRecording();
                        } else {
                          setIsRecording(false);
                          recognitionRef.current.stop();
                        }
                      }}
                      type="button"
                      disabled={isResponding}
                      className={`speech-button group p-1 ${
                        isResponding
                          ? "cursor-not-allowed"
                          : "hover:bg-red-700 dark:hover:bg-red-800 "
                      } ${
                        isRecording ? "bg-red-700 dark:bg-red-800" : ""
                      } rounded-2xl duration-200`}
                      animate={{
                        scale: isRecording ? [1, 1.2, 1] : 1, // Scale up and down
                        opacity: isRecording ? [1, 0.7, 1] : 1, // Fade in and out
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop", // Make it repeat infinitely
                        ease: "easeInOut",
                      }}
                    >
                      <MdOutlineKeyboardVoice
                        className={`text-xl ${
                          isRecording
                            ? "text-white dark:text-white"
                            : "text-neutral-800 dark:text-neutral-200 hover:text-white dark:hover:text-white"
                        }`}
                      />
                    </motion.button>
                  )}
                </div>
              </div>
              <button
                disabled={isResponding || isRecording}
                type="submit"
                className={`${
                  isResponding || isRecording
                    ? isRecording
                      ? "bg-green-700 cursor-not-allowed"
                      : "bg-[#0057ff] cursor-not-allowed"
                    : "bg-green-700 hover:bg-green-800"
                } p-2 duration-200 rounded-2xl w-fit h-fit`}
              >
                {isResponding ? (
                  <GPTResponseLoader color="pink" width={15} height={15} />
                ) : (
                  <FiSend className="text-base text-neutral-200" />
                )}
              </button>
            </form>
            <div
              style={{
                fontSize: "0.6rem",
              }}
              className="disclaimer text-xs text-neutral-700 dark:text-neutral-400"
            >
              ⚙️ Fine-tuned Gemini | Info may be inaccurate ⚠️
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}

function UserQuery({ query }: { query: string }): JSX.Element {
  return (
    <div className="user-query w-full h-fit flex justify-end">
      <div className="message-container w-fit h-fit max-w-[200px] flex flex-row-reverse  items-start gap-1">
        <p className="w-fit h-fit text-xs sm:text-sm px-2 py-1 rounded-md  bg-transparent bg-gradient-to-br from-[#3f5870] to-[#783b38] text-white">
          {query}
        </p>
      </div>
    </div>
  );
}

function BotResponse({ response }: { response: string }): JSX.Element {
  // Parse the response (Markdown to HTML)
  const parsedResponse = md.render(response);

  return (
    <div className="ai-response w-fit h-fit flex flex-row  items-start gap-1">
      <div className="image w-[27px] h-[27px]">
        <Image
          src={logoImg}
          alt="logo"
          width={27}
          height={27}
          className="rounded-full border"
        />
      </div>
      <p className="w-fit h-fit text-xs sm:text-sm px-3 py-2 bg-transparent bg-gradient-to-br from-[#3f5870] to-[#783b38] rounded-r-2xl rounded-bl-2xl rounded-tl-sm text-white text-wrap max-w-[220px]">
        <ReactTyped
          strings={[parsedResponse]}
          startDelay={100}
          typeSpeed={30}
          showCursor={false}
        />
      </p>
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
