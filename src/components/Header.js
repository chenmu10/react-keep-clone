import React from 'react';
import { FaRedo, FaBars, FaCog, FaUserCircle} from "react-icons/fa";
import Logo from '../keep-logo.png';
function Header(props) {
    return (
        <nav>
            <ul className="menu">
                <li className="item"><FaBars/> </li>
                <li className="item logo"><img className="logo-image" alt="logo" src={Logo} /></li>
                <li className="item">Keep</li>
                <div className="search-bar">
                    <input type="text" placeholder="Search"/></div>
                <li className="item"><FaRedo/> </li>
                <li className="item">view toggle</li>
                <li className="item"><FaCog/> </li>
                <li className="item">apps</li>
                <li className="item"><FaUserCircle/> </li>
            </ul>
        </nav>
    );
}

export default Header;