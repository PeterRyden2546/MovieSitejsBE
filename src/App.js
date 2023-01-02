import React, {createContext, useState, useEffect} from 'react'
import './app.css';
import Api from './components/api/Api';
import Search from './components/search/Search';
import Caruosel from './components/caruosel/Caruosel'; 
import RecentlyViewed from './components/recentlyViewed/RecentlyViewed';

export const ApiIdContext = createContext();

function App() {
  const [apiId, setApiId] = useState();
  const [recently, setRecently] = useState([]);

  useEffect(() => {
		const movieRecently = JSON.parse(
			localStorage.getItem('localJSBE')
		);

		if (movieRecently) {
			setRecently(movieRecently);
		}
	}, []);

  return (
    <>
    <header>
      <h1>Movie site jsBE</h1>
    </header>
    <ApiIdContext.Provider value= {[apiId, setApiId, recently, setRecently]}>
      <Search />
      <Caruosel />
      <RecentlyViewed />
    </ApiIdContext.Provider>
    </>
  )
}

export default App