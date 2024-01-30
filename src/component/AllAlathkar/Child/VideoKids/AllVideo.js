import React from 'react'
import { NavLink } from 'react-router-dom'
import data from './data'
import style from '../../../css/alathkar.module.css'
function AllVideo() {
  return (
    <div className={style.Alathkar}>
 <section className="py-4 container ">
        <div className="row justify-content-center">
            {data && data.map((item)=>(
      <div className="col-4 col-md-3 col-lg-2 mx-2 mb-2" key={item.id}>
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

export default AllVideo
