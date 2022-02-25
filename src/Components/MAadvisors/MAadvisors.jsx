import React, { useState } from "react";
import "./MAadvisors.scss";

import { VscSearch, VscChromeClose } from "react-icons/vsc";
import { AiOutlinePlus } from "react-icons/ai";
import { FiEdit2, FiSave } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsChevronDoubleLeft, BsChevronLeft, BsChevronDoubleRight, BsChevronRight } from "react-icons/bs";

// import Table_users from './TableUsers'; 
import AdvisorsTable from "./advisorsTable";

import NavBar from "../NavBar/NavBar";

const MAadvisors = () => {
  return (
    <>
        <NavBar />
        <main className="wrapper">
            <div className="page-content">
                <div className="companies-area">
                    <div className="page-top-title">
                        <div className="h2">M&A advisors</div>
                        <p>Overview</p>
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
                        <AdvisorsTable/>
                    </div>
                    

                </div>
            </div>
        </main>
    </>
  );
};

export default MAadvisors;
