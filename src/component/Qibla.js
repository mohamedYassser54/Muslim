import React, { useState, useEffect } from 'react';
import axios from 'axios';
import img from './image/18.png' ;
// Import your arrow SVG here
import arrow from './arrow.png';
import { right } from '@popperjs/core';

const QiblaCompass = () => {
  const [qiblaDirection, setQiblaDirection] = useState(0);

  useEffect(() => {
    // Fetch Qibla direction
       axios.get('https://api.aladhan.com/v1/qibla/25.4106386/51.1846025')
      .then(response => {
        setQiblaDirection(response.data.data.direction);
      })
      .catch(error => {
        console.error('Error fetching Qibla direction:', error);
      });
  }, []);

  return (
    <div className='QiblaCompass'>
      {/* <h1>Qibla Compass</h1> */}
      <Compass qiblaDirection={qiblaDirection} />
    </div>
  );
};

const Compass = ({ qiblaDirection }) => {
  const compassStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    border: '2px solid black',
    position: 'relative',
    backgroundImage:`url(${img})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
  };

  const needleStyle = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: `translate(-50%, -50%) rotate(${qiblaDirection}deg)`,
    width: '50px', 
    height: '50px', 
    backgroundImage: `url(${arrow})`, 
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    
    <div style={compassStyle}>
      <div style={needleStyle}></div>
    </div>
    
  );
};

export default QiblaCompass;
