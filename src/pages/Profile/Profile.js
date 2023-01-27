import React from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import "./Profile.css";
function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="/assets/post/3.jpg"
                alt="cover pic"
              />
              <img
                className="profileUserImg"
                src="/assets/post/7.jpg"
                alt="profile pic"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Aman Srivastava</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
