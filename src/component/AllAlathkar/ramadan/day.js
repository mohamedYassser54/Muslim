import React,{useEffect} from 'react'
import dataDay from "./dataDay"
import { NavLink } from "react-router-dom";
import img from './image/9.png'
import Aos from 'aos'
import  "aos/dist/aos.css" 
import style from './css/day.module.css'
import vide from './image/1.mp4'
function Day() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className={style.allday}>
      <img src={img} className={style.vide}  />
       
      <section className="py-4 container ">
         <div className="row justify-content-center">
          {dataDay.map((item)=>(
         <div className="col-4 col-md-3 col-lg-2 mx-1 mb-5" >
             <div className="col">
              <div className="">
              <NavLink to={item.navlink} key={item.id} className={style.navlink}>
                <div className={style.cards} data-aos="fade-up">
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
