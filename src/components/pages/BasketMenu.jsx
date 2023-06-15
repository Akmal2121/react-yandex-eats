import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  basketReducer,
  changeBasketItems,
  changeBasketItemsMinus,
  getBasketItemsReducer,
  removeBasket,
} from "../../store/reducer";
import "./basketmenu.css";
import { useState, useEffect } from "react";

const BasketMenu = () => {
  const { isBasket } = useSelector((state) => state);
  const { basketItems } = useSelector((state) => state);
  const { address } = useSelector((state) => state);
  let [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  function remove() {
    dispatch(getBasketItemsReducer([]));
  }
  function ready() {
    if (basketItems.length < 1) {
      alert(`Вы ничего не заказывали!`);
    } else {
      alert(
        `Ваш заказ будет доставлен на адрес ${address} \nитоговая сумма ${total} сум`
      );
    }
  }

  function decrement(item) {
    dispatch(changeBasketItemsMinus(item.id));
  }
  function increment(item) {
    dispatch(changeBasketItems(item.id));
  }
  useEffect(() => {
    const sumTotal = (arr) =>
      arr.reduce((sum, { price, count }) => sum + price * count, 0);
    setTotal((total = sumTotal(basketItems)));
    basketItems.map((item) => {
      if (item.count === 0) {
        dispatch(removeBasket(item.id));
      }
    });
  }, [basketItems]);
  return (
    <div className="basket-menu-wrapper">
      <div className="basket-title basket-menu-title">
        <h3>Корзина</h3>
        {basketItems.length > 0 ? (
          <button className="btn-login btn-confirm btn-b-m-c" onClick={remove}>
            Очистить
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="cover">
        {basketItems.map((item) => {
          return (
            <div className="basket-items" key={item.id}>
              <div style={{ flexDirection: "column" }}>
                <p className="qwe">{item.title}</p>
                <p>{item.price} </p>
              </div>
              <div>
                {item.count < 1 ? (
                  <button
                    className="btn-login btn-basket-cancel"
                    disabled
                    onClick={() => decrement(item)}
                  >
                    -
                  </button>
                ) : (
                  <button
                    className="btn-login btn-basket-cancel"
                    onClick={() => decrement(item)}
                  >
                    -
                  </button>
                )}

                <p>{item.count}</p>
                <button
                  className="btn-login btn-basket-cancel"
                  onClick={() => increment(item)}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="totalPrice">
          <p>{total} сум</p>
        </div>
        <div>
          <button className="btn-login btn-confirm" onClick={ready}>
            Оформить
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketMenu;
