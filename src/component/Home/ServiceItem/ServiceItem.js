import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceItem.css';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ServiceItem = (props) => {
    
    //This unknown things are for animating elements, I didn't understand at all..
    const [somethingElse, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    const { title, description, serviceImg } = props.service;

    return (

        <div className='col-lg-4 col-md-6 col-sm-6 mt-3 d-flex justify-content-center align-items-center'>
            <animated.div className="single-service px-3" onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: somethingElse.xys.interpolate(trans) }}>
                <Link to='/customer'>
                    <img style={{ width: '75px' }} src={`data:image/png;base64,${serviceImg.img}`} alt="" />
                    <h4 className='mb-2'>{title}</h4>
                    <p className='mb-2'>{description}</p>
                </Link>
            </animated.div>
        </div>
    );
};

export default ServiceItem;