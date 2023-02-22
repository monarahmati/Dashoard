import React from 'react';
import '../../style/css/app.css';
// ICON
import { FiActivity } from "react-icons/fi";
import {IoHome } from "react-icons/io5";
import { BiChevronDown } from "react-icons/bi";
// import { BiChevronUp } from "react-icons/bi";




const MobileMenu = () => {
    return (
        <div className="mobile-menu md:hidden">
            <div className="mobile-menu-bar">
                <a href="#" className="flex mr-auto">
                    <img alt="" className="w-6" src="../../images/logo.svg"/>
                </a>
                <a href="javascript:;" className="mobile-menu-toggler"> 
                   <i data-lucide="bar-chart-2" class="w-8 h-8 text-white transform -rotate-90"></i> 
                </a>
            </div>
            <div className="scrollable">
                <a href="javascript:;" className="mobile-menu-toggler">
                    <BiChevronDown class="w-8 h-8 text-white transform -rotate-90" />
                </a>
                    <div className="scrollable__content py-2">
                        <a href="javascript:;.html" className="menu menu--active">
                            <div className="menu__icon"> <IoHome/> </div>
                            <div className="menu__title"> Dashboard <i data-lucide="chevron-down" className="menu__sub-icon transform rotate-180"></i> </div>
                        </a>
                        <ul className='menu__sub-open'>
                            <li>
                                <a href="side-menu-light-dashboard-overview-1.html" className="menu">
                                    <div className="menu__icon"> <FiActivity/> </div>
                                    <div className="menu__title"> Overview 1 </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-dashboard-overview-2.html" className="menu">
                                    <div className="menu__icon"><FiActivity/> </div>
                                    <div className="menu__title"> Overview 2 </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-dashboard-overview-3.html" className="menu menu--active">
                                    <div className="menu__icon"> <FiActivity/> </div>
                                    <div className="menu__title"> Overview 3 </div>
                                </a>
                            </li>
                            <li>
                                <a href="index.html" className="menu">
                                    <div className="menu__icon"> <FiActivity/> </div>
                                    <div className="menu__title"> Overview 4 </div>
                                </a>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>


    );
};

export default  MobileMenu;