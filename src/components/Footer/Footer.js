import React from "react";
import { CommonData } from "../../Data/commondata";
import "./Footer.scss";

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer__upper">    
                    <img src={!CommonData[0].logoWhite ? CommonData[0].logoWhite : CommonData[0].logo} alt={CommonData[0].name} />
                    <div className="address">
                        <span><strong>Address</strong></span>
                        <p>{CommonData[0].address}</p>
                        <iframe className='google-map' title="Clinic Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.6029957077544!2d73.09813522609915!3d19.0372079169268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9e7de496295%3A0x72cbdfd2adfed0a9!2sMauli%20Children%20Hospital%20%26%20Aesthetic%20Dental%20Clinic%2C%20Child%20specialist%20and%20Dentist%20in%20Roadpali%2CKalamboli%2C%20dentist%20in%20kalamboli!5e0!3m2!1sen!2sin!4v1666511408045!5m2!1sen!2sin" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <ul className="navs">
                    <li><a href="#home">Home</a></li> 
                    <li><a href="#services">Services</a></li> 
                    <li><a href="#testimonials">Testimonials</a></li> 
                    <li><a href="#about">About</a></li> 
                    <li><a href="#reach-out">Reach Out</a></li> 
                    </ul>
                </div>
                <hr />
                <div className="footer__lower">
                    Copyright &copy; {CommonData[0].name} {CommonData[0].year}. All rights reserved
                </div>
            </footer>
        </>
    );
}