import React from "react";

function Cta() {
  return (
    <div className="max-w-6xl ">
      <div className="md:pb-20">
        <div className="bg-blue-600 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl">
          <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center">
            <div className="mb-6 lg:w-2/3 lg:mb-0 text-center lg:text-left">
              <h3 className="h3 text-white mb-2">Recruiting?</h3>
              <p className="text-white text-lg opacity-75">
                Ready to post a job? Get started with PlacementPro, where you
                can post an open role in minutes.
              </p>
            </div>

            <div>
              <a
                className="btn text-blue-600 bg-gradient-to-r from-blue-100 to-white"
                href="#0"
              >
                Post a job - $299
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
