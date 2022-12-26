import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import "../App.css"

const MovieSlides = (props) => {
    const FavouriteComponent = props.favouriteComponent;
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
                            <>
                            <div className="mt-5 max-md:mt-32 h-screen max-md:h-52 ">
                                    <img className="m-auto w-full max-md:w-32" src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt=""/>
                                </div>
                                <div className="absolute p-20 max-md:px-5 max-md:p-16  bottom-0 w-full h-4/5 flex flex-col slide-gradient justify-end items-start opacity-95 transition-opacity hover:opacity-100">
                                    <div className="text-left text-6xl max-md:text-xl font-bold mb-4 max-md:mb-2 text-white">{movie ? movie.original_title: ""}</div>
                                    <div className="text-2xl mb-4 max-md:mb-2  max-md:text-xs text-white">
                                        {movie ? movie.release_date : ""}
                                        <span className="ml-12  max-md:ml-6">
                                            {movie ? movie.vote_average :""}
                                            <i className="fa fa-star pl-1 text-yellow-300"/>{" "}
                                        </span>
                                        {/* <div className="text-left text-white  rounded-xl hover:bg-black  max-md:border-2 max-md:p-0.5 max-md:mt-0 max-md:mb-0  text-xl  max-md:text-xs">Know More</div> */}
                                    </div>

                                    <div className="text-left flex mb-1 w-10/12 max-md:w-full max-md:hidden max-md:text-xs text-white">{movie ? movie.overview : ""}</div>
                                   
                                   <div className='flex flex-row justify-items-center'>

                                    <Link to={`/movie/${movie.id}`}>
                                    <div className="text-left text-white flex mb-1 mt-2 border-4 p-2 rounded-xl hover:bg-black  max-md:border-2 max-md:p-0.5 max-md:mt-0 max-md:mb-0 max-md:w-full text-xl  max-md:text-xs">Know More</div>
                                    </Link>
                                    <div className="text-left text-white flex ml-5 mb-1 mt-4 p-2   max-md:p-0.5 max-md:m-0" onClick={()=>props.handleFavouritesClick(movie)}><FavouriteComponent /></div>
                                   </div>


                                </div>
                                </>
                        ))
                    }
                </Carousel>


    </div>
  )
}

export default MovieSlides