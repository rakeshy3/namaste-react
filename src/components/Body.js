import { useEffect, useState } from 'react';
import RestaurantCrad from './RestaurantCard';
import rseObj from '../utils/mockData';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
 const Body = () => {
  const onlineStatus = useOnlineStatus();
  const fetchData = async () => {
  try {
      // added https://corsproxy.io/? as prefix in url to bypass cors issue
      const data = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

      const json = await data.json();
      const { data: { cards } } = json;
      const resList = cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setListOfRestaurant(resList);
      setFiltredRestaurant(resList);
  } catch (error) {
    console.log(error);
  }

  
  }
 
  useEffect(() => {
    console.log('use effects called');
    fetchData();
  }, [])
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filtredRestaurant, setFiltredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState('');

  if(!onlineStatus)
    return <h1>Looks like you are offline. PLease check your internet connection</h1>;

    return listOfRestaurant?.length === 0 ? <Shimmer /> : (
      <div className="body">
        <div className="filter flex">
          <div className='search m-4 p-4 px-4 py-2'>
            <input className='search-bax border border-solid border-black' value={searchText} onChange={(e) => {
              setsearchText(e.target.value)
            }} />
            <button className='px-4 bg-green-100 rounded-lg' onClick={() => {
              // filter
              const filteredData = listOfRestaurant?.filter((res) => {
                return (res?.info?.name)?.toLowerCase().includes(searchText?.toLowerCase());
              })
              setFiltredRestaurant(filteredData);
            }}>Search</button>

          </div>
          <div className='search m-4 p-4 px-4 py-2 items-center'>
          <button className='px-4 py-2 bg-gray-100 rounded-lg' onClick={()=> {                
                const filtredList = listOfRestaurant?.filter((res) => res?.info?.avgRating > 4);
                setFiltredRestaurant(filtredList);
            }}> Top rated restaurant</button>
          </div>
         
        </div>
        <div className="flex flex-wrap">
         
  
          {

          filtredRestaurant?.map((res) => (
            <Link key={res?.info?.id} to={`/restaurants/${res?.info?.id}`}> <RestaurantCrad resData = {res} key={res?.info?.id}  /></Link>
            ))
          }
          
        </div>
      </div>
    )
  }
  export default Body;