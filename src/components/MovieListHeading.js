import React from "react";


const MovieListHeading = (props) =>{
  return (
    <div className="flex flex-col bg-white dark:bg-slate-900 max-md:pt-36 pt-32 m-auto p-auto">
<h1 className="flex py-5  mx-8 font-bold text-4xl text-gray-800 dark:text-gray-200">{props.heading}</h1>


    </div>

  )
}

export default MovieListHeading;