import React from "react";
import "./styles.css";
import Entry from "./components/Entry";

export default function App() {
  const [moviesList, setMoviesList] = React.useState([
    {
      id: 1,
      title: "3 Idiots",
      rating: "8.4",
      actors: "Aamir Khan, R. Madhavan, Kareena Kapoor, Sharman Joshi",
      liked: false,
      watchList: false
    },
    {
      id: 4,
      title: "Inception",
      rating: "8.8",
      actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page,Tom Hardy",
      liked: false,
      watchList: false
    },
    {
      id: 5,
      title: "Swades",
      rating: "8.6",
      actors: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
      liked: false,
      watchList: false
    }
  ]);

  function handleLike(id) {
    const likedMovie = moviesList.map((movie) => {
      const moviesListCopy = { ...movie };
      if (moviesListCopy.id === id) {
        if (moviesListCopy.liked) {
          moviesListCopy.liked = false;
        } else {
          moviesListCopy.liked = true;
        }
      }
      return moviesListCopy;
    });

    setMoviesList(likedMovie);
  }

  function handleWatchList(id) {
    const watchedMovie = moviesList.map((movie) => {
      const moviesListCopy = { ...movie };
      if (moviesListCopy.id === id) {
        if (moviesListCopy.watchList) {
          moviesListCopy.watchList = false;
        } else {
          moviesListCopy.watchList = true;
        }
      }
      return moviesListCopy;
    });

    setMoviesList(watchedMovie);
  }

  function handleDelete(id) {
    const filteredList = moviesList.filter((movie) => movie.id !== id);
    setMoviesList(filteredList);
  }
  return (
    <div className="App">
      <h1>
        <span>Movie</span>
      </h1>
      <dl className="list">
        {moviesList.map((movie) => (
          <Entry
            key={movie.id}
            id={movie.id}
            title={movie.title}
            rating={movie.rating}
            actors={movie.actors}
            onLike={handleLike}
            watchList={handleWatchList}
            onDelete={handleDelete}
            liked={movie.liked}
            checkWatchList={movie.watchList}
          />
        ))}
      </dl>
    </div>
  );
}
