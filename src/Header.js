import React from 'react'
import logo from './RK logo.png'
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Header() {
  const [sideBar, setSideBar] = useState(false);

  const NavigationLink = [
    {
      Title: "Home",
      Path: "/",
    },
    {
      Title: "About Us",
      Path: "/abouts"

    },
    {
      Title: "Sevices",
      Path: "/services"
    },
    {
      Title: "Our Client",
      Path: "/clientreview"
    },
    {
      Title: "Product",
      Path: "/product"
    },
    {
      Title: "Contact",
      Path: "/contact"
    }
  ];

  return (
    <>
      <aside
        id="logo-sidebar"
        className={
          sideBar
            ? "fixed top-0 left-[100%] right-0 z-40 w-64 h-screen pt-10 transition-transform -translate-x-full bg-white dark:bg-gray-800 dark:border-gray-700"
            : "hidden"
        }
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto ">
          <ul className="space-y-2">
            <li>
              <div
                className="flex  py-2 pl-5 pr-4 text-base  md:border-0 md:p-0"
                onClick={() => setSideBar(false)}
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="block text-base md:border-0 md:p-0 pl-2">
                  close
                </span>
              </div>
            </li>
            {NavigationLink.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href={item.Path}
                    className="block  py-2 pl-5 pr-4 text-base  md:border-0 md:p-0 hover-underline-animation"
                  >
                    {item.Title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
      {/* fixed-top */}
      <nav className="header_border">
        <div className="container head mx-auto md:px-2  xl:px-[120px] lg:px-[20px] px-[20px] flex flex-wrap items-center justify-between ">
          <a className="flex items-center " href="/">
            <img
              src={logo}
              className="md:w-[150px] mr-3 w-[100px], sm:w-[120px] w-[80px]"
              alt=""
            />
          </a>
          <div className="flex items-center">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="md:hidden block rounded-full"
              type="button"
            >
              <a
                href="/contact"
                className="text-white bg-[#FF7400] hover-underline-animation hover:bg-[#ff8a2a] font-medium rounded-full text-sm px-2 text-[12px] py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                target=""
              >
                Book on Engineer
              </a>
            </button>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => setSideBar(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w 3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex items-center flex-col p-4 mt-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
              {NavigationLink.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href={item.Path}
                      className="block  py-2 pl-5 pr-4 text-base  md:border-0 md:p-0  hover-underline-animation"
                    >
                      {item.Title}
                    </a>
                  </li>
                );
              })}
              <li>
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="text-white bg-[#FF7400]  hover:bg-[#ff8a2a]  p-2  rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center "
                  type="button"
                >
                  <a
                    href="/contact"
                    className="block py-2 pl-5 pr-4 text-base md:border-0 md:p-0"
                    target=""
                  >
                    Book on Engineer
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
