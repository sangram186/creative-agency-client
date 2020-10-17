import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import './Samples.css';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';

const images = [
    { img: carousel1 },
    { img: carousel2 },
    { img: carousel4 },
    { img: carousel5 },
    { img: carousel1 },
    { img: carousel2 },
    { img: carousel4 },
    { img: carousel5 },
    { img: carousel1 },
    { img: carousel2 },
    { img: carousel4 },
    { img: carousel5 },
]

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];


const Samples = () => {
    return (
        <div className='bg-dark' style={{ maxHeight: '590px' }}>
            <h2 className='text-center mb-5 pt-5 text-white'>Here are some of <span style={{ color: '#7AB259' }}>our works</span></h2>
            <Carousel className='h40 carousel-img pb-5' breakPoints={breakPoints}>
                {images.map(item => <div key={item.id}><img src={item.img} alt=""/></div>)}
            </Carousel>
        </div>
    );
};

export default Samples;