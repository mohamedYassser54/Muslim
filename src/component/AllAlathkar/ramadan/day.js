import React,{useEffect} from 'react'
import dataDay from "./dataDay"
import { NavLink } from "react-router-dom";
import Aos from 'aos'
import  "aos/dist/aos.css" 
import style from './css/day.module.css'
import vide from './image/1.mp4'
function Day() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div>
      <video autoPlay muted className={style.vide} loop >
        <source src={vide}/>
      </video>
      <section className="py-4 container ">
         <div className="row justify-content-center">
          {dataDay.map((item)=>(
         <div className="col-4 col-md-3 col-lg-2 mx-2 mb-5" >
             <div className="col">
              <div className="">
              <NavLink to={item.navlink} key={item.id} className={style.navlink}>
                <div className={style.cards} data-aos="fade-right">
                    <h6>{item.number}</h6>
                </div>
                </NavLink>
              </div>
        </div>
        </div>
        ))}
        </div>
        </section>
    </div>
  )
}

export default Day
