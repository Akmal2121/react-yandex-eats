const LOG_IN = "LOG_IN";
const BASKET_IN = "BASKET_IN";
const GET_ITEMS = "GET_ITEMS";
const GET_BASKET_ITEMS = "GET_BASKET_ITEMS";
const REMOVE_BASKET_ITEMS = "REMOVE_BASKET_ITEMS";
const CHANGE_BASKET_COUNT_PLUS = "CHANGE_BASKET_COUNT_PLUS";
const CHANGE_BASKET_COUNT_MINUS = "CHANGE_BASKET_COUNT_MINUS";
const GET_ADDRESS = "GET_ADDRESS";

const defaultState = {
  isAuth: false,
  isBasket: false,
  address: "",
  storeItems: [],
  basketItems: [],
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, isAuth: action.payload };
    case GET_ADDRESS:
      return { ...state, address: action.payload };
    case BASKET_IN:
      return { ...state, isBasket: action.payload };
    case GET_ITEMS:
      return { ...state, storeItems: action.payload };
    case GET_BASKET_ITEMS:
      return { ...state, basketItems: action.payload };
    case REMOVE_BASKET_ITEMS:
      return {
        ...state,
        basketItems: state.basketItems.filter((i) => i.id !== action.payload),
      };
    case CHANGE_BASKET_COUNT_PLUS:
      return {
        ...state,
        basketItems: state.basketItems.map((item) => {
          if (item.id === action.payload) {
            return { ...item, count: item.count + 1 };
          } else {
            return item;
          }
        }),
      };
    case CHANGE_BASKET_COUNT_MINUS:
      return {
        ...state,
        basketItems: state.basketItems.map((item) => {
          if (item.id === action.payload) {
            return { ...item, count: item.count - 1 };
          } else {
            return item;
          }
        }),
      };
    default:
      return state;
  }
};

export const loginReducer = (payload) => {
  return { type: LOG_IN, payload };
};
export const getAddress = (payload) => {
  return { type: GET_ADDRESS, payload };
};
export const basketReducer = (payload) => {
  return { type: BASKET_IN, payload };
};
export const getItemsReducer = (payload) => {
  return { type: GET_ITEMS, payload };
};
export const getBasketItemsReducer = (payload) => {
  return { type: GET_BASKET_ITEMS, payload };
};
export const removeBasket = (payload) => {
  return { type: REMOVE_BASKET_ITEMS, payload };
};
export const changeBasketItems = (payload) => {
  return { type: CHANGE_BASKET_COUNT_PLUS, payload };
};
export const changeBasketItemsMinus = (payload) => {
  return { type: CHANGE_BASKET_COUNT_MINUS, payload };
};
