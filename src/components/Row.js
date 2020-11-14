import React, { useEffect, useState } from "react";
import "./Row.css";
import Axios from "../utils/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, largeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await Axios.get(fetchUrl).then((res) => setMovies(res?.data.results));
    };
    fetchData();
  }, [fetchUrl]);

  const ImageUrl = "https://image.tmdb.org/t/p/w500";

  const errorHandler = (e) => {
    e.target.style.display = "None";
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`${largeRow ? "row__poster" : "row__posterSmall"}`}
              src={`${largeRow ? ImageUrl + movie.poster_path : ImageUrl + movie.backdrop_path}`}
              alt={movie.name || movie.orginal_name || movie.title}
              onError={errorHandler}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
