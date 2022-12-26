import React from "react";
import { Link } from "react-router-dom";

const Moviepage = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center bg-white dark:bg-slate-900 m-auto pb-10 p-auto ">
        {/*       
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap lg:ml-20 md:ml-20 ml-10 "> */}

        {props.movies?.map((movie) => (
          <div class="min-h-screenpy-6 max-md:mx-10 m-10 max-md:w-11/12 w-max flex flex-col justify-center ">
            <div class="max-md:w-96  sm:max-w-xl w-max">
              <div class="dark:bg-white bg-gray-200 shadow-lg border-gray-100 h-96  border max-md:rounded-3xl sm:rounded-3xl p-8 flex space-x-8">
                <div class="max-md:w-5/6 overflow-visible w-3/6">
                  <img
                    class="rounded-3xl mt-4 shadow-lg"
                    src={`https://image.tmdb.org/t/p/original${
                      movie && movie.poster_path
                    }`}
                    alt=""
                  />
                </div>

                <div class="flex flex-col w-3/4 space-y-4">
                  <div class="flex justify-between items-start">
                    <Link to={`/movie/${movie.id}`}>
                      <h2 class="text-3xl max-md:text-2xl font-bold hover:text-gray-600">
                        {movie.original_title}{movie.original_name}
                      </h2>
                    </Link>
                    <div class="bg-yellow-400 font-bold rounded-xl p-2">
                      {movie.vote_average}
                    </div>
                  </div>
                  <div>
                    <div class="text-sm text-gray-600">Release Date</div>
                    <div class="text-lg text-gray-800">
                      {movie.release_date}
                    </div>
                  </div>
                  <p class=" text-gray-600 max-h-40 max-md:text-sm overflow-y-hidden">
                    {movie.overview}
                  </p>

                  <div
                    class="flex text-2xl  font-bold text-a"
                    onClick={() => props.handleFavouritesClick(movie)}
                  >
                    <FavouriteComponent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* </div>
        </div> */}
      </div>
    </>
  );
};

export default Moviepage;
