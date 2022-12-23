import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import "../App.css"

const MovieSlides = (props) => {
  return (

    <div>
<Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                    showArrows={false}
                    swipeable={false}
                    useKeyboardArrows={true}
                >
                    {
                        props.movies?.map((movie) => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="mt-5 max-md:mt-28 h-screen max-md:h-52 ">
                                    <img className="m-auto w-full max-md:w-32" src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt=""/>
                                </div>
                                <div className="absolute p-20 bottom-0 w-full h-4/5 flex flex-col slide-gradient justify-end items-start opacity-95 transition-opacity hover:opacity-100">
                                    <div className="text-left text-6xl max-md:text-xl font-bold mb-4">{movie ? movie.original_title: ""}</div>
                                    <div className="text-2xl mb-4  max-md:text-xs">
                                        {movie ? movie.release_date : ""}
                                        <span className="ml-12">
                                            {movie ? movie.vote_average :""}
                                            <i className="fa fa-star pl-1 text-yellow-300"/>{" "}
                                        </span>
                                    </div>
                                    <div className="text-left flex mb-1 w-10/12 max-md:w-full max-md:hidden max-md:text-xs">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>


    </div>
  )
}

export default MovieSlides