import React, {useState, useEffect, useRef, useContext} from 'react'
import MovieTrending from './MovieTrending';
import { NavApiContext } from '../caruosel/Caruosel';
import { ApiIdContext } from '../../App';
import './caruosel.css';




function Apimovie() {
    const [apiConst, setApiConst, headLine, setHeadLine] = useContext(NavApiContext);
    const [apiId, setApiId] = useContext(ApiIdContext);
    const urlApiTrendingMovie = `https://api.themoviedb.org/3/trending/${apiConst}/week?api_key=848aac6085fb776da129d22896c15486`;
    
    const [moviesTrending, setMoviesTrending] = useState([0]);
    const [distance, setDistance] = useState(0);

    const fetchApi = async () => {
      const respons = await fetch(urlApiTrendingMovie);
      const moviesTrending = await respons.json();  
      setMoviesTrending(moviesTrending.results)
    }

    useEffect(() => {
      fetchApi()
    }, [headLine]);

    const sliderRef = useRef()

    const moveLeft = () => {

        if(distance > -400){
            setDistance(distance - 100);
            sliderRef.current.style.transform = `translateX(${distance - 100}%)`
            
        }
    }

    const moveRight = () => {
        if(distance < 0){
            setDistance(distance + 100);
            sliderRef.current.style.transform = `translateX(${distance + 100}%)`
            
        }
    }
  
    return (
        <>
            <h2 className='headline'>{headLine}</h2>
            <div className='container-slider'>
                <button className='button left-button' onClick={moveRight}>
                    <div className='arrow'>&#8249;</div>
                </button>
                <div className='slider' ref={sliderRef}>
                {moviesTrending.map((movieTrending) => {
                    return <MovieTrending key={movieTrending.id} movieTrending={movieTrending} />
                })
                }
                </div>
                <button className='button right-button' onClick={moveLeft}>
                    <div className='arrow'>&#8250;</div>
                </button>
            </div>
        </>
    )
  };
  

export default Apimovie