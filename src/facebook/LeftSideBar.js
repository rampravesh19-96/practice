import React from "react";
import newsImg from "./images/news.png";
import friendsImg from "./images/friends.png";
import groupImg from "./images/group.png";
import marketplaceImg from "./images/marketplace.png";
import watchImg from "./images/watch.png";
import shortcut1Img from "./images/shortcut-1.png";
import shortcut2Img from "./images/shortcut-2.png";
import shortcut3Img from "./images/shortcut-3.png";
import shortcut4Img from "./images/shortcut-4.png";

const shortcutsData = [
  {
    id: 1,
    title: "Web Developers",
    imgSrc: shortcut1Img,
  },
  {
    id: 2,
    title: "Web Design course",
    imgSrc: shortcut2Img,
  },
  {
    id: 3,
    title: "Full Stack Developers",
    imgSrc: shortcut3Img,
  },
  {
    id: 4,
    title: "Website Expert",
    imgSrc: shortcut4Img,
  },
];

function LeftSidebar() {
  return (
    <div className="left-sidebar">
      <div className="imp-links">
        <a href="#">
          <img src={newsImg} alt="Latest News" />
          Latest News
        </a>
        <a href="#">
          <img src={friendsImg} alt="Friends" />
          Friends
        </a>
        <a href="#">
          <img src={groupImg} alt="Group" />
          Group
        </a>
        <a href="#">
          <img src={marketplaceImg} alt="Marketplace" />
          Marketplace
        </a>
        <a href="#">
          <img src={watchImg} alt="Watch" />
          Watch
        </a>
        <a href="#">See More</a>
      </div>
      <div className="shortcut-links">
        <p>Your Shortcuts</p>
        {shortcutsData.map((shortcut) => (
          <a key={shortcut.id} href="#">
            <img src={shortcut.imgSrc} alt={shortcut.title} />
            {shortcut.title}
          </a>
        ))}
      </div>
    </div>
  );
}

export default LeftSidebar;
