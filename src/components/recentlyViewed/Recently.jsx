import React, {useContext} from 'react'
import { ApiIdContext } from '../../App'
import { useScrollTo } from "react-use-window-scroll";


function Recently({recently}) {
    const imagePath = 'https://image.tmdb.org/t/p/w500';
    const [apiId, setApiId] = useContext(ApiIdContext);
    const scrollTo = useScrollTo();

    const returnId = () => {
      setApiId(recently.id)
      scrollTo({ top: 200, left: 0, behavior: "smooth" })
    }

  return (
    <div className='movie-card' onClick={returnId}>
        {recently.poster_path ? 
        <img className='movie-cover' src={`${imagePath}${recently.poster_path}`} 
        alt={recently.title} /> 
        :null}
        </div>
  )
}

export default Recently
