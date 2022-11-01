import { Link } from "react-router-dom";
import { BlogPreviewInterface } from "../../../interfaces";

interface BlogListProps {
  blogs: BlogPreviewInterface[];
  loading: boolean;
}

const BlogList = ({ loading, blogs }: BlogListProps) => {
  return (
    <div className="max-w-sm mx-auto md:max-w-none">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {!loading &&
          blogs.map((blog) => {
            return (
              <div
                className="flex  flex-col rounded-lg gap-4 bg-white relative shadow-lg transition ease-in-out duration-300 delay-150 hover:-translate-y-3"
                key={`BlogPreview - ${blog.title}`}
              >
                {/* Article Image */}
                <Link to="/blog/1" className="h-1/2">
                  <img
                    className=" w-full h-full rounded-t-lg object-cover"
                    src={blog.image}
                    alt={blog.title}
                  />
                </Link>

                {/* Article Content */}
                <div className="p-[10px]">
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      {blog.tags.map((tag) => (
                        <li
                          className="m-1"
                          key={`BlogPreview Tag - ${tag} - ${blog.title}`}
                        >
                          <a
                            className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out"
                            href="#0"
                          >
                            {tag}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h3 className="text-lg font-bold leading-snug tracking-tight">
                    <Link to="/blog-post" className="hover:underline">
                      {blog.title}
                    </Link>
                  </h3>
                  {/* Article Author */}
                  <footer className="text-sm flex items-center mt-4">
                    <div className="flex shrink-0 mr-3">
                      <a className="relative" href="#0">
                        <span
                          className="absolute inset-0 -m-px"
                          aria-hidden="true"
                        >
                          <span className="absolute inset-0 -m-px bg-white rounded-full"></span>
                        </span>
                        <img
                          className="relative rounded-full"
                          src={blog.author?.image}
                          width="22"
                          height="22"
                          alt={blog.author?.name}
                        />
                      </a>
                    </div>
                    <div>
                      <span className="text-gray-600">By </span>
                      <a className="font-medium hover:underline" href="#0">
                        {blog.author?.name}
                      </a>
                    </div>
                  </footer>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BlogList;
