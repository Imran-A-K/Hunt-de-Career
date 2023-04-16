import { FaceFrownIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='bg-gray-100 text-gray-900 flex items-center h-screen p-16 '>
      {/* <div className='container flex flex-col justify-center px-5 mx-auto my-8 items-center '>
        <FaceFrownIcon className='w-40 h-40 text-red-500' />
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-bold text-7xl text-black-500'>
            Error :  {status || 404}
          </h2>
          
          <Link to='/' className='bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-bold rounded-md px-5 py-3 cursor-pointer'>
            Back to homepage
          </Link>
        </div>
      </div> */}
<main className="h-screen w-full flex flex-col justify-center items-center bg-[#747b8d]">
	<h1 className="text-9xl font-extrabold text-white tracking-widest">{status || 404}</h1>
	<div className="bg-[#ffef3d] px-2 text-sm rounded rotate-12 absolute">
		Page Not Found
	</div>
	<button className="mt-5">
      <a
        className="relative inline-block text-sm font-medium text-[#f4d8d0] group active:text-orange-500 focus:outline-none focus:ring"
      >
        <span
          className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
          <Link to="/">Back to Home Page</Link>
          {/* <a href="/">Back to Home Page</a> */}
        </span>
      </a>
    </button>
</main>
    </section>
  )
}

export default ErrorPage