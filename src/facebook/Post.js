import React from "react";
import { Link } from "react-router-dom";


function Post({ post }) {
  return (
    <div className="post-container">
      <div className="post-row">
        <div className="user-profile">
          <img src={require(`./images/${'profile-pic.png'}`)} alt="profile pic" />
          <div>
            <p>{post.user}</p>
            <span>{post.time}</span>
          </div>
        </div>
        <Link to="#">
          <i className="fas fa-ellipsis-v"></i>
        </Link>
      </div>
      <p className="post-text">
        {post.text}
      </p>
      <img
        src={require(`./images/${post.image}`)}
        alt="post image"
        className="post-img"
      />
      <div className="post-row">
        <div className="activity-icons">
          <div>
            <img src={require(`${"./images/like-blue.png"}`)} alt="like icon" />
            {post.likes}
          </div>
          <div>
          <img src={require(`${"./images/comments.png"}`)} alt="comment icon" />
            {post.comments}
          </div>
          <div>
          <img src={require(`${"./images/share.png"}`)} alt="share icon" />
            {post.shares}
          </div>
        </div>
        <div className="post-profile-icon">
          <img src={require(`${"./images/profile-pic.png"}`)} alt="profile pic" />

          <i className="fa-solid fa-sort-down"></i>
        </div>
      </div>
    </div>
  );
}


    
 export default Post;
    
