import React from 'react'
import data from '../AllAlathkar/quran/QuranData'
import { NavLink } from "react-router-dom";
import style from './quran/css/q.module.css'
function Quran2() {
  return (
    <div className={style.Alathkar2}>
        <section className="py-4 container ">
         <div className="row justify-content-center">
            {data.map((item)=>(
           <div className="col-6 col-md-4 col-lg-3 mx-2 mb-5" >
             <div className="col">
              <div className="">
                <div className={style.cards}>
                    <NavLink to={item.to} key={item.id} className={style.link}>
                    <h4>{item.title}</h4>
                    <h2 className={style.number}>{item.number}</h2>
                    </NavLink>
                </div>
              </div>
        </div>
        </div>
        ))}
        </div>
        </section>
    </div>
  )
}

export default Quran2




