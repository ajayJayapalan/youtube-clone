import React from "react";
import youtubeLogo from "../images/logo.png";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Apps from "@material-ui/icons/Apps";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
      <MenuIcon />
        <div className="header__image__container">
          <img className="header__image" src={youtubeLogo} alt="" />
        </div>
      </div>
      <div className="header__searchbar">
        <div className="header__searchbar__container">
            <input type="text" placeholder="Search" />
            <div className="search__icon__container"><SearchIcon fontSize="small" /></div>
        </div>
        <div className="header__mic__bg"><MicIcon /></div>
      </div>
      <div className="header__right">
        <VideoCallIcon fontSize="medium" />
        <Apps fontSize="medium" />
        <div className="header__noti__container">
          <NotificationsIcon fontSize="medium" />
          <div className="header__noti__number">
            <span className="text-xs">2</span>
          </div>
        </div>
        <img
          className="header__profile__container"
          src="https://uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
