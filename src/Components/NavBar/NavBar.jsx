import React from 'react';

import {Dropdown, } from 'react-bootstrap';

import './navBar.scss';

import bar from '../../images/bar.png';
import logo from '../../images/logo.png';
import user from '../../images/user1.png';

import { FaCog, FaBell, FaLock, FaUserAlt, FaSignOutAlt  } from "react-icons/fa";

const NavBar = () => {
    return (
        <div className="navbar-area ">
            <div className="navleft">
                <a href="/"><img src={bar} alt="" /></a>
                <a href="/"><img src={logo} alt="" /></a>
            </div>
            <div className="navright ">

                <div className="cog-nav">
                    <a href="/"><FaCog/></a> 
                </div> 
                <div className="bell-nav">
                    <a href="/"><FaBell/> <div className="active"></div></a>
                </div>  
                <Dropdown align="end" className="navUser" id="dropdown-menu-align-end">
                    <Dropdown.Toggle >
                      <img src={user} alt="" />  <span className="Uname">Julian Leudesdorff</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="userList">
                        <ul>
                            <li><h6 class="text-overflow m-0">Welcome !</h6></li>
                            <li><a href="#"><FaUserAlt/> My Account</a></li>
                            <li><a href="#"><FaLock/> Lock Screen</a></li>
                            <li><a href="#"><FaSignOutAlt/> Sign Out</a></li> 
                        </ul> 
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}

export default NavBar
