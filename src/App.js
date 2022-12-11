import { useEffect, useState } from "react";
import "./App.css";
import MoviesList from "./components/MoviesList";
// import FavouritesMoviesList from "./components/FavouritesMoviesList";
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
      (favourite) => favourite.imdbID !== movie.imdbID
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
                <MoviesListHeading heading="Movies" />
                <MoviesList
                  movies={movies}
                  handleFavouritesClick={addFavouritesMovie}
                  favouriteComponent={AddFavourites}
                />

                {/* favourites */}

                <MoviesListHeading heading="Favourites" />

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
