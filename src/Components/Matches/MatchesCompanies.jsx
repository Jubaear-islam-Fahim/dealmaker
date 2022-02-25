import React, { useState } from "react";
import {ProgressBar, Tabs, Tab, Nav } from 'react-bootstrap';
 
import chatImg from '../../images/chat.png';
import factCheck from '../../images/fact_check.png';
import Power from '../../images/POWERJames_Log.png';
import Bregal from '../../images/Bregal_Unternehmerkapital_Logo_Vertikal_RGB.png';
import error from '../../images/error.png';
import basicI from '../../images/bd.png';
import financialsI from '../../images/fina.png';
import secI from '../../images/sec.png';
import others from '../../images/others.png';

import NavBar from "../NavBar/NavBar";

import Basic from "./Basic";
import Financials from "./Financials";

import "./Matches.scss";
import { Link } from "react-router-dom";


const MProgress = [
    {
        id: '1', 
        name: 'Basic Data',
        progress: 70, 
    },
    {
        id: '2', 
        name: 'Financials',
        progress: 80, 
    },
    {
        id: '3', 
        name: 'Sectors',
        progress: 60, 
    },
]

const MatchesCompanies = () => {

  return (
    <>
        <NavBar />
        <main className="wrapper">
            <div className="page-content">
                <div className="companies-area">
                    <div className="page-top-title com-matches">
                        <div className="ptt">
                            <div className="h2">Matches for</div>
                            <p>Companies and M&A advisors</p>
                        </div>
                        <div className="result-btn">
                            <Link to="/" className="result active"><img src={factCheck}/> Matching result</Link>
                            <Link to="/" className="messages"><img src={chatImg}/> Messages </Link>
                        </div>
                    </div>
                    <div className="companies-source">
                        <div className="source-head">
                            <div className="source-left">
                                <div className="source-logo">
                                    <div className="h5">Company</div>
                                    <div className="s-logo"> 
                                        <img src={Power}/>
                                    </div>
                                    <Link className="source-btn">view profile <i class="fa-solid fa-chevron-right"></i></Link>
                                </div>
                                <div className="source-logo">
                                    <div className="h5">M&A Advisor</div>
                                    <div className="s-logo">
                                        
                                        <img src={Bregal}/>
                                    </div>
                                    <Link className="source-btn">view profile <i class="fa-solid fa-chevron-right"></i></Link>
                                </div>
                            </div>
                            <div className="source-right">
                                <div className="h5">Matching results</div>
                                <div className="mat-progress">
                                    {
                                        MProgress.map((link)=>{
                                            return (
                                                <div className="basic-prog" id={link.id}>
                                                    <div className="h6"><img src={error} /> {link.name} </div>
                                                    <ProgressBar now={link.progress} /> 
                                                </div>
                                            )
                                        })
                                    }  
                                </div>
                            </div>
                        </div>
                        <div className="source-content">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Nav variant="pills" className="source-nab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first"><img src={basicI} /> Basic Data</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second"><img src={financialsI} /> Financials</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="three"><img src={secI} /> Sectors</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="four"><img src={others} /> Others</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Basic/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Financials/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="three">
                                        Sectors
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="four">
                                        Others
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
      
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  );
};

export default MatchesCompanies;
