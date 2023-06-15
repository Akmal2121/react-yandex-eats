import React from "react";
import { Outlet, Link } from "react-router-dom";
import star from "../images/star.png";
import "../main.css";
import shopItems from "../Items/restaraunts/ShopsItem";

const Shops = () => {
  return (
    <div className="main-page-restaraunt">
      <h1>Магазины</h1>
      <div className="restaraunt-grids">
        {shopItems.map((item) => (
          <div className="product restaraunt-content" key={item.id}>
            <Link to={item.link}>
              <img src={item.img} alt="" />
            </Link>
            <h3>{item.title}</h3>
            <div className="rating">
              <span>
                <img
                  src={star}
                  alt="star"
                  className="star"
                  width={10}
                  height={10}
                />{" "}
                {item.rate}
                {item.rate > 4.5 ? " Отлично" : " Хорошо"}({item.rated_people}
                +)голоса
              </span>
            </div>
          </div>
        ))}
        <Outlet />
      </div>
    </div>
  );
};

export default Shops;
