import React from 'react';
import '../style/css/app.css';
import '../js/app';


import Contact from '../components/contact/Contact';
import Topbar from '../components/TopBar/Topbar';
import MobileMenu from '../components/mobile-menu/MobileMenu';


const Home = () => {
    return (
        <div>
          <Topbar/>
          <Contact/>
          <MobileMenu/>
        </div>
    );
};

export default Home;