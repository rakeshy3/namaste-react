import { useEffect, useState } from 'react';
import RestaurantCrad from './RestaurantCard';
import rseObj from '../utils/mockData';
import Shimmer from './Shimmer';
 const Body = () => {

  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

    const json = await data.json();
    const { data: { cards } } = json;
    const resList = cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurant(resList);
  }
 
  useEffect(() => {
    console.log('use effects called');
    fetchData();
  }, [])
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  if(listOfRestaurant?.length === 0){
    return <Shimmer />
  }


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