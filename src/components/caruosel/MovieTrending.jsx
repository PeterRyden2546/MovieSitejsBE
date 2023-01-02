import React, {useContext} from 'react'
import { ApiIdContext } from '../../App';
import { useScrollTo } from "react-use-window-scroll";

function MovieTrending({movieTrending}) {
    const imagePath = 'https://image.tmdb.org/t/p/w500';
    const [apiId, setApiId, recently, setRecently] = useContext(ApiIdContext);
    const scrollTo = useScrollTo();

    const saveLocalStorage = (items) => {
      localStorage.setItem('localJSBE', JSON.stringify(items));
    }

    const returnId = () => {
      setApiId(movieTrending.id)
      scrollTo({ top: 200, left: 0, behavior: "smooth" })
      if(recently.length === 5){
        recently.splice(-1, 1)
        const newRecently = [movieTrending, ...recently];
       setRecently(newRecently)
       saveLocalStorage(newRecently)
      }
      const newRecently = [movieTrending, ...recently];
      setRecently(newRecently)
      saveLocalStorage(newRecently)
    }
    
    return (
        <>
        {movieTrending.poster_path ? 
        <img className='imagemovie' src={`${imagePath}${movieTrending.poster_path}`} 
        alt={movieTrending.title} onClick={returnId}/> 
        :null}
        </>
    );
  };
export default MovieTrending