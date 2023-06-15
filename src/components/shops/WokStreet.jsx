import React, { useRef } from "react";
import "../pages/oqtepa.css";
import logo from "../../images/dostavka.png";
import star from "../../images/star.png";
import info from "../../images/info.png";
import restItem from "../../Items/restaraunts/RestItems";
import menu_oqtepa from "../../Items/restaraunts/WokSteetMenu";
import BasketMenu from "../pages/BasketMenu";
import { Link, Outlet } from "react-router-dom";
import MainComponentWok from "../MainComponentWok";

const WokStreet = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  let props = {
    ref1: ref,
    ref2: ref2,
    ref3: ref3,
  };
  const handleClick = (e) => {
    if (e.target.outerText === "Вок") {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (e.target.outerText === "Напитки") {
      ref2.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (e.target.outerText === "Гамбургер") {
      ref3.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="oqtepa-container">
      <div className="oqtepa-grid">
        <div className="menu-bar border_radius">
          <Link to="/">
            <h3 className="back-to-main"> все рестораны </h3>
          </Link>
          <h3>Menu</h3>
          <ul>
            {menu_oqtepa.map((item, index) => (
              <li
                className="menu-li"
                key={index}
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="menu-items border_radius">
          <div className="bg-theme-restaraunt bg-wok">
            <h1>Wok & Street 77</h1>
            <div className="info-wrapper">
              <div className="arrives">
                <img src={logo} width={30} alt="" />
                30 min
              </div>
              <div className="rate">
                <img src={star} width={30} alt="" />
                <span style={{ display: "flex", justifySelf: "flex-end" }}>
                  <p style={{ fontWeight: "bolder" }}>{restItem[0].rate}</p>
                  <p>({restItem[0].rated_people})</p>
                </span>
              </div>
              <div className="info">
                <img src={info} width={30} alt="" />
              </div>
            </div>
          </div>
          <MainComponentWok {...props} />
        </div>
        <div className="basket-bar border_radius">
          <BasketMenu />
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default WokStreet;
