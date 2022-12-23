import React from "react";
import { Link } from "react-router-dom";


const MoviesList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>

      <div className="flex flex-row bg-white dark:bg-slate-900 m-auto p-auto overflow-x-scroll hide-scroll-bar">
{/*       
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap lg:ml-20 md:ml-20 ml-10 "> */}

            {props.movies?.map((movie) => (
               

                         <Link to={`/movie/${movie.id}`}>
                  <div class="min-h-screenpy-6 mx-5 w-max flex flex-col justify-center ">
                    
                    <div class=" sm:max-w-xl sm:mx-auto">
                      <div class="dark:bg-white bg-gray-200 shadow-lg border-gray-100 h-96	 border sm:rounded-3xl p-8 flex space-x-8">
                       
                        <div class="h-2/2 overflow-visible w-2/6">
                            <img class="rounded-3xl shadow-lg" src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`} alt=""/>
                          
                        </div>

                        <div class="flex flex-col w-3/4 space-y-4">
                          <div class="flex justify-between items-start">
                            <h2 class="text-3xl font-bold">{movie.original_title}</h2>
                            <div class="bg-yellow-400 font-bold rounded-xl p-2">{movie.vote_average}</div>
                          </div>
                          <div>
                            <div class="text-sm text-gray-400">Release Date</div>
                            <div class="text-lg text-gray-800">{movie.release_date}</div>
                          </div>
                            <p class=" text-gray-400 max-h-40 overflow-y-hidden">{movie.overview}</p>

                          <div class="flex text-2xl  font-bold text-a" onClick={()=>props.handleFavouritesClick(movie)}><FavouriteComponent /></div>
                        </div>

                      </div>
                    </div>
                    
                  </div>














                  </Link>



              
            ))}
      
          {/* </div>
        </div> */}
      </div>


</>
  );




};

export default MoviesList;






              // <div className="inline-block px-3">
              //   <div className="w-64 max-md:w-40 max-md:hover:w-64 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              //     <div className="overflow-hidden rounded-lg shadow-md  hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              //       <img className="w-64" src={movie.Poster}  alt="" />
              //       <img className="w-64" src={movie.img}  alt="" />  
              //       <img className="w-64" src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`}  alt="" />  

              //       <div className="bg-teal-600 ">
              //         <h3 className="text-lg bg max-md:text-sm movie-title text-center justify-center flex ">
              //           {movie.Title}
              //           {movie.title}
              //           {movie.original_title}
              //         </h3>
                   
              //         <p className="text-lg max-md:text-sm movie-year justify-center flex ">
              //           {movie.Year}{movie.year}{movie.release_date}
              //         </p>
              //         <div onClick={()=>props.handleFavouritesClick(movie)} className="bg-teal-500">
              //           <FavouriteComponent />
              //         </div>
                      
              //       </div>
              //     </div>
              //   </div>
              // </div> 