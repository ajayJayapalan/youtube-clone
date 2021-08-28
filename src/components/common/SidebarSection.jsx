import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import {
  primarySection,
  secondarySection,
  showMore,
  playList,
} from "../../services/sidebar_section";
import { youtubers } from "../../services/fake_profileService";
import SidebarProfile from "./SidebarProfile";

function SidebarSection() {
  const [more, setMore] = useState({
    status: false,
    icon: showMore.iconDown,
    name: showMore.more,
  });

  function handleMore() {
    if (more.status) {
      setMore({ status: false, icon: showMore.iconDown, name: showMore.more });
    } else {
      setMore({ status: true, icon: showMore.iconUp, name: showMore.less });
    }
  }

  function getSection(section) {
    return section.map((item) => {
      return (
        <SidebarItem key={item.id} Icon={item.icon}>
          {item.name}
        </SidebarItem>
      );
    });
  }

  function getPlaylist(playlist) {
    return playlist.playListText.map((item) => {
      return (
        <SidebarItem key={item.id} Icon={playlist.icon}>
          {item.name}
        </SidebarItem>
      );
    });
  }

  function getShowMore() {
    return (
      <SidebarItem onTouch={handleMore} Icon={more.icon}>
        {more.name}
      </SidebarItem>
    );
  }

  function getHorizontalLine() {
    return <hr className="horizontal__line" />;
  }

  function getSubscription() {
    return (
      <>
        <span className="sidebar__section__heading">subscription</span>
        {getProfiles()}
      </>
    );
  }

  function getProfiles() {
    return youtubers.map((profile) => {
      return (
        <SidebarProfile
          key={profile.id}
          live={profile.live}
          notificationBlue={profile.notificationBlue}
          src={profile.profileImage}
        >
          {profile.name}
        </SidebarProfile>
      );
    });
  }

  return (
    <div className="sidebar__section">
      {getSection(primarySection)}
      {getHorizontalLine()}
      {getSection(secondarySection)}
      {more.status && getPlaylist(playList)}
      {getShowMore()}
      {getHorizontalLine()}
      {getSubscription()}
    </div>
  );
}

export default SidebarSection;
