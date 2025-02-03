import React from "react";

const Navbar = () => {
  return (
    <div className="top-0 fixed z-50 w-full ">
      <div className="navbar text-yellow-500 bg-gray-800 py-5 md:px-14">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="hover:underline transition duration-1500 ease-in-out hover:text-lg hover:font-semibold hover:relative">
                <a href="#">Home</a>
              </li>
              <li className="hover:underline transition duration-1500 ease-in-out hover:text-lg hover:font-semibold hover:relative">
                <a href="#news-section">Blogs</a>
              </li>
              <li className="hover:underline transition duration-1500 ease-in-out hover:text-lg hover:font-semibold hover:relative">
                <a href="#legacy">Legacy</a>
              </li>
              <li className="hover:underline transition duration-1500 ease-in-out hover:text-lg hover:font-semibold hover:relative">
                <a href="#about-section">About</a>
              </li>{" "}
              <li className="hover:underline transition duration-1500 ease-in-out hover:text-lg hover:font-semibold hover:relative">
                <a>Certification</a>
              </li>{" "}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Dr. Muhammad Yunus</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li className="hover:underline transition duration-1500 ease-in-out hover:text-lg hover:font-semibold hover:relative">
              <a href="#">Home</a>
            </li>
            <li className="hover:underline transition duration-1500 ease-in-out hover:text-lg hover:font-semibold hover:relative">
              <a href="#news-section">Blogs</a>
            </li>
            <li className="hover:underline transition duration-1500 ease-in-out hover:text-lg hover:font-semibold hover:relative">
              <a href="#legacy">Legacy</a>
            </li>
            <li className="hover:underline transition duration-1500 ease-in-out hover:text-lg hover:font-semibold hover:relative">
              <a href="#about-section">About</a>
            </li>{" "}
            <li className="hover:underline transition duration-1500 ease-in-out hover:text-lg hover:font-semibold hover:relative">
              <a>Certification</a>
            </li>{" "}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="rounded-3xl py-2 px-4 bg-yellow-600 text-gray-50 hover:bg-yellow-800">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
