"use client";

import { useState } from "react";
import { SubmissionLoader } from "@/app/ui/loaders";

interface emailDataTyoes {
  fromName: string;
  toName: string;
  toEmail: string;
  subject: string;
  message: string;
}

export function Contact(): JSX.Element {
  // Submission management
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleFormSubmission: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    // Prevent reloading
    e.preventDefault();

    const EMAIL_API =
      "https://rhljp2dd4l.execute-api.us-east-1.amazonaws.com/Prod/send-email";

    // Graphics and state chnage
    setIsSubmitting(true);

    // destructure the form data
    const formData = new FormData(e.target as HTMLFormElement);
    const name: string = formData.get("name") as string;
    const email: string = formData.get("email") as string;
    const message: string = formData.get("message") as string;

    try {
      // Send email to the person filling form
      let emailData: emailDataTyoes = {
        fromName: "Manas",
        toName: name,
        toEmail: email,
        subject: `Thanks ${name}! 😊 I'll connect with you soon!`,
        message:
          "Hi there! ✨\n\nThank you for reaching out—you're awesome! 🤩 Just a quick note to let you know that I've received your message, and I'll get back to you as soon as I can.\n\nEven though this is an automated email sent from the server, I check my inbox regularly 📬, so feel free to reply if you'd like! Don’t think of this as just another automated message—I personally wrote the template at least 😉.\n\nAlright, that’s all for now! I’ll respond to your message soon. Until then, take care and cheers! 🥂\n\n--\n\nManas Poddar\n📧 Email: manas@scienmanas.xyz\n🐙 Github: https://github.com/scienmanas\n🌐 Web: https://scienmanas.xyz",
      };
      await fetch(EMAIL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      // Send email to me (Manas) - for notification
      emailData = {
        fromName: "Manas",
        toName: "Manas",
        toEmail: "iamscientistmanas@gmail.com",
        subject: `Email from Portfolio website - ${name}`,
        message: `Hi Manas!\n\n${name} has sent you message. His/her email id is: ${email}, I know you are super busy and brave person so try to respond him asap. The message he sent is given below:\n\n${message}\n\nCheers,\nMyself (Manas)`,
      };
      await fetch(EMAIL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });
    } catch (error) {
      console.log(error);
      return;
    } finally {
      setIsSubmitting(false);
    }

    // Change the states
    setIsSubmitted(true);
  };

  return (
    <section className="contact w-full h-fit flex items-center justify-center">
      <div className="wrapper w-full max-w-screen-xl h-fit items-start px-5 flex flex-col gap-6">
        <div className="heading-andd-description w-fit h-fit text-xl sm:text-2xl flex flex-col gap-3">
          <div className="head font-semibold">
            <span className="w-fit h-fit dark:text-[#c778dd] text-[#6d2f7f]">
              ${" "}
            </span>
            <span className="font-mono w-fit h-fit text-neutral-800 dark:text-neutral-200">
              contact
            </span>
          </div>
          <div className="description font-mono w-fit h-fit text-sm sm:text-base">
            👋 Hola! I'm always{" "}
            <span className="dark:text-[#c778dd] text-[#6d2f7f]">
              reachable through email
            </span>{" "}
            📧, but if you're as lazy as me 😄, just fill out the form below and
            submit it. You’ll see some nice animations to make it fun ✨.
          </div>
        </div>
        <form
          onSubmit={handleFormSubmission}
          className="relative flex w-full items-center justify-center sm:justify-start h-fit sm:items-start"
        >
          <div className="form-wrapper relative flex flex-col gap-3 sm:gap-4 w-fit h-fit">
            <div className="relative name-email flex flex-row gap-2 sm:gap-4 w-full justify-between items-center ">
              <label
                htmlFor=""
                className="name relative w-[49.5%] sm:w-fit h-fit"
              >
                <input
                  minLength={2}
                  disabled={isSubmitting || isSubmitted}
                  required
                  placeholder="Tell me 🤓!"
                  type="text"
                  name="name"
                  id=""
                  className="relative z-0 rounded-md px-2 py-1 border-2 border-neutral-300 dark:border-neutral-500 w-full sm:w-60 h-10 bg-white dark:bg-[#2b2a33] text-sm sm:text-base outline-none hover:border-yellow-700 dark:hover:border-yellow-700 focus:border-yellow-700 dark:focus:border-yellow-700 duration-300 text-neutral-800 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-400"
                />
                <div className="placeholder absolute z-10 top-0 left-0 translate-x-2 text-sm -translate-y-[9px] px-[3px] w-fit h-fit duration-100 bg-transparent bg-gradient-to-b from-[#eaeaea] to-white dark:from-[#282c33] dark:to-[#2b2a33] font-mono text-neutral-800 dark:text-neutral-100">
                  Name
                </div>
              </label>
              <label
                htmlFor=""
                className="email relative w-[49.5%] sm:w-fit h-fit"
              >
                <input
                  disabled={isSubmitting || isSubmitted}
                  required
                  placeholder="I need it 🙄."
                  type="email"
                  name="email"
                  id=""
                  className="relative z-0 rounded-md px-2 py-1 border-2 border-neutral-300 dark:border-neutral-500 w-full sm:w-60 h-10 bg-white dark:bg-[#2b2a33] text-sm sm:text-base outline-none hover:border-yellow-700 dark:hover:border-yellow-700 focus:border-yellow-700 dark:focus:border-yellow-700 duration-300 text-neutral-800 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-400"
                />

                <div className="placeholder absolute z-10 top-0 left-0 translate-x-2 text-sm -translate-y-[9px] px-[3px] w-fit h-fit duration-100 bg-transparent bg-gradient-to-b from-[#eaeaea] to-white dark:from-[#282c33] dark:to-[#2b2a33] font-mono text-neutral-800 dark:text-neutral-100">
                  Email
                </div>
              </label>
            </div>
            <label htmlFor="" className="message relative w-full h-fit">
              <textarea
                minLength={4}
                required
                disabled={isSubmitting || isSubmitted}
                name="message"
                id=""
                className="relative z-0 rounded-md w-full border-2 border-neutral-300 dark:border-neutral-500 h-28 px-3 py-3 text-sm sm:text-base outline-none hover:border-yellow-700 dark:hover:border-yellow-700 focus:border-yellow-700 dark:focus:border-yellow-700 duration-300 placeholder:text-neutral-400 dark:placeholder:text-neutral-400"
                placeholder="Hmm, I think I am gonna get a special message today😏."
              ></textarea>
              <div className="placeholder absolute z-10 top-0 left-0 translate-x-2 text-sm -translate-y-[9px] px-[3px] w-fit h-fit duration-100 bg-transparent bg-gradient-to-b from-[#eaeaea] to-white dark:from-[#282c33] dark:to-[#2b2a33] font-mono text-neutral-800 dark:text-neutral-100">
                Message
              </div>
            </label>
            <label
              htmlFor=""
              className="relative w-fit h-fit flex items-center justify-center group sm:mt-2"
            >
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`relative z-10 w-28 h-10 dark:bg-[#794189] bg-[#6d2f7f] text-white dark:text-white font-bold text-center rounded-md border dark:border-orange-800 border-neutral-700 duration-300  flex flex-row gap-2 items-center justify-center transition-all  ${
                  isSubmitting || isSubmitted
                    ? "opacity-75 cursor-not-allowed"
                    : "hover:scale-105 active:scale-95"
                }`}
              >
                <span className="text-white w-fit h-fit">
                  {" "}
                  {isSubmitted ? "Hurray !" : "Submit"}
                </span>
                {isSubmitting && (
                  <SubmissionLoader
                    color="pink"
                    height={20}
                    width={20}
                    key={1}
                  />
                )}
              </button>
              <div className="gradient absolute z-0 w-[102%] h-[102%] bg-transparent bg-gradient-to-tr from-yellow-500 to-pink-400 dark:from-yellow-800 dark:bg-pink-800 blur-md"></div>
            </label>
            {/* To prevent attaching from attackers */}
            <input type="text" className="hidden" />
          </div>
        </form>
      </div>
    </section>
  );
}
