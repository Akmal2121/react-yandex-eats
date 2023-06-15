import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { basketReducer, getAddress, loginReducer } from "../store/reducer";
import { useState } from "react";

const HeaderComponent = ({ enter, setEnter }) => {
  const { isAuth } = useSelector((state) => state);
  const [val, setVal] = useState("");
  const { isBasket } = useSelector((state) => state);
  const dispatch = useDispatch();

  const login = () => {
    dispatch(loginReducer(!isAuth));
  };
  const logout = () => {
    localStorage.removeItem("username");
    setEnter("Войти");
  };
  function adres(e) {
    if (localStorage.getItem("username")) {
      setVal(e.target.value);
      dispatch(getAddress(val));
    } else {
      alert("Not authorized!");
    }
  }
  function basket() {
    if (localStorage.getItem("username")) {
      dispatch(basketReducer(!isBasket));
    } else {
      alert("Not authorized!");
    }
  }
  return (
    <div className="header">
      <div className="header-logo">
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Yandex_Eats_icon.svg/2048px-Yandex_Eats_icon.svg.png"
          }
          alt="logo"
          width={50}
        />
        <div>
          <p className="yandex-title">Яндекс Еда</p>
          {localStorage.getItem("username") ? (
            <p>Hi {localStorage.getItem("username")}!</p>
          ) : (
            ""
          )}
        </div>
      </div>
      <input
        type="text"
        onChange={(e) => {
          adres(e);
        }}
        value={val}
        placeholder="Введите адрес"
      />
      <div className="btns-header">
        <button onClick={basket} className="btn-login basket">
          Корзина
        </button>
        {enter === "Выйти" || localStorage.getItem("username") ? (
          <button onClick={logout} className="btn-login">
            Выйти
          </button>
        ) : (
          <button onClick={login} className="btn-login">
            Войти
          </button>
        )}
      </div>
    </div>
  );
};

export default HeaderComponent;
