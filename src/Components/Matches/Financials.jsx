import React from 'react';
import {ProgressBar } from 'react-bootstrap';

import gruf from '../../images/gruf.png';
import monetary from '../../images/monetary.png';
import lineI from '../../images/prefLine.png';
import { AiFillExclamationCircle } from "react-icons/ai";

const Financials = () => {
  return (
    <>
    <div className="source-tab-content">
            <div className="source-tab-head">
                <div className="head-img">
                    <img src={gruf} />
                </div>
                <div className="texts">
                    <div className="h5">Financials</div>
                    <p>
                    This section looks at the financials of your company and the M&A advisor deal interests.
                    </p>
                </div> 
            </div>
            <div className="source-tab-body">
                <div className="circle"> 
                    <i class="fa-solid fa-circle-exclamation"></i>
                </div>
                <div className="source-tab-body-left">
                    <img src={monetary} />
                    <div className="h4">
                        Monetary characteristics of the 
                       <br /> company, compared with deal 
                       <br /> interests of the M&A advisor.
                    </div>
                </div>
                <div className="source-tab-body-right">
                    
                    <div className="preference-item">
                        <div className="h6"><i class="fa-solid fa-circle-exclamation"></i> Location preference</div>
                        <div className="preference-progress" style={{width: 399 }}>
                            <span className="preference-name">Annual Revenue</span>
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
                        <div className="preference-progress" style={{width: 371 }}>
                            <span className="preference-name">My company</span>
                            <span className="preference-number">
                                110
                            </span>
                        </div>
                        <div className="preference-progress" style={{width: 514 }}>
                            <span className="preference-name">M&A Advisor</span>
                            <span className="preference-number">
                                130
                            </span>
                        </div>
                    </div>
                    <div className="preference-item">
                        <div className="prefer-bb"></div>
                        <div className="line-img">
                            <div></div>
                        </div>
                        <ul className="preference-num">
                            <li>60</li>
                            <li>90</li>
                            <li>110</li>
                            <li>140</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Financials