import React from "react";
import SidebarItem from "./SidebarItem";
import {
  primarySection,
  secondarySection,
  showMore,
} from "../../services/sidebar_section";
import { youtubers } from "../../services/fake_profileService";
import SidebarProfile from "./SidebarProfile";

function getSection(section) {
  return section.map((item) => {
    return (
      <SidebarItem key={item.id} Icon={item.icon}>
        {item.name}
      </SidebarItem>
    );
  });
}

function getShowMore(showMore) {
  return <SidebarItem Icon={showMore.icon}>{showMore.name}</SidebarItem>;
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

function SidebarSection() {
  return (
    <div className="sidebar__section">
      {getSection(primarySection)}
      {getHorizontalLine()}
      {getSection(secondarySection)}
      {getShowMore(showMore)}
      {getHorizontalLine()}
      {getSubscription()}
    </div>
  );
}

export default SidebarSection;
