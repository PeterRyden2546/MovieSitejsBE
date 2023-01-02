import React, { useState, useEffect } from 'react'
import MovieCard from '../moviecard/MovieCard';
import './api.css';


//const urlApi = "https://api.themoviedb.org/3/";
//const apiKey = "848aac6085fb776da129d22896c15486"
//const topRatedApi = "https://api.themoviedb.org/3/movie/top_rated?api_key=848aac6085fb776da129d22896c15486&language=en-US&page=1";
const popuApi = "https://api.themoviedb.org/3/discover/movie?api_key=848aac6085fb776da129d22896c15486&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

function Api() {
  const [movies, setMovies] = useState([]);

  const fetchApi = async () => {
    const respons = await fetch(popuApi);
    const movies = await respons.json();
    setMovies(movies.results)
  }

  useEffect(() => {
    fetchApi()
  }, []);

  return (
      <div className='container'>
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />
        })
        }
      </div>
  )
};

export default Api


//https://api.themoviedb.org/3/movie/550?api_key=848aac6085fb776da129d22896c15486
//API Key: 848aac6085fb776da129d22896c15486

