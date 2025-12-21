import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

// Sanitize a value so it can be safely used as a URL slug and path segment.
// Allows only lowercase letters, digits and hyphens; collapses other characters to "-".
function sanitizeSlug(value: string): string {
  const str = String(value).toLowerCase();
  const sanitized = str.replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "");
  return sanitized || "post";
}

export function getBlogPostMetadata(folderPath: string) {
  const directory = path.join(process.cwd(), "public", folderPath);
  const folderNames = fs.readdirSync(directory); // Get all blog post folders

  try {
    const postMetadata = folderNames.map((folderName) => {
      const safeSlug = sanitizeSlug(folderName);
      const contentPath = path.join(
        directory,
        folderName,
        "content",
        "content.md"
      );

      // Read markdown file and extract front matter
      const fileContents = fs.readFileSync(contentPath, "utf8");
      const matterResult = matter(fileContents);

      // Construct blog metadata including image path
      return {
        title: matterResult.data.title,
        publishedDate: matterResult.data.publishedDate,
        description: matterResult.data.description,
        tags: matterResult.data.tags,
        image: `/blogs/${safeSlug}/images/header.png`, // Image path relative to the public folder
        slug: safeSlug, // Sanitized folder name as the slug
      };
    });

    // Sort the post to latest ones'
    postMetadata.sort((a, b) => b.publishedDate - a.publishedDate);

    return postMetadata;
  } catch (error) {
    console.log(`Error is: ${error}`);
    notFound();
  }
}

export function getBlogPostData(folderPath: string, slug: string) {
  const safeSlug = sanitizeSlug(slug);
  const directory = path.join(process.cwd(), "public", folderPath, safeSlug);
  const file = path.join(directory, "content", "content.md");

  try {
    // Check if the file exists
    if (!fs.existsSync(file)) {
      notFound();
    }
    // Read markdown file and extract front matter
    const fileContents = fs.readFileSync(file, "utf8");
    const matterResult = matter(fileContents);

    // Construct blog metadata including image path
    return {
      title: matterResult.data.title,
      publishedDate: matterResult.data.publishedDate,
      description: matterResult.data.description,
      tags: matterResult.data.tags,
      image: `/blogs/${safeSlug}/images/header.png`, // Image path relative to the public folder
      content: matterResult.content,
      slug: safeSlug, // Sanitized slug
    };
  } catch (error) {
    console.log(`Error is: ${error}`);
    notFound();
  }
}
