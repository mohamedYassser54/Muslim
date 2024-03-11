import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../css/ramadan.module.css';

function Ramadan() {
  return (
    <div className={style.alldiv}>
      <video className={style.video} autoPlay muted loop>
        <source src={process.env.PUBLIC_URL + '/1.mp4'} type="video/mp4" />
      </video>
      
      <div className="btnram">
        <NavLink to="/Days">
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">المهام</span>
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Ramadan;
