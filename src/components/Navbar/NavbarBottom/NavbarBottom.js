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

    return (
        <>
        <div className='navbar-bottom'>
            <ul className='navbar-bottom--navs' id="navs">
                <li>
                    <a href="#home" className='nav-tabs active-nav'>
                        <i className='uil uil-estate'></i>Home
                    </a>
                </li>
                <li>
                    <a href="#services" className='nav-tabs'>
                        <i className='uil uil-stethoscope'></i>Services
                    </a>
                </li>
                <li>
                    <a href="#testimonials" className='nav-tabs'>
                        <i className='uil uil-thumbs-up'></i>Testimonials
                    </a>
                </li>
                <li>
                    <a href="#about" className='nav-tabs'>
                        <i className='uil uil-user-md'></i>About
                    </a>
                </li>
                <li>
                    <a href="#reach-out" className='nav-tabs'>
                        <i className='uil uil-hospital-square-sign'></i>Reach Out
                    </a>
                </li>
            </ul>
            <button className='btn-primary'>
                <i className="fas fa-phone"></i>
                CONTACT
            </button>
        </div>
        </>
    );
}