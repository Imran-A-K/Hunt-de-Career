import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import salaryIcon from '../assets/Icons/Frame.png'
import jobIcon from '../assets/Icons/Frame-1.png'
import phoneIcon from '../assets/Icons/Frame-2.png'
import mailIcon from '../assets/Icons/Frame-3.png'
import locationIcon from '../assets/Icons/Frame-4.png'
import toast from 'react-hot-toast'

import vector from "../assets/All Images/Vector.png";
import vector_1 from "../assets/All Images/Vector-1.png";
import { addToDb, getAppliedJobs } from "../utilities/fakedb";
import { AppliedJobContext } from "../App";
const JobDetails = ({}) => {
      const styles = {
          backgroundImage: `url('${vector}'), url('${vector_1}')`,
          backgroundPosition: 'bottom left, right'
  }

  // const mediaQueryStyles = {
  //     '@media (max-width: 600px)': {
  //         backgroundImage: 'none',

  //     }
  //   };

  const [appliedJobs, setAppliedJobs] = useContext(AppliedJobContext || [])
  const jobApplication = newAppliedJob =>{
    addToDb(newAppliedJob);
    const exists = appliedJobs.find( job => job.id === newAppliedJob.id)
    if(!exists){
      setAppliedJobs([...appliedJobs,newAppliedJob]);

    }
  }
  
  const FeaturedJobsData = useLoaderData();
  const { id } = useParams();
  const job = [...FeaturedJobsData].find((jb) => jb.id === Number(id));

  return (
    <div>
      {/* <div style={styles} className="bg-gradient-to-r from-sky-50/20 to-indigo-50/20 bg-no-repeat flex  items-center justify-center text-4xl font-bold py-[40px]">
        <h2>Job Details</h2>
      </div> */}
      <div
        
        className="bg-gradient-to-r from-sky-50/20 to-indigo-50/20 bg-no-repeat grid grid-cols-[1fr_4fr_0.45fr]  py-[40px]"
      >
        <div>
          <div>
<img src={vector} alt="" />
          </div>
        </div>
        <div className="flex items-center">
        <h2 className="text-3xl pl-[380px] font-bold">Job Details</h2>
        </div>
        
        <div>
          <div className="-mt-[139px]">
            <img className="" src={vector_1} alt="" />
          </div>
        </div>
      </div>

      <div className="custom_container mt-8">
      <div className="grid grid-cols-[2fr_1fr] gap-6">
        <div className="">
          <p className="text-left mb-2"><span className="font-bold tracking-wide">Job Description : </span><span className="text-slate-900 tracking-wide">{job.job_description}</span></p>
          <p className="text-left mb-2"><span className="font-bold tracking-wide">Job Responsibility : </span><span className="text-slate-900 tracking-wide">{job.job_responsibility}</span></p>
          <p className="font-bold tracking-wide mb-2">Educational Requirements:</p>
          <p className="text-slate-900 tracking-wide mb-2">{job.educational_requirements}</p>
          <p className="font-bold tracking-wide mb-1">Experiences:</p>
          <p className="">{job.experiences}</p>
        </div>
        <div>
        <div className="bg-indigo-100 rounded-md px-5 py-6">
          <h4 className="text-xl font-bold mb-3 text-slate-900">Job Details</h4>
          <hr className="bg-neutral-400 py-[1px] rounded-lg mb-3" />         
        <div className='inline-flex gap-1 items-center mt-2 mb-3'>
        <img className='max-[600px]:w-[25px] max-[600px]:h-[25px]]' src={salaryIcon} alt="" />
        <p className='font-semibold text-slate-700 max-[600px]:text-xs'> Salary : {job.salary}</p>
        </div>
          <div className='mb-3 inline-flex gap-1 items-center'>
        <img className='max-[600px]:w-[25px] max-[600px]:h-[25px]]' src={jobIcon} alt="" />
        <p className=' font-semibold text-slate-700 max-[600px]:text-xs'> Job Title : {job.job_title}</p>
        </div>
        <h4 className="text-xl font-bold mb-3 text-slate-900">Contact Information</h4>
        <hr className=" bg-neutral-400 py-[1.2px] rounded-lg mb-3" />
        <div className='mt-2 mb-3 inline-flex gap-1 items-center'>
        <img className='max-[600px]:w-[25px] max-[600px]:h-[25px]]' src={phoneIcon} alt="" />
        <p className='font-semibold text-slate-700 max-[600px]:text-xs'> Phone : {job.contact_information.phone}</p>
        </div>
        <div className='mt-1 mb-3 inline-flex gap-1 items-center'>
        <img className='max-[600px]:w-[25px] max-[600px]:h-[25px]]' src={mailIcon} alt="" />
        <p className='font-semibold text-slate-700 max-[600px]:text-xs'> Email : {job.contact_information.email}</p>
        </div>
        <div className='inline-flex gap-1 items-center mb-3'>
        <img className='max-[600px]:w-[25px] max-[600px]:h-[25px]]' src={locationIcon} alt="" />
        <p className='font-semibold text-slate-700 max-[600px]:text-xs'> Address : {job.location}</p>
        </div>
        </div>
        <button onClick={() => jobApplication(job)} className='bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-bold rounded-md px-5 py-3 cursor-pointer w-full mt-3'>Apply Now</button>

        </div>
        
      </div>
      </div>
    </div>
  );
};

export default JobDetails;
