import React from "react";


const FavouritesMoviesList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  if (props.favourites === null) {
    return console.log("")
  }


  return (
    <>
      <div className="flex flex-col bg-white dark:bg-slate-900 max-md:pt-24 pt-16 m-auto p-auto">
      
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap lg:ml-20 md:ml-20 ml-10 ">
            {props.movies.map((movie) => (
              <div className="inline-block px-3">
                <div className="w-64 h-auto max-md:w-40 max-md:hover:w-64 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                  <div className="  overflow-hidden rounded-lg shadow-md  hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                    <img src={movie.Poster} alt="Poster Not Available" />

                    {/* <div className="bg-blue-500 ">
                      <h3 className="text-lg bg max-md:text-sm justify-center flex font-bold ">
                        {movie.Title}
                      </h3>
                      <p className="text-lg max-md:text-sm justify-center flex font-bold">
                        {movie.Year}
                      </p> */}
                      
                      <div   className="bg-blue-400">
                        <FavouriteComponent />
                      {/* </div> */}
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

export default FavouritesMoviesList;

