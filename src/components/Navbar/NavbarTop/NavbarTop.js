import React from 'react';
import { CommonData } from '../../../Data/commondata';
import "./NavbarTop.scss";

export default function NavbarTop() {
  return (
    <>
      <div className='navbar-top'>  
        <a href="/" tabIndex="-1"><img src={CommonData[0].logo} alt={CommonData[0].name} loading="lazy"/></a>
        <div className='nav-contact'>
          <div className='nav-contact__call'>
            <i className="nav-contact__call--icon uil uil-calling"></i>
            <div className='nav-contact__call--title'>Contact</div>
            <div className='nav-contact__call--desc'><strong>{CommonData[0].contact}</strong></div>
          </div>
          <div className='nav-contact__timing'>
            <i className="nav-contact__timing--icon uil uil-clock-nine"></i>
            <div className='nav-contact__timing--title'>Opening Hours</div>
            <div className='nav-contact__timing--desc'><strong>{CommonData[0].openingHours}</strong></div>
          </div>
          <div className='nav-contact__location'>
            <i className="nav-contact__location--icon uil uil-map-pin"></i>
            <div className='nav-contact__location--title'>We are at</div>
            <div className='nav-contact__location--desc'><strong>{CommonData[0].location}</strong></div>
          </div>
        </div>
      </div>
    </>
  );
}
