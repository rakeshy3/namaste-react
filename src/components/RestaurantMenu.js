import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId)
console.log('resInfo=', resInfo)
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