import { useState } from 'react';
import RestaurantCrad from './RestaurantCard';
import rseObj from '../utils/mockData';
 const Body = () => {
 
const [listOfRestaurant, setListOfRestaurant] = useState(rseObj);
    return (
      <div className="body">
        <div className="filter">
            <button className='filter-btn' onClick={()=> {                
                const filtredList = listOfRestaurant?.filter((res) => res?.info?.avgRating > 4);
                setListOfRestaurant(filtredList);
            }}> Top rated restaurant</button>
        </div>
        <div className="res-container">
         
  
          {
            listOfRestaurant?.map((res) => (
              <RestaurantCrad resData = {res} key={res?.info?.id}  />
            ))
          }
          
        </div>
      </div>
    )
  }
  export default Body;