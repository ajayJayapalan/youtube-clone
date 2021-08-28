import React from "react";

function SidebarItem({Icon, children }) {
  return (
    <div className="sidebar__section__item">
      <Icon />
      <span className="sidebar__section__item__text">{children}</span>
    </div>
  );
}

export default SidebarItem;
