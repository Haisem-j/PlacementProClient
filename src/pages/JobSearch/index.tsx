import JobList from "./JobList/JobList";
import JobSearchSidebar from "./JobSearchSidebar/JobSearchSidebar";

const JobSearch = () => {
  return (
    <div className="mt-[80px] py-8 md:py-16">
      <div className="flex justify-between">
        {/* Main content */}
        <div className="h-[150vh] w-2/3 border">
          <JobList />
        </div>
        {/*  */}
        <JobSearchSidebar />
      </div>
    </div>
  );
};
export default JobSearch;
