import React from 'react';
import './Banner.scss';

function Banner(){
    return (
        <>
        <div className="hero">
            
        </div>
        <div className="banner">
            <div className='banner-text'>
                <div className='banner-text--tagline'>We Care About <br/> Your <span>Families</span></div>
                <div className='banner-text--description'>
                    Check how your families health is by professional team doctor with <br/> complete and modern facilities services
                </div>
            </div>
            <div className='banner-points'>
                <section className='banner-points--pointer'>
                    <span>Our Advantages</span>
                    <ul className='advantages'>
                        <li><i className="fa-solid fa-calendar-days"/> Make an appointment</li>
                        <li><i className="fa-solid fa-x-ray"/> Digital x-ray on site</li>
                        <li><i className="fa-solid fa-business-time"/> Emergency Services</li>
                        <li><i className="fa-solid fa-shield-virus"/> Immunizations</li>
                    </ul>
                </section>
                <div className='banner-points-image'></div>
            </div>
        </div>
        </>
    )
}

export default Banner;