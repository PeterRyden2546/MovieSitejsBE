import React, {createContext, useState} from 'react'
import Navbar from '../navbar/Navbar'
import Apimovie from './Apimovie'

export const NavApiContext = createContext();

function Caruosel() {
  const [apiConst, setApiConst] = useState('all');
  const [headLine, setHeadLine] = useState('Top on movie site jsBE of the week');
  return (
    <>
      <NavApiContext.Provider value= {[apiConst, setApiConst, headLine, setHeadLine]}>
        <Navbar />
        <Apimovie />
      </NavApiContext.Provider>
    </>
  )
}

export default Caruosel