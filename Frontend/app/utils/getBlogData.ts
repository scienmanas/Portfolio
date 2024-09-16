import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

export function getBlogPostMetadata(folderPath: string) {
  const directory = path.join(process.cwd(), "public", folderPath);
  const folderNames = fs.readdirSync(directory); // Get all blog post folders

  try {
    const postMetadata = folderNames.map((folderName) => {
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
        image: `/blogs/${folderName}/images/header.png`, // Image path relative to the public folder
        slug: folderName, // Folder name as the slug
      };
    });

    // Sort the post to latest ones'
    postMetadata.sort((a, b) => b.publishedDate - a.publishedDate);

    return postMetadata;
  } catch (error) {
    notFound();
  }
}

export function getBlogPostData(folderPath: string, slug: string) {
  const directory = path.join(process.cwd(), "public", folderPath, slug);
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
      head: matterResult.data.head,
      publishedDate: matterResult.data.publishedDate,
      description: matterResult.data.description,
      tags: matterResult.data.tags,
      image: `/blogs/${slug}/images/header.png`, // Image path relative to the public folder
      content: matterResult.content,
      slug: slug, // Folder name as the slug
    };
  } catch (error) {
    notFound();
  }
}
