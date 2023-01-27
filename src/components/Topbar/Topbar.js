import React from "react";
import "./Topbar.css";
import {
  UilSearch,
  UilUser,
  UilCommentAltMessage,
  UilBell,
} from "@iconscout/react-unicons";

function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">AmanSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <UilSearch className="searchIcon" />
          <input
            type="text"
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <UilUser />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <UilCommentAltMessage />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <UilBell />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img
          src="/assets/person/1.jpg"
          alt="profile pic"
          className="topbarImg"
        />
      </div>
    </div>
  );
}
export default Topbar;
