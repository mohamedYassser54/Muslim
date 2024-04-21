import React, { useState, useEffect } from 'react';
import axios from 'axios';
import img from './image/18.png';
import arrow from './arrow.png';

const QiblaCompass = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [qiblaDirection, setQiblaDirection] = useState(0);

  useEffect(() => {
    // Fetch Qibla direction
    axios.get('https://api.aladhan.com/v1/qibla/25.4106386/51.1846025')
      .then(response => {
        const { latitude, longitude, direction } = response.data.data;
        
        // Save user location
        setUserLocation({ latitude, longitude });
        
        // Set qibla direction
        setQiblaDirection(direction);
      })
      .catch(error => {
        console.error('Error fetching Qibla direction:', error);
      });

    // Add event listener for device orientation
    window.addEventListener('deviceorientation', handleOrientationChange);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('deviceorientation', handleOrientationChange);
    };
  }, []);

  const handleOrientationChange = (event) => {
    // Update qiblaDirection based on device orientation
    if (event.alpha !== null) {
      setQiblaDirection(event.alpha);
    }
  };

  return (
    <div className='QiblaCompass'>
      <h1>hello5</h1>
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
    backgroundImage: `url(${img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    transition: 'transform 0.5s ease',
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
    transition: 'transform 0.5s ease',
  };

  return (
    <div style={compassStyle}>
      <div style={needleStyle}></div>
    </div>
  );
};

export default QiblaCompass;
