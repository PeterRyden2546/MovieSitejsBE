import React ,{useContext} from 'react'
import { ApiIdContext } from '../../App';
import { useScrollTo } from "react-use-window-scroll";
import './moviecard.css';
import '../../index.css'

function MovieCard({movie}) {
  const imagePath = 'https://image.tmdb.org/t/p/w500';
  const [apiId, setApiId, recently, setRecently] = useContext(ApiIdContext);
  const scrollTo = useScrollTo();

  const saveLocalStorage = (items) => {
    localStorage.setItem('localJSBE', JSON.stringify(items));
  }

  const returnId = () => {
    setApiId(movie.id)
    scrollTo({ top: 200, left: 0, behavior: "smooth" })
    if(recently.length >= 5){
      recently.splice(-1, 1)
      const newRecently = [movie, ...recently];
     setRecently(newRecently)
     saveLocalStorage(newRecently)
    }
    const newRecently = [movie, ...recently];
    setRecently(newRecently)
    saveLocalStorage(newRecently)
  }
  
  

  return (
      <div className='movie-card'>
      {movie.poster_path ? 
      <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} className='movie-cover' 
      onClick={returnId} /> 
      :null}
      </div>
  );
};

export default MovieCard