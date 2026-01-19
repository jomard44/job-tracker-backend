import JobCard from "./JobCard";
import "../index.css";
import { useState, useEffect } from "react";
function Jobs() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/jobs");
        const fetchedJobs = await res.json();
        if (!fetchedJobs) {
          console.log("there are no jobs ");
          return (
            <p className="text-red-100 flex align-center justify-center">
              There are no jobs to be displayed
            </p>
          );
        }
        setJobs(fetchedJobs);
      } catch (err) {
        console.error("error when fetching data", err);
      }
    };
    getData();
  }, []);
  return (
    <div>
      {jobs ? (
        jobs.map((job) => (
          <JobCard
            key={job._id}
            company_name={job.company_name}
            position={job.position}
            status={job.status}
          />
        ))
      ) : (
        <p className="text-red-700 flex  justify-center mt-[50%] font-bold">
          There are no jobs to be displayed
        </p>
      )}
    </div>
  );
}

export default Jobs;
