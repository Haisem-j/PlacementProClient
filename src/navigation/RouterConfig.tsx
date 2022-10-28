import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import { JOB, JOBSEARCH, LOGIN, REGISTER, ROOT } from "./constants";

export const RouterConfig = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden items-center">
        <Navbar />
        <div className="max-w-6xl px-5 sm:px-6 w-full">
          <Routes>
            <Route path={LOGIN} element={<>Login</>} />
            <Route path={REGISTER} element={<>Register</>} />
            <Route path={ROOT} element={<HomePage />} />
            <Route path={JOBSEARCH} element={<>Job Search</>} />
            <Route path={JOB} element={<>Jobs</>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};
