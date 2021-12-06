import React from 'react';

import SidebarNav from './SidebarNav/SidebarNav';
import NavBar from './NavBar/NavBar';

const Layout = () => {
    return (
        <>
            <NavBar/>
            <main className="wrapper">
                <SidebarNav/>
                <div className="page-content">
                    
                </div>    
            </main>
        </>
    )
}

export default Layout
