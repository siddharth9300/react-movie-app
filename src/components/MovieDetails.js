import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movie.css"

// import { Link } from "react-router-dom";
export const MovieDetails = () => {
  const [currentMovieDetail, SetMovie] = useState();
  const { id } = useParams();

  // const showDetails = (movieDetails)=> {
  const getData = async () => {
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "X-RapidAPI-Key": "bf11fd3266msh419a46d02d0ef99p1e6ecajsnf2925e9766a2",
    //     "X-RapidAPI-Host": "mdblist.p.rapidapi.com",
    //   },
    // };

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f2df3f7b3e3ad6698bad061c920dafdc&language=en-US`)
      .then((response) => response.json())
      .then((response) => SetMovie(response))
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

    useEffect(() => {
      getData();
    },[]);
  //   const FavouriteComponent = props.favouriteComponent;

  return (
    <>


<div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} alt=""/>
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} alt="" />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} rel="noreferrer" target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} rel="noreferrer" target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            <div className="movie__heading">Production companies</div>
            <div className="movie__production">
                {
                    currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <span className="productionCompanyImage">
                                    <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} alt=""/>
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>
        </div>





























































































      {/* <section className="text-gray-600 body-font overflow-hidden">
        <img
          alt="ecommerce"
          className=" w-full lg:h-auto  h-auto object-co object-center rounded"
          src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`}
        />
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className=" w-96 lg:h-auto h-auto object-cover object-center rounded"
              src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {currentMovieDetail ? currentMovieDetail.type : ""}
              </h2>
              <h1 className="text-gray-900 text-6xl text title-font font-large mb-1">
                {currentMovieDetail ? currentMovieDetail.original_title : ""}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <span className="text-gray-600 ml-3 p-5">
                    {currentMovieDetail && currentMovieDetail.ratings
                      ? currentMovieDetail.ratings.map((rating) => (
                          <>
                            <span
                              id={rating.source}
                            >
                              {rating.source} : {rating.value} <br />
                            </span>
                          </>
                        ))
                      : ""}
                  </span>
                </span>
              </div>
              <p className="leading-relaxed text-xl">
                {currentMovieDetail
                  ? "(" + currentMovieDetail.overview + ")"
                  : ""}
              </p>
         
{
              <iframe width="560" height="315" src={`${currentMovieDetail ? currentMovieDetail.trailer.replace('/watch?v=', '/embed/') 
                : ""}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> }
            </div>
          </div>
        </div>
      </section>  */}
    </>
  );
};

export default MovieDetails;
