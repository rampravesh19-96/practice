import React from "react";
import { Link } from "react-router-dom";
import moreIcon from "./images/more.png";
import userIcon from "./images/user-1.png"
import miLogo from "./images/mi-logo.png"
import logo from "./images/logo.png"
import { newsData } from "./data";
import { advertisementData } from "./data";


function RightSidebar() {
  return (
    <div className="right-sidebar">
      <div className="sidebar-news">
        <img src={moreIcon} className="info-icon" />
        <h3>Trending News</h3>
        {newsData.map((item, index) => (
          <React.Fragment key={index}>
            <Link to="#">{item.title}</Link>
            <span>{item.ago} &middot; {item.readers}</span>
          </React.Fragment>
        ))}
        <Link to="#" className="read-more-link">Read More</Link>
      </div>

        {advertisementData.map((advertisement) => (
          <div className="sidebar-add" key={advertisement.id}>
            <small>Ad &middot; &middot; &middot;</small>
            <p>{advertisement.title}</p>
            <div>
              <img src={require(`./images/${advertisement.user.image}`)} alt={advertisement.user.name} />
              <img src={require(`./images/${advertisement.brand.image}`)} alt={advertisement.brand.name} />
            </div>
            <b>{advertisement.brand.name}</b>
            <Link to={advertisement.link} className="add-link">Learn More</Link>
          </div>
        ))}


      <div className="sidebar-useful-link">
        <Link to="#">About</Link>
        <Link to="#">Accessiblity</Link>
        <Link to="#">Help Center</Link>
        <Link to="#">Privacy Policy</Link>
        <Link to="#">Advertisement</Link>
        <Link to="#">Get the App</Link>
        <Link to="#">More</Link> 

        <div className="copyright-msg">
          <img src={logo} alt="logo" />
          <p>linkedup &#169; 2022. All right reserved</p>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
