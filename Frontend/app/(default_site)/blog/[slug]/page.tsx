// Import necessary modules and components
import { Metadata } from "next"; // Metadata type for Next.js dynamic metadata
import { getBlogPostData } from "@/app/utils/getBlogData"; // Utility function to fetch blog post data
import { formatDate } from "@/app/utils/dateFormatter"; // Utility function to format the date
import Markdown from "markdown-to-jsx"; // Markdown component to render blog content as JSX
import Image from "next/image"; // Next.js Image component for optimized image rendering
import { FaWhatsapp } from "react-icons/fa"; // Importing icons from react-icons for social sharing
import { FaXTwitter } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa"; // Icon for displaying read time and published date
import { IconType } from "react-icons"; // Type for icon prop in the sharing link configuration
import { IoChevronBack } from "react-icons/io5"; // Icon for the "back" button
import Link from "next/link"; // Link component from Next.js for navigation

// Define the BlogPageProps type for the BlogPage component
type BlogPageProps = {
  params: { slug: string }; // Blog post slug received as a parameter
};

// Define SharingLinkConfigProps as an array of objects for social sharing links
type SharingLinkConfigProps = {
  name: string;
  icon: IconType;
  link: string;
  className: string;
}[];

// Asynchronously generate metadata for the blog page using the slug from the params
export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const blogData = getBlogPostData("blogs", params.slug); // Fetch blog data based on slug

  // Construct a dynamic OpenGraph image URL based on environment variables
  const ogImageURL = `${process.env.DOMAIN}` + blogData.image;

  // Return the metadata object, including OpenGraph and Twitter details
  return {
    metadataBase: new URL(process.env.DOMAIN as string), // Base URL for metadata
    title: `${blogData.head} - Blogs`, // Dynamic title for SEO
    description: blogData.title, // Blog description for SEO
    keywords: ["reading", "article", "tech", "knowledge"], // Relevant keywords
    robots: "index, follow", // Instructions for search engine indexing
    openGraph: {
      title: blogData.title, // OpenGraph title
      description: blogData.description, // OpenGraph description
      url: `${process.env.DOMAIN}/blog/${params.slug}`, // Dynamic URL for the blog post
      images: [ogImageURL], // Dynamic image for OpenGraph
      type: "article", // OpenGraph type
      siteName: `Landify`, // Site name for OpenGraph
      locale: "en_US", // Locale for OpenGraph
    },
    twitter: {
      card: "summary_large_image", // Twitter card type
      title: blogData.title, // Twitter title
      description: blogData.description, // Twitter description
      images: [ogImageURL], // Dynamic image for Twitter
      creator: "@ScientistManas", // Twitter handle of the creator
    },
  };
}

