import React from 'react';
import { Breadcrumb } from 'react-bootstrap'; 
import './management.scss';
 
import NavBar from '../NavBar/NavBar';  
import TableTracker from './TableTracker'

import { Link } from 'react-router-dom';

import useri from '../../images/usersi.png'; 
import check from '../../images/check.png';
import update from '../../images/upload-img.png';
import key from '../../images/key.png';
import file from '../../images/file.png';
import dod from '../../images/3dod.png';

const ManagementSingleUser = () => {
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
                                <li className="active"><Link to="/users"><img src={useri} /> Users</Link></li>
                                <li className="check"><Link to=""><img src={check} /> Julian Leudesdorff</Link></li>
                                 
                            </ul>

                            <div className="single-user-content">
                                <div className="single-row">
                                    <div className="single-col">
                                        <div className="single-user-from">
                                            <div className="single-user-from-left">
                                                <h5>User Details</h5>
                                                <form action="">
                                                    <div className="form-group">
                                                        <label>Name</label>
                                                        <input type="text" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Company</label>
                                                        <input type="text" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Company Adress</label>
                                                        <input type="text" />
                                                    </div>
                                                </form> 
                                            </div>
                                            <div className="single-user-from-right">
                                                <div className="update-profile">
                                                    <img src={update} /> 
                                                </div>
                                                <div className="status">
                                                    <div className="h6">Status</div>
                                                    <a href="/">Active</a>
                                                </div>
                                                <div className="password">
                                                    <div className="h6">Password</div>
                                                    <a href=""><img src={key} /> Reset Password</a>
                                                </div>
                                                <div className="company">
                                                    <a href=""><img src={file} /> Company Profile</a>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="single-col">
                                        <div className="single-user-roles">
                                            <div className="h5">Environments and Roles</div>
                                            <table class="table">
                                                <thead>
                                                    <tr> 
                                                        <th scope="col">Environment Name</th>
                                                        <th scope="col">Role</th>
                                                        <th scope="col"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr> 
                                                        <td>Dr. Eckermann & Bauer</td>
                                                        <td>Environment Owner</td>
                                                        <td><span>﹣</span></td>
                                                    </tr>
                                                    <tr> 
                                                        <td>Zahnzentrum Rhein-Main Neu-Isenburg</td>
                                                        <td>Environment Admin</td>
                                                        <td><span>﹣</span></td>
                                                    </tr>
                                                    <tr> 
                                                        <td>AIA Terminvereinbarung</td>
                                                        <td>Viewer</td>
                                                        <td><span>﹣</span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <ul className="roles-btn">
                                                <li><a href=""><img src={dod} /> Show all</a></li>
                                                <li> <a href="">＋ Add Role to Environment</a></li> 
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>  
                        <div className="single-table">
                            <div className="h5">Activity Tracker</div>
                            <TableTracker/>
                        </div>
                         
                    </div> 
                </div>     
            </main> 
        </>
    )
}

export default ManagementSingleUser
