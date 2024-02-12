import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { CDN_URL, MENU_API } from '../utils/constants';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [resInfo, setResInfo] = useState(null);
    const fetchMenu = async () => {
        console.log('resId=', resId)
        // added https://corsproxy.io/? as prefix in url to bypass cors issue
        const data = await fetch(`${MENU_API}${resId}&catalog_qa=undefined&submitAction=ENTER`);
    
        const json = await data.json();
        setResInfo(json?.data)
        
        //const resList = cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        //setListOfRestaurant(resList);
      }

    useEffect(() => {
        fetchMenu();
    }, [])


    if (resInfo === null) return <Shimmer />;

    const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  return (
    <div className='menu'>
        <h1>{ resInfo?.cards[0]?.card?.card?.info?.name }</h1>
        {/* <img className="res-card-img" src= {`${CDN_URL}${ cloudinaryImageId}`} /> */}
        <h2>{ resInfo?.cards[0]?.card?.card?.info?.cuisines?.join(',') }</h2>
        <h2>{ resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage }</h2>
       <h2>Menu</h2>
       <ul>
            { itemCards?.map((item) => (
                    <li key= {item?.card?.info?.id}>{ item?.card?.info?.name  } - Rs. {item?.card?.info?.price/ 100 || item?.card?.info?.defaultPrice /100}</li> 
                )
            )
            
            }
       </ul>

    </div>
  )
}

export default RestaurantMenu