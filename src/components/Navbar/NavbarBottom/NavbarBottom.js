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
            <div className='navbar-bottom--navs' id='navs' tabIndex="-1">
                <button type='submit' className='nav-tabs active-nav' tabIndex="=1">
                    <i className='uil uil-estate'></i>Home
                </button>
                <button type='submit' className='nav-tabs' tabIndex="=1">
                    <i className='uil uil-estate'></i>Services
                </button>
                <button type='submit' className='nav-tabs' tabIndex="=1">
                    <i className='uil uil-estate'></i>Testimonials
                </button>
                <button type='submit' className='nav-tabs' tabIndex="=1">
                    <i className='uil uil-estate'></i>About
                </button>
                <button type='submit' className='nav-tabs' tabIndex="=1">
                    <i className='uil uil-estate'></i>Reach Out
                </button>
                {isMobileTemp ? <button type='submit' className='nav-tabs' tabIndex="-1">
                    <i className='uil uil-phone'></i>Contact
                </button> : null}
            </div>
            {!isMobileTemp ? <button className='btn-primary'>
                <i className="fas fa-phone"></i>
                CONTACT
            </button> : null}
        </div>
        </>
    );
}