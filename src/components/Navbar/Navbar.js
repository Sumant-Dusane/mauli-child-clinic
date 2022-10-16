import React, { useState } from 'react';
import NavbarTop from './NavbarTop/NavbarTop';
import NavbarBottom from './NavbarBottom/NavbarBottom';
import './Navbar.scss';

export default function Navbar (){
    const [Toggle, showNavbar] = useState(false);
    return (  
        <>
            <header className={Toggle ?  'navbar-container navbar-show' : 'navbar-container'}>
                {window.innerWidth > 768 ? <NavbarTop /> : null}
                <NavbarBottom />
            </header>
            {window.innerWidth <= 768 ? 
                <i onClick={() => showNavbar(!Toggle)}
                className={!Toggle ? 'toggle-navbar uil uil-apps' : 'toggle-navbar uil uil-times'}></i> 
                : null
            }
        </>
    );
}