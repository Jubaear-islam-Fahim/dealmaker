import React from 'react';
import {ProgressBar } from 'react-bootstrap';

import gruf from '../../images/gruf.png';
import location from '../../images/location.png';
import lineI from '../../images/prefLine.png';
import { AiFillExclamationCircle } from "react-icons/ai";


const Basic = () => {
  return (
    <>
        <div className="source-tab-content">
            <div className="source-tab-head">
                <div className="head-img">
                    <img src={gruf} />
                </div>
                <div className="texts">
                    <div className="h5">Basic Data</div>
                    <p>
                    This section looks at traits that form the core of your company: 
                    <br /> What distinguishes the company and how things are basically done in the company.
                    </p>
                </div> 
            </div>
            <div className="source-tab-body">
                <div className="circle"> 
                    <i class="fa-solid fa-circle-exclamation"></i>
                </div>
                <div className="source-tab-body-left">
                    <img src={location} />
                    <div className="h4">What spatial preferences do my <br /> company and the M&A advisor share?</div>
                </div>
                <div className="source-tab-body-right">
                    
                    <div className="preference-item">
                        <div className="h6"><i class="fa-solid fa-circle-exclamation"></i> Location preference</div>
                        <div className="preference-progress" style={{width: 399 }}>
                            <span className="preference-name">My company</span>
                            <span className="preference-number">
                                105
                            </span>
                        </div>
                        <div className="preference-progress" style={{width: 371 }}>
                            <span className="preference-name">M&A Advisor</span>
                            <span className="preference-number">
                                100
                            </span>
                        </div>
                    </div>
                    <div className="preference-item">
                        <div className="h6"><i class="fa-solid fa-circle-exclamation"></i> Business preference</div>
                        <div className="preference-progress" style={{width: 514 }}>
                            <span className="preference-name">My company</span>
                            <span className="preference-number">
                                130
                            </span>
                        </div>
                        <div className="preference-progress" style={{width: 301 }}>
                            <span className="preference-name">M&A Advisor</span>
                            <span className="preference-number">
                                90
                            </span>
                        </div>
                    </div>
                    <div className="preference-item">
                        <div className="prefer-bb"></div>
                        <div className="line-img">
                            <div></div>
                        </div>
                        <ul className="preference-lien">
                            <li>National</li>
                            <li>EU</li>
                            <li>Global</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Basic;