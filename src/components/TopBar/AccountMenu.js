import React from 'react';
import'../../style/css/app.css'


import { BiUser } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";
import { BiLock } from "react-icons/bi";
import { BiHelpCircle } from "react-icons/bi";
import { BiToggleRight } from "react-icons/bi";


const AccountMenu = () => {
    return (
     <div className="intro-x dropdown w-8 h-8">
        <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in scale-110" role="button" aria-expanded="false" data-tw-toggle="dropdown">
            <img alt="" src="../../images/sunder-muthukumaran-fd6K_OFlnRA-unsplash.jpg"/>
        </div>
        <div className="dropdown-menu w-56">
            <ul className="dropdown-content bg-primary/80 before:block before:absolute before:bg-black before:inset-0 before:rounded-md before:z-[-1] text-white">
                <li className="p-2">
                    <div className="font-medium">Kevin Spacey</div>
                    <div className="text-xs text-white/60 mt-0.5 dark:text-slate-500">DevOps Engineer</div>
                </li>
                <li>
                    <hr className="dropdown-divider border-white/[0.08]"/>
                </li>
                <li>
                    <a href="" className="dropdown-item hover:bg-white/5"  > <BiUser  style={{ fontSize:'1.4rem' , marginLeft:'5px' , marginRight:'11px' }}  /> Profile </a>
                </li>
                <li>
                    <a href="" className="dropdown-item hover:bg-white/5">  <BiEdit  style={{ fontSize:'1.4rem' , marginLeft:'5px' , marginRight:'11px' }}  /> Add Account </a>
                </li>
                <li>
                    <a href="" className="dropdown-item hover:bg-white/5"> <BiLock  style={{ fontSize:'1.4rem' , marginLeft:'5px' , marginRight:'11px' }}  /> Reset Password </a>
                </li>
                <li>
                    <a href="" className="dropdown-item hover:bg-white/5"> <BiHelpCircle  style={{ fontSize:'1.4rem' , marginLeft:'5px' , marginRight:'11px' }}  /> Help </a>
                </li>
                <li>
                    <hr className="dropdown-divider border-white/[0.08]"/>
                </li>
                <li>
                    <a href="" className="dropdown-item hover:bg-white/5"> <BiToggleRight  style={{ fontSize:'1.4rem' , marginLeft:'5px' , marginRight:'11px' }}  /> Logout </a>
                </li>
            </ul>
        </div>
    </div>
    );
};

export default AccountMenu;