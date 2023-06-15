import React, { useRef, useState } from "react";
import "./oqtepa.css";
import logo from "../../images/dostavka.png";
import star from "../../images/star.png";
import info from "../../images/info.png";
import restItem from "../../Items/restaraunts/RestItems";
import menu_oqtepa from "../../Items/restaraunts/FeedUpMenu";
import BasketMenu from "./BasketMenu";
import MainComponentFeedUP from "../MainComponentFeedUP";
import { Link, Outlet } from "react-router-dom";

const FeedUp = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  let props = {
    ref1: ref,
    ref2: ref2,
    ref3: ref3,
    ref4: ref4,
    ref5: ref5,
  };
  const handleClick = (e) => {
    if (e.target.outerText === "Комбо") {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (e.target.outerText === "Лаваш") {
      ref2.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (e.target.outerText === "Гамбургер") {
      ref3.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (e.target.outerText === "Сендвичи") {
      ref4.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (e.target.outerText === "Напитки") {
      ref5.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="oqtepa-container">
      <div className="oqtepa-grid">
        <div className="menu-bar border_radius">
          <Link to={"/"}>
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
          <div className="bg-theme-restaraunt bg-feedup">
            <h1>Feed Up C-1</h1>
            <div className="info-wrapper">
              <div className="arrives">
                <img src={logo} width={30} alt="" />
                20 min
              </div>
              <div className="rate">
                <img src={star} width={30} alt="" />
                <span style={{ display: "flex", justifySelf: "flex-end" }}>
                  <p style={{ fontWeight: "bolder" }}>{restItem[1].rate}</p>
                  <p>({restItem[1].rated_people})</p>
                </span>
              </div>
              <div className="info">
                <img src={info} width={30} alt="" />
              </div>
            </div>
          </div>
          <div className="feedup-main">
            <MainComponentFeedUP {...props} />
          </div>
        </div>
        <div className="basket-bar border_radius">
          <BasketMenu />
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default FeedUp;
