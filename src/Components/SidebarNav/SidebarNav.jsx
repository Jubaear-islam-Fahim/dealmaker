import React, {useState} from 'react';
import "./SidebarNav.scss";

import NavList from './sidebarList';

import setting from '../../images/nav/settings.png';

const SidebarNav = () => {  
    const [items] = useState(NavList);

    return (
        <div className="sidebarNav">
            <ul>
                {
                    items.map((navsEleme) => {
                        const {id, img} = navsEleme;
                        return(
                            <>
                                <li id={id}><a href="/"><img src={img} /></a></li>
                            </>
                        )
                    })
                }
                 
            </ul>
            <ul className="bottomList"> 
                <li><a href="/"><img src={setting} /></a></li>
            </ul>
        </div>
    )
}

export default SidebarNav
