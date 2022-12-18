import React from "react";


const MoviesList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>

      <div className="flex flex-col bg-white dark:bg-slate-900 max-md:pt-24 pt-16 m-auto p-auto">
      
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap lg:ml-20 md:ml-20 ml-10 ">

            {props.movies?.map((movie) => (
              <div className="inline-block px-3">
                <div className="w-64 max-md:w-40 max-md:hover:w-64 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                  <div className="overflow-hidden rounded-lg shadow-md  hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                    <img className="w-64" src={movie.Poster}  alt="" />
                    <img className="w-64" src={movie.img}   alt="" />
                    <div className="bg-teal-600 ">
                      <h3 className="text-lg bg max-md:text-sm movie-title text-center justify-center flex ">
                        {movie.Title} {movie.title}
                      </h3>
                      <p className="text-lg max-md:text-sm movie-year justify-center flex ">
                        {movie.Year}{movie.year}
                      </p>
                      <div onClick={()=>props.handleFavouritesClick(movie)} className="bg-teal-500">
                        <FavouriteComponent />
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
      
          </div>
        </div>
      </div>


</>
  );




};

export default MoviesList;

