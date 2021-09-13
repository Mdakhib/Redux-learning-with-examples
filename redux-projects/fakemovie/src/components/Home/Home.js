import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIKEY } from "../../common/apis/movieApiKey";
const Home = () => {
  useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apikey=${APIKEY}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Err", err);
        });
      console.log("the response from API: ", response);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
