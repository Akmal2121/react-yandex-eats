import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import star from "../images/star.png";
import { getBasketItemsReducer, removeBasket } from "../store/reducer";
import menu_oqtepa, {
  burger,
  kombo,
  napitki,
  sandvich,
} from "../Items/restaraunts/FeedUpMenu";
import { lavash_oqtepa } from "../Items/restaraunts/FeedUpMenu";
import { useState } from "react";

const MainComponentFeedUP = React.forwardRef((props) => {
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
          {item === "Лаваш" ? <h1 ref={props.ref2}>{item}</h1> : null}
          {item === "Гамбургер" ? <h1 ref={props.ref3}>{item}</h1> : null}
          {item === "Сендвичи" ? <h1 ref={props.ref4}>{item}</h1> : null}
          {item === "Напитки" ? <h1 ref={props.ref5}>{item}</h1> : null}
          <div className="main-content">
            {item === "Комбо"
              ? kombo.map((item) => (
                  <div className="product menu-product" key={item.id}>
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
            {item === "Лаваш"
              ? lavash_oqtepa.map((item) => (
                  <div className="product menu-product" key={item.id}>
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
            {item === "Гамбургер"
              ? burger.map((item) => (
                  <div className="product menu-product" key={item.id}>
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
            {item === "Сендвичи"
              ? sandvich.map((item) => (
                  <div className="product menu-product" key={item.id}>
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
                  <div className="product menu-product" key={item.id}>
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

export default MainComponentFeedUP;
