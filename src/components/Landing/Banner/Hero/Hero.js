import React from 'react';
import { BannerPitchesData, HeroData } from '../../../../Data/banner';
import './Hero.scss';

export default function Hero () {
    return (
        <>
            {HeroData.map((item) => (
                <div className="hero" key={item} 
                    style = {
                        {
                            backgroundImage : `url(${item.bannerbg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'
                        }
                    }
                >
                    <div className='hero__left-content'>
                        <div className='hero__left-content title'>
                            <h1>{item.name}</h1>
                        </div>
                        <div className='hero__left-content--tagline'>{item.tagline}</div>
                    </div>
                    <div className='hero__right-content'></div>
                </div>
            ))}
            <div className='hero-pitches'>
                {BannerPitchesData.map((item) => (
                    <div className='hero-pitches__pitch' key={item}>
                        <strong className='hero-pitches__pitch--title title'><i className={item.icon}></i> {item.title}</strong>
                        <div>{item.desc}</div>          
                    </div>
                ))}
            </div>
        </>
    );
}