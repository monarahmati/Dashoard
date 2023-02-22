
import React from 'react';
import '../../style/css/app.css';


const MenuNav = () => {
    return (
        <ul  aria-label="breadcrumb" Name="-intro-x h-[45px] mr-auto">
           <ol className="breadcrumb breadcrumb-light">
              <li className="breadcrumb-item"><a href="#">Application</a></li>
               <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
           </ol>
        </ul>
    );
};

export default MenuNav;