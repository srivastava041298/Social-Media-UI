import React, { useState } from "react";
import "./Post.css";
import { UilEllipsisV } from "@iconscout/react-unicons";
import { Users } from "./../../dummyData.js";
import { UilThumbsUp, UilHeart } from "@iconscout/react-unicons";
function Post(props) {
  const [like, setLike] = useState(props.post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={
                Users.filter((user) => user.id === props.post.id)[0]
                  .profilePicture
              }
              className="postProfileImg"
              alt="profile pic"
            />
            <span className="postUsername">
              {Users.filter((user) => user.id === props.post.id)[0].username}
            </span>
            <span className="postDate">{props.post.date}</span>
          </div>
          <div className="postTopRight">
            <UilEllipsisV className="postIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{props.post?.desc}</span>
          <img className="postImg" src={props.post.photo} alt="post pic" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <UilThumbsUp
              className={isLiked ? "likeIcon like" : "likeIcon"}
              onClick={likeHandler}
            />

            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">
              {" "}
              {props.post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Post;
