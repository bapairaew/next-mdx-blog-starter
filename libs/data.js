import fs from "fs";
import * as globby from "globby";
import * as matter from "gray-matter";
import { promisify } from "util";

export const getMdxData = async (pattern) => {
  const data = await Promise.all(
    (await globby(pattern)).map((path) =>
      promisify(fs.readFile)(path, "utf-8").then((source) => ({
        ...matter(source),
        path,
      }))
    )
  );

  return data;
};

export const parseBlog = (post) => {
  return {
    slug: post.path.split("/").pop().replace(".mdx", ""),
    ...post.data,
  };
};

export const getAllBlogs = async () => {
  const posts = (await getMdxData("pages/blogs/*.mdx")).map(parseBlog);
  return posts;
};
