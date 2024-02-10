import React from "react";
import ReactDOM from "react-dom/client";

const styleCard = {
  backgroundColor: "#f0f0f0"
}

const RestaurantCrad = () => {
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-card-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uubzuxzz2nps1zylts6f" />
       <h3> Meghna Foods</h3>
       <h4> North Indian</h4>
       <h4>4.4 star</h4>
       <h4> 38 min</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCrad />
        <RestaurantCrad />
        <RestaurantCrad />
        <RestaurantCrad />
        <RestaurantCrad />
        <RestaurantCrad />
        <RestaurantCrad />
        <RestaurantCrad />
        <RestaurantCrad />
        <RestaurantCrad />
        <RestaurantCrad />
        <RestaurantCrad />
        <RestaurantCrad />
        <RestaurantCrad />
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&usqp=CAU"></img>
      </div>
      <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);