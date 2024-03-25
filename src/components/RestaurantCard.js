import { CDN_URL } from '../utils/constants';

const RestaurantCrad = ({resData}) => {
    const { cloudinaryImageId, name, cuisines, avgRating, sla : { slaString },  costForTwo } = resData?.info;
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
        <img  className="rounded-lg"
        alt="res-logo" src= {`${CDN_URL}${ cloudinaryImageId}`} />
         <h3> { name } </h3>
         <h4 className="break-words"> { cuisines.join(',') } </h4>
         <h4>{ avgRating } </h4>
         <h4> { slaString }  </h4>
         <h4> { costForTwo }  </h4>
      </div>
    )
  }

  export default RestaurantCrad;