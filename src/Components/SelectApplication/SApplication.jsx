import React, {useState} from 'react';
import { Breadcrumb, Link } from 'react-bootstrap';   
import './SApplication.scss';

import { FaCircle } from "react-icons/fa"; 
import transit from "../../images/transit.png"
import profile from "../../images/prof.png";
import mes from "../../images/mes.png";
import leica from "../../images/leica.png";
import space from "../../images/space.png";

import SidebarNav from '../SidebarNav/SidebarNav';
import NavBar from '../NavBar/NavBar';

const SApplication = () => {
     
    return (
        <>
            <NavBar/>
            <main className="wrapper">
                <SidebarNav/>
                <div className="page-content"> 
                    <div className="application-area">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="page-url">
                                    <Breadcrumb>
                                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item> 
                                        <Breadcrumb.Item href="/">Select Environment</Breadcrumb.Item> 
                                        <Breadcrumb.Item active> Select Application</Breadcrumb.Item>
                                    </Breadcrumb>
                                </div>
                            </div>
                            <div className="col-lg-6">  
                                <div className="application-item">
                                    <div className="application-left">
                                        <div className="h4">Dr. Eckermann & Bauer</div>
                                        <ul>
                                            <li>Env - Id : <strong>87383298</strong></li>
                                            <li>IP : <strong>183.65.131.87</strong></li>
                                            <br />
                                            <li>EVA Version : <strong>1.7e</strong></li>
                                            <li>Master URL : <strong>eb.susiandjames.com</strong></li>
                                        </ul>
                                    </div>
                                    <div className="application-right">
                                        <div className="h6">Status</div>
                                        <ul>
                                            <li><span className="icon"><FaCircle /></span></li>
                                            <li><span className="icon"><FaCircle /></span></li>
                                            <li>Up & Running <span className="icon"><FaCircle /></span></li>
                                        </ul> 
                                        
                                    </div>
                                </div> 
                                <div className="switch">
                                    <a href="/">Switch Environment</a>
                                </div>
                            </div>
                        </div>
                        <div className="recent-environment"> 
                            <div className="h5">Recent Environment</div>
                            <div className="recent-environment-content"> 
                                <div className="recent-environment-item">
                                    <div className="environment-item-head">
                                        <div className="btn-cad">
                                            <img src={transit} /> Analytics
                                        </div>
                                        <div className="profile-img">
                                            <img src={profile} className="profile" />
                                            <img src={mes} className="mes" />
                                        </div>
                                        <div className="susi">
                                            <img src={space} /> SUSI <span>Workspace</span> <sub>V1.0</sub>
                                        </div>
                                    </div>
                                    <div className="start-btn">
                                        <a href="/">Start App</a>
                                    </div>
                                </div> 
                                <div className="recent-environment-item">
                                    <div className="environment-item-head">
                                        <div className="btn-cad">
                                            <img src={transit} /> ERP
                                        </div>
                                        <div className="profile-img">
                                            <img src={leica} className="profile" /> 
                                            <span className="h5 text-white ms-3">One</span>
                                        </div>
                                        <div className="susi">
                                            Leica One
                                        </div>
                                    </div>
                                    <div className="start-btn">
                                        <a href="/">Start App</a>
                                    </div>
                                </div> 
                                <div className="recent-environment-item">
                                    <div className="environment-item-head">
                                        <div className="btn-cad">
                                            <img src={transit} /> CRM
                                        </div>
                                        <div className="profile-img">
                                            
                                        </div>
                                        <div className="susi">
                                            Application X
                                        </div>
                                    </div>
                                    <div className="start-btn">
                                        <a href="/">Start App</a>
                                    </div>
                                </div> 
                                
                            </div> 
                        </div>
                    </div>
                </div>     
            </main>
             
        </>
    )
}

export default SApplication
