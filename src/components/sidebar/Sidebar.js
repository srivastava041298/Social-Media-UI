import React from "react";
import "./Sidebar.css";
import {
  UilRss,
  UilBookmark,
  UilQuestionCircle,
  UilCommentAltMessage,
  UilVideo,
  UilUsersAlt,
  UilCalender,
  UilGraduationCap,
  UilBag,
} from "@iconscout/react-unicons";
import { Users } from "./../../dummyData";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <UilRss className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <UilCommentAltMessage className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <UilVideo className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <UilUsersAlt className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <UilBookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <UilQuestionCircle className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <UilBag className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <UilCalender className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <UilGraduationCap className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((user) => {
            return (
              <>
                <li className="sidebarFriend" key={user.id}>
                  <img
                    src={user.profilePicture}
                    alt="friend pic"
                    className="sidebarFriendImg"
                  />
                  <span className="sidebarFriendName">{user.username}</span>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;
