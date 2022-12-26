import React from "react";
// import SearchBox from './SearchBox'

import { Link } from "react-router-dom";
import Dark from "./Dark";


const Header = () => {

  return (

    <>
    <header className="text-gray-600 body-font font-body fixed  z-10 w-full bg-white dark:bg-slate-900 md:border-b md:border-gray-400 dark:max-md:shadow-white shadow dark:md:shadow-white md:shadow-black/20">
      <div className="container mx-auto ml-10 flex max-md:ml-3 max-md:mb-1 max-md:px-2 max-md:py-3 flex-wrap p-5 md:flex-row ">
        <Link
          className="flex title-font font-medium   mb-4 md:mb-0 "
          to="/"
        >
          {/* <img src="/home/siddharth/Programing/react course/todos-list/public/notes.png" alt="" srcSet="" /> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
          <img
            // src="./tv.png"
            src="./tv.png"
            className="w-10 h-10  text-white "
            alt="logo"
            srcSet=""
          />
          <span className="ml-3 max-md:mr-3 main-font text-xl mt-2 dark:text-white dark:hover:text-gray-400 max-md:text-s">To Watch</span>
        </Link>
        <nav className="md:mr-auto sm:mt-2 flex flex-wrap max-sm:mx-auto max-md:mt-0 max-md:mx-0 text-base dark:text-gray-200 justify-center ">
          <span className=" md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 h-8"></span>
          <Link className="mr-5 main-font hover:text-gray-900  dark:hover:text-gray-400" to="/">
            Home
          </Link>
          <Link className="mr-5 main-font hover:text-gray-900 dark:hover:text-gray-400" to="/PopularMovies">
          Top 20 Movies
          </Link>
          <Link className="mr-5 main-font hover:text-gray-900 dark:hover:text-gray-400" to="/PopularTv">
          Top 20 Tv
          </Link>
          <Link className="mr-5 main-font hover:text-gray-900 dark:hover:text-gray-400" to="/Favourites">
          Favourites
          </Link>
          <Link className="mr-5 main-font hover:text-gray-900 dark:hover:text-gray-400" to="/about">
            About
          </Link>

      
     

        </nav>
        

    </div>
    </header>

      {/* <div className="fixed z-10 h-0 flex max-md:flex-row flex-row-reverse w-full max-md:mt-12 ">
     
   
    </div> */}
        <div className='justify h-0 md:mr-32 w-full fixed z-50 max-md:mt-16 mt-2 flex flex-row-reverse'>
      <Dark/>
      </div>
    </>
  );
}




export default Header;