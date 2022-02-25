import React, { useState } from "react";

import { VscSearch, VscChromeClose } from "react-icons/vsc";
import { AiOutlinePlus } from "react-icons/ai";
import { FiEdit2, FiSave } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsChevronDoubleLeft, BsChevronLeft, BsChevronDoubleRight, BsChevronRight } from "react-icons/bs";

// import Table_users from './TableUsers'; 
import MatchesTable from "./matchesTable"; 

import NavBar from "../NavBar/NavBar";
import "./Matches.scss";
import { Link } from "react-router-dom";

const Matches = () => {
  return (
    <>
        <NavBar />
        <main className="wrapper">
            <div className="page-content">
                <div className="companies-area">
                    <div className="page-top-title page-matches">
                        <div className="h2">Matches for</div>
                        <p>Matched M&A advisors</p>
                        <div className="unisell-btn">
                            <Link to="matchesCompanies" className="uBtn">Unisell GmbH</Link>
                            <Link className="vpBtn">view profile <i class="fa-solid fa-chevron-right"></i></Link>
                            
                        </div>
                    </div>
                    <div className="companies-nav">
                        <div className="companies-nav-left">
                            <ul>
                                <li><a href="#" className="active"><AiOutlinePlus/> add</a></li>
                                <li><a href="#"><FiEdit2/> edit</a></li>
                                <li><a href="#"><RiDeleteBinLine/> delete</a></li>
                                <li><a href="#"><FiSave/> update</a></li>
                                <li><a href="#"><VscChromeClose/> cancel</a></li> 
                            </ul>
                        </div>
                        <div className="companies-nav-right">
                            <form action="/"> 
                                <input type="search" name="Search" placeholder="Search" />
                                <button type="submit"><VscSearch/></button>
                            </form>
                        </div>
                    </div>

                    <div className="company-data-table">
                        <MatchesTable/>
                    </div>
                    

                </div>
            </div>
        </main>
    </>
  );
};

export default Matches;
