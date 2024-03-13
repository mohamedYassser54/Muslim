import React, { useState, useEffect } from 'react';
import style from './css/toastify.module.css'
import datatoas from './datatoas'

function App() {
  const [showHello, setShowHello] = useState(false);
  const [showHi, setShowHi] = useState(false);
  const [endOfDay, setEndOfDay] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const month = now.getMonth() + 1; // Months are zero-indexed
      const day = now.getDate();
      const year = now.getFullYear();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      
      // Check if it's March 13, 2024 and it's 10 PM or later
      if (month === 3 && day === 13 && year === 2024 && hours >= 22) {
        setShowHi(true);
      } else {
        setShowHi(false);
      }
      if (month === 3 && day === 13 && year === 2024 && hours >= 23) {
        setShowHello(true);
      } else {
        setShowHello(false);
      }

      // Check if it's end of day (11:59:59 PM)
      if (hours === 23 && minutes === 59 && seconds === 59) {
        setEndOfDay(true);
      }

    }, 1000); // Check every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.alltoastify}>
      {datatoas.map((item, index) => (
        <div key={index}>
          <div  className={style.toastify}>
          {showHi && <h5>{item.text}</h5>}
          </div>
          <div >
          {showHello && !endOfDay && <h5 className={style.toastify}>{item.text2}</h5>}
          </div>
          <div></div>
          <div></div>
          <div></div>
          
        </div>
      ))}
    </div>
  );
}

export default App;
