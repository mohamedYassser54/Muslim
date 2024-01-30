import React,{lazy} from 'react'
import { NavLink } from 'react-router-dom';
import data from './data';
import style from '../css/number.module.css'
function AlInsanFeAlQuran() {
  return (
    <div className={style.Number}>
    <section className="py-4 container ">
     <div className="row justify-content-center">
         {data && data.map((item)=>(
   <div className="col-3 col-md-3 col-lg-2 mx-2 mb-4" key={item.id}>
      <div className="col">
           <div className="">
             <div className={style.cards}>
                 <NavLink to={item.to} key={item.id} className={style.link}>
                 <img src={item.image} className={style.img} />
                 <h6>{item.title}</h6>
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

export default AlInsanFeAlQuran;
