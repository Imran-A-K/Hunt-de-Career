import React from 'react'
import locationImg from '../assets/Icons/Frame-4.png'
import salaryIcon from '../assets/Icons/Frame.png'
import { Link } from 'react-router-dom'

const Featured_job_card = ({logo, jobName,company, jobType, workType,location,salary,id}) => {
  return (
    <div className='border-2 flex flex-col justify-start px-7 py-10 rounded-md'>
        <img className='w-[110px]' src={logo} alt="" />
        <h2 className='text-lg font-bold pt-4 pb-3'>{jobName}</h2>
        <p className='text-slate-700 pb-3'>{company}</p>
        <div className='inline-flex gap-3 mb-4'>
        <button className='border-[2px] rounded-[4px] px-4 py-2 text-indigo-600 border-indigo-600 text-sm font-bold'>{workType}</button>
        <button className='border-[2px] rounded-[4px] px-4 py-2 text-indigo-600 border-indigo-600 text-sm font-bold'>{jobType}</button>
        </div>
        <div className='inline-flex gap-3 md:gap-2 mb-5'>
        <div className='inline-flex gap-1 -ml-1 items-center'>
        <img className='max-[600px]:w-[25px] max-[600px]:h-[25px]' src={locationImg} alt="" />
        <p className='font-semibold max-[600px]:text-xs text-slate-700 '>{location}</p>
        </div>
        <div className='inline-flex gap-1 items-center'>
        <img className='max-[600px]:w-[25px] max-[600px]:h-[25px]]' src={salaryIcon} alt="" />
        <p className='font-semibold text-slate-700 max-[600px]:text-xs'> Salary : {salary}</p>
        </div>
        </div>
        <Link to={`/job/${id}`} className="mt-auto">
              <button className='bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-bold rounded-md px-4 py-2 cursor-pointer'>View Details</button>
            </Link>
    </div>
  )
}

export default Featured_job_card