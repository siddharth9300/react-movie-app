import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

export const MovieDetails = () => {
  const [currentMovieDetail, SetMovie] = useState();
  const { id } = useParams();


  const getData = async () => {


    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f2df3f7b3e3ad6698bad061c920dafdc&language=en-US`
    )
      .then((response) => response.json())
      .then((response) => SetMovie(response))
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getData();
  });
  //   const FavouriteComponent = props.favouriteComponent;

  return (
    <>
    
     









      

<div className="movie w-full relative flex flex-col items-center dark:bg-slate-900 bg-white">
            <div className="movie__intro max-md:mt-28 max-md:h-52">
                <img className=" 
              m-auto w-full max-md:w-full max-md:mt-0 mt-20
               
                " src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} alt=""/>
           
           </div>
           <div className="movie__posterBox ">
                        <img className="movie__poster md:hidden w-96 rounded-xl max-md:w-48	slide-gradient" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} alt="" />
                    </div>

            <div className="movie__detail items-center w-4/5 max-md:mt-2 flex mt-10 ">
                <div className="movie__detailLeft mr-8 max-md:m-0 max-md:hidden">
                    <div className="movie__posterBox ">
                        <img className="movie__poster  w-96 rounded-xl 	slide-gradient" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} alt="" />
                    </div>
                </div>
                <div className="movie__detailRight  ">
                    <div className="movie__detailRightTop">
                        <div className="movie__name text-left text-6xl dark:text-white text-gray-900 max-md:text-4xl font-bold my-4">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie__tagline text-2xl my-4  text-gray-800 dark:text-white ">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating text-gray-800 dark:text-white text-xl my-2 max-md:text-m"><span className="font-bold">Rating: </span>
                            {currentMovieDetail ?  currentMovieDetail.vote_average: ""} <i className="fa fa-star text-yellow-300" />
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime text-gray-800 dark:text-white text-xl my-2 max-md:text-m"><span className="font-bold">Status: </span>{currentMovieDetail ? currentMovieDetail.status  : ""}</div>

                        <div className="movie__runtime text-gray-800 dark:text-white text-xl my-2 max-md:text-m"><span className="font-bold">Runtime: </span>{currentMovieDetail ?  currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate text-gray-800 dark:text-white text-xl max-md:text-m"><span className="font-bold">Release Date: </span>{currentMovieDetail ? currentMovieDetail.release_date : ""}</div>
                        <div className="movie__genres my-2 max-md:text"><span className="text-gray-800 dark:text-white text-xl max-md:text-m pr-2 font-bold">Genres: </span>
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie__genre text-gray-800 dark:text-white text-xl max-md:text-m pr-5" id={genre.id}>#{genre.name}</span><br className="md:hidden"></br></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText text-gray-800 dark:text-white text-xl my-2 font-bold max-md:text-m">Synopsis: </div>
                        <div className="text-gray-800 dark:text-white max-md:text-m">{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                    
                </div>
            </div>

    
      <div className="movie__heading text-gray-800 dark:text-white font-bold text-3xl mt-10">Production companies</div>
            <div className="movie__production my-5 flex max-md:flex-col">
                {
                    currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                        <>
                            {
                              
                              company.logo_path 
                              && 
                              <span className="productionCompanyImage ">
                                  
                                    <img className="movie__productionComapany dark:bg-white p-5 max-md:p-2 w-64 max-md:m-5 max-md:w-32 mx-10" src={"https://image.tmdb.org/t/p/original" + company.logo_path} alt=""/>
                                   
                                </span>
                                
                             
                              }
                        </>
                    ))
                }
            </div>
        </div>






    </>
  );
};

export default MovieDetails;
