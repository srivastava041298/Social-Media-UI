import React from "react";
import "./Share.css";
import {
  UilImage,
  UilTag,
  UilMapMarker,
  UilSmileBeam,
} from "@iconscout/react-unicons";
function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="/assets/person/1.jpg"
            alt="profile pic"
          />
          <input
            className="shareInput"
            type="text"
            placeholder="What's in your mind ?"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <UilImage style={{ color: "tomato" }} className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <UilTag style={{ color: "#1d4ed8" }} className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <UilMapMarker
                style={{ color: "#22c55e" }}
                className="shareIcon"
              />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <UilSmileBeam
                style={{ color: "#f59e0b" }}
                className="shareIcon"
              />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
export default Share;
