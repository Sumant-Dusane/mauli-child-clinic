import React, { useState } from 'react';
import './Services.scss';

export default function Services () {
    const [Toggle, showGridExpanded] = useState(false);
    const gridColumns = 4;
    const gridExpandedColumns = 6;
    return (
        <>
        <div className='services'>
           
           {!Toggle ? 
                [...Array(gridColumns)].map((e, i) => 
                    <div className='services__service' key={i}>
                        <img src="https://thumbs.dreamstime.com/b/d-doctor-arms-crossed-illustration-isolated-white-background-d-doctor-arms-crossed-101335551.jpg" alt="medicare" />
                        <span className='title'>Medicare</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tempore suscipit maxime voluptatibus velit modi, distinctio quos earum. Culpa, vitae!</p>
                        <button type="submit" className='arrow-right'>Learn More</button>
                    </div>
                ): 
                [...Array(gridExpandedColumns)].map((e, i) =>
                    <div className='services__service' key={i}>
                        <img src="https://thumbs.dreamstime.com/b/d-doctor-arms-crossed-illustration-isolated-white-background-d-doctor-arms-crossed-101335551.jpg" alt="medicare" />
                        <span className='title'>Medicare</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tempore suscipit maxime voluptatibus velit modi, distinctio quos earum. Culpa, vitae!</p>
                        <button type="submit" className='arrow-right'>Learn More</button>
                    </div>
                )
            }
            {!Toggle ? <span onClick={(() => showGridExpanded(!Toggle))}>View More..</span> : <span onClick={(() => showGridExpanded(!Toggle))}>View Less -</span>}
        </div>
        </>
    );
}