import React, {useContext} from 'react'
import { ApiIdContext } from '../../App'
import Recently from './Recently';
import './recentlyViewed.css';

function RecentlyViewed() {
    const [apiId, setApiId, recently, setRecently] = useContext(ApiIdContext);
    
  return (
    <>
      {recently.length > 0 ? <h2 className='title-recently'>Recently viewed</h2> : null }
      <div className='recently'>
        {recently.map((recently) => {
          return <Recently key={recently.id} recently={recently} />
          })
          }
      </div>
    </>
  )
}

export default RecentlyViewed
