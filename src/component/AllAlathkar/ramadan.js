import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../css/ramadan.module.css';
import gif from './video/2.gif'
import '../css/btnram.css';

function Ramadan() {
  return (
    <div className={style.alldiv}>
      <img className={style.video} src={gif}/>
       
      
      
      <div className="btnram">
        <NavLink to="/Days">
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">1المهام</span>
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Ramadan;
