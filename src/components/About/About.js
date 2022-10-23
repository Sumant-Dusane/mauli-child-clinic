import React, { useState } from 'react';
import { AboutUs } from '../../Data/aboutus';
import './About.scss';

export default function About() {
    const [Toggle, textLimit] = useState(window.innerWidth <= 768 ? true : false);
    return (
        <>
            {AboutUs.map((item) =>(
                <div className='about-us' key={item}>
                    <img src={item.image} alt="Dr. Taware" />
                    <p>
                        {Toggle ? item.para.substring(0, 450) : item.para}
                        {Toggle ? <span onClick={() => textLimit(!Toggle)} className='view-btn'> Read More..</span> : <span onClick={() => textLimit(!Toggle)} className='view-btn'> Read less -</span>}
                    </p>
                    <div className='about-us__education'>
                        <span>Educational Qualification</span>
                        <ul>
                            {item.pointer.map ((pointer) => (
                                <li key={pointer}><i className='fas fa-star'/>{pointer}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </>
    );
}