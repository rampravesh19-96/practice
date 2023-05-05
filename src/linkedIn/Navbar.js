import React, { useState } from "react";
import logo from './images/logo.png';
import searchIcon from './images/search.png';
import homeIcon from './images/home.png';
import networkIcon from './images/network.png';
import jobsIcon from './images/jobs.png';
import messageIcon from './images/message.png';
import notificationIcon from './images/notification.png';
import user1 from './images/user-1.png';
import feedbackIcon from './images/feedback.png';
import settingIcon from './images/setting.png';
import helpIcon from './images/help.png';
import displayIcon from './images/display.png';
import logoutIcon from './images/logout.png';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="" className="logo">
          <img src={logo} alt="logo" />
        </a>

        <div className="search-box">
          <img src={searchIcon} alt="search icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="navbar-center">
        <ul>
          <li>
            <a href="#" className="active-link">
              <img src={homeIcon} alt="home icon" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={networkIcon} alt="network icon" />
              <span>My Network</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={jobsIcon} alt="jobs icon" />
              <span>Jobs</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={messageIcon} alt="message icon" />
              <span>Messaging</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={notificationIcon} alt="notification icon" />
              <span>Notification</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="online"></div>
        <img
          src={user1}
          alt="user profile"
          className="nav-profile-img"
          onClick={toggleMenu}
        />
      </div>

      {/* ------------------ profile dropdown menu -------------- */}

      <div
        className={`profile-menu-wrap ${menuOpen ? "open-menu" : ""}`}
        id="profileMenu">
        <div className="profile-menu">
          <div className="user-info">
            <img src={user1} alt="user profile" />
            <div>
              <h3>Rayan Walton</h3>
              <a href="profile.html">See your profile</a>
            </div>
          </div>
          <hr />
          <a href="#" className="profle-menu-link">
            <img src={feedbackIcon} alt="feedback icon" />
            <p>Give Feedback</p>
            <span>&gt;</span>
          </a>
          <a href="#" className="profle-menu-link">
            <img src={settingIcon} alt="setting icon" />
            <p>Settings &amp; Privacy</p>
            <span>&gt;</span>
          </a>
          <a href="#" className="profle-menu-link">
            <img src={helpIcon} alt="help icon" />
            <p>Help &amp; Support</p>
            <span>&gt;</span>
          </a>
          <a href="#" className="profle-menu-link">
            <img src={displayIcon} alt="display icon" />
            <p>Display &amp; Accessibility</p>
            <span>&gt;</span>
          </a>
          <a href="#" className="profle-menu-link">
            <img src={logoutIcon} alt="logout icon" />
            <p>Logout</p>
            <span>{">"}</span>
         </a>
            </div>
            </div>

</nav>
  )
}
export default Navbar