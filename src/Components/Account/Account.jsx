import React, { useState } from "react";
import "./Account.scss";

import NavBar from "../NavBar/NavBar";

const Account = () => {
  return (
    <>
        <NavBar />
        <main className="wrapper">
            <div className="page-content">
                <div className="dashboard-area">
                    <div className="dashboard-header">
                        <div className="dashboard-header-left">
                            <div className="h3">Wir sichern Lebenswerke</div>
                            <p>Nutzen Sie den Zugang zu unserem exklusiven Experten Netzwerk.</p>
                        </div>
                        <div className="dashboard-header-right">
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </main>
    </>
  );
};

export default Account;
