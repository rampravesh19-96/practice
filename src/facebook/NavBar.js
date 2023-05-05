import React,{useState,useEffect} from 'react';
import logo from './images/logo.png';
import notification from './images/notification.png';
import inbox from './images/inbox.png';
import video from './images/video.png';
import search from './images/search.png';
import profilePic from './images/profile-pic.png';
import feedback from './images/feedback.png';
import setting from './images/setting.png';
import help from './images/help.png';
import display from './images/display.png';
import logout from './images/logout.png';
import arrow from './images/arrow.png';
import { Link } from 'react-router-dom';



function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  document.body.classList.toggle("dark-theme")

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      setIsDarkTheme(true);
    }
  }, []);

  useEffect(() => {
    document.body.classList.add(isDarkTheme && 'dark-theme'); 
    
    return () => {
      document.body.classList.remove(isDarkTheme && 'dark-theme');
    };
  });

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    const newTheme = isDarkTheme ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
  };

  function settingsMenuToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <nav>
      <div className="nav-left">
        <Link to="/facebook">
          <img src={logo} className="logo" alt="Logo" />
        </Link>
        <ul>
          <li><img src={notification} alt="Notification" /></li>
          <li><img src={inbox} alt="Inbox" /></li>
          <li><img src={video} alt="Video" /></li>
        </ul>
      </div>
      <div className="nav-right">
        <div className="search-box">
          <img src={search} alt="Search" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="nav-user-icon" onClick={settingsMenuToggle}>
          <img src={profilePic} alt="Profile" />
        </div>
      </div>
      {/* --------------- settings menu -------------------------  */}
      <div  className={`settings-menu ${isOpen ? "settings-menu-height" : ""}`}>
        <div id="dark-btn" className={isDarkTheme ? "dark-btn-on" : ""} onClick={toggleTheme}>
          <span></span>
        </div>
        <div className="settings-menu-inner">
          <div className="user-profile">
            <img src={profilePic} alt="Profile" />
            <div>
              <p>John Nicholsan</p>
              <Link to="/facebook/profile">See your profile</Link>
            </div>
          </div>
          <hr />
          <div className="user-profile">
            <img src={feedback} alt="Feedback" />
            <div>
              <p>Give Feedback</p>
              <Link to="#">Help us to improve new design</Link>
            </div>
          </div>
          <hr />

          <div className="setting-links">
            <img src={setting} alt="Settings" className="settings-icon" />
            <Link to="#">Settings & Privacy <img src={arrow} width="10px" alt="Arrow" /></Link>
          </div>

          <div className="setting-links">
            <img src={help} alt="Help" className="settings-icon" />
            <Link to="#">Help and support <img src={arrow} width="10px" alt="Arrow" /></Link>
          </div>
          <div className="setting-links">
            <img src={display} alt="Display" className="settings-icon" />
            <Link to="#">Display and Accessibility <img src={arrow} width="10px" alt="Arrow" /></Link>
          </div>
          <div className="setting-links">
            <img src={logout} alt="Logout" className="settings-icon" />
            <Link to="#">Logout <img src={arrow} width="10px" alt="Arrow" /></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar
