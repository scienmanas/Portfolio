import { getBlogPostMetadata } from "@/app/utils/getBlogData"; // Import utility to fetch blog metadata
import { BlogCard } from "@/app/ui/blog/blog-card"; // Import BlogCard component to render individual blog posts

export default function Blog(): JSX.Element {
  // Fetch all blog post metadata
  const postMetadata = getBlogPostMetadata("blogs");

  return (
    <section className="blogs flex w-full h-fit items-center justify-center mt-20 sm:mt-24 p-4">
      <div className="wrapper w-full max-w-screen-2xl h-fit flex items-center justify-center">
        <div className="all-contents w-fit h-fit flex flex-col gap-20 md:gap-24 items-center justify-center">
          {/* Blog Page Title and Description */}
          <div className="hero-and-description flex flex-col gap-1 items-center justify-center">
            <h1 className="hero w-fit h-fit text-2xl sm:text-3xl md:text-4xl font-bold text-center text-wrap text-neutral-800 dark:text-neutral-200">
              Landify Express 🖥️ ✨
            </h1>
            <p className="w-fit h-fit text-center text-sm sm:text-base text-neutral-700 dark:text-neutral-400">
              From Customer reviews to getting started, all things covered.
            </p>
          </div>

          {/* Blog Cards Section */}
          <div className="blogs-card flex flex-col gap-16 w-fit h-fit items-center justify-center">
            {/* Loop through postMetadata and render BlogCard for each blog */}
            {postMetadata.map((metaData, index) => (
              <BlogCard key={index} cardData={metaData} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
