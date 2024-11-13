import {useState, useEffect} from "react";
import "./App.css";

import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  const apiKey = "1bb784c7";

  const [movie, setMovie] = useState(null);

  const getMovie = async(searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
    } catch(e) {
      console.error(e)
    }
  }

  // Array of movie titles
  const movieTitles = ["Clueless", "Inception", "The Matrix", "Titanic", "Avatar"];

  // This will run on the first render and fetch a random movie
  useEffect(() => {
    const randomMovie = movieTitles[Math.floor(Math.random() * movieTitles.length)];
    getMovie(randomMovie);
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}