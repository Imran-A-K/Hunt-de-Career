import React, { useEffect, useState } from "react";
import BannerImage from "../assets/All Images/P3OLGJ1 copy 1.png";
import { Link, useLoaderData } from "react-router-dom";
import Job_Category_Card from "./Job_Category_Card";
import Featured_job_card from "./Featured_job_card";

const Home = () => {
  const [JobCategoryData, FeaturedJobsData] = useLoaderData()
  const [allJobsViewed, setAllJobsViewed] = useState(false)
  const [featuredJobs,setFeaturedJobs] = useState([...FeaturedJobsData.slice(0,4)])


  const handleJobs = () =>{
    setFeaturedJobs([...FeaturedJobsData]);
    setAllJobsViewed(!allJobsViewed)
  }


  
  return (
    <section className="">
      <div className="bg-gradient-to-r from-sky-50/20 to-indigo-50/20">
      <div className="custom_container flex lg:flex-row flex-col-reverse items-center justify-between ">
        <div className="lg:max-w-lg  lg:pr-5 lg:mb-0 mb-10">
          <div className="max-w-xl mb-6 lg:mt-8">
            <h2 className="max-w-lg mb-6 text-3xl font-sans font-bold tracking-tight text-gray-900 sm:text-6xl sm:leading-[70px]">
              One Step
              <br className="hidden md:block" /> Closer to your{" "}
              <br className="hidden md:block" />
              <span className="inline-block custom-text-animation">
                Dream Job
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              We host jobs for different companies all over the country. With
              Thousands of job openings posted daily we are the countries
              largest job market.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <Link to="/" className="button md:w-auto">
              <div className="inline-flex items-center justify-center w-full h-full">
                <p className="px-5 text-lg">Get Started</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="relative lg:w-1/2 ">
          <img
            className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96 lg:hidden mb-3"
            src={BannerImage}
            alt=""
          />

          <div className="w-full hidden lg:block lg:w-4/5 lg:ml-auto h-56  sm:h-96">
            <img src={BannerImage} alt="" />
          </div>
        </div>
      </div>
      </div>
      
      <div className="custom_container">
        <h2 className="text-4xl text-center font-bold mb-4">Job Category List</h2>
        <p className="text-slate-600 text-center mb-7">Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className="grid md:grid-cols-4 gap-4">
          {
            JobCategoryData.map( jobDetails => <Job_Category_Card 
              key={jobDetails.id}
            logo={jobDetails.logo}
            jobName={jobDetails.name}
            totalJobs={jobDetails.jobs_available}
            />)
          }
        </div>
      </div>
      <div className="custom_container">
        <h2 className="text-4xl text-center font-bold mb-4">Featured Jobs</h2>
        <p className="text-slate-600 text-center mb-7">These are the current featured jobs.</p>
        <div className="grid md:grid-cols-2 gap-5">
          {
            featuredJobs.map( jobDetails => <Featured_job_card 
              key={jobDetails.id}
              id={jobDetails.id}
            logo={jobDetails.company_logo}
            company={jobDetails.company_name}
            jobName={jobDetails.job_title}
            jobType={jobDetails["fulltime_or_part-time"]}
            workType={jobDetails.remote_or_onsite}
            location={jobDetails.location}
            salary={jobDetails.salary}
            />)
          }
        </div>
      </div>
      {
        !allJobsViewed && 
        <div className="flex justify-center -mt-2 mb-10">
          <button onClick={handleJobs} className='bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-bold rounded-md px-5 py-3 cursor-pointer'>See All Jobs</button>
        </div>
      }
    </section>
  );
};

export default Home;
