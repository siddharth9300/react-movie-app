import React from 'react'
import { Link } from "react-router-dom";
export const Footer = () => {
  return (

<footer className="text-gray-600 body-font dark:bg-slate-900 pt-2 max-md:border-t-2 md:border-t-2 md:border-gray-400 dark:max-md:shadow-white shadow dark:md:shadow-white md:shadow-black/20">
  <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
    <Link className="flex title-font font-medium items-center md:justify-start justify-center dark:text-white text-gray-900" to="/">
      <img src="./tv.png" className="w-10 h-10 text-white "  alt="logo" srcSet="" />
      <span className="ml-3 text-xl">To Watch</span>

    </Link>
    <p className="text-sm text-gray-500 dark:text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {new Date().getFullYear()} To Watch —
      <a href="https://github.com/siddharth9300" className="text-gray-600 dark:text-gray-200 ml-1" rel="noreferrer" target="_blank">@siddharth9300</a>
    </p>

  </div>
</footer>




  )
}

export default Footer;