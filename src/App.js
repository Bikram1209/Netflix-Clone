import React, { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Row from "./components/Row";
import requests from "./utils/requests";

function App() {
  const [user, setUser] = useState(null);
  const [userEP, setUserEP] = useState(null);

  const handleFacebookLogin = (childData) => {
    setUser({ data: childData });
  };

  const handleEmailPasswordLogin = (data) => {
    setUserEP({ data: data });
  };

  const handleLogout = () => {
    setUser(null);
    setUserEP(null);
  };

  return (
    <div className="app">
      {!(user || userEP) ? (
        <Login FacebookCallback={handleFacebookLogin} EmailCallback={handleEmailPasswordLogin} />
      ) : (
        <>
          <Navbar mainApp userfacebook={user} callback={handleLogout} />
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
        </>
      )}
    </div>
  );
}

export default App;
