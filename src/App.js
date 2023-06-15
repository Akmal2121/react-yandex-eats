import React, { useState } from "react";
import items from "./Items/items.js";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { useDispatch } from "react-redux";
import { getItemsReducer } from "./store/reducer";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OqtepaPage from "./components/mainPages/OqtepaPage.js";
import MainPage from "./MainPage.js";
import FeedUpPage from "./components/mainPages/FeedUpPage.js";
import WokStreetPage from "./components/mainPages/WokStreetPage.js";
import YaponaMamaPage from "./components/mainPages/YaponaMamaPage.js";
import MahallaPage from "./components/mainPages/MahallaPage.js";
import BlackStarPage from "./components/mainPages/BlackStarPage.js";
import MidoriPage from "./components/mainPages/MidoriPage.js";
import Street77Page from "./components/mainPages/Street77Page.js";
import ErrorPage from "./components/pages/ErrorPage.jsx";

const App = () => {
  const [enter, setEnter] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItemsReducer(items));
  }, []);

  return (
    <div className="cover-container">
      <BrowserRouter>
        <HeaderComponent enter={enter} setEnter={setEnter} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="oqtepa" element={<OqtepaPage />} />
          <Route path="feedup" element={<FeedUpPage />} />
          <Route path="wokstreet" element={<WokStreetPage />} />
          <Route path="blackstar" element={<BlackStarPage />} />
          <Route path="mahallabygosht" element={<MahallaPage />} />
          <Route path="midori" element={<MidoriPage />} />
          <Route path="street77" element={<Street77Page />} />
          <Route path="yaponamama" element={<YaponaMamaPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
};

export default App;
