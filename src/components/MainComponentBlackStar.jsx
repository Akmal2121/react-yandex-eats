import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import star from "../images/star.png";
import { getBasketItemsReducer, removeBasket } from "../store/reducer";
import menu_oqtepa, {
  kombo,
  napitki,
  spec_burger,
  std_burger,
} from "../Items/restaraunts/BlackStarMenu";
import { useState } from "react";

const MainComponentBlackStar = React.forwardRef((props) => {
  const { storeItems } = useSelector((state) => state);
  const { basketItems } = useSelector((state) => state);
  const [uniq, setUniq] = useState(new Set());
  const dispatch = useDispatch();
  useEffect(() => {
    basketItems.map((item) => {
      if (item.count === 0) {
        dispatch(removeBasket(item.id));
      }
    });
    if (basketItems.length === 0) {
      setUniq(new Set());
    }
  }, [basketItems]);

  const toBasket = (item) => {
    try {
      setUniq(uniq.add(item));
    } catch {}
    dispatch(getBasketItemsReducer(Array.from(uniq)));
  };
  return (
    <div className="main">
      {menu_oqtepa.map((item) => (
        <div key={item}>
          {item === "Комбо" ? <h1 ref={props.ref1}>{item}</h1> : null}
          {item === "Бургеры Стандартные" ? (
            <h1 ref={props.ref2}>{item}</h1>
          ) : null}
          {item === "Бургеры Фирменные" ? (
            <h1 ref={props.ref3}>{item}</h1>
          ) : null}
          {item === "Напитки" ? <h1 ref={props.ref4}>{item}</h1> : null}
          <div className="main-content">
            {item === "Комбо"
              ? kombo.map((item) => (
                  <div className="product" key={item.id}>
                    <img
                      src={item.img}
                      alt="alt"
                      onClick={() => {
                        toBasket(item);
                      }}
                    />
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
                        {item.rate > 4.5 ? " Отлично" : " Хорошо"}({item.price}
                        +)сум
                      </span>
                    </div>
                  </div>
                ))
              : null}
            {item === "Бургеры Стандартные"
              ? std_burger.map((item) => (
                  <div className="product" key={item.id}>
                    <img
                      src={item.img}
                      alt="alt"
                      onClick={() => {
                        toBasket(item);
                      }}
                    />
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
                        {item.rate > 4.5 ? " Отлично" : " Хорошо"}({item.price}
                        +)сум
                      </span>
                    </div>
                  </div>
                ))
              : null}
            {item === "Бургеры Фирменные"
              ? spec_burger.map((item) => (
                  <div className="product" key={item.id}>
                    <img
                      src={item.img}
                      alt="alt"
                      onClick={() => {
                        toBasket(item);
                      }}
                    />
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
                        {item.rate > 4.5 ? " Отлично" : " Хорошо"}({item.price}
                        +)сум
                      </span>
                    </div>
                  </div>
                ))
              : null}
            {item === "Напитки"
              ? napitki.map((item) => (
                  <div className="product" key={item.id}>
                    <img
                      src={item.img}
                      alt="alt"
                      onClick={() => {
                        toBasket(item);
                      }}
                    />
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
                        {item.rate > 4.5 ? " Отлично" : " Хорошо"}({item.price}
                        +)сум
                      </span>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      ))}
    </div>
  );
});

export default MainComponentBlackStar;
