import { useEffect, useState } from "react";
import "./App.css";
import MoviesList from "./components/MoviesList";
import MoviesListHeading from "./components/MovieListHeading";
import Footer from "./components/Footer";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";
import Header from "./components/Header";
import About from "./components/About";
import Error from "./components/Error";
import RemoveFavourites from "./components/RemoveFavourites";
import MovieDetails from "./components/MovieDetails";
import Moviepage from "./components/Moviepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieSlides from "./components/MovieSlides";

function App() {
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [popmovies, SetPopMovies] = useState([]);
  const [poptv, SetPopTv] = useState([]);

  const getPopMovieRequest = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f2df3f7b3e3ad6698bad061c920dafdc&language=en-US&page=1"
    )
      .then((response) => response.json())

      .then((response) => SetPopMovies(response.results))
      .then((response) => console.log(response.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getPopMovieRequest();
  }, []);

  const getPopTvRequest = () => {
    fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=f2df3f7b3e3ad6698bad061c920dafdc&language=en-US&page=1"
    )
      .then((response) => response.json())

      .then((response) => SetPopTv(response.results))
      .then((response) => console.log(response.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getPopTvRequest();
  }, []);

  const getMovieRequest = async (searchValue) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=f2df3f7b3e3ad6698bad061c920dafdc&language=en-US&query=${searchValue}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .then((response) => console.log(response))

      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  const getTvRequest = async (searchValue) => {
    fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=f2df3f7b3e3ad6698bad061c920dafdc&language=en-US&query=${searchValue}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((response) => setTv(response.results))
      .then((response) => console.log(response))

      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getTvRequest(searchValue);
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
      (favourite) => favourite.id !== movie.id
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <>
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

                  <MovieSlides
                    movies={popmovies}
                    handleFavouritesClick={addFavouritesMovie}
                    favouriteComponent={AddFavourites}
                  />

                  <MoviesListHeading heading="Popular Movies - Top 20" />
                  <MoviesList
                    movies={popmovies}
                    handleFavouritesClick={addFavouritesMovie}
                    favouriteComponent={AddFavourites}
                  />

                  <MoviesListHeading heading="Popular Tv - Top 20" />
                  <MoviesList
                    movies={poptv}
                    handleFavouritesClick={addFavouritesMovie}
                    favouriteComponent={AddFavourites}
                  />

                  <MoviesListHeading heading="Searched Movies" />
                  <MoviesList
                    movies={movies}
                    handleFavouritesClick={addFavouritesMovie}
                    favouriteComponent={AddFavourites}
                  />
                  <MoviesListHeading heading="Searched Tv Series" />
                  <MoviesList
                    movies={tv}
                    handleFavouritesClick={addFavouritesMovie}
                    favouriteComponent={AddFavourites}
                  />

                  <MoviesListHeading heading="Favourites Movies" />

                  <MoviesList
                    movies={favourites}
                    handleFavouritesClick={removeFavouriteMovie}
                    favouriteComponent={RemoveFavourites}
                  />
                </>
              );
            }}
          >

          </Route>

          <Route exact path="/about">
            <About />
          </Route>
        
          <Route path="/movie/:id">
            <MovieDetails
              handleFavouritesClick={addFavouritesMovie}
              favouriteComponent={AddFavourites}
            />
          </Route>

          <Route path="/PopularMovies">
            <MoviesListHeading heading="Popular Movies - Top 20" />
            <Moviepage
              movies={popmovies}
              handleFavouritesClick={addFavouritesMovie}
              favouriteComponent={AddFavourites}
            />
          </Route>
          <Route path="/PopularTv">
            <MoviesListHeading heading="Popular Tv - Top 20" />
            <Moviepage
              movies={poptv}
              handleFavouritesClick={addFavouritesMovie}
              favouriteComponent={AddFavourites}
            />
          </Route>

          <Route path="/Favourites">
            <MoviesListHeading heading="Favourites" />
            <Moviepage
              movies={favourites}
              handleFavouritesClick={removeFavouriteMovie}
              favouriteComponent={RemoveFavourites}
            />
          </Route>
        </Switch>
        
          <Route exact path="/*">
            <Error />
          </Route>

        <Footer />
      </Router>
    </>
  );
}

export default App;
