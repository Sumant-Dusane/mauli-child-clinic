import React from 'react';
import './Hero.scss';

export default function Hero () {
    return (
        <>
            <div className="hero">
                <div className='hero__left-content'>
                    <div className='hero__left-content title'>
                        <h1>DR. Taware</h1>
                    </div>
                    <div className='hero__left-content--tagline'>
                        loremIpsum dolor sit amet, consectetur adipiscing elit errors  et ea rebum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                </div>
                <div className='hero__right-content'>
                    
                </div>
            </div>
            <div className='hero-pitches'>
                <div className='hero-pitches__pitch'>
                    <strong className='hero-pitches__pitch--title title'><i className='uil uil-syringe'></i> Best</strong>
                    <div>loremIpsum dolor sit amet, consectetur adipiscing elit.</div>          
                </div>
                <div className='hero-pitches__pitch'>
                    <strong className='hero-pitches__pitch--title title'><i className='uil uil-syringe'></i> Best</strong>
                    <div>loremIpsum dolor sit amet, consectetur adipiscing elit.</div>          
                </div>
                <div className='hero-pitches__pitch'>
                    <strong className='hero-pitches__pitch--title title'><i className='uil uil-syringe'></i> Best</strong>
                    <div>loremIpsum dolor sit amet, consectetur adipiscing elit.</div>          
                </div>
            </div>
        </>
    );
}