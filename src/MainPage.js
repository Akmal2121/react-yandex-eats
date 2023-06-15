import React, { useState } from "react";
import items from "./Items/items.js";
import LoginPage from "./components/pages/LoginPage.jsx";
import { useDispatch, useSelector } from "react-redux";
import BasketPage from "./components/pages/BasketPage.jsx";
import Shops from "./components/Shops.jsx";
import { getItemsReducer } from "./store/reducer.js";
import { useEffect } from "react";
import Main from "./components/Main.jsx";

const MainPage = () => {
  const [enter, setEnter] = useState("");
  const { isAuth } = useSelector((state) => state);
  const { isBasket } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItemsReducer(items));
  }, []);

  return (
    <div>
      <Main />
      <div className="container">
        {isAuth ? <LoginPage setEnter={setEnter} /> : ""}
        {isBasket ? <BasketPage /> : ""}
        <div className="main-container">
          <Shops />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
