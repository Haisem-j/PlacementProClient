import React from "react";
import { CompanyInterface, JobInterface } from "../../../interfaces";
import { fetchFeaturedCompanies, fetchFeaturedJobs } from "../../../Requests";
import Jobs from "./Jobs";

const FeaturedJobs = () => {
  const [jobs, setJobs] = React.useState<JobInterface[]>([]);
  const [companies, setCompanies] = React.useState<CompanyInterface[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  React.useEffect(() => {
    fetchFeaturedJobs().then((res) => {
      // Fetch featured jobs
      setLoading(true);
      setJobs([...res.data]);
      // Loop through the jobs and extract the company id and use a hash map to store the company id and the company name
      const companyMap: any = {};
      res.data.forEach((job: JobInterface) => {
        if (!companyMap[job.companyId]) {
          companyMap[job.companyId] = true;
        }
      });
      fetchFeaturedCompanies(companyMap).then((res) => {
        // Fetch the companies
        setCompanies([...res.data]);
        setLoading(false);
      });
    });
  }, []);
  return (
    <div className="min-h-[calc(100vh-5rem)] px-5">
      <div className="flex justify-between mb-5">
        <div className="flex flex-col gap-1">
          <p className="h3 text2xl">Featured Jobs</p>
          <p className="text-lg text-gray-600">
            Know your worth and find the job that qualify your life
          </p>
        </div>
        <div>
          <button className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800  my-2 ">
            View All Listings
          </button>
        </div>
      </div>
      <Jobs jobs={jobs} companies={companies} loading={loading} />
    </div>
  );
};
export default FeaturedJobs;
