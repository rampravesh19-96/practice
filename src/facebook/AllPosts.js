import React from "react";
import { Link } from "react-router-dom";
import Post from "./Post";

function AllPosts({ postData }) {
  return (
    <>
      <div className="write-post-container">
        <div className="user-profile">
          <img src={require(`./images/${'profile-pic.png'}`)} alt="user profile" />
          <div>
            <p>John Nicho</p>
            <small>public <i className="fa-solid fa-sort-down"></i></small>
          </div>
        </div>

        <div className="post-input-container">
          <textarea rows="3" placeholder="What's on your mind, John"></textarea>
          <div className="add-post-links">
            <Link to="#"><img src={require(`./images/${'live-video.png'}`)} alt="live video icon" />Live Video</Link>
            <Link to="#"><img src={require(`./images/${'photo.png'}`)} alt="photo icon" />Photo/Video</Link>
            <Link to="#"><img src={require(`./images/${'feeling.png'}`)} alt="feeling icon" />Feeling/Activity</Link>
          </div>
        </div>
      </div>

      <div id="allpost">
        {postData.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default AllPosts;
