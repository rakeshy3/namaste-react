import { CDN_URL } from '../utils/constants';
const styleCard = {
    backgroundColor: "#f0f0f0"
  }
const RestaurantCrad = ({resData}) => {
    const { cloudinaryImageId, name, cuisines, avgRating, sla : { slaString },  costForTwo } = resData?.info;
    return (
      <div className="res-card" style={styleCard}>
        <img className="res-card-img" src= {`${CDN_URL}${ cloudinaryImageId}`} />
         <h3> { name } </h3>
         <h4 className="cuisine"> { cuisines.join(',') } </h4>
         <h4>{ avgRating } </h4>
         <h4> { slaString }  </h4>
         <h4> { costForTwo }  </h4>
      </div>
    )
  }

  export default RestaurantCrad;