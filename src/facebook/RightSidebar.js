import React from "react";
import EventImg from "./images/advertisement.png";
import Member1Img from "./images/member-1.png";
import Member2Img from "./images/member-2.png";
import Member3Img from "./images/member-3.png";
import { Link } from "react-router-dom";

function RightSidebar() {
  return (
    <div className="right-sidebar">
      <div className="sidebar-title">
        <h4>Events</h4>
        <Link to="#">See All</Link>
      </div>

      <div className="event">
        <div className="left-event">
          <h3>18</h3>
          <span>March</span>
        </div>
        <div className="right-event">
          <h4>Social Media</h4>
          <p>
            <i className="fa-solid fa-location-dot"></i> Willson Tech Park
          </p>
          <Link to="#">More Info</Link>
        </div>
      </div>
      <div className="event">
        <div className="left-event">
          <h3>22</h3>
          <span>June</span>
        </div>
        <div className="right-event">
          <h4>Mobile Marketing</h4>
          <p>
            <i className="fa-solid fa-location-dot"></i> Willson Tech Park
          </p>
          <Link to="#">More Info</Link>
        </div>
      </div>
      <div className="sidebar-title">
        <h4>Advertisement</h4>
        <Link to="#">Close</Link>
      </div>
      <img className="sidebar-adss" src={EventImg} alt="Advertisement" />

      <div className="sidebar-title">
        <h4>Conversation</h4>
        <Link to="#">Hide Chat</Link>
      </div>

      <div className="online-list">
        <div className="online">
          <img src={Member1Img} alt="Online Member" />
        </div>
        <p>Alison Mina</p>
      </div>
      <div className="online-list">
        <div className="online">
          <img src={Member2Img} alt="Online Member" />
        </div>
        <p>Jackson Aston</p>
      </div>
      <div className="online-list">
        <div className="online">
          <img src={Member3Img} alt="Online Member" />
        </div>
        <p>Samona Rose</p>
      </div>
    </div>
  );
}

export default RightSidebar;
