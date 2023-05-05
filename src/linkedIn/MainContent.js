import React from "react";
import authorImage from "./images/user-1.png";

import downArrowImage from "./images/down-arrow.png";
import photoImage from "./images/photo.png";
import videoImage from "./images/video.png";
import eventImage from "./images/event.png";
import Post from "./Post";
import {postData} from "./data";


function MainContent() {
  return (
    <div className="main-content">
      <div className="create-post">
        <div className="create-post-input">
          <img src={authorImage} />
          <textarea rows="2" placeholder="Write a post"></textarea>
        </div>
        <div className="create-post-links">
          <li>
            <img src={photoImage} />
            POhoto
          </li>
          <li>
            <img src={videoImage} />
            Video
          </li>
          <li>
            <img src={eventImage} />
            Event
          </li>
          <li>Post</li>
        </div>
      </div>

      <div className="sort-by">
        <hr />
        <p>
          Sort by <span>top <img src={downArrowImage} /></span>
        </p>
      </div>
      {postData.map(post => <Post key={post.id} post={post}/>)}

</div>
);
}

export default MainContent
