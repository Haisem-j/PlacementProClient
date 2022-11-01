import React from "react";
import { BlogPreviewInterface } from "../../../interfaces";
import { authorData, blogPreviewData } from "../../../testData/blogdata";
import BlogList from "./BlogList";

const BlogPreview = () => {
  const [blogs, setBlogs] = React.useState<BlogPreviewInterface[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  React.useEffect(() => {
    setLoading(true);
    const b: BlogPreviewInterface[] = [];
    blogPreviewData.map((blog) => {
      const author = authorData.find(
        (author) => author.authorId === blog.authorId
      );
      b.push({ ...blog, author: author });
    });
    setBlogs(b);

    setLoading(false);
  }, []);

  return (
    <div>
      <div className="flex justify-between mb-5">
        <div className="flex flex-col gap-1">
          <p className="h3 text2xl">PlacementPro's Blog</p>
          <p className="text-lg text-gray-600">
            Check out our latest blog posts
          </p>
        </div>
        <div>
          <button className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800  my-2 ">
            View All Posts
          </button>
        </div>
      </div>
      <BlogList loading={loading} blogs={blogs} />
    </div>
  );
};

export default BlogPreview;
