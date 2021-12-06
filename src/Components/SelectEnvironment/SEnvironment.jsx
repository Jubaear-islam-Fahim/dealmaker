import React, {useState} from 'react';
import "./SEnvironment.scss"; 
import { Breadcrumb } from 'react-bootstrap';   
import { FaSearch, FaCircle, FaPlusCircle } from "react-icons/fa"; 
import EnvironmentList from './Environment';

import SidebarNav from '../SidebarNav/SidebarNav';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
 

const SEnvironment = () => {
    const [items] = useState(EnvironmentList);
    return (
        <>
            <NavBar/>
            <main className="wrapper">
                <SidebarNav/>
                <div className="page-content"> 
                    <div className="environment-area">
                        <div className="page-url">
                            <Breadcrumb>
                                <Breadcrumb.Item href="/">Home</Breadcrumb.Item> 
                                <Breadcrumb.Item active> Select Environment</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <div className="search-meta">
                            <form action="" className="d-flex">
                                <input type="search" placeholder="Search" />
                                <button type="submit"><FaSearch/></button>
                            </form>
                            <ul>
                                <li>Medical</li>
                                <li>Handel</li>
                            </ul>
                        </div>
                        <div className="environment-content">
                            {
                                items.map((Eleme) => {
                                    const {id, name, envid, ip, evav, URL} = Eleme;
                                    return(
                                        <div className="environment-item" id={id}>
                                            <div className="header">
                                                <div className="h4">
                                                    {name}
                                                    <span>Status</span>
                                                </div>
                                                <div className="id">
                                                    Env - Id : <strong>{envid}</strong>
                                                    <span>Up & Running <span className="icon"><FaCircle /></span> </span>
                                                </div>
                                                <ul>
                                                    <li>Standard User</li>
                                                    <li>5 User</li>
                                                    <br />
                                                    <li className="active">Medical</li>
                                                </ul>
                                            </div>
                                            <div className="bottom">
                                                <div className="list">
                                                    <ul>
                                                        <li>IP : <strong>{ip}</strong></li>
                                                        <li>EVA Version : <strong>{evav}</strong></li>
                                                        <li>Master URL : <strong>{URL}</strong></li>
                                                    </ul>
                                                </div>
                                                <Link to="/application"><button>Open</button></Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="new-environ">
                                <div className="h5"><FaPlusCircle/> New Environment</div>
                            </div>
                        </div>
                        <nav className="pagination-content pt-5 text-center">
                            <ul>
                                <li><a href="/"><i class="fas fa-chevron-left"></i></a></li>
                                <li><a className="active" href="/">1</a></li>
                                <li className="bar">|</li>
                                <li><a href="/">2</a></li>
                                <li><a href="/"><i class="fas fa-chevron-right"></i></a></li>
                            </ul> 
                        </nav>
                    </div> 
                </div>     
            </main>
        </>
    )
}

export default SEnvironment
