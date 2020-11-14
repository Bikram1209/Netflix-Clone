import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Row from "./components/Row";
import requests from "./utils/requests";

function App() {
  return (
    <div className="app">
      <Navbar mainApp />
      <Banner fetchUrl={requests.fetchNetflixOrignals} />
      <Row title="NETFLIX ORIGINALS" largeRow fetchUrl={requests.fetchNetflixOrignals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Animated TV Series" fetchUrl={requests.fetchAnimationTV} />
      <Row title="Commedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Animated Movies" fetchUrl={requests.fetchAnimationMovie} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
