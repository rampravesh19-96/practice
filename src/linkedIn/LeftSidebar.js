import React, { useState } from "react";
import { Link } from "react-router-dom";
import coverPic from "./images/cover-pic.png";
import user1 from "./images/user-1.png";
import items from "./images/items.png";
import premium from "./images/premium.png";
import recent from "./images/recent.png";
import group from "./images/group.png";
import hashtag from "./images/hashtag.png";

function LeftSidebar() {

const [showMore,setShowMore] = useState();
const [isActivityOpen, setIsActivityOpen] = useState(false);

function toggleActivity() {
  setIsActivityOpen(!isActivityOpen);
}

const recentItems = [
{ id: 1, text: "Web Development", image: recent },
{ id: 2, text: "User Interface", image: recent },
{ id: 3, text: "Online Learning", image: recent },
{ id: 4, text: "Learn Online", image: recent },
{ id: 5, text: "Group Learning", image: recent },
];

const groups = [
{ id: 1, text: "Web design Group", image: group },
{ id: 2, text: "HTML & CSS Learners", image: group },
{ id: 3, text: "Python & javaScript Group", image: group },
{ id: 4, text: "Learn Coding Online", image: group },
];

const hashtags = [
{ id: 1, text: "webdeveloper", image: hashtag },
{ id: 2, text: "userinterface", image: hashtag },
{ id: 3, text: "onlinelearning", image: hashtag },
];

return (
<div className="left-sidebar">
<div className="sidebar-profile-box">
<img src={coverPic} width="100%" />
<div className="sidebar-profile-info">
<img src={user1} />
<h1>Rayan Walton</h1>
<h3>Web Developer at Microsoft</h3>
<ul>
<li>
Your profile views <span>52</span>
</li>
<li>
Your post views <span>810</span>
</li>
<li>
Your connections <span>205</span>
</li>
</ul>
</div>
<div className="sidebar-profile-link">
<Link to="#">
<img src={items} /> My items
</Link>
<Link to="#">
<img src={premium} /> Try Premium
</Link>
</div>
</div>
<div className={`sidebar-activity ${isActivityOpen?'open-activity':''}`} id="sidebarActivity">
  <h3>RECENT</h3>
  {recentItems.map((item) => (
    <Link to="#" key={item.id}>
      <img src={item.image} /> {item.text}
    </Link>
  ))}
  <h3>GROUPS</h3>
  {groups.map((item) => (
    <Link to="#" key={item.id}>
      <img src={item.image} /> {item.text}
    </Link>
  ))}
  <h3>HASHTAG</h3>
  {hashtags.map((item) => (
    <Link to="#" key={item.id}>
      <img src={item.image} /> {item.text}
    </Link>
  ))}
  <div className="discover-more-link">
    <Link to="#">Discover more</Link>
  </div>
</div>

<p id="showMoreLink" onClick={toggleActivity} className={isActivityOpen? "open-activity":""}>
  {isActivityOpen ? (
    <>
      Show less <b>-</b>
    </>
  ) : (
    <>
      Show more <b>+</b>
    </>
  )}
</p>
</div>
)
  }

export default LeftSidebar
