import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  basketReducer,
  changeBasketItems,
  changeBasketItemsMinus,
  getBasketItemsReducer,
} from "../../store/reducer";
import { useState, useEffect } from "react";

const BasketPage = () => {
  const { isBasket } = useSelector((state) => state);
  const { basketItems } = useSelector((state) => state);
  const { address } = useSelector((state) => state);
  let [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const logoutBasket = () => {
    dispatch(basketReducer(!isBasket));
  };
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
  }, [basketItems]);
  return (
    <div className="basketPage">
      <div className="basket-content">
        <div className="basket-title">
          <h3>Корзина</h3>
          <button
            className="btn-login btn-basket-cancel"
            onClick={logoutBasket}
          >
            x
          </button>
        </div>
        <div className="cover">
          {basketItems.map((item) => {
            return (
              <div className="basket-items" key={item.id}>
                <p>{item.title}</p>
                <div>
                  <p>{item.price} </p>

                  <button
                    className="btn-login btn-basket-cancel"
                    onClick={() => decrement(item)}
                  >
                    -
                  </button>

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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="totalPrice">
              <p>{total} сум</p>
            </div>
            <div>
              {basketItems.length > 0 ? (
                <button className="btn-login btn-confirm" onClick={remove}>
                  Очистить
                </button>
              ) : (
                ""
              )}
              <button className="btn-login btn-confirm" onClick={ready}>
                Оформить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
