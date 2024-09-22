import { Metadata } from "next"; // Import the Metadata type from Next.js
import metaDataImg from "@/public/assets/metadata/blog.png"; // Import image for OpenGraph and Twitter meta

// Generate the metadata for the blogs page
export async function generateMetadata(): Promise<Metadata> {
  // Construct metadata object
  return {
    metadataBase: new URL(process.env.DOMAIN as string), // Base URL for metadata
    title: `Blogs - ${process.env.SITE_NAME}`, // Dynamic title for SEO
    description: "Read the blogs, discover phenomenal things happening around", // Description for SEO
    keywords: ["reading", "article", "tech", "knowledge", "poetry"], // Keywords for SEO
    robots: "index, follow", // Instructions for search engine indexing
    openGraph: {
      title: `Blogs - ${process.env.SITE_NAME}`, // OpenGraph title
      description:
        "Read my blogs, I write about tech, do some poetry, and makes memes.", // OpenGraph description
      url: `${process.env.DOMAIN}/blog`, // URL for OpenGraph
      images: [metaDataImg.src], // Image for OpenGraph
      type: "article", // OpenGraph type
      siteName: `${process.env.SITE_NAME}`, // Site name for OpenGraph
      locale: "en_US", // Locale for OpenGraph
    },
    twitter: {
      card: "summary", // Twitter card type
      title: `Blogs - ${process.env.SITE_NAME}`, // Twitter title
      description:
        "Read my blogs, I write about tech, do some poetry, and makes memes.", // Twitter description
      images: [metaDataImg.src], // Image for Twitter
      creator: "@scienmanas", // Twitter handle of the content creator
      site: `${process.env.DOMAIN}/blog`,
    },
  };
}

// Layout component that wraps the blog page contents
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="page-contents relative w-full h-fit flex flex-col items-center justify-center">
      {children} {/* Render children components */}
    </div>
  );
}
