import React, { useState } from "react";
import items from "../../Items/items.js";
import LoginPage from "../pages/LoginPage.jsx";
import { useDispatch, useSelector } from "react-redux";
import BasketPage from "../pages/BasketPage.jsx";
import { getItemsReducer } from "../../store/reducer.js";
import { useEffect } from "react";
import YaponaMama from "../shops/YaponaMama.jsx";

const YaponaMamaPage = () => {
  const [enter, setEnter] = useState("");
  const { isAuth } = useSelector((state) => state);
  const { isBasket } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItemsReducer(items));
  }, []);

  return (
    <div>
      <YaponaMama />
      <div className="container">
        {isAuth ? <LoginPage setEnter={setEnter} /> : ""}
        {isBasket ? <BasketPage /> : ""}
      </div>
    </div>
  );
};

export default YaponaMamaPage;
