import React from "react";

const FooterComponent = () => {
  return (
    <div className="footer">
      <div className="header-logo">
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Yandex_Eats_icon.svg/2048px-Yandex_Eats_icon.svg.png"
          }
          alt="logo"
          width={50}
        />
        <p>Яндекс Еда</p>
      </div>

      <ul>
        <div className="apps">
          <a href="https://apps.apple.com/ru/app/yandex-eats-food-delivery/id1078986931?l=en">
            <img
              width={30}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1200px-Apple_logo_grey.svg.png"
              alt=""
            />{" "}
            App Store
          </a>
          <a href="https://play.google.com/store/apps/details?id=ru.foodfox.client&hl=ru&gl=US">
            <img
              width={30}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Google_Play_2012-2016_icon.svg/1921px-Google_Play_2012-2016_icon.svg.png"
              alt=""
            />
            Play Store
          </a>
        </div>
      </ul>
    </div>
  );
};

export default FooterComponent;
