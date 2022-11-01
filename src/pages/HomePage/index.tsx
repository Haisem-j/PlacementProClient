import React from "react";
import BlogPreview from "./BlogPreview/BlogPreview";
import Cta from "./Cta/Cta";
import FeaturedJobs from "./FeaturedJobs/FeaturedJobs";
import HeroSection from "./HeroSection";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-40">
      <HeroSection />
      <FeaturedJobs />
      <BlogPreview />
      <Cta />
    </div>
  );
};

export default HomePage;
