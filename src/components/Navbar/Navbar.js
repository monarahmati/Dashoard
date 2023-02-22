import React from 'react';
import'../../style/css/app.css'
// ICON
import { FiActivity } from "react-icons/fi";
import {IoHome } from "react-icons/io5";
import { BiChevronDown } from "react-icons/bi";


const Navbar = () => {
    return (
        <nav className="side-nav" style={{ background:'red'}}>
        <ul>
            <li>
                <a href="javascript:;.html" className="side-menu side-menu--active">
                    <div className="side-menu__icon"> <IoHome/> </div>
                    <div className="side-menu__title">
                        Dashboard 
                        <div className="side-menu__sub-icon transform rotate-180"> <BiChevronDown/> </div>
                    </div>
                </a>
                <ul className="side-menu__sub-open">
                    <li>
                        <a href="side-menu-light-dashboard-overview-1.html" className="side-menu">
                            <div className="side-menu__icon"> <FiActivity/> </div>
                            <div className="side-menu__title"> Overview 1 </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-dashboard-overview-2.html" className="side-menu">
                            <div className="side-menu__icon"> <FiActivity/> </div>
                            <div className="side-menu__title"> Overview 2 </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-dashboard-overview-3.html" className="side-menu side-menu--active">
                            <div className="side-menu__icon"> <FiActivity/> </div>
                            <div className="side-menu__title"> Overview 3 </div>
                        </a>
                    </li>
                    <li>
                        <a href="index.html" className="side-menu">
                            <div className="side-menu__icon"> <FiActivity/> </div>
                            <div className="side-menu__title"> Overview 4 </div>
                        </a>
                    </li>
                </ul>
            </li>




        </ul>
    </nav>
    );
};

export default Navbar;