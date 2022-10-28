import HeroImage from "../../images/pexels-fox-1595385.jpg";

const HeroSection = () => {
  return (
    <main className="h-[calc(100vh-5rem)] mt-[80px] flex items-center">
      <div
        className="max-w-xl md:max-w-none md:w-full flex"
        data-aos="fade-right"
      >
        <div className="px-5 w-1/2 flex flex-col">
          <p className="text-lg text-gray-600">Build your future with us</p>
          <h1 className="h1 text-5xl mb-3">
            Get your dream job with PlacementPro
          </h1>
          <p className="text-xl text-gray-600">
            Find jobs, create trackable resumes and enrich your applications
          </p>
          <div className="mt-10">
            <button className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800  my-2 ">
              Find Jobs
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img src={HeroImage} alt="Hero Image" className="rounded-lg" />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
