import React from 'react';
import { ServicesData } from '../../../Data/services';
import './Services.scss';

export default function Services () {
    return (
        <>
        <div className='services'>
            {ServicesData.map((item) => (
                <div className='services__service' key={item}>
                    <img src={item.image} alt={item.title} />
                    <span className='title'>{item.title}</span>
                    <p>{item.desc}</p>
                    <button type="submit" className='arrow-right'>{item.buttontext}</button>
                </div>
            ))}   
        </div>
        </>
    );
}