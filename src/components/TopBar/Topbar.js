import React from 'react';
import Logo from './Logo';
import '../../style/css/app.css'
import Notification from './Notification';
import AccountMenu from './AccountMenu';
import MenuNav from './MenuNav';
// import {Link} from 'react-router-dom'



const Topbar = () => {
    return (
        <div className="top-bar-boxed h-[70px] md:h-[65px] z-[51] border-b border-white/[0.08] mt-12 md:mt-0 -mx-3 sm:-mx-8 md:-mx-0 px-3 md:border-b-0 relative md:fixed md:inset-x-0 md:top-0 sm:px-8 md:px-10 md:pt-10 md:bg-gradient-to-b md:from-slate-100 md:to-transparent dark:md:from-darkmode-700" >
            <div className="h-full flex items-center" style={{ display:'flex' , justifyContent: 'space-between' }} >
                     <div className='Topbar-left'>
                         {/* LOGO */}
                         <Logo/>
                         {/* Breadcramp */}
                         <MenuNav/>
                     </div>


                    <div className='Menu-navbar' style={{ display:'flex' ,  alignItems:'center' , marginRight:'7rem'  }}>
                        <div>
                           <a href="#" className="Menu-navbar-item -intro-x hidden md:flex :w-[180px] block">
                               <span className="logo__text text-white text-lg ml-1"> Dashboard </span> 
                           </a>
                        </div>  
    
                        <div>
                           <a href="../Hold'EM By GEM/HoldByGem" className="Menu-navbar-item -intro-x hidden md:flex :w-[180px] block">
                               <span className="logo__text text-white text-lg ml-1"> Hold'EM By GEM </span> 
                           </a>
                        </div> 
    
                        <div>
                           <a href="#" className="Menu-navbar-item -intro-x hidden md:flex :w-[180px] block">
                               <span className="logo__text text-white text-lg ml-1"> Hold'EM By JETON </span> 
                           </a>
                        </div> 
    
                        <div>
                           <a href="#" className="Menu-navbar-item -intro-x hidden md:flex :w-[180px] block">
                               <span className="logo__text text-white text-lg ml-1"> GEM Exchange </span> 
                           </a>
                        </div> 
    
                        <div>
                           <a href="#" className="Menu-navbar-item -intro-x hidden md:flex :w-[180px] block">
                               <span className="logo__text text-white text-lg ml-1"> JETON Exchange </span> 
                           </a>
                        </div> 
    
                        <div>
                           <a href="#" className="Menu-navbar-item -intro-x hidden md:flex :w-[180px] ">
                               <span className="logo__text text-white text-lg ml-1"> Support </span> 
                          </a>
                        </div> 
                    </div>

                     <div className='TopBar-Right' style={{ display:'flex'  , paddingRight:'10px' }}>
                        <div>
                        {/* Notification */}           
                        <Notification/>
                        </div>
                        {/* Accont-menu */}
                            <div>
                               <AccountMenu/>
                            </div>
                     </div>      
            </div> 
        </div>
    );
};

export default Topbar;