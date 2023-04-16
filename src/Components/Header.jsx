import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isUserInMobile, setIsUserInMobile] = useState(false);
  return (
    <div className="bg-gradient-to-r from-sky-50/20 to-indigo-50/20 px-4 py-5 md:px-24 lg:px-8">
      <div className="flex items-center justify-between sm:max-w-xl md:max-w-full mx-auto lg:max-w-screen-xl">
        <a
          href="/"
          className="ml-2 text-xl font-bold tracking-wide text-gray-800 custom-text-animation md:text-5xl md:font-black"
        >
          Hunt De Career
        </a>

        <ul className="items-center lg:flex hidden space-x-8">
          <li>
            {/* <a
              href="/"
              className="default focus:text-blue-400"
            >
              Home
            </a> */}
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/applied_jobs"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Applied Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
          </li>
        </ul>

        <button className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-bold h-[60px] w-[160px] rounded-lg hidden lg:block text-lg cursor-pointer">
          Start Applying
        </button>

        <div className="lg:hidden">
          <button
            aria-label="Open Menu Bar"
            title="Open Menu Bar"
            onClick={() => setIsUserInMobile(true)}
          >
            <Bars3BottomRightIcon className="w-5 text-gray-600" />
          </button>
          {isUserInMobile && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      aref="/"
                      className="ml-2 text-xl font-bold tracking-wide text-gray-800 custom-text-animation uppercase custom-text-animation"
                    >
                      Hunt De Career
                    </a>
                  </div>

                  <div>
                    <button
                      aria-label="Close Menu Bar"
                      title="Close Menu Bar"
                      onClick={() => setIsUserInMobile(false)}
                    >
                      <XMarkIcon className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                <nav>
                  <ul className="space-y-4 pl-2">
                    <li>
                      <a href="/" className="active_mobile">
                        Home
                      </a>
                    </li>
                    <li>
                      <Link to="/statistics" className="active_mobile">
                        Statistics
                      </Link>
                    </li>
                    <li>
                      <Link to="/applied_jobs" className="active_mobile">
                        Applied Jobs
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="active_mobile">
                        Blog
                      </Link>
                    </li>
                    <li>
                    <button className="bg-gradient-to-r from-indigo-300 to-purple-400 text-white text-lg font-bold h-[60px] w-[160px] rounded-lg lg:block cursor-pointer mx-auto">
          Start Applying
        </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
