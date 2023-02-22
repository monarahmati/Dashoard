import React from 'react';
import '../../style/css/app.css'
import { IoLogoBuffer } from "react-icons/io";


const Logo = () => {
    return (
        <div style={{ marginTop:'14px' }}>
                <a href="#" className="logo -intro-x hidden md:flex xl:w-[200px] block">
                    {/* <img alt="" className="logo__image w-6" src="../../images/logo.svg"/> */}
                    <IoLogoBuffer className='logo__image' style={{ color:'#fff' , width:'50px' , fontSize:'2rem' }} />
                    <span className="logo__text text-white text-lg ml-3"> Enigma </span> 
                </a>
        </div>
    );
};

export default Logo;