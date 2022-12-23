import { useEffect, useState } from "react";
import "./App.css";
import MoviesList from "./components/MoviesList";
import MoviesListHeading from "./components/MovieListHeading";
import Footer from "./components/Footer";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";
import Header from "./components/Header";
import About from "./components/About";
import RemoveFavourites from "./components/RemoveFavourites";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Search from "./components/Search";

function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [popmovies, SetPopMovies] = useState([]);
  // const [setMovieId , SetMovieDetail]= useState([]);

  const getPopRequest = () => {
    
    // const options = {
      //   method: "GET",
      //   headers: {
        //     "X-RapidAPI-Key": "bf11fd3266msh419a46d02d0ef99p1e6ecajsnf2925e9766a2",
        //     "X-RapidAPI-Host":
        //       "most-popular-movies-right-now-daily-update.p.rapidapi.com",
        //   },
        // };
        
        fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=f2df3f7b3e3ad6698bad061c920dafdc&language=en-US&page=1"
          )
          .then((response) => response.json())
          
          .then((response) => SetPopMovies(response.results))
          .then((response) => console.log(response.results))
          .catch((err) => console.error(err));
          
        // const url = 'https://api.themoviedb.org/3/movie/popular?api_key=f2df3f7b3e3ad6698bad061c920dafdc&language=en-US&page=1';
      
        // const response = await fetch(url);
        // const responseJson = await response.json();
    
        // if (responseJson.Search) {
        //   SetPopMovies(responseJson.Search);
        //   console.log(responseJson.Search);
        // }
     

        };

  useEffect(() => {
    getPopRequest();
  }, []);

  // const getMovieRequest = async (searchValue) => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "bf11fd3266msh419a46d02d0ef99p1e6ecajsnf2925e9766a2",
  //       "X-RapidAPI-Host": "mdblist.p.rapidapi.com",
  //     },
  //   };


    // const url = `https://mdblist.p.rapidapi.com/?s=${searchValue}`;

    // const response = await fetch(url , options);
    // const responseJson = await response.json();

    // if (responseJson.Search) {
    //   setMovies(responseJson.Search);
    //   console.log(responseJson.Search);
    // }
    

  // };

  const getMovieRequest = async (searchValue) => {
    


    fetch(`https://api.themoviedb.org/3/search/movie?api_key=f2df3f7b3e3ad6698bad061c920dafdc&language=en-US&query=${searchValue}&page=1&include_adult=false`)
    .then((response) => response.json())
    // .then(console.log(url))
    .then((response) => setMovies(response.results))
    .then((response) => console.log(response))
  
    .catch((err) => console.error(err));


    // const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=639a737`;

    // const response = await fetch(url);
    // const responseJson = await response.json();

    // if (responseJson.Search) {
    //   setMovies(responseJson.Search);
    //   console.log(responseJson.Search);
    // }
  };

  useEffect(() => {
    getMovieRequest(searchValue); 
  }, [searchValue]);

  useEffect(() => {
    if (localStorage.getItem("react-movie-app-favourites") === null) {
      localStorage.setItem("react-movie-app-favourites", JSON.stringify([]));
    }
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    setFavourites(movieFavourites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
    console.log("this is ite," + items);
  };

  const addFavouritesMovie = (movie) => {
    const newFavouriteList = [...favourites, movie]; 
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) =>
        (favourite.id ) !== (movie.id )
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <Router>
      <Header />
      {/* <Search/> */}

      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <>
                <SearchBox
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
                <MoviesListHeading heading="Popular Movies - Top 20" />
                <MoviesList
                  movies={popmovies}
                  handleFavouritesClick={addFavouritesMovie}
                  favouriteComponent={AddFavourites}
                />

                
                {/* <Popular 
                  movies={popmovies}
                  handleFavouritesClick={addFavouritesMovie}
                  // popularComponent={getPopularMovies}
                  /> */}

                {/* Movie list */}
                <MoviesListHeading heading="Movies" />
                <MoviesList
                  movies={movies}
                  handleFavouritesClick={addFavouritesMovie}
                  favouriteComponent={AddFavourites}
                />

                {/* favourites */}

                <MoviesListHeading heading="Favourites Movies" />

                <MoviesList
                  movies={favourites}
                  handleFavouritesClick={removeFavouriteMovie}
                  favouriteComponent={RemoveFavourites}
                />
              </>
            );
          }}
        ></Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route
          path="/movie/:id"
        >
          <MovieDetails />
        </Route>

        <Route path="/*">
          <About />
        </Route>

      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
