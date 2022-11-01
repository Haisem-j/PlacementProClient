import { AuthorInterface, BlogPreviewInterface } from "../interfaces";
import NewsImage1 from "../images/news-01.jpg";
import NewsImage2 from "../images/news-02.jpg";
import NewsImage3 from "../images/news-03.jpg";
import NewsAuthor1 from "../images/news-author-01.jpg";
import NewsAuthor2 from "../images/news-author-02.jpg";

export const blogPreviewData: BlogPreviewInterface[] = [
  {
    blogId: 1,
    title: "How HubSpot saved 25% on developing costs by switching to Simple.",
    tags: ["HubSpot", "Simple", "Development"],
    authorId: 1,
    image: NewsImage1,
  },
  {
    blogId: 2,
    title:
      "How Facebook brought 13% cost savings to their bottom line with Simple’s products.",
    tags: ["Facebook", "Simple", "Development"],
    authorId: 2,
    image: NewsImage2,
  },
  {
    blogId: 3,
    title:
      "How Tinder grew 115% and saved 120 Hours each week by outsourcing to Simple.",
    tags: ["Tinder"],
    authorId: 1,
    image: NewsImage3,
  },
];

export const authorData: AuthorInterface[] = [
  {
    authorId: 1,
    name: "Lisa Allison",
    image: NewsAuthor1,
  },
  {
    authorId: 2,
    name: "Knut Mayer",
    image: NewsAuthor2,
  },
];
