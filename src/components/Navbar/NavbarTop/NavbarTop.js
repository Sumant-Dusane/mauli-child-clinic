import React from 'react';
import "./NavbarTop.scss";

export default function NavbarTop() {
  return (
    <>
      <div className='navbar-top'>  
        <a href="/"><img src="https://seeklogo.com/images/C/children-s-hospital-colorado-logo-773C59661E-seeklogo.com.png" alt="Mauli Child Care " loading="lazy"/></a>
        <div className='nav-contact'>
          <div className='nav-contact__call'>
            <i className="nav-contact__call--icon uil uil-calling"></i>
            <div className='nav-contact__call--title'>Contact</div>
            <div className='nav-contact__call--desc'><strong>+91 9999999999</strong></div>
          </div>
          <div className='nav-contact__timing'>
            <i className="nav-contact__timing--icon uil uil-clock-nine"></i>
            <div className='nav-contact__timing--title'>Opening Hours</div>
            <div className='nav-contact__timing--desc'><strong>10:00 to 21:00</strong></div>
          </div>
          <div className='nav-contact__location'>
            <i className="nav-contact__location--icon uil uil-map-pin"></i>
            <div className='nav-contact__location--title'>We are at</div>
            <div className='nav-contact__location--desc'><strong>Kalamboli, Navi Mumbai</strong></div>
          </div>
        </div>
      </div>
    </>
  );
}
