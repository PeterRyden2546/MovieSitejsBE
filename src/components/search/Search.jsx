import React, {useState, useEffect, useContext} from 'react'
import SearchIcon from './search.svg';
import './search.css';
import Api from '../api/Api';
import MovieCard from '../moviecard/MovieCard';
import MovieInfo from '../movieInfo/MovieInfo';
import { ApiIdContext } from '../../App';

const urlApiSearch = 'https://api.themoviedb.org/3/search/movie?api_key=848aac6085fb776da129d22896c15486&query='

function Search() {
    const [movies, setMovies] = useState([]);
    const [searchTher, setSearchTher] = useState("");
    const [apiId, setApiId] = useContext(ApiIdContext);

    
  const fetchApi = async () => {
    const respons = await fetch(`${urlApiSearch}${searchTher}`);
    const movies = await respons.json();
    setMovies(movies.results)
  }
  useEffect(() => {
    fetchApi()
  },[searchTher]);  

  return (
    <div className='search-div'>
        <div className='search'>
            <input
            placeholder='Search for movies'
            value={searchTher}
            onChange={(e) => setSearchTher(e.target.value)}
            onClick={() => setApiId()}
            />
            <img
            src={SearchIcon}
            alt='search'
            onClick={() => fetchApi(searchTher)}
            />
        </div>
        {apiId ?<MovieInfo /> : null}
        {
            movies?.length > 0
            ?(
                <div className='container'>
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ):
            searchTher?.length > 0 & movies?.length === 0
            ?(
                <div className='empty'>
                    <h2>No movies found!</h2>
                </div>
            ):(
                <div></div> 
            )
        }
       
    </div>
  )
}

export default Search