import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Testimonials.scss';
import { TestimonialData } from '../../Data/testimonials';

export default function Testimonials() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <>
            <div className='testimonials'>
              <Slider {...settings}>
                  {TestimonialData.map((data) => (
                      <div className='testimonials__testimonial' key={data}>
                          <div className='testimonials__testimonial--header'>
                              <img src={data.photo} alt={data.name} />
                          </div>
                          <div className='testimonials__testimonial--body'>
                              <span className='title'>{data.name}</span>
                              <p className='desc' title={data.desc}>{data.desc}</p> 
                              <div className='rating'>
                                  {[1,2,3,4,5].map((i)=>(
                                      i <= data.rate ? <span key={i} className="fas fa-star rated" /> :
                                      <span key={i} className='fas fa-star'></span>
                                  ))}
                              </div>
                          </div>
                      </div>
                  ))}
              </Slider>
            </div>
        </>
    );
}