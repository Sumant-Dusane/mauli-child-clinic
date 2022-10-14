import React from 'react';
import NavbarTop from './NavbarTop/NavbarTop';
import NavbarBottom from './NavbarBottom/NavbarBottom';
import './Navbar.scss';

export default function Navbar (){
    return (  
        <header className='navbar-container'>
            <NavbarTop />
            <NavbarBottom />
        </header>
    );
}