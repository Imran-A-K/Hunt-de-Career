import React, { useContext, useEffect, useState } from "react";
import { AppliedJobContext } from "../App";

import vector from "../assets/All Images/Vector.png";
import vector_1 from "../assets/All Images/Vector-1.png";
import AppliedJobCards from "./AppliedJobCards";
import "./CustomStyle.css";

const AppliedJobs = () => {
  const styles = {
    backgroundImage: `url('${vector}'), url('${vector_1}')`,
    backgroundPosition: "bottom left, right",
  };
  const [appliedJobs, setAppliedJobs] = useContext(AppliedJobContext || []);
  const [filterActivated, setFilterActivated] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState([])

  const filterRemoteJobs = () =>{
    setFilterActivated(true);
    const remoteJobs = appliedJobs.filter( job => job.remote_or_onsite === 'Remote');
    setFilteredJobs([...remoteJobs]);
  }
  const filterOnsiteJobs = () =>{
    setFilterActivated(true);
    const onsiteJobs = appliedJobs.filter( job => job.remote_or_onsite === 'Onsite');
    setFilteredJobs([...onsiteJobs]);
  }
  return (
    <div>
      <div
        
        className="bg-gradient-to-r from-sky-50/20 to-indigo-50/20 bg-no-repeat grid grid-cols-[1fr_4fr_0.45fr]  py-[40px]"
      >
        <div>
          <div>
<img src={vector} alt="" />
          </div>
        </div>
        <div className="flex items-center">
        <h2 className="text-3xl pl-[380px] font-bold">Applied Jobs</h2>
        </div>
        
        <div>
          <div className="-mt-[139px]">
            <img className="" src={vector_1} alt="" />
          </div>
        </div>
      </div>
      {/* <div
        style={styles}
        className="bg-gradient-to-r from-sky-50/20 to-indigo-50/20 bg-no-repeat flex  items-center justify-center text-4xl font-bold py-[40px]"
      >
        <h2>Applied Jobs</h2>
      </div> */}
      <div className="flex gap-10 justify-center items-center pt-10">
        <button onClick={filterRemoteJobs} className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-bold rounded-md px-4 py-2 ml-3 cursor-pointer">
          Filter Remote Jobs
        </button>
        <button onClick={filterOnsiteJobs} className="bg-gradient-to-r from-indigo-400 to-teal-500 text-white font-bold rounded-md px-4 py-2 cursor-pointer">
          Filter On-Site Jobs
        </button>
      </div>
      <div className="px-4 lg:px-8 md:py-10 lg:py-10 mb-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl flex flex-col items-center justify-center">
        {!filterActivated && appliedJobs.map((jobDetails) => (
          <AppliedJobCards
            key={jobDetails.id}
            id={jobDetails.id}
            logo={jobDetails.company_logo}
            company={jobDetails.company_name}
            jobName={jobDetails.job_title}
            jobType={jobDetails["fulltime_or_part-time"]}
            workType={jobDetails.remote_or_onsite}
            location={jobDetails.location}
            salary={jobDetails.salary}
          />
        ))}
        {filterActivated && filteredJobs.map((jobDetails) => (
          <AppliedJobCards
            key={jobDetails.id}
            id={jobDetails.id}
            logo={jobDetails.company_logo}
            company={jobDetails.company_name}
            jobName={jobDetails.job_title}
            jobType={jobDetails["fulltime_or_part-time"]}
            workType={jobDetails.remote_or_onsite}
            location={jobDetails.location}
            salary={jobDetails.salary}
          />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