// Blog page component that renders the blog post content and sharing links
export default function BlogsPage({ params }: BlogPageProps): JSX.Element {
  const pageURL = process.env.DOMAIN + `/blog/${params.slug}`; // Construct page URL for sharing
  const blogData = getBlogPostData("blogs", params.slug); // Fetch blog post data

  // Calculate the total number of words and reading time
  const totalWords = blogData.content.split(/\s+/).filter((element) => {
    return element.length !== 0;
  }).length;
  const readTime = totalWords / 250; // Estimate reading time assuming 250 words per minute
  let readTimeDisp: number;
  let readTimeDisText: string;

  // Handle different cases for displaying reading time
  if (Math.ceil(readTime) === 0) {
    readTimeDisp = Math.ceil(readTime * 60); // If less than a minute, convert to seconds
    readTimeDisText = `${readTimeDisp} sec`; // Display in seconds
  } else if (Math.ceil(readTime) >= 60) {
    readTimeDisp = Math.ceil(readTime / 60); // Convert to hours if more than 60 minutes
    readTimeDisText = `${readTimeDisp} hr`; // Display in hours
  } else {
    readTimeDisp = Math.ceil(readTime); // Otherwise, display in minutes
    readTimeDisText = `${readTimeDisp} min`; // Display in minutes
  }

  // Configuration for social sharing links
  const sharingConfig: SharingLinkConfigProps = [
    {
      name: "whatsapp",
      icon: FaWhatsapp,
      link: `https://wa.me/?text=${encodeURIComponent(pageURL)}`,
      className: "hover:text-green-600 dark:hover:text-green-400", // WhatsApp sharing link
    },
    {
      name: "Mail",
      icon: IoMailOpenOutline,
      link: `mailto:?subject=${encodeURIComponent(
        `Read the blog: "${blogData.title}"`
      )}&body=${encodeURIComponent(pageURL)}`,
      className: "hover:text-blue-500 dark:hover:text-blue-400", // Email sharing link
    },
    {
      name: "Twiiter (X)",
      icon: FaXTwitter,
      link: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        pageURL
      )}&text=${encodeURIComponent(`Read the blog: "${blogData.title}"`)}`,
      className: "hover:text-neutral-700 dark:hover:text-neutral-300", // Twitter sharing link
    },
    {
      name: "Linkedin",
      icon: FaLinkedinIn,
      link: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        pageURL
      )}`,
      className: "hover:text-blue-500 dark:hover:text-blue-400", // LinkedIn sharing link
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
      link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        pageURL
      )}`,
      className: "hover:text-blue-700 dark:hover:text-blue-500", // Facebook sharing link
    },
  ];

  // JSX for rendering the blog page content
  return (
    <section className="w-full p-4 h-fit flex items-center justify-center mt-16">
      <div className="wrapper w-full h-fit max-w-screen-xl flex items-center justify-center">
        <article className="post p-2 flex flex-col gap-6 w-[900px] h-fit items-center justify-center">
          <section className="title-time-description-and-image flex flex-col items-center justify-center w-full h-fit gap-4">
            <div className="content w-full h-fit items-start justify-start p-1 flex flex-col gap-2">
              <div className="date-and-read-and-title flex flex-col">
                <div className="date-and-read flex flex-row gap-1 text-sm sm:text-base">
                  <div className="w-fit h-fit date flex flex-row gap-1 items-center text-neutral-700 dark:text-neutral-400">
                    <FaRegClock /> {/* Display publish date */}
                    <span className="w-fit h-fit">
                      {formatDate(blogData.publishedDate)}
                    </span>
                  </div>
                  <div className="w-fit h-fit">·</div>
                  <div className="w-fit h-fit read-time text-neutral-700 dark:text-neutral-400">
                    {readTimeDisText} {/* Display calculated reading time */}
                  </div>
                </div>
                <div className="title font-bold text-2xl lg:text-5xl text-neutral-800 dark:text-neutral-200">
                  {blogData.title} {/* Display blog title */}
                </div>
              </div>
              <div className="description text-xl text-neutral-600 dark:text-neutral-400">
                {blogData.description} {/* Display blog description */}
              </div>
            </div>
            <div className="image w-fit h-fit items-center justify-center rounded-lg">
              <Image
                width={900}
                height={506}
                src={blogData.image} // Display the blog image
                alt={`${params.slug}-image`}
                className="w-fit h-fit rounded-lg object-cover"
              />
            </div>
          </section>
          <section className="post-content-and-share h-fit w-fit flex flex-col gap-6">
            <div className="post-content text-base text-neutral-700 dark:text-neutral-300 sm:text-lg markdown">
              <Markdown>{blogData.content}</Markdown>{" "}
              {/* Render blog content */}
            </div>
            <div className="relative tags-and-share flex flex-row flex-wrap gap-6 w-full items-center justify-between">
              <div className="tags w-fit h-fit flex flex-row gap-2 items-center">
                {blogData.tags.map((tag: string, index: number) => (
                  <div
                    key={index}
                    className="tag px-2 py-1 bg-neutral-300 text-neutral-700 dark:text-neutral-300 dark:bg-neutral-600 rounded-sm"
                  >
                    {tag} {/* Display blog tags */}
                  </div>
                ))}
              </div>
              <div className="share flex flex-row gap-2 w-fit h-fit items-center">
                <div className="text-share w-fit h-fit text-neutral-500 dark:text-neutral-400 font-semibold text-base sm:text-lg">
                  Share:
                </div>
                <div className="share-link-wrapper flex flex-row gap-2 w-fit h-fit">
                  {sharingConfig.map((share, index) => (
                    <Link
                      href={share.link} // Generate social sharing links
                      key={index}
                      className={`${share.name} w-fit h-fit`}
                    >
                      <share.icon
                        className={`text-lg text-neutral-500 dark:text-neutral-400 ${share.className} w-fit h-fit duration-300`}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="back-button w-fit mt-6">
              <button className="w-fit h-fit hover:bg-neutral-200 dark:hover:bg-neutral-700 px-3 py-3 duration-300 rounded-3xl group">
                <Link
                  href={"/blog"} // Link to navigate back to the blog list
                  className="flex flex-row w-fit h-fit items-center gap-1 group"
                >
                  <IoChevronBack className="text-neutral-700 hover:text-neutral-800 dark:text-neutral-300  dark:hover:text-neutral-200 group-hover:-translate-x-1 duration-300" />
                  <span className="text-neutral-700 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-200 w-fit h-fit duration-300 ">
                    Back to blog {/* Button text */}
                  </span>
                </Link>
              </button>
            </div>
          </section>
        </article>
      </div>
    </section>
  );
}
