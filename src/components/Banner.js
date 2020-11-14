import React, { useEffect, useState } from "react";
import "./Banner.css";
import Axios from "../utils/axios";

function Banner({ fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await Axios.get(fetchUrl).then((res) => setMovies(res.data.results));
    };
    fetchData();
  }, [fetchUrl]);

  const ImageUrl = "https://image.tmdb.org/t/p/original/";
  const randomMovie = movies[Math.floor(Math.random() * movies.length - 2)];
  const styles = {
    backgroundImage: `url(${ImageUrl}${randomMovie?.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPositiion: "100% 50%",
    backgroundAttachment: "fixed",
  };

  const truncateString = (string, n) =>
    string?.length <= n ? string : string?.slice(0, n) + "...";

  return (
    <div className="banner" style={styles}>
      <div className="banner__content">
        <h1>{randomMovie?.title || randomMovie?.original_name || randomMovie?.name}</h1>
        <div className="banner__buttons">
          <button className="banner__btn">Play</button>
          <button className="banner__btn">My List</button>
        </div>
        <p>{truncateString(randomMovie?.overview, 200)}</p>
      </div>
      <div className="banner__downFade"></div>
    </div>
  );
}

export default Banner;
