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
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";


// import Search from "./components/Search";

function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const[popmovies, SetPopMovies] = useState([]);


  const getPopRequest = async () => {
    // const url = 'https://most-popular-movies-right-now-daily-update.p.rapidapi.com/';

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'bf11fd3266msh419a46d02d0ef99p1e6ecajsnf2925e9766a2',
        'X-RapidAPI-Host': 'most-popular-movies-right-now-daily-update.p.rapidapi.com'
      }
    };

    fetch('https://most-popular-movies-right-now-daily-update.p.rapidapi.com/',options)
    .then(response => response.json())
    
    .then(response => SetPopMovies(response))
    .then(response => console.log(response))
    .catch(err => console.error(err));

    // const responseJson = await response.json();
    // console.log(response.Search);
    // if (response.Search) {
    //   SetPopMovies(response.Search);
    //   console.log(response.Search);
    // }
  };

  useEffect(() => {

      getPopRequest();
 
  }, []);

























  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=639a737`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
      console.log(responseJson.Search);
    }
  };

  useEffect(() => {

      getMovieRequest(searchValue);
 
  }, [searchValue]);

  useEffect(() => {
   if( localStorage.getItem("react-movie-app-favourites")===null){
    localStorage.setItem("react-movie-app-favourites", JSON.stringify([]  ));
    }
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );
  
    setFavourites(movieFavourites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
    console.log("this is ite,"+items);
  };

  const addFavouritesMovie = (movie) => {
    const newFavouriteList = [...favourites,movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => (favourite.title || favourite.Title) !== (movie.title || movie.Title)
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <Router>
      <Header />
      {/* <Search/> */}

      <Switch>
        <Route exact
          path="/"
          render={() => {
            return (
              <>
                <SearchBox
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
                <MoviesListHeading heading="Popular Movies - Top 30" />
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
          <About/>
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
