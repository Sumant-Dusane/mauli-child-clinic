import React from 'react';
import { useGeolocated } from "react-geolocated";
import './Reach.scss';

// TODO: Add Mailer.js

export default function Reach() {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
        positionOptions: {
            enableHighAccuracy: true,
        },
        userDecisionTimeout: Infinity,
    });
    return (
        <>
            <div className='reach-out'>
                <iframe className='google-map' title="Clinic Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.6029957077544!2d73.09813522609915!3d19.0372079169268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9e7de496295%3A0x72cbdfd2adfed0a9!2sMauli%20Children%20Hospital%20%26%20Aesthetic%20Dental%20Clinic%2C%20Child%20specialist%20and%20Dentist%20in%20Roadpali%2CKalamboli%2C%20dentist%20in%20kalamboli!5e0!3m2!1sen!2sin!4v1666511408045!5m2!1sen!2sin" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <form className='contact-form'>
                    <div className='title'>Contact Form</div>
                    <input type="text" name="fullname"  placeholder= 'Full Name' required/>
                    <input type="number" name="contact" placeholder='Contact Number'/>
                    <input type="mail" name="email" placeholder='Mail ID' required/>
                    <input type="text" name="subject" placeholder='Whats your Query' required/>
                    <textarea rows="3" cols="auto" placeholder='Explain in brief' />
                    <button type="submit" className='arrow-right'>Submit</button>
                </form>
                {
                    !isGeolocationEnabled ? 
                        null : 
                        !isGeolocationAvailable ?
                            null :
                            <span className='distance'> *You are {getDistanceFromLatLonInKm(coords?.latitude, coords?.longitude, 19.03729883110138, 73.10287439421418)} away</span>
                }
            </div>
        </>
    )
}


function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d < 1 ?  'just ' + (d.toFixed(2)*1000).toString() + 'm' : d.toFixed(2).toString() + 'km';
}

function deg2rad(deg) {
    return deg * (Math.PI/180)
}