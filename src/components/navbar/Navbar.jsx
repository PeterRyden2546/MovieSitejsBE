import React, { useState, useContext, useEffect } from 'react'
import { NavApiContext } from '../caruosel/Caruosel';
import './navbar.css';


function Navbar() {
    const [apiConst, setApiConst, headLine, setHeadLine] = useContext(NavApiContext);

    const  all = ()=> {
        setApiConst('all')
        setHeadLine('Top on movie site jsBE of the week')
    }
    const movie = () => {
        setApiConst('movie')
        setHeadLine('Top movies of the week')
    }
    const tv = () => {
        setApiConst('tv')
        setHeadLine('Top TV-show of the week')
    }

  return (
    <div className='container-navbar'>
        <button className='button-navbar button-all' onClick={all}><h4>Top All</h4></button>
        <button className='button-navbar' onClick={movie}><h4>Top Movie</h4></button>
        <button className='button-navbar button-toptv' onClick={tv}><h4>Top TV</h4></button>
    </div>
  )
}

export default Navbar 