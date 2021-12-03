import React from 'react';
import "./styles/Header.css";
import { BsViewStacked } from "react-icons/bs";
import {
  FaRedo,
  FaBars,
  FaCog,
  FaUserCircle,
  FaSearch,
  FaTimes,
  FaTh,
} from "react-icons/fa";
import Logo from '../keep-logo.png';
function Header(props) {
    return (
      <nav>
        <ul className="menu">
          <li className="action-icon">
            <FaBars color="#5f6368" />{" "}
          </li>
          <li className="logo">
            <img className="logo-image" alt="logo" src={Logo} />
          </li>
          <li className="app-name">Keep</li>
          <div className="search-bar">
            <FaSearch className=" inside-icon search-icon" color="#5f6368" />
            <input className="input-search" type="text" placeholder="Search" />
            <FaTimes className="inside-icon delete-icon" color="#5f6368" />
          </div>

          <li className="action-icon">
            <FaRedo color="#5f6368" />{" "}
          </li>
          <li className="action-icon">
            <BsViewStacked color="#5f6368" />{" "}
          </li>
          <li className="action-icon">
            <FaCog color="grey" />{" "}
          </li>
          <li className="action-icon">
            <FaTh color="#5f6368" />
          </li>
          <li className="action-icon">
            <FaUserCircle color="grey" />{" "}
          </li>
        </ul>
      </nav>
    );
}

export default Header;