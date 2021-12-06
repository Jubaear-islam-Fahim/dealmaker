import React, {useState} from 'react';  
import { Breadcrumb } from 'react-bootstrap';   
import { FaSearch } from "react-icons/fa";
import './management.scss';

import SidebarNav from '../SidebarNav/SidebarNav';
import NavBar from '../NavBar/NavBar'; 
import Table_users from './TableUsers'; 

import { Link } from 'react-router-dom';

import useri from '../../images/usersi.png';
import permisioni from '../../images/permisioni.png';
import rolesi from '../../images/rolesi.png';
 
 

const ManagementUsers = () => { 
  
    return (
        <>
            <NavBar/>
            <main className="wrapper">
                <SidebarNav/>
                <div className="page-content"> 
                    <div className="management-area">
                        <div className="management-user">
                            <div className="page-url">
                                <Breadcrumb>
                                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item> 
                                    <Breadcrumb.Item active> User Management</Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                            <ul className="user-list">
                                <li className="active"><Link to="/users"><img src={useri} /> Users</Link></li>
                                <li ><Link to="/roles"><img src={rolesi} /> Roles</Link></li>
                                <li><Link to="/permissions"><img src={permisioni} /> Permissions</Link></li>
                            </ul>
                            <div className="search-meta">
                                <form action="" className="d-flex">
                                    <input type="search" placeholder="Search" />
                                    <button type="submit"><FaSearch/></button>
                                </form> 
                            </div>
                        </div> 
                         <Table_users/>
                    </div> 
                </div>     
            </main> 
        </>
    )
}

export default ManagementUsers
