import React from "react";

import { Link } from "react-router-dom";
const Otherlinks = () => {
  
  return (
    <>
      <div className="fixed z-10 h-0 flex max-md:flex-row flex-row-reverse w-full max-md:mt-12 ">
        <div className="relative w-96 z-20 max-md:w-72  p-5 md:mr-24 md:flex-row">
          <div className="flex justify-between overflow-hidden rounded-md bg-white shadow shadow-black/20">
          <Link className="mr-5 main-font hover:text-gray-900  dark:hover:text-gray-400" to="/">
            Home
          </Link>
          <Link className="mr-5 main-font hover:text-gray-900 dark:hover:text-gray-400" to="/about">
            About
          </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otherlinks;
