import React, {useState} from 'react';  
import { Modal, } from 'react-bootstrap';   
import { FaSearch } from "react-icons/fa";
import './management.scss';
 
import NavBar from '../NavBar/NavBar'; 
import TablePermissions from './TablePermissions'

import { Link } from 'react-router-dom';

import useri from '../../images/usersi.png';
import permisioni from '../../images/permisioni.png';
import rolesi from '../../images/rolesi.png';
import key from '../../images/key.png';
import { ModalReset } from './ModalReset';
 
 

const ManagementPermissions = () => { 
    const [show, setShow] = useState(false); 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
            <NavBar/>
            <main className="wrapper"> 
                <div className="page-content"> 
                    <div className="management-area">
                        <div className="management-user">
                            <div className="page-url">
                                <ul>
                                    <li><Link to="/">Home</Link></li> 
                                    <li className="active"><Link to="/">User Management</Link></li>
                                </ul>
                            </div>
                            <ul className="user-list">
                                <li ><Link to="/users"><img src={useri} /> Users</Link></li>
                                <li ><Link to="/roles"><img src={rolesi} /> Roles</Link></li>
                                <li className="active"><Link to="/permissions"><img src={permisioni} /> Permissions</Link></li>
                            </ul>
                            <div className="con-pass"> 
                                <div className="search-meta">
                                    <form action="" className="d-flex">
                                        <input type="search" placeholder="Search" />
                                        <button type="submit"><FaSearch/></button>
                                    </form> 
                                </div>
                                <div className="reset-pss">
                                    <ul>
                                        <li className="ress" onClick={handleShow}><img src={key} /> Reset Password</li>
                                        <li className="active">Active</li>
                                    </ul>
                                </div>
                            </div>
                            <Modal className="rpass-modal" show={show} onHide={handleClose} animation={false}>
                                <ModalReset/>
                            </Modal>
                        </div> 
                         <TablePermissions/>
                    </div> 
                </div>     
            </main> 
        </>
    )
}

export default ManagementPermissions
