import React, { useRef } from "react";
import MainComponent from "../MainComponent";
import "./oqtepa.css";
import logo from "../../images/dostavka.png";
import star from "../../images/star.png";
import info from "../../images/info.png";
import restItem from "../../Items/restaraunts/RestItems";
import menu_oqtepa from "../../Items/restaraunts/OqtepaMenu";
import BasketMenu from "./BasketMenu";
import { Link, Outlet } from "react-router-dom";

const OqtepaRest = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  let props = {
    ref1: ref,
    ref2: ref2,
    ref3: ref3,
    ref4: ref4,
  };
  const handleClick = (e) => {
    if (e.target.outerText === "Пицца") {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (e.target.outerText === "Лаваш") {
      ref2.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (e.target.outerText === "Гамбургер") {
      ref3.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (e.target.outerText === "Напитки") {
      ref4.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="oqtepa-container">
      <div className="oqtepa-grid">
        <div className="menu-bar border_radius">
          <Link to="/">
            <h3 className="back-to-main"> все рестораны </h3>
          </Link>
          <h3>Меню</h3>
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
          <div className="bg-theme-restaraunt">
            <h1>Oqtepa Lavash West</h1>
            <div className="info-wrapper">
              <div className="arrives">
                <img src={logo} width={30} alt="" />
                25 min
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
          <MainComponent {...props} />
        </div>
        <div className="basket-bar border_radius">
          <BasketMenu />
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default OqtepaRest;
