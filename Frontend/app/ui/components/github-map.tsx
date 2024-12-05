// "use client";

// import { motion } from "framer-motion";

// const USER_NAME = "scienmanas";

// export function GithubMap(): JSX.Element {
//   const fetchGithubDaata = async () => {
//     // Query
//     const query = `
//         query {
//             user(login: "${USER_NAME}") {
//                 contributionsCollection {
//                     constributionsCalender {
//                         weeks {
//                             contributionDays {
//                                 date
//                                 contributionCount
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//         `;

//     // Call the GitHub API
//     const response = await fetch("https://api.github.com/graphql", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
//       },
//       body: JSON.stringify({ query }),
//     });

//     const data = await response.json();
//     console.log(data);
//   };

//   return (
//     <section className="github-map w-full h-fit flex items-center justify-center font-mono">
//       <div className="wrapper w-full max-w-screen-xl h-fit flex items-start justify-start px-5">
//         <motion.div
//           initial={{
//             opacity: 0,
//             x: 10,
//           }}
//           whileInView={{
//             opacity: 1,
//             x: 0,
//           }}
//           transition={{
//             delay: 0.4,
//             duration: 0.6,
//             ease: "easeInOut",
//           }}
//           viewport={{ once: true }}
//           className="heading font-semibold text-xl sm:text-2xl flex flex-row items-center gap-1 w-fit"
//         >
//           <span className="w-fit h-fit dark:text-[#c778dd] text-[#6d2f7f]">
//             ${" "}
//           </span>
//           <span className="font-mono w-fit h-fit text-neutral-800 dark:text-neutral-200">
//             github map
//           </span>
//         </motion.div>
//         <div className="github-map"></div>
//       </div>
//     </section>
//   );
// }
