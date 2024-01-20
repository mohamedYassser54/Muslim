import React from 'react'
import data from './dataAsmaallah.js/data'
import style from './css/Asmaallah.module.css'
function Asmaallah() {
  return (
    <div className={style.con}>
        <section className="py-4 container ">
        <div className="row justify-content-center">
            {data && data.map((item)=>(
      <div className="col-5 col-md-3 col-lg-2 mx-2 mb-2" key={item.id}>
        <div className={style.btn}>{item.name}</div>
      </div>
      ))}
      </div>
      </section>
      </div>
  )
}

export default Asmaallah
