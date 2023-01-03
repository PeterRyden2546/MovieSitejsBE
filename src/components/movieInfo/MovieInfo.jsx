import React, {useState, useEffect, useContext} from 'react'
import { ApiIdContext } from '../../App';
import './movieInfo.css'
import YouTube from 'react-youtube';

function MovieInfo() {
    
  const [apiId, setApiId] = useContext(ApiIdContext);
  const [movieTv, setMovieTv] = useState('movie')
  const reRender = movieTv + apiId;
    
    const popuApi = `https://api.themoviedb.org/3/${movieTv}/${apiId}?api_key=848aac6085fb776da129d22896c15486&append_to_response=videos`;
    const [movie, setMovie] = useState([]);
    const imagePath = 'https://image.tmdb.org/t/p/w1280';
    const [showTrailer, setShowTrailer] = useState(false)

      const fetchApi = async () => {
      const respons = await fetch(popuApi);
      const movie = await respons.json();
      if(movie.backdrop_path == null || movie.id == undefined && movie.status_code === 34){
        setMovieTv('tv')
      }
      if(movieTv === 'tv' && movie.status_code === 34){
        setMovieTv('movie')
      }
      setMovie(movie)
  }

    useEffect(() => {
      fetchApi()
    }, [reRender]); 
    

    const playTrailer = () => {
      const trailer = movie.videos.results.find( vid => vid.name === 'Official Trailer')
      const key = trailer ? trailer.key : movie.videos.results[0].key
      return (
        <YouTube 
          videoId= {key}
          className={"youtube-container"}
           opts={ apiId ?{
            width: "100%",
            height: "100%",
            playerVars: {
              autoplay: 1,
              controls: 0,              
            }
          }: null }
        />
      )

    }
  

  return (
    <>
      {apiId ?<div className='container-movieinfo' 
      style={{ backgroundImage: `url("${imagePath}${movie.backdrop_path}")`,
      backgroundRepeat: 'no-repeat', width: '70%'}} >
        {movie.videos && showTrailer ? playTrailer() : null} 
        {showTrailer ? <button className='close-trailer' onClick={() => setShowTrailer(false)}>&#10008;</button> : null}
        <div className='movieinfo-items'>
              <a href={movie.homepage} className='movie-link'>
                  <h2 className='link-text'>{movie.title}</h2>
              </a>
              <p>{movie.overview}</p>
              <p>Play trailer</p>
              <button className='playStop' onClick={() => setShowTrailer(true)}>&#9654;</button> 
          </div>
      </div>: null }
    </>
  )
}

export default MovieInfo