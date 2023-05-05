import React from "react";
import thumbsupImage from "./images/thumbsup.png";
import loveImage from "./images/love.png";
import clapImage from "./images/clap.png";
import likeImage from "./images/like.png";
import commentImage from "./images/comment.png";
import shareImage from "./images/share.png";
import sendImage from "./images/send.png";
import downArrowImage from "./images/down-arrow.png";
import authorImage from "./images/user-1.png";

function Post({post}) {
    return (
      <div className="post">
        <div className="post-author">
          <img src={require(`./images/${post.author_image}`)}/>

          <div>
            <h1>{post.author}</h1>
            <small>{post.role}</small>
            <small>{post.timeAgo}</small>
          </div>
        </div>
  
        <p>{post.content}</p>
        <img src={require(`./images/${post.image}`)} width="100%" />
        <div className="post-stats">
          <div>
            <img src={thumbsupImage} />
            <img src={loveImage} />
            <img src={clapImage} />
            <span className="liked-user">{post.likes}</span>
          </div>
          <div>
            <span>{post.comments} comments &middot; {post.shares} shares</span>
          </div>
        </div>
  
        <div className="post-activity">
          <div>
            <img src={require(`./images/${post.author_image}`)} className="post-activity-user-icon" />

            <img src={downArrowImage} className="post-activity-arrow-icon" />
          </div>
  
          <div className="post-activity-link">
            <img src={likeImage} />
            <span>Like</span>
          </div>
          <div className="post-activity-link">
            <img src={commentImage} />
            <span>Comment</span>
          </div>
          <div className="post-activity-link">
            <img src={shareImage} />
            <span>Share</span>
          </div>
          <div className="post-activity-link">
            <img src={sendImage} />
            <span>Send</span>
          </div>
        </div>
      </div>
    );
  }
  export default Post