import React, {useState} from 'react';

import {Dropdown, } from 'react-bootstrap';
 
import './navBar.scss';

import bar from '../../images/bar.png';
import logo from '../../images/logo.png';
import user from '../../images/user1.png';
import setting from '../../images/nav/settings.png';

import { SidebarData } from './SidebarData';

import { FaCog, FaBell, FaLock, FaUserAlt, FaSignOutAlt  } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    const [sidebar, setSidebar] = useState(false); 
    const showSidebar = () => setSidebar(!sidebar);
    
    return (
        <>
        <div className="navbar-area ">
            <div className="navleft">
                <button onClick={showSidebar} className="navToggle"><img src={bar} alt="" /></button>
                <Link to="/"><img src={logo} alt="" /></Link>
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
                      <img src={user} alt="" />  <span className="Uname">Mario Kronbeg</span>
                    </Dropdown.Toggle>

                    {/* <Dropdown.Menu className="userList">
                        <ul>
                            <li><h6 class="text-overflow m-0">Welcome !</h6></li>
                            <li><Link to="/"><FaUserAlt/> My Account</Link></li>
                            <li><Link to="/"><FaLock/> Lock Screen</Link></li>
                            <li><Link to="/"><FaSignOutAlt/> Sign Out</Link></li> 
                        </ul> 
                    </Dropdown.Menu> */}
                </Dropdown>
            </div>
        </div>

        <nav className={sidebar ? 'sidebarNav active' : 'sidebarNav'}>
          <ul className='nav-menu-items' onClick={showSidebar}> 
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink exact to={item.path}>
                    <img src={item.icon} />
                    <span className="text">{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <ul className="bottomList"> 
                <li><Link to="/"><img src={setting} /></Link></li>
            </ul>
        </nav>

        </>
    )
}

export default NavBar
