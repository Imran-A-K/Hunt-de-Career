import React from 'react'

const Job_Category_Card = ({logo,jobName,totalJobs}) => {
  return (
    <div className='bg-indigo-50 flex flex-col justify-start rounded-lg pl-7 pt-8 pb-10'>
        <div className='bg-indigo-200 w-[40px] h-[40px] rounded-lg mb-4 p-1'>
        <img className='object-cover' src={logo} alt="" />
        </div>
        <h3 className='text-xl font-bold mb-1 tracking-wide'>{jobName}</h3>
        <p className='text-slate-700 text-base tracking-wide md:pr-3'>{totalJobs}</p>
    </div>
  )
}

export default Job_Category_Card