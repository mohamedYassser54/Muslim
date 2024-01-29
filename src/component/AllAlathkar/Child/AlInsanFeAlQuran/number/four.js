import React from 'react'
import style from'../../css/number.module.css'
function Four() {
  return (
    <div>
    <iframe
        className={style.video}
        src="https://www.youtube.com/embed/lNH895SAgfE" 
        title="قصص الإنسان في القرآن | الحلقة 4 | طالوت و جالوت - ج 1 | Human Stories from Qur&#39;an"
       
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        controls autoplay loop
        
      ></iframe>
    
       </div>
  )
}

export default Four;
