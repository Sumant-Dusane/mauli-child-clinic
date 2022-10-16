import { useEffect } from 'react';
import './NavbarBottom.scss';

function activeNavbar() {
    var navs = document.getElementById("navs");
    if (navs != null){
        var navtab = navs.getElementsByClassName('nav-tabs');
        for (var i = 0; i < navtab.length; i++){
            navtab[i].addEventListener("click", function() {
                var current = document.getElementsByClassName(" active-nav");
                current[0].className = current[0].className.replace(" active-nav", "");
                this.className += " active-nav";
              });
        }
    }else{
        console.error(navs);
    }
}

export default function NavbarBottom(){
    useEffect(
        ()=>{
            activeNavbar();
        },
        // eslint-disable-next-line
        [document.getElementById("navs"), document.getElementById("nav-tabs")],
    );
    const isMobileTemp = window.innerWidth <= 768 ? true : false;

    return (
        <>
        <div className='navbar-bottom'>
            <div className='navbar-bottom--navs' id="navs" tabIndex="-1">
                <a href="#home" className='nav-tabs active-nav' tabIndex="-1">
                        <i className='uil uil-estate'></i>Home
                </a>
                <a href="#services" className='nav-tabs' tabIndex="-1">
                        <i className='uil uil-stethoscope'></i>Services
                </a>
                <a href="#testimonials" className='nav-tabs' tabIndex="-1">
                        <i className='uil uil-thumbs-up'></i>Testimonials
                </a>
                <a href="#about" className='nav-tabs' tabIndex="-1">
                        <i className='uil uil-user-md'></i>About
                </a>
                <a href="#reach-out" className='nav-tabs' tabIndex="-1">
                        <i className='uil uil-hospital-square-sign'></i>Reach Out
                </a>
                {isMobileTemp ? <a href="#reach-out" className='nav-tabs' tabIndex="-1">
                        <i className='uil uil-phone'></i>Contact
                </a> : null}
            </div>
            {!isMobileTemp ? <button className='btn-primary'>
                <i className="fas fa-phone"></i>
                CONTACT
            </button> : null}
        </div>
        </>
    );
}