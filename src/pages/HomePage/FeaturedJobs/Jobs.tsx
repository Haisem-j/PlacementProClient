import Loading from "../../../components/LoadingSpinner";
import { CompanyInterface, JobInterface } from "../../../interfaces";

interface JobsProps {
  jobs: JobInterface[];
  companies: CompanyInterface[];
  loading: boolean;
}
const Jobs = ({ jobs, companies, loading }: JobsProps) => {
  return (
    <div className="grid grid-cols-3 gap-5 bg-[#F2F5FF] p-4">
      {loading ? (
        <Loading />
      ) : (
        jobs.map((job) => {
          const company = companies.find(
            (company) => company.id === job.companyId
          );
          return (
            <div
              key={`Job - ${job.title} ${job.id}`}
              className="flex h-[350px] p-[10px] justify-center items-center flex-col rounded-lg gap-4 bg-white relative shadow-lg transition ease-in-out duration-300 delay-150 hover:-translate-y-3"
            >
              <div className="flex flex-col">
                <img
                  src={company?.image}
                  alt="Company Image"
                  className="w-[70px] h-[70px] rounded-full"
                />
                <p className="text-sm text-center">{company?.name}</p>
              </div>
              <div className="text-lg h3 text-center w-3/4">{job.title}</div>
              <div className="w-3/4 text-gray-500 text-center text-sm">
                ${job.salary}/year / {job.remoteStatus} / {job.category} /{" "}
                {job.status}
              </div>
              <button className="btn-sm text-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ">
                Apply For Job
              </button>
              <div className="absolute top-1 right-1 text-xs font-semibold inline-block py-1 px-2 rounded bg-green-100 text-green-800 last:mr-0 mr-1">
                {job.status}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
export default Jobs;
