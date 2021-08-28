import React from "react";

const liveSrc = "https://i.dlpng.com/static/png/1417936--streaming-http-live-streaming-live-png-500_500_preview.png";


function SidebarProfile({ src, children, live , notificationBlue }) {
  return (
    <div className="sidebar__section__item">
      <img className="sidebar__section__item__profile" src={src} alt="" />
      <span className="sidebar__section__item__profile__text ">{children}</span>
      {live && <img className="sidebar__section__item__profile__status" src={liveSrc} alt="" />}
      {!live && notificationBlue && <span style={{fontSize: ".4rem"}}>🔵</span>}
    </div>
  );
}

export default SidebarProfile;
