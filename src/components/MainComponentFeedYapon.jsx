import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import star from "../images/star.png";
import { getBasketItemsReducer, removeBasket } from "../store/reducer";
import menu_oqtepa, {
  deserts,
  napitki,
  sets,
} from "../Items/restaraunts/YaponaMamaMenu";
import { useState } from "react";

const MainComponentFeedYapon = React.forwardRef((props) => {
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
          {item === "Сеты" ? <h1 ref={props.ref1}>{item}</h1> : null}
          {item === "Десерты" ? <h1 ref={props.ref2}>{item}</h1> : null}
          {item === "Напитки" ? <h1 ref={props.ref3}>{item}</h1> : null}
          <div className="main-content">
            {item === "Сеты"
              ? sets.map((item) => (
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
            {item === "Десерты"
              ? deserts.map((item) => (
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

export default MainComponentFeedYapon;
