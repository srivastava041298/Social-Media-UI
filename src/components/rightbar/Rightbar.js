import React from "react";
import "./Rightbar.css";
import { Users } from "./../../dummyData";
function Rightbar(props) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src="/assets/gift.png"
            alt="birthday pic"
          />
          <span className="birthdayText">
            <b>Tanishq Mehta</b> and <b> 3 other friends</b> have birthday
            today.
          </span>
        </div>
        <img
          className="rightbarAd"
          src="/assets/ad.png"
          alt="advertisement pic"
        />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => {
            return (
              <>
                <li className="rightbarFriend" key={user.id}>
                  <div className="rightbarProfileImgContainer">
                    <img
                      className="rightbarProfileImg"
                      src={user.profilePicture}
                      alt="online pic"
                    />
                    <span className="rightbarOnline"></span>
                  </div>
                  <span className="rightbarUsername">{user.username}</span>
                </li>
              </>
            );
          })}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Pune</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Kanpur</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="/assets/person/1.jpg"
              alt="friend pic"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Akash Srivastava</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/person/2.jpg"
              alt="friend pic"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Akash Srivastava</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/person/3.jpg"
              alt="friend pic"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Akash Srivastava</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/person/4.jpg"
              alt="friend pic"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Akash Srivastava</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/person/5.jpg"
              alt="friend pic"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Akash Srivastava</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/person/6.jpg"
              alt="friend pic"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Akash Srivastava</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {props.profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
export default Rightbar;
